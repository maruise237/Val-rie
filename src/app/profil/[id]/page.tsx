"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronLeft, User, Phone, Award, Clock, Calendar } from "lucide-react";
import styles from "./profil.module.css";

export default function ProfilMembrePage() {
  const params = useParams();
  const id = params.id;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/membres" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Membres</span>
        </Link>
      </header>

      <div className={styles.hero}>
        <div className={styles.avatarBig}>
          <User size={48} />
        </div>
        <h2>Membre #{id?.slice(0, 4) || '001'}</h2>
        <div className={styles.badgeBox}>
          <Award size={16} />
          <span>Contributeur Gold</span>
        </div>
      </div>

      <div className={styles.infoGrid}>
        <div className="glass-card">
          <Phone size={18} />
          <p>Téléphone</p>
          <span>+237 6xx xxx xxx</span>
        </div>
        <div className="glass-card">
          <Clock size={18} />
          <p>Régularité</p>
          <span>95%</span>
        </div>
      </div>

      <h3 className={styles.sectionTitle}>Historique Personnel</h3>
      <div className={styles.historyList}>
        <div className={styles.historyItem}>
          <Calendar size={18} />
          <div className={styles.historyText}>
            <p className={styles.hTitle}>Cotisation Mars</p>
            <p className={styles.hDate}>Payé le 05/03/2026</p>
          </div>
          <span className={styles.hAmount}>5 000 FCFA</span>
        </div>
        <div className={styles.historyItem}>
          <Calendar size={18} />
          <div className={styles.historyText}>
            <p className={styles.hTitle}>Cotisation Février</p>
            <p className={styles.hDate}>Payé le 02/02/2026</p>
          </div>
          <span className={styles.hAmount}>5 000 FCFA</span>
        </div>
      </div>
    </div>
  );
}
