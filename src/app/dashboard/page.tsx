import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle, 
  UserPlus, 
  Wallet, 
  Award, 
  Clock, 
  Crown,
  LayoutDashboard,
  Users,
  CreditCard,
  Settings
} from "lucide-react";
import styles from "./dashboard.module.css";

// Composant de badge minimaliste pour la gamification
const RewardBadge = ({ type }: { type: 'debutant' | 'regulier' | 'exemplaire' }) => {
  const badges = {
    debutant: { icon: <Award size={16} />, color: '#FFD700', label: 'Débutant' },
    regulier: { icon: <Clock size={16} />, color: '#4CAF50', label: 'Régulier' },
    exemplaire: { icon: <Crown size={16} />, color: '#9C27B0', label: 'Exemplaire' },
  };
  const { icon, color, label } = badges[type];

  return (
    <div className={styles.badge} style={{ color }}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <Image src="/logo.png" alt="VF" width={40} height={40} />
          <h1>Valérie Finance</h1>
        </div>
        <div className={styles.userSection}>
          <div className={styles.userInfo}>
            <span className={styles.userName}>Maruise Kamta</span>
            <div className={styles.badgesRow}>
              <RewardBadge type="regulier" />
            </div>
          </div>
          <div className={styles.avatar}>MK</div>
        </div>
      </header>

      <section className={styles.summary}>
        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <span>Caisse Totale</span>
            <h2 style={{ color: 'var(--success)' }}>1,450,000 F</h2>
          </div>
          <Wallet className={styles.statIcon} size={24} />
        </div>
        <div className={styles.statCard}>
          <div className={styles.statInfo}>
            <span>Retards</span>
            <h2 style={{ color: 'var(--danger)' }}>4 membres</h2>
          </div>
          <Clock className={styles.statIcon} size={24} color="var(--danger)" />
        </div>
      </section>

      <nav className={styles.actions}>
        <Link href="/dashboard/pointage" className={styles.actionBtn}>
          <div className={styles.iconBox}>
            <CheckCircle size={24} color="var(--success)" />
          </div>
          <div className={styles.actionText}>
            <span className={styles.actionTitle}>Faire le Pointage</span>
            <span className={styles.actionSub}>Valider les présences</span>
          </div>
        </Link>
        <Link href="/dashboard/membres/nouveau" className={styles.actionBtn}>
          <div className={styles.iconBox}>
            <UserPlus size={24} color="var(--info)" />
          </div>
          <div className={styles.actionText}>
            <span className={styles.actionTitle}>Ajouter un Membre</span>
            <span className={styles.actionSub}>Nouveau profil</span>
          </div>
        </Link>
        <Link href="/dashboard/tontines" className={styles.actionBtn}>
          <div className={styles.iconBox}>
            <LayoutDashboard size={24} color="var(--primary)" />
          </div>
          <div className={styles.actionText}>
            <span className={styles.actionTitle}>Mes Tontines</span>
            <span className={styles.actionSub}>Suivi des groupes</span>
          </div>
        </Link>
      </nav>

      <section className={styles.nextEvent}>
        <div className={styles.sectionHeader}>
          <Clock size={20} className={styles.headerIcon} />
          <h3>Prochain Tour</h3>
        </div>
        <div className="glass-card">
          <p><strong>Mardi 15 Avril</strong> - Réception de <strong>Alice B.</strong></p>
          <span className={styles.amount}>500,000 FCFA</span>
        </div>
      </section>

      {/* Barre de navigation basse pour l'aspect mobile app */}
      <footer className={styles.bottomNav}>
        <Link href="/dashboard" className={styles.bottomLinkActive}><LayoutDashboard size={24} /></Link>
        <Link href="#" className={styles.bottomLink}><Users size={24} /></Link>
        <Link href="#" className={styles.bottomLink}><CreditCard size={24} /></Link>
        <Link href="#" className={styles.bottomLink}><Settings size={24} /></Link>
      </footer>
    </div>
  );
}
