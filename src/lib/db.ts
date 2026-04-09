import { openDB, IDBPDatabase } from 'idb';

export interface VFDatabase extends IDBPDatabase {
  cotisations: {
    key: string;
    value: {
      id: string;
      membre_id: string;
      montant: number;
      date: number;
      statut: 'pending' | 'synced';
      mode_paiement: string;
    };
  };
}

const DB_NAME = 'valerie_finance_db';
const DB_VERSION = 1;

export const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('cotisations')) {
        const store = db.createObjectStore('cotisations', { keyPath: 'id' });
        store.createIndex('by-date', 'date');
        store.createIndex('by-status', 'statut');
      }
    },
  });
};

export const saveCotisationOffline = async (cotisation: any) => {
  const db = await initDB();
  await db.add('cotisations', {
    ...cotisation,
    id: crypto.randomUUID(),
    date: Date.now(),
    statut: 'pending'
  });
};

export const getPendingCotisations = async () => {
  const db = await initDB();
  return db.getAllFromIndex('cotisations', 'by-status', 'pending');
};
