import { ConnectionOptions } from 'typeorm';
import { Usuarios } from '../../frontend/src/models/users';

const databaseConfig: ConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'titulacion',
  entities: [
    Usuarios, // Add the Usuarios entity class here
  ],
  synchronize: true,
};

export default databaseConfig;
