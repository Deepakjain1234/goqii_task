const models = require('../models/index')
const Sequelize = require("sequelize");

const user = models.User;


module.exports.users = (req, res) => {
       user.findAll()
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.json(err)
        })
}

module.exports.getUserById = (req, res) => {
    user.findOne({ where: { id: req.params.id } })
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.json(err)
        })
}
module.exports.addUser = (req, res) => {
    user.create(req.body)
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.json(err)
        })
}
module.exports.editUser = (req, res) => {
    user.update(req.body,{where:{id:req.body.id}})
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.json(err)
        })
}
module.exports.deleteUser = (req, res) => {
    user.destroy({where:{id:req.body.id}})
        .then((data) => {
            return res.json(data)
        })
        .catch((err) => {
            return res.json(err)
        })
}
