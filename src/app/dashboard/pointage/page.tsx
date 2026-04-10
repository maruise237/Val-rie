"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "@/lib/insforge";
import { ChevronLeft, Check, Loader2, User } from "lucide-react";
import styles from "./pointage.module.css";

interface Membre {
  id: string;
  full_name: string;
  badge?: string;
}

export default function PointagePage() {
  const [membres, setMembres] = useState<Membre[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  // Charger les membres depuis InsForge
  useEffect(() => {
    async function loadMembres() {
      try {
        const { data, error } = await db.from('profiles').select('*');
        if (error) throw error;
        setMembres(data || []);
      } catch (err) {
        console.error("Erreur chargement membres:", err);
      } finally {
        setLoading(false);
      }
    }
    loadMembres();
  }, []);

  const handlePointage = async (membreId: string) => {
    setSavingId(membreId);
    try {
      // Enregistrer la cotisation (On suppose une tontine par défaut pour le moment)
      const { error } = await db.from('cotisations').insert([
        { 
          member_id: membreId,
          amount: 5000, // Montant par défaut pour le test
          status: 'payé'
        }
      ]);

      if (error) throw error;

      // Animation de succès
      setSuccessId(membreId);
      setTimeout(() => setSuccessId(null), 2000);
    } catch (err) {
      alert("Erreur lors du pointage. Vérifiez votre connexion.");
    } finally {
      setSavingId(null);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/dashboard" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Fermer</span>
        </Link>
        <h1>Pointage du jour</h1>
        <p>Validez les cotisations d'un simple clic.</p>
      </header>

      {loading ? (
        <div className={styles.loader}>
          <Loader2 className="animate-spin" size={32} />
        </div>
      ) : (
        <div className={styles.memberGrid}>
          {membres.map((membre) => (
            <button 
              key={membre.id} 
              className={`${styles.memberCard} glass-card ${successId === membre.id ? styles.success : ''}`}
              onClick={() => handlePointage(membre.id)}
              disabled={savingId === membre.id}
            >
              <div className={styles.avatar}>
                {savingId === membre.id ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : successId === membre.id ? (
                  <Check size={20} color="#4CAF50" />
                ) : (
                  <User size={20} />
                )}
              </div>
              <span className={styles.memberName}>{membre.full_name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
