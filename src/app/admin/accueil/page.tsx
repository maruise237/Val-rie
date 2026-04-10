import Link from "next/link";
import { Users, AlertCircle, CheckCircle, BarChart3, Plus, Bell, Settings, LogOut } from "lucide-react";
import styles from "./admin-accueil.module.css";

export default function AccueilAdminPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <p className={styles.adminLabel}>Gestionnaire</p>
          <h2 className={styles.adminName}>Maruise Kamta</h2>
        </div>
        <div className={styles.topActions}>
          <Link href="/rappels" className={styles.iconBtn}><Bell size={20} /></Link>
          <Link href="/parametres" className={styles.iconBtn}><Settings size={20} /></Link>
        </div>
      </header>

      <div className={styles.overview}>
        <div className={`${styles.statsMain} glass-card`}>
          <span className={styles.statLabel}>Caisse Totale</span>
          <h1 className={styles.statValue}>1 250 000 <span className={styles.currency}>FCFA</span></h1>
          <div className={styles.statTrend}>+15% ce mois</div>
        </div>

        <div className={styles.statsGrid}>
          <div className="glass-card">
            <Users size={20} className={styles.iconBlue} />
            <span className={styles.smallLabel}>Membres</span>
            <span className={styles.smallValue}>24</span>
          </div>
          <div className="glass-card">
            <AlertCircle size={20} className={styles.iconRed} />
            <span className={styles.smallLabel}>Retards</span>
            <span className={styles.smallValue}>3</span>
          </div>
        </div>
      </div>

      <div className={styles.quickActions}>
        <Link href="/pointage" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1.2rem' }}>
          <CheckCircle size={20} />
          <span>Faire le pointage</span>
        </Link>
        <Link href="/tontines/nouvelle" className={styles.btnSecondary}>
          <Plus size={20} />
          <span>Nouvelle Tontine</span>
        </Link>
      </div>

      <footer className={styles.footerNav}>
        <Link href="/membres" className={styles.footerItem}>
          <Users size={20} />
          <span>Membres</span>
        </Link>
        <Link href="/historique" className={styles.footerItem}>
          <BarChart3 size={20} />
          <span>Rapports</span>
        </Link>
        <Link href="/login" className={styles.footerItem}>
          <LogOut size={20} />
          <span>Quitter</span>
        </Link>
      </footer>
    </div>
  );
}
