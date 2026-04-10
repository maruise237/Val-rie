"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "@/lib/insforge";
import { ChevronLeft, User, Award, Clock, Plus, ChevronRight } from "lucide-react";
import styles from "./membres.module.css";

export default function ListeMembresPage() {
  const [membres, setMembres] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMembres() {
      const { data } = await db.from('profiles').select('*');
      setMembres(data || []);
    }
    fetchMembres();
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/admin/accueil" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Fermer</span>
        </Link>
        <div className={styles.titleRow}>
          <h1>Membres</h1>
          <Link href="/membres/nouveau" className={styles.addBtn}>
            <Plus size={20} />
          </Link>
        </div>
      </header>

      <div className={styles.list}>
        {membres.length > 0 ? membres.map((membre) => (
          <Link href={`/profil/${membre.id}`} key={membre.id} className={`${styles.card} glass-card`}>
            <div className={styles.avatar}>
              <User size={20} />
            </div>
            <div className={styles.content}>
              <p className={styles.name}>{membre.full_name}</p>
              <div className={styles.details}>
                <span className={styles.role}>{membre.role}</span>
                <span className={styles.divider}>•</span>
                <span className={styles.stat}><Award size={14} /> Exemplaire</span>
              </div>
            </div>
            <ChevronRight size={18} className={styles.arrow} />
          </Link>
        )) : (
            <p className={styles.empty}>Aucun membre trouvé.</p>
        )}
      </div>
    </div>
  );
}
