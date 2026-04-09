import Link from "next/link";
import { ChevronLeft, CheckCircle, Circle } from "lucide-react";
import styles from "./pointage.module.css";

export default function PointagePage() {
  const members = [
    { id: '1', name: 'Alice Belinga', status: 'pending' },
    { id: '2', name: 'Bob Ndongo', status: 'done' },
    { id: '3', name: 'Charlie Kamga', status: 'pending' },
    { id: '4', name: 'Diane Eba', status: 'pending' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/dashboard" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Retour</span>
        </Link>
        <h1>Pointage du Jour</h1>
      </header>

      <div className={styles.list}>
        {members.map((member) => (
          <div key={member.id} className={`${styles.memberCard} glass-card`}>
            <div className={styles.info}>
              <div className={styles.avatarPlaceholder}>{member.name.charAt(0)}</div>
              <span className={styles.name}>{member.name}</span>
            </div>
            
            {member.status === 'done' ? (
              <div className={styles.checkedGroup}>
                <CheckCircle size={20} color="var(--success)" />
                <span className={styles.checkedText}>Pointé</span>
              </div>
            ) : (
              <button className={styles.pointBtn}>Valider</button>
            )}
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>{members.length} membres inscrits</p>
      </footer>
    </div>
  );
}
