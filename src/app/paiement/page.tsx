"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, Smartphone, CreditCard, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";
import styles from "./paiement.module.css";

export default function PaiementPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 2500);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/accueil" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Fermer</span>
        </Link>
        <h1>Paiement</h1>
      </header>

      {step === 1 && (
        <div className={styles.step1}>
          <div className={styles.summaryCard}>
            <p>Montant à régler</p>
            <h2>5 000 FCFA</h2>
            <p className={styles.tontineName}>Tontine "Épargne 2026"</p>
          </div>

          <h3 className={styles.sectionTitle}>Choisir un mode de paiement</h3>
          <div className={styles.methods}>
            <button className={styles.methodBtn} onClick={() => setStep(2)}>
              <Smartphone size={24} color="#FF9800" />
              <div className={styles.methodInfo}>
                <p className={styles.methodName}>Mobile Money</p>
                <p className={styles.methodDesc}>Orange, MTN, Moov</p>
              </div>
            </button>
            <button className={styles.methodBtn} onClick={() => setStep(2)}>
              <CreditCard size={24} color="#2196F3" />
              <div className={styles.methodInfo}>
                <p className={styles.methodName}>Carte Bancaire</p>
                <p className={styles.methodDesc}>Visa, Mastercard</p>
              </div>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className={styles.step2}>
          <div className={styles.inputBox}>
            <label>Saisissez votre numéro ou numéro de carte</label>
            <input type="text" placeholder="Ex: 6xx xxx xxx" className="input-premium" />
          </div>
          
          <button className="btn-primary" style={{ width: '100%', marginTop: '2rem' }} onClick={handlePay} disabled={loading}>
            {loading ? <Loader2 className="animate-spin" /> : "Confirmer le paiement"}
          </button>

          <div className={styles.secureInfo}>
            <ShieldCheck size={16} />
            <span>Paiement sécurisé par InsForge Pay</span>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className={styles.successStep}>
          <CheckCircle2 size={80} color="#4CAF50" className={styles.successIcon} />
          <h2>Paiement réussi !</h2>
          <p>Votre cotisation a été enregistrée avec succès.</p>
          <Link href="/historique" className="btn-primary" style={{ marginTop: '2rem' }}>
            Voir mon reçu
          </Link>
        </div>
      )}
    </div>
  );
}
