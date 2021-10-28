import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Parking extends Model {
  id!: number;
  name!: string;
  slot!: number;
  reserve!: number;
  createdAt!: Date;
  UpdatedAt!: Date;
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
    },

    reserve: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'parking',
    freezeTableName: true,
  },
);