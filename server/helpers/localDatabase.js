const { randomUUID } = require('node:crypto')

/**
 * user: { id: Number, name: String, age: Number, description: String, summary: String }
 */
class LocalDatabase {
  #users = new Map()
  insertUser(user) {
    const id = randomUUID()
    this.#users.set(id, user)
  }
  getUsers() {
    return Array.from(this.#users).map((user) => {
      return { id: user[0], ...user[1] }
    })
  }
  getUser(id) {
    const user = this.#users.get(id)
    return { id, ...user }
  }
  updateUser(id, user) {
    this.#users.set(id, user)
  }
  deleteUser(id) {
    this.#users.delete(id)
  }
}
// crud

module.exports = { LocalDatabase }
