import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Parking extends Model {
  id!: number;
  name!: string;
  slot!: number;
  createdAt!: Date;
  updatedAt!: Date;
}

Parking.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    slot: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'parking',
    freezeTableName: true,
  },
);