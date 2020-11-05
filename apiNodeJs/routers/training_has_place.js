const express = require('express')
require('dotenv').config()
var Sequelize = require("sequelize");
const sequelize = require('../db.config')

// CHARGEMENT DU MODEL 
const Training_has_place = require('../models/training_has_place')(sequelize, Sequelize.DataTypes);
const Training = require('../models/training')(sequelize, Sequelize.DataTypes);
const Place = require('../models/place')(sequelize, Sequelize.DataTypes);

Training_has_place.belongsTo(Place, {
  foreignKey: "place_id",
  keyType: Sequelize.INTEGER,
  sourceKey: "id",
});
Training_has_place.belongsTo(Training, {
  foreignKey: "training_id",
  keyType: Sequelize.INTEGER,
  sourceKey: "id",
});



// RECUPERATION DU ROUTER D EXPRESS
var router = express.Router()


//-------------------------------------------
// Show all [GET /training_has_place/]
//-------------------------------------------
router.get('', function (req, res) {

  Training_has_place.findAll({
    include: [
      {
        model: Place,
        keyType: Sequelize.INTEGER
      },
      {
        model: Training,
        keyType: Sequelize.INTEGER
      }
    ]
  }) 
  .then(data => {
    return res.json({ data: data})
  })
  .catch(err => res.json({ training_has_place: 'Database error', error: err}))
});

//-------------------------------------------
// Show by id [GET /training_has_place/training/:id]
//-------------------------------------------
router.get('/training/:id', function (req, res) {

  var id = req.params.id;
 // Vérifier si le champ id est présent
 if(!id){
  return res.status(400).json({ training_has_place: 'Informations manquantes'})
}

// Vérifier si il existe dans la table user
Training_has_place.findAll({ where: { training_id: id }, raw: true})
.then(data => {
  return res.json({ data: data})
})
.catch(err => res.json({ training_has_place: 'Database error', error: err}))
});

//-------------------------------------------
// Show by id [GET /training_has_place/place/:id]
//-------------------------------------------
router.get('/place/:id', function (req, res) {

  var id = req.params.id;
 // Vérifier si le champ id est présent
 if(!id){
  return res.status(400).json({ training_has_place: 'Informations manquantes'})
}

// Vérifier si il existe dans la table user
Training_has_place.findAll({ where: { place_id: id }, raw: true})
.then(data => {
  return res.json({ data: data})
})
.catch(err => res.json({ training_has_place: 'Database error', error: err}))
});

//-------------------------------------------
// Show by id [GET /training_has_place/:training_id/:place_id]
//-------------------------------------------
router.get('/:training_id/:place_id', function (req, res) {

  var training_id = req.params.training_id;
  var place_id = req.params.place_id;
  // Vérifier si le champ id est présent
  if (!training_id || !place_id) {
    return res.status(400).json({ training_has_place: 'Informations manquantes' })
  }

  // Vérifier si il existe dans la table user
  Training_has_place.findOne(
    {
      where: {
        [Sequelize.Op.and]: {
          training_id: training_id,
          place_id: place_id
        }
      }
    }).then(data => {
  return res.json({ data: data })
})
  .catch(err => res.json({ training_has_place: 'Database error', error: err }))
});
//-------------------------------------------
// Delete [DELETE /training_has_place/:training_id/:place_id
//-------------------------------------------
router.delete('/:training_id/:place_id', function (req, res) {
  var training_id = req.params.training_id;
  var place_id = req.params.place_id;

  Training_has_place.destroy({
    where: {
      [Sequelize.Op.and]: {
        training_id: training_id,
        place_id: place_id
      }
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
// Update [PUT /training_has_place/:id]
//-------------------------------------------
router.put('/:id', function (req, res) {
  var id = req.params.id;
  if(!id){
      return res.status(400).json({ training_has_place: 'Informations manquantes'})
  }

  // Vérifier si il existe dans la table user
  Training_has_place.findOne({ where: { id: id }, raw: true})
      .then(data => {
          if(data === null){
              return res.status(400).json({ training_has_place: 'training_has_place introuvable'})
          }

          Training_has_place.update(req.body, {
              where: { id: id}
            })
            .then(data => res.json({ training_has_place: 'training_has_place updated', data: data}))
            .catch(err => res.json({ training_has_place: 'Database error', error: err}))
      })
      .catch(err => res.json({ training_has_place: 'Database error', error: err}))
})
//-------------------------------------------
// Insert  [Post /training_has_place/register] 
//-------------------------------------------
router.post('/register', (req, res) => {
  const { place_id,training_id } = req.body;

  // Vérification des données en reçues
  if (!training_id || !place_id) {
    return res.status(400).json({ training_has_place: 'Il manque un paramètre' })
  }

  Training_has_place.findOne({
     where: { 
       [Sequelize.Op.and]: {
          training_id: training_id,
          place_id:place_id
        }
      }
    })
    .then(data => {
      if (data !== null) {
        return res.status(400).json({ training_has_place: 'Ce compte existe déjà !' })
      } else {
        Training_has_place.create(req.body)
          .then(data => res.json({ training_has_place: 'user_has_place created', data: data }))
          .catch(err => res.json({ training_has_place: 'Database error', error: err }))
      }
    })
    .catch(err => res.json({ message: 'Database error find', error: err }))
})
  

//-------------------------------------------
// Export
//-------------------------------------------
module.exports = router