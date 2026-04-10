import Link from "next/link";
import { ChevronLeft, Bell, Calendar, AlertCircle, CheckCircle2 } from "lucide-react";
import styles from "./rappels.module.css";

export default function RappelsPage() {
  const notifications = [
    { 
      id: 1, 
      type: 'info', 
      title: 'Cotisation à venir', 
      desc: 'Votre cotisation de 5 000 FCFA est attendue pour le 15 Avril.',
      icon: <Calendar size={20} color="var(--primary)" />,
      time: 'Il y a 2 heures'
    },
    { 
      id: 2, 
      type: 'alert', 
      title: 'Dernier rappel', 
      desc: 'Maruise Kamta n\'a pas encore réglé sa cotisation.',
      icon: <AlertCircle size={20} color="#f44336" />,
      time: 'Il y a 1 jour'
    },
    { 
      id: 3, 
      type: 'success', 
      title: 'Pointage validé', 
      desc: 'Toutes les cotisations de la semaine ont été reçues.',
      icon: <CheckCircle2 size={20} color="#4CAF50" />,
      time: 'Il y a 3 jours'
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/accueil" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Fermer</span>
        </Link>
        <h1>Notifications</h1>
      </header>

      <div className={styles.list}>
        {notifications.map((notif) => (
          <div key={notif.id} className={`${styles.notifCard} glass-card`}>
            <div className={styles.iconBox}>{notif.icon}</div>
            <div className={styles.content}>
              <div className={styles.top}>
                <h3>{notif.title}</h3>
                <span className={styles.time}>{notif.time}</span>
              </div>
              <p className={styles.desc}>{notif.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
