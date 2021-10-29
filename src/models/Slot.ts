import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database/connection';

export class Slot extends Model {
  id!: number;
  name!: string;
  is_available!: number;
  created_at!: Date;
  updated_at!: Date;
}

Slot.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    is_available: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'slot',
    freezeTableName: true,
    underscored: true
  },
);