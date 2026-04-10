import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="Valérie Finance" 
            width={50} 
            height={50} 
            className={styles.logoImg}
          />
          <span className="text-gradient">Valérie Finance</span>
        </div>
        <nav className={styles.nav}>
          <a href="#features">Fonctionnalités</a>
          <a href="#about">À propos</a>
          <Link href="/login" className="btn-primary">Connexion</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className="animate-fade">
          <h1 className={`${styles.title} text-gradient`}>
            La Tontine, <br /> Redéfinie pour l'Ère Digitale.
          </h1>
          <p className={styles.subtitle}>
            Gérez vos cotisations, suivez vos tours de réception et sécurisez votre avenir financier avec une élégance inédite.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/login" className="btn-primary">Commencer Maintenant</Link>
            <button className={styles.btnSecondary}>Voir la Démo</button>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="glass-card animate-fade">
          <h3>Pointage Automatique</h3>
          <p>Enregistrez les présences et les paiements en un clic, même hors-ligne.</p>
        </div>
        <div className="glass-card animate-fade" style={{ animationDelay: '0.2s' }}>
          <h3>Transparence Totale</h3>
          <p>Chaque membre suit son solde et ses tours de réception en temps réel.</p>
        </div>
        <div className="glass-card animate-fade" style={{ animationDelay: '0.4s' }}>
          <h3>Sécurité Insforge</h3>
          <p>Vos données sont protégées par une infrastructure de classe mondiale.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Valérie Finance. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
