const { UnauthorizedError } = require("../utils/errors")

class User {
    static async login(credentials) {
        //missing feilds? error
        //
        //look user
        //if found compare password
        //if match return user
        //
        //if invalid
        throw new UnauthorizedError("Invalid email and/or password")
    }

    static async login(credentials) {

    }
}

module.exports = User