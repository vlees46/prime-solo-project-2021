const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const query = `SELECT DISTINCT * FROM "meals"
  JOIN "user_meals" ON "user_meals"."meal_id" = "meals"."id"
  JOIN "user" ON "user_meals"."goal" = "user"."goal"
  WHERE "user"."id"=$1` ;

  /* const sqlValues = [
    req.user.id] */

 pool.query(query, [req.user.id])
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
  // POST route code here
});

module.exports = router;
