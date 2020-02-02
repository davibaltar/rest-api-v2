module.exports = {//   production   || test
  database: process.env.DB_DATABASE || 'api_test',
  dialect: process.env.DB_DIALECT   || 'mysql',
  host: process.env.DB_HOST         || '127.0.0.1',
  password: process.env.DB_PASSWORD || '12345678',
  username: process.env.DB_USERNAME || 'root',
  logging: false
}

