// // Update with your config settings.

// module.exports = {

//   development: {
//     client: 'sqlite3',
//     connection: {
//       filename: './dev.sqlite3'
//     }
//   },

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };

const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://vuongnguyen:Qq111111@localhost:5432/koa_api_test',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://vuongnguyen:Qq111111@localhost:5432/koa_api',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};
