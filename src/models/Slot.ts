import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Slot extends Model {
  id!: number;
  name!: string;
  isAvailable!: number;
  createdAt!: Date;
  UpdatedAt!: Date;
}

Slot.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'slot',
    freezeTableName: true,
  },
);