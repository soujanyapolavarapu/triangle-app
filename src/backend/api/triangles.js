const express = require("express");
const router = express.Router();
const knex = require("../database");

//Returns all triangles
router.get("/", async (request, response) => {
    const triangles = await knex("triangles");
    response.json(triangles);
});

//Returns Triangle by id
router.get("/:id", async (request, response) => {
  
    const triangleById = await knex("triangles").where({
      id: parseInt(request.params.id),
    });
    response.json(triangleById);
});

module.exports = router;
