import Link from "next/link";
import { ChevronLeft, UserPlus, User, Award, Clock, Crown } from "lucide-react";
import styles from "./membres.module.css";

export default function MembresPage() {
  const membres = [
    { id: '1', name: 'Maruise Kamta', role: 'Gestionnaire', badge: 'exemplaire' },
    { id: '2', name: 'Alice Belinga', role: 'Membre', badge: 'regulier' },
    { id: '3', name: 'Bob Ndongo', role: 'Membre', badge: 'debutant' },
    { id: '4', name: 'Diane Eba', role: 'Membre', badge: null },
  ];

  const getBadgeIcon = (type: string | null) => {
    switch (type) {
      case 'exemplaire': return <Crown size={14} color="#9C27B0" />;
      case 'regulier': return <Clock size={14} color="#4CAF50" />;
      case 'debutant': return <Award size={14} color="#FFD700" />;
      default: return null;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.topNav}>
          <Link href="/dashboard" className={styles.back}>
            <ChevronLeft size={20} />
            <span>Tableau de bord</span>
          </Link>
          <Link href="/dashboard/membres/nouveau" className={styles.addBtn}>
            <UserPlus size={20} />
          </Link>
        </div>
        <h1>Membres ({membres.length})</h1>
      </header>

      <div className={styles.list}>
        {membres.map((membre) => (
          <div key={membre.id} className={`${styles.memberCard} glass-card`}>
            <div className={styles.mainInfo}>
              <div className={styles.avatar}>
                <User size={20} className={styles.userIcon} />
              </div>
              <div className={styles.details}>
                <span className={styles.name}>{membre.name}</span>
                <span className={styles.role}>{membre.role}</span>
              </div>
            </div>
            {membre.badge && (
              <div className={styles.badgeBox}>
                {getBadgeIcon(membre.badge)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
