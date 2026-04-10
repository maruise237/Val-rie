import Link from "next/link";
import { User, Calendar, CreditCard, Bell, HelpCircle, LogOut, Settings, List } from "lucide-react";
import styles from "./accueil.module.css";

export default function AccueilMembrePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <div className={styles.avatar}>M</div>
          <div>
            <p className={styles.welcome}>Bonjour,</p>
            <h2 className={styles.userName}>Membre Valérie</h2>
          </div>
        </div>
        <Link href="/rappels" className={styles.notifBtn}>
          <Bell size={24} />
          <span className={styles.badge}></span>
        </Link>
      </header>

      <div className={styles.statsGrid}>
        <div className="glass-card animate-fade">
          <p className={styles.statLabel}>Prochain versement</p>
          <h3 className={styles.statValue}>15 Avril</h3>
          <span className={styles.statInfo}>5 000 FCFA</span>
        </div>
        <div className="glass-card animate-fade" style={{ animationDelay: '0.1s' }}>
          <p className={styles.statLabel}>Tour de réception</p>
          <h3 className={styles.statValue}>#4</h3>
          <span className={styles.statInfo}>Juin 2026</span>
        </div>
      </div>

      <div className={styles.mainAction}>
        <Link href="/paiement" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem' }}>
          <CreditCard size={20} />
          <span>Effectuer mon paiement</span>
        </Link>
      </div>

      <nav className={styles.menu}>
        <h3>Mon Espace</h3>
        <div className={styles.menuGrid}>
          <Link href="/historique" className={styles.menuItem}>
            <List size={20} />
            <span>Historique</span>
          </Link>
          <Link href="/parametres" className={styles.menuItem}>
            <Settings size={20} />
            <span>Profil</span>
          </Link>
          <Link href="/aide" className={styles.menuItem}>
            <HelpCircle size={20} />
            <span>Aide</span>
          </Link>
          <Link href="/login" className={styles.menuItem}>
            <LogOut size={20} />
            <span>Déconnexion</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
