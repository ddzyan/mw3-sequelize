import * as path from 'path';

export const sequelize = {
  client: {
    options: {
      dialect: 'sqlite',
      storage: path.join(__dirname, '../../', 'database.sqlite')
    },
    sync: true
 }
}

export const koa = {
  keys: ['123']
}