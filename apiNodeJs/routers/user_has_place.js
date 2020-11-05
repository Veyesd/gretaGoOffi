const express = require('express')
require('dotenv').config()
var Sequelize = require("sequelize");
const sequelize = require('../db.config')

// CHARGEMENT DU MODEL 
const User_has_place = require('../models/user_has_place')(sequelize, Sequelize.DataTypes);
const User = require('../models/user')(sequelize, Sequelize.DataTypes);
const Place = require('../models/place')(sequelize, Sequelize.DataTypes);

User_has_place.belongsTo(Place, {
  foreignKey: "place_id",
  keyType: Sequelize.INTEGER,
  sourceKey: "id",
});
User_has_place.belongsTo(User, {
  foreignKey: "user_id",
  keyType: Sequelize.INTEGER,
  sourceKey: "id",
});



// RECUPERATION DU ROUTER D EXPRESS
var router = express.Router()


//-------------------------------------------
// Show all [GET /user_has_place/]
//-------------------------------------------
router.get('', function (req, res) {

  User_has_place.findAll({
    include: [
      {
        model: Place,
        keyType: Sequelize.INTEGER
      },
      {
        model: User,
        keyType: Sequelize.INTEGER
      }
    ]
  })
    .then(data => {
      return res.json({ data: data })
    })
    .catch(err => res.json({ user_has_place: 'Database error', error: err }))
});

//-------------------------------------------
// Show by id [GET /user_has_place/user/:id]
//-------------------------------------------
router.get('/user/:id', function (req, res) {

  var id = req.params.id;
  // Vérifier si le champ id est présent
  if (!id) {
    return res.status(400).json({ user_has_place: 'Informations manquantes' })
  }

  // Vérifier si il existe dans la table user
  User_has_place.findAll({ where: { user_id: id }, raw: true })
    .then(data => {
      return res.json({ data: data })
    })
    .catch(err => res.json({ user_has_place: 'Database error', error: err }))
});
//-------------------------------------------
// Show by id [GET /user_has_place/place/:id]
//-------------------------------------------
router.get('/place/:id', function (req, res) {

  var id = req.params.id;
  // Vérifier si le champ id est présent
  if (!id) {
    return res.status(400).json({ user_has_place: 'Informations manquantes' })
  }

  // Vérifier si il existe dans la table user
  User_has_place.findAll({ where: { place_id: id }, raw: true })
    .then(data => {
      return res.json({ data: data })
    })
    .catch(err => res.json({ user_has_place: 'Database error', error: err }))
});
//-------------------------------------------
// Show by id [GET /user_has_place/:user_id/:place_id]
//-------------------------------------------
router.get('/:user_id/:place_id', function (req, res) {

  var user_id = req.params.user_id;
  var place_id = req.params.place_id;
  // Vérifier si le champ id est présent
  if (!user_id || !place_id) {
    return res.status(400).json({ user_has_place: 'Informations manquantes' })
  }

  // Vérifier si il existe dans la table user
  User_has_place.findOne(
    {
      where: {
        [Sequelize.Op.and]: {
          user_id: user_id,
          place_id: place_id
        }
      }
    }).then(data => {
  return res.json({ data: data })
})
  .catch(err => res.json({ user_has_place: 'Database error', error: err }))
});

//-------------------------------------------
// Delete [DELETE /user_has_place/:user_id/:place_id]
//-------------------------------------------
router.delete('/:user_id/:place_id', function (req, res) {

  var user_id = req.params.user_id;
  var place_id = req.params.place_id;
  User_has_place.destroy({
    where: {
      user_id: user_id,
      place_id: place_id //this will be your id that you want to delete
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
// Update [PUT /user_has_place/:id]
//-------------------------------------------
router.put('/:id', function (req, res) {
  var id = req.params.id;
  if (!id) {
    return res.status(400).json({ user_has_place: 'Informations manquantes' })
  }

  // Vérifier si il existe dans la table user
  User_has_place.findOne({ where: { id: id }, raw: true })
    .then(data => {
      if (data === null) {
        return res.status(400).json({ user_has_place: 'user_has_place introuvable' })
      }

      User_has_place.update(req.body, {
        where: { id: id }
      })
        .then(data => res.json({ user_has_place: 'user_has_place updated', data: data }))
        .catch(err => res.json({ user_has_place: 'Database error', error: err }))
    })
    .catch(err => res.json({ user_has_place: 'Database error', error: err }))
})
//-------------------------------------------
// Insert  [Post /user_has_place/register] 
//-------------------------------------------
router.post('/register', (req, res) => {
  const { place_id, user_id } = req.body;

  // Vérification des données en reçues
  if (!user_id || !place_id) {
    return res.status(400).json({ user_has_place: 'Il manque un paramètre' })
  }

  User_has_place.findOne({
    where: {
      [Sequelize.Op.and]: {
        user_id: user_id,
        place_id: place_id
      }
    }
  })
    .then(data => {
      if (data !== null) {
        return res.status(400).json({ user_has_place: 'Ce compte existe déjà !' })
      } else {
        User_has_place.create(req.body)
          .then(data => res.json({ user_has_place: 'user_has_place created', data: data }))
          .catch(err => res.json({ user_has_place: 'Database error', error: err }))
      }
    })
    .catch(err => res.json({ message: 'Database error find', error: err }))
})

//-------------------------------------------
// Export
//-------------------------------------------
module.exports = router