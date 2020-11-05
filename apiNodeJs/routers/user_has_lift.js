const express = require('express')
require('dotenv').config()
var Sequelize = require("sequelize");
const sequelize = require('../db.config')

// CHARGEMENT DU MODEL 
const User_has_lift = require('../models/user_has_lift')(sequelize, Sequelize.DataTypes);
const User = require('../models/user')(sequelize, Sequelize.DataTypes);
const Lift = require('../models/lift')(sequelize, Sequelize.DataTypes);

User_has_lift.belongsTo(Lift, {
  foreignKey: "lift_id",
  keyType: Sequelize.INTEGER,
  sourceKey: "id",
});
User_has_lift.belongsTo(User, {
  foreignKey: "user_id",
  keyType: Sequelize.INTEGER,
  sourceKey: "id",
});



// RECUPERATION DU ROUTER D EXPRESS
var router = express.Router()


//-------------------------------------------
// Show all [GET /user_has_lift/]
//-------------------------------------------
router.get('', function (req, res) {

  User_has_lift.findAll({
    include: [
      {
        model: Lift,
        keyType: Sequelize.INTEGER
      },
      {
        model: User,
        keyType: Sequelize.INTEGER
      }
    ]
  }) 
  .then(data => {
    return res.json({ data: data})
  })
  .catch(err => res.json({ user_has_lift: 'Database error', error: err}))
});

//-------------------------------------------
// Show by id [GET /user_has_lift/:id]
//-------------------------------------------
router.get('/:id', function (req, res) {

  var id = req.params.id;
 // Vérifier si le champ id est présent
 if(!id){
  return res.status(400).json({ user_has_lift: 'Informations manquantes'})
}

// Vérifier si il existe dans la table user
User_has_lift.findOne({ where: { id: id }, raw: true})
.then(data => {
  return res.json({ data: data})
})
.catch(err => res.json({ user_has_lift: 'Database error', error: err}))
});

//-------------------------------------------
// Delete [DELETE /user_has_lift/:id]
//-------------------------------------------
router.delete('/:id', function (req, res) {

  var id = req.params.id;

  User_has_lift.destroy({
    where: {
      id: id //this will be your id that you want to delete
    }
  }).then(function (rowDeleted) { // rowDeleted will return number of rows deleted
    if (rowDeleted === 1) {
      console.log('Deleted successfully');
      return res.send('Deleted successfully')
    }
  }, function (err) {
    console.log(err);
  });
});
//-------------------------------------------
// Update [PUT /user_has_lift/:id]
//-------------------------------------------
router.put('/:id', function (req, res) {
  var id = req.params.id;
  if(!id){
      return res.status(400).json({ user_has_lift: 'Informations manquantes'})
  }

  // Vérifier si il existe dans la table user
  User_has_lift.findOne({ where: { id: id }, raw: true})
      .then(data => {
          if(data === null){
              return res.status(400).json({ user_has_lift: 'user_has_lift introuvable'})
          }

          User_has_lift.update(req.body, {
              where: { id: id}
            })
            .then(data => res.json({ user_has_lift: 'user_has_lift updated', data: data}))
            .catch(err => res.json({ user_has_lift: 'Database error', error: err}))
      })
      .catch(err => res.json({ user_has_lift: 'Database error', error: err}))
})
//-------------------------------------------
// Insert  [Post /user_has_lift/register] 
//-------------------------------------------
router.post('/register', (req, res) => {
  const { lift_id,user_id ,driver} = req.body;

  // Vérification des données en reçues
  if (!user_id || !lift_id || !driver) {
    return res.status(400).json({ user_has_place: 'Il manque un paramètre' })
  }

  User_has_lift.findOne({
     where: { 
       [Sequelize.Op.and]: {
          user_id: user_id,
          lift_id:lift_id
        }
      }
    })
    .then(data => {
      if (data !== null) {
        return res.status(400).json({ user_has_lift: 'Ce compte existe déjà !' })
      } else {
        User_has_lift.create(req.body)
          .then(data => res.json({ user_has_lift: 'user_has_lift created', data: data }))
          .catch(err => res.json({ user_has_lift: 'Database error', error: err }))
      }
    })
    .catch(err => res.json({ message: 'Database error find', error: err }))
})
  

//-------------------------------------------
// Export
//-------------------------------------------
module.exports = router