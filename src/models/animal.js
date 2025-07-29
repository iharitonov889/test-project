import { Model, DataTypes } from 'sequelize';
import sequelize from '../../db/index.js';
import animalCard from './animalCard.js';

export default class Animal extends Model {}
Animal.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    kind: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },

  {
    sequelize,
    timestamps: false,
    modelName: 'Animal',
  },
  Animal.hasMany(animalCard, {
    foreignKey: 'id',
  }),
);

/*export { User };*/
