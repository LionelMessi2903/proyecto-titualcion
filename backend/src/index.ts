import { createConnection } from 'typeorm';
import databaseConfig from './database.config';

async function main() {
  try {
    const connection = await createConnection(databaseConfig);
    console.log('Conexión exitosa a la base de datos');
    // Aquí puedes realizar operaciones con la base de datos
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

main();