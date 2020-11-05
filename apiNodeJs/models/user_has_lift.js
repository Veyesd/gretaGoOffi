/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_has_lift', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    driver: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'user',
        },
        key: 'id'
      }
    },
    lift_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: {
          tableName: 'lift',
        },
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_has_lift',
    schema: 'gretago'
  });
};
