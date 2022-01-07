const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


/**
 * GET route template
 */
 router.get('/', (req, res) => {
  console.log(req.user);
  console.log(req.body);
  //req.params as "id" value of the item
 // console.log(req.params.id);
 // //req.user.id as value of "user_id"
 console.log(req.user.id);
 //check and see if the "user_id" value of the row "id" matches req.user.id
 //query SELECT * FROM "item" WHERE "id" = req.params
 const sqlText = `SELECT * FROM  "user" WHERE "id"=$1;`;
       const sqlValues = [
           req.user.id]
           console.log('this is sqlValues in GET', sqlValues);

       pool.query(sqlText, sqlValues)
       .then((dbres) => res.send(dbres.rows))
  .catch((dberror) => {
    console.log('Opps you messed up DB error', dberror);
    res.sendStatus(500)
  })   
  });

  router.post('/', (req, res) => {
    console.log(req.user);
    console.log(req.body);
    //req.params as "id" value of the item
   // console.log(req.params.id);
   // //req.user.id as value of "user_id"
   console.log(req.user.id);
   //check and see if the "user_id" value of the row "id" matches req.user.id
   //query SELECT * FROM "item" WHERE "id" = req.params
   const sqlText = `UPDATE "user"
                         SET "gender"=$1, "age"=$2, "weight"=$3, "height"=$4, "activity"=$5, "goal"=$6, "calories"=$7, "fats"=$8, "proteins"=$9, "carbs"=$10
                         WHERE "id"=$11;`;
         const sqlValues = [
             req.body.gender, req.body.age, req.body.weight, req.body.height, req.body.activity,
             req.body.goal, req.body.calories, req.body.fats, req.body.proteins, req.body.carbs, req.user.id]
             console.log('this is sqlValues in post', sqlValues);

         pool.query(sqlText, sqlValues)
         .then((dbres) => res.sendStatus(201))
    .catch((dberror) => {
      console.log('Opps you messed up DB error', dberror);
      res.sendStatus(500)
    })   
  // endpoint functionality
});

  

  
  module.exports = router;