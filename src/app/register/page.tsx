"use client";
import { useState } from "react";
import Link from "next/link";
import { auth, db } from "@/lib/insforge";
import { User, Mail, Lock, Phone, ChevronRight, Loader2 } from "lucide-react";
import styles from "./register.module.css";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("membre"); // 'membre' par défaut
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await auth.signUp({
        email,
        password,
        name: fullName,
        options: {
          data: { role: role } // On passe le rôle dans les metadata
        }
      });

      if (error) throw error;

      // Création manuelle du profil dans la table 'profiles'
      if (data?.user) {
        await db.from('profiles').insert([{
          id: data.user.id,
          full_name: fullName,
          role: role
        }]);
      }

      window.location.href = "/accueil";
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue lors de l'inscription.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h1>Rejoindre Valérie</h1>
          <p>Commencez à digitaliser vos tontines dès aujourd'hui.</p>
        </header>

        <form className={styles.form} onSubmit={handleRegister}>
          {error && <div className={styles.error}>{error}</div>}
          
          <div className={styles.inputGroup}>
            <User size={20} className={styles.icon} />
            <input 
              type="text" 
              placeholder="Nom complet" 
              className={styles.input} 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <Mail size={20} className={styles.icon} />
            <input 
              type="email" 
              placeholder="Adresse email" 
              className={styles.input} 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <Phone size={20} className={styles.icon} />
            <input type="tel" placeholder="Téléphone (ex: +237...)" className={styles.input} />
          </div>

          <div className={styles.roleSelector}>
            <button 
              type="button" 
              className={role === 'membre' ? styles.roleActive : styles.roleItem}
              onClick={() => setRole('membre')}
            >
              Membre
            </button>
            <button 
              type="button" 
              className={role === 'gestionnaire' ? styles.roleActive : styles.roleItem}
              onClick={() => setRole('gestionnaire')}
            >
              Gestionnaire
            </button>
          </div>

          <div className={styles.inputGroup}>
            <Lock size={20} className={styles.icon} />
            <input 
              type="password" 
              placeholder="Mot de passe" 
              className={styles.input} 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', marginTop: '1rem' }}
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin" /> : "Créer mon compte"}
            {!loading && <ChevronRight size={18} />}
          </button>
        </form>

        <footer className={styles.footer}>
          <span>Déjà un compte ?</span>
          <Link href="/login">Se connecter</Link>
        </footer>
      </div>
    </div>
  );
}
