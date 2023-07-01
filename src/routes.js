let express = require("express")

let router = express.Router()

let controller = require("./controller")

// route to get all todos
router.get("/todos", controller.listEntries)
// route to getn an item by id
router.get("/todos/:id", controller.getEntry)
// route to delete an item by id
router.delete("/todos/:id",controller.deleteEntry)
// route to add an item
router.post("/todos",controller.addEntry)
// route to update an item
router.put("/todos/:id",controller.updateEntry)

module.exports = router;