import Link from "next/link";
import { ChevronLeft, Plus, Users, Calendar, Info } from "lucide-react";
import styles from "./nouvelle-tontine.module.css";

export default function NouvelleTontinePage() {
  const membresDisponibles = [
    { id: '1', name: 'Alice Belinga' },
    { id: '2', name: 'Bob Ndongo' },
    { id: '3', name: 'Charlie Kamga' },
    { id: '4', name: 'Diane Eba' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/dashboard" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Fermer</span>
        </Link>
        <h1>Nouvelle Tontine</h1>
      </header>

      <form className={styles.form}>
        <div className={styles.field}>
          <label>Nom de la Tontine</label>
          <input type="text" placeholder="Ex: Épargne Vacances 2026" className="input-premium" />
        </div>

        <div className={styles.field}>
          <label>Fréquence des cotisations</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input type="radio" name="frequence" value="hebdomadaire" defaultChecked />
              <span>Hebdomadaire</span>
            </label>
            <label className={styles.radioLabel}>
              <input type="radio" name="frequence" value="mensuelle" />
              <span>Mensuelle</span>
            </label>
          </div>
        </div>

        <div className={styles.field}>
          <label>Montant par membre (FCFA)</label>
          <input type="number" placeholder="Ex: 10000" className="input-premium" />
        </div>

        <div className={styles.field}>
          <div className={styles.labelWithAction}>
            <label>Sélectionner les membres</label>
            <Link href="/dashboard/membres/nouveau" className={styles.linkAction}>+ Créer nouveau</Link>
          </div>
          <div className={styles.membersChecklist}>
            {membresDisponibles.map((membre) => (
              <label key={membre.id} className={styles.checkItem}>
                <input type="checkbox" value={membre.id} />
                <span>{membre.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className={styles.infoBox}>
          <Info size={18} color="var(--info)" />
          <p>La tontine sera activée dès que tous les membres auront validé leur invitation.</p>
        </div>

        <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '1.5rem' }}>
          Lancer la Tontine
        </button>
      </form>
    </div>
  );
}
