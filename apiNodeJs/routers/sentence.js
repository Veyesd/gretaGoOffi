const express = require('express')
require('dotenv').config()
var Sequelize = require("sequelize");
const sequelize = require('../db.config')

// CHARGEMENT DU MODEL 
const Sentence = require('../models/sentence')(sequelize, Sequelize.DataTypes);
const Variable=  require('../models/variable')(sequelize, Sequelize.DataTypes);

// RECUPERATION DU ROUTER D EXPRESS
var router = express.Router()


//-------------------------------------------
// Show all [GET /sentence/]
//-------------------------------------------
router.get('', function (req, res) {

  Sentence.findAll() 
  .then(data => {
    return res.json({ data: data})
  })
  .catch(err => res.json({ message: 'Database error', error: err}))
});

//-------------------------------------------
// Show by id [GET /sentence/:id]
//-------------------------------------------
router.get('/:id', function (req, res) {

  var id = req.params.id;
 // Vérifier si le champ id est présent
 if(!id){
  return res.status(400).json({ message: 'Informations manquantes'})
}

// Vérifier si il existe dans la table user
Sentence.findOne({ where: { id: id }, raw: true})
.then(data => {
  return res.json({ data: data})
})
.catch(err => res.json({ message: 'Database error', error: err}))
});

//-------------------------------------------
// Delete [DELETE /sentence/:id]
//-------------------------------------------
router.delete('/:id', function (req, res) {

  var id = req.params.id;

  Sentence.destroy({
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
// Update [PUT /sentence/:id]
//-------------------------------------------
router.put('/:id', function (req, res) {
  var id = req.params.id;
  if(!id){
      return res.status(400).json({ message: 'Informations manquantes'})
  }

  // Vérifier si il existe dans la table user
  Sentence.findOne({ where: { id: id }, raw: true})
      .then(data => {
          if(data === null){
              return res.status(400).json({ message: 'sentence introuvable'})
          }

          Sentence.update(req.body, {
              where: { id: id}
            })
            .then(data => res.json({ message: 'sentence updated', data: data}))
            .catch(err => res.json({ message: 'Database error', error: err}))
      })
      .catch(err => res.json({ message: 'Database error', error: err}))
})
//-------------------------------------------
// Insert  [Post /sentence/register] 
//-------------------------------------------
router.post('/register', (req, res) => {
  const { title,sentence } = req.body;

  // Vérification des données en reçues
  if (!title) {
    return res.status(400).json({ message: 'Il manque un paramètre' })
  }

  // Verification si l'utilisateur existe déjà
  Sentence.findOne({ where: { title: title }, raw: true })
    .then(data => {
      if (data !== null) {
        return res.status(400).json({ message: 'Ce sentence existe déjà !' })
      } else {
        Sentence.create(req.body)
          .then(data => res.json({ message: 'sentence created', name: name }))
          .catch(err => res.json({ message: 'Database error', error: err }))
      }
    })
    .catch(err => res.json({ message: 'Database error', error: err }))
})

//-------------------------------------------
// Export
//-------------------------------------------
module.exports = router