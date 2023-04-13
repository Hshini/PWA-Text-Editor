import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {console.error('putDb not implemented');
const pwaDb = await openDB('pwa', 1);
const tx = todosDb.transaction('pwa', 'readwrite');
const store = tx.objectStore('pwa');
const request = store.add({ pwa: content });
const result = await request;
console.log('🚀 - data saved to the database', result);
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {console.error('getDb not implemented');
  console.log('GET all from the database');
  const pwaDb= await openDB('pwa', 1);
  const tx = todosDb.transaction('pwa', 'readonly');
  const store = tx.objectStore('pwa');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
};
initdb();
