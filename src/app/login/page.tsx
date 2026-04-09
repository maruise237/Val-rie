import Image from "next/image";
import Link from "next/link";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} glass-card animate-fade`}>
        <div className={styles.header}>
          <Image src="/logo.png" alt="Logo" width={60} height={60} />
          <h1 className="text-gradient">Bienvenue</h1>
          <p>Connectez-vous pour gérer vos tontines</p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Numéro de téléphone ou Email</label>
            <input 
              type="text" 
              placeholder="Ex: +237 6xx xxx xxx" 
              className="input-premium"
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Mot de passe</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="input-premium"
            />
          </div>

          <div className={styles.options}>
            <label className={styles.remember}>
              <input type="checkbox" /> Se souvenir de moi
            </label>
            <Link href="#" className={styles.forgot}>Mot de passe oublié ?</Link>
          </div>

          <Link href="/dashboard" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
            Se connecter
          </Link>
        </form>

        <div className={styles.footer}>
          Pas encore de compte ? <Link href="#" className="text-gradient">Inscrivez-vous</Link>
        </div>
      </div>
    </div>
  );
}
