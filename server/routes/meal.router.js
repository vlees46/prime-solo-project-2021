const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const query = `SELECT * FROM "meals" ORDER BY "mealtime" ASC`;

 pool.query(query)
  .then((dbres) => res.send(dbres.rows))     
  .catch((dberror) => {
      console.log('Opps you messed up DB error', dberror);
      res.sendStatus(500)
    })  
});

/**
 * POST route template
 */
 router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMealsQuery = `
  INSERT INTO "meals" ("mealtime",  "description", "calories", "protein", "carbs","fats")
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING "id";`
// FIRST QUERY MAKES A MEAL
  pool.query(insertMealsQuery, [req.body.mealtime, req.body.description,  req.body.calories,  req.body.protein,  req.body.carbs,  req.body.fats])
  .then(result => {
    console.log('New Meal Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMealId = result.rows[0].id
// Now handle the genre reference
    const insertUserMealsQuery = `
      INSERT INTO "user_meals" ("meal_id", "goal")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GOAL FOR THAT NEW MEAL
      pool.query(insertUserMealsQuery, [createdMealId, req.body.goal]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })
// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

router.delete('/:id', (req, res) => {
  //req.params as "id" value of the item
  // console.log(req.params.id);
  // //req.user.id as value of "user_id"
  //console.log('this is the userID', req.user.id)
  console.log('router delete function', req.params.id);

  //check and see if the "user_id" value of the row "id" matches req.user.id
  //query SELECT * FROM "item" WHERE "id" = req.params

  const query1 = `DELETE FROM "user_meals" WHERE "user_meals"."id"=$1`;
  const query2 = `DELETE FROM "meals" WHERE "meals"."id"=$1`; 

  /* const testquery = `DELETE FROM "user_meals USING meals WHERE "user_meals"."id"=$1 = "meals"."id"=$1 `
 */
  const sqlValues = [
    req.params.id    
  ]
               
  console.log('this is delete query', sqlValues);


        
    pool.query(query1, sqlValues)
        .then((dbres) => {
          pool.query(query2, sqlValues)
        })
        .then((dbres) => res.sendStatus(201))      
        .catch((error) => {
          console.log('ahhhh you screwed up', error);
          res.sendStatus(500)
        })    })

module.exports = router;
