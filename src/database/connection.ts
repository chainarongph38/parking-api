import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize('postgres://postgres:password@postgres:5432/system')