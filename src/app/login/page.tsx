"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { auth, db } from "@/lib/insforge";
import { LucideLoader2, Mail, Lock, ChevronRight } from "lucide-react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error } = await auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Récupérer le rôle de l'utilisateur depuis son profil
      const { data: profile } = await db.from('profiles')
        .select('role')
        .eq('id', data.user?.id)
        .single();

      if (profile?.role === 'gestionnaire' || profile?.role === 'admin') {
        window.location.href = "/admin/accueil";
      } else {
        window.location.href = "/accueil";
      }
    } catch (err: any) {
      setError(err.message || "Email ou mot de passe incorrect.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.card} glass-card animate-fade`}>
        <div className={styles.header}>
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
          <h1 className="text-gradient">Bienvenue</h1>
          <p>Connectez-vous pour gérer vos tontines</p>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.inputGroup}>
            <label>Adresse Email</label>
            <div className={styles.inputWithIcon}>
              <Mail size={18} className={styles.icon} />
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="input-premium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label>Mot de passe</label>
            <div className={styles.inputWithIcon}>
              <Lock size={18} className={styles.icon} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="input-premium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.options}>
            <label className={styles.remember}>
              <input type="checkbox" /> Se souvenir de moi
            </label>
            <Link href="#" className={styles.forgot}>Mot de passe oublié ?</Link>
          </div>

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', marginTop: '1rem' }}
            disabled={loading}
          >
            {loading ? <LucideLoader2 className="animate-spin" /> : "Se connecter"}
            {!loading && <ChevronRight size={18} />}
          </button>
        </form>

        <div className={styles.footer}>
          Pas encore de compte ? <Link href="/register" className="text-gradient">Inscrivez-vous</Link>
        </div>
      </div>
    </div>
  );
}
