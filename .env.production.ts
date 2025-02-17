export default {
  SERVICE_CONFIG: {
    port: 3000,
  },

  DATABASE_CONFIG: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'zjq520520',
    database: 'half_nest',
    autoLoadEntities: true,
    synchronize: true,
  },
};
