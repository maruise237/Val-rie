import Link from "next/link";
import { ChevronLeft, MessageCircle, Mail, Phone, HelpCircle } from "lucide-react";
import styles from "./aide.module.css";

export default function AidePage() {
  const faqs = [
    { q: "Comment créer une tontine ?", a: "Allez sur votre tableau de bord admin et cliquez sur 'Nouvelle Tontine'." },
    { q: "Comment sécuriser mon compte ?", a: "Vous pouvez modifier votre mot de passe dans les paramètres." },
    { q: "Le paiement est-il sécurisé ?", a: "Oui, nous utilisons l'infrastructure InsForge pour garantir la sécurité de vos données." },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/accueil" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Accueil</span>
        </Link>
        <h1>Aide & Support</h1>
      </header>

      <section className={styles.contactSection}>
        <div className="glass-card">
          <h3>Nous contacter</h3>
          <div className={styles.contactLinks}>
            <a href="mailto:support@valeriefinance.com" className={styles.contactItem}>
              <Mail size={20} />
              <span>support@valeriefinance.com</span>
            </a>
            <a href="tel:+237600000000" className={styles.contactItem}>
              <Phone size={20} />
              <span>+237 6xx xxx xxx</span>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <h3>Questions fréquentes</h3>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div className={styles.question}>
                <HelpCircle size={18} />
                <span>{faq.q}</span>
              </div>
              <p className={styles.answer}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
