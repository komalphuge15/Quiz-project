import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Question = sequelize.define('Question', {
  text: { type: DataTypes.STRING, allowNull: false },
  options: { type: DataTypes.JSON, allowNull: false },
  correct: { type: DataTypes.STRING, allowNull: false }
}, {
  freezeTableName: true 
});

export default Question;
