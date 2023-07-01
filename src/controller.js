let db = require("./db");

let listEntries = function (req, res) {
  let sql = "select id, title, done from entries";

  db.query(sql, function(err, results){
    if(err){
        console.log("failed before you even started", err)
        res.sendStatus(500)
    } else {
        res.json(results)
    }
  });
};

let getEntry = function (req, res) {
  let id = req.params.id
    let sql = "select * from entries where id = ?";
    let params = [id]

    db.query(sql, params, function(err, results){
      if(err){
          console.log("failed because you are not productive", err)
          res.sendStatus(500)
      } else {
           if(results.length == 0){
            res.sendStatus(404)
           } else {
            res.json(results[0])
           }
      }
    });
};

let deleteEntry = function (req, res) {
  let id = req.params.id
  let sql = "delete from entries where id = ?"
  let params = [id]


  db.query(sql, params, function(err, results){
    if(err){
      console.log("you can't even delete a todo off your list, err")
      send.sendStatus(500)

    } else {
      res.sendStatus(204)
    }
  })

};

let addEntry = function (req, res) {
  let title = req.body.title
  let notes = req.body.notes

  let sql = "insert into entries (title, notes) values (?,?)"
  let params = [title, notes]


  db.query(sql, params, function(err, results){
    if(err){
      console.log("you can't even add a todo", err)
      send.sendStatus(500)

    } else {
      res.sendStatus(204)
    }
  })
};

let updateEntry = function (req, res) {
  let id = req.params.id
  let title = req.body.title
  let notes = req.body.notes
  let done = req.body.done

  let sql = "update entries set title = ?, notes = ?, done = ? where id ?";
  let params = [title, notes, done, id]

  db.query(sql, params, function(err, results){
    if(err){
      console.log("you can't even update a todo list")
      res.sendStatus(500)
    } else {
      res.sendStatus(204)
    }
  })
};

module.exports = {
  listEntries,
  getEntry,
  deleteEntry,
  addEntry,
  updateEntry,
};
