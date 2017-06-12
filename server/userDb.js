var bcrypt = require('bcrypt')


module.exports = {
  findById,
  findByName,
  createUser,
  comparePasswords,
  checkName
}

function checkName (connection, name) {
  return connection('users')
    .where('users.name', name)
}

function findById (connection, id) {
  return connection('users')
    .where('users.id', id)
    .first()
}

function findByName (connection, name) {
  return connection('users')
    .where('users.name', name)
    .first()
}

function createUser (connection, name, password) {
  return bcrypt.hash(password, 10)
    .then((hash) => {
      return connection('users')
        .insert({
          name: name,
          hashedPassword: hash
        })
        .returning('hashedPassword')
    })
}

function comparePasswords (hashedPassword, password) {
    return bcrypt.compare(password, hashedPassword)
      .then((res) => res)
}
