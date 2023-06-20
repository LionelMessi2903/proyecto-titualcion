import { createConnection } from 'typeorm';
import databaseConfig from '../database.config';

createConnection(databaseConfig)
  .then(connection => {
    console.log('Connected to the database');
    // Perform further operations or start your application
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
    // Handle the error
  });
