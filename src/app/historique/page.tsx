"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "@/lib/insforge";
import { ChevronLeft, Filter, Download, Calendar, DollarSign } from "lucide-react";
import styles from "./historique.module.css";

export default function HistoriquePage() {
  const [cotisations, setCotisations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const { data, error } = await db.from('cotisations').select('*').order('payment_date', { ascending: false });
        if (error) throw error;
        setCotisations(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchHistory();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/accueil" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Retour</span>
        </Link>
        <div className={styles.titleRow}>
          <h1>Historique</h1>
          <button className={styles.iconBtn}><Download size={18} /></button>
        </div>
      </header>

      <div className={styles.filters}>
        <button className={styles.filterBtn}>
          <Calendar size={16} />
          <span>Ce mois</span>
        </button>
        <button className={styles.filterBtn}>
          <Filter size={16} />
          <span>Tous les membres</span>
        </button>
      </div>

      <div className={styles.list}>
        {loading ? (
          <p className={styles.empty}>Chargement...</p>
        ) : cotisations.length > 0 ? (
          cotisations.map((c) => (
            <div key={c.id} className={`${styles.card} glass-card`}>
              <div className={styles.cardMain}>
                <div className={styles.info}>
                  <span className={styles.date}>{new Date(c.payment_date).toLocaleDateString()}</span>
                  <span className={styles.id}>ID: {c.id.slice(0, 8)}</span>
                </div>
                <div className={styles.amountBox}>
                  <span className={styles.amount}>{c.amount.toLocaleString()} FCFA</span>
                  <span className={styles.status}>Payé</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            <DollarSign size={40} className={styles.emptyIcon} />
            <p>Aucune cotisation enregistrée pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
