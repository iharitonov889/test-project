import { Model, DataTypes } from 'sequelize';
import sequelize from '../../db/index.js';

export default class AnimalCard extends Model {}
AnimalCard.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    animalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    aviaryNumber: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    moniker: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    food: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    photo: {
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
    modelName: 'AnimalCard',
  },
);

/*export { User };*/
