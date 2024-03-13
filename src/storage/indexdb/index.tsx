import { openDB } from 'idb';
import config from './indexdb.config';
async function openDatabase() {
  const db = await openDB(config.name, config.version);
  return db;
}

export { openDatabase };
