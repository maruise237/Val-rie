"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "@/lib/insforge";
import { ChevronLeft, Check, Loader2, User } from "lucide-react";
import styles from "./pointage.module.css";

export default function RootPointagePage() {
  const [membres, setMembres] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  useEffect(() => {
    async function loadMembres() {
      const { data } = await db.from('profiles').select('*');
      setMembres(data || []);
      setLoading(false);
    }
    loadMembres();
  }, []);

  const handlePointage = async (membreId: string) => {
    setSavingId(membreId);
    try {
      await db.from('cotisations').insert([{ member_id: membreId, amount: 5000, status: 'payé' }]);
      setSuccessId(membreId);
      setTimeout(() => setSuccessId(null), 2000);
    } catch (err) {
      alert("Erreur");
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/admin/accueil" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Fermer</span>
        </Link>
        <h1>Pointage manuel</h1>
      </header>

      <div className={styles.list}>
        {loading ? <p>Chargement...</p> : membres.map((membre) => (
          <div key={membre.id} className={`${styles.card} glass-card`}>
            <div className={styles.info}>
              <div className={styles.avatar}><User size={18} /></div>
              <p className={styles.name}>{membre.full_name}</p>
            </div>
            <button 
              className={successId === membre.id ? styles.btnSuccess : styles.btnAction}
              onClick={() => handlePointage(membre.id)}
              disabled={savingId === membre.id}
            >
              {savingId === membre.id ? <Loader2 className="animate-spin" size={18} /> : 
               successId === membre.id ? <Check size={18} /> : "Pointer"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
