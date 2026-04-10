import Link from "next/link";
import { ChevronLeft, User, Bell, Lock, Shield, LogOut, Moon, Globe } from "lucide-react";
import styles from "./parametres.module.css";

export default function ParametresPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/accueil" className={styles.back}>
          <ChevronLeft size={20} />
          <span>Retour</span>
        </Link>
        <h1>Paramètres</h1>
      </header>

      <section className={styles.section}>
        <h3>Compte</h3>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.itemIcon}><User size={20} /></div>
            <div className={styles.itemContent}>
              <p className={styles.itemTitle}>Modifier le profil</p>
              <p className={styles.itemDesc}>Nom, photo, téléphone</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemIcon}><Lock size={20} /></div>
            <div className={styles.itemContent}>
              <p className={styles.itemTitle}>Sécurité</p>
              <p className={styles.itemDesc}>Changer le mot de passe</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3>Préférences</h3>
        <div className={styles.list}>
          <div className={styles.item}>
            <div className={styles.itemIcon}><Bell size={20} /></div>
            <div className={styles.itemContent}>
              <p className={styles.itemTitle}>Notifications</p>
              <p className={styles.itemDesc}>SMS et alertes Push</p>
            </div>
            <div className={styles.toggle}></div>
          </div>
          <div className={styles.item}>
            <div className={styles.itemIcon}><Moon size={20} /></div>
            <div className={styles.itemContent}>
              <p className={styles.itemTitle}>Mode sombre</p>
              <p className={styles.itemDesc}>Actuellement activé</p>
            </div>
            <div className={styles.toggleActive}></div>
          </div>
        </div>
      </section>

      <div className={styles.logoutWrapper}>
        <Link href="/login" className={styles.logoutBtn}>
          <LogOut size={20} />
          <span>Se déconnecter</span>
        </Link>
        <p className={styles.version}>Valérie Finance v1.0.2</p>
      </div>
    </div>
  );
}
