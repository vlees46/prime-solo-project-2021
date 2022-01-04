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
 const sqlText = `SELECT DISTINCT * FROM "meals"
 JOIN "user_meals" ON "user_meals"."meal_id" = "meals"."id"
 JOIN "user" ON "user_meals"."goal" = "user"."goal" WHERE "id"=$1;`;
       const sqlValues = [
           req.user.id]
           console.log('this is sqlValues in GET', sqlValues);

       pool.query(sqlText, sqlValues)
       .then((dbres) => res.sendStatus(201))
  .catch((dberror) => {
    console.log('Opps you messed up DB error', dberror);
    res.sendStatus(500)
  })    
  });


  module.exports = router;