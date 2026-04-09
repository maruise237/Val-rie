import Link from "next/link";
import { ChevronLeft, Info, PersonStanding, Phone, Mail } from "lucide-react";
import styles from "./nouveau.module.css";

export default function NouveauMembrePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/dashboard" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Retour</span>
        </Link>
        <h1>Nouveau Membre</h1>
        <p>Ajoutez un membre à votre tontine en quelques secondes.</p>
      </header>

      <form className={styles.form}>
        <div className={styles.field}>
          <label>
            <PersonStanding size={16} />
            <span>Nom complet</span>
          </label>
          <input type="text" placeholder="Ex: Jean Dupont" className="input-premium" />
        </div>

        <div className={styles.field}>
          <label>
            <Phone size={16} />
            <span>Numéro de téléphone</span>
          </label>
          <input type="tel" placeholder="Ex: +237 6xx xxx xxx" className="input-premium" />
        </div>

        <div className={styles.field}>
          <label>
            <Mail size={16} />
            <span>Email (Optionnel)</span>
          </label>
          <input type="email" placeholder="Ex: email@example.com" className="input-premium" />
        </div>

        <div className={styles.infoBox}>
          <Info size={20} color="var(--primary)" />
          <span>Le membre recevra un lien d'accès par SMS automatiquement.</span>
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
          Enregistrer le Membre
        </button>
      </form>
    </div>
  );
}
