import { Dashboard }from "./models/dashboard.js"
import { Api }from "./models/API.js"
import { Error } from "./models/error.js"


Error.toastError("Login realizado com sucésso!!")

Dashboard.verificationToken()
Dashboard.logout ()
Dashboard.objPost()

//
Api.dataUser()
Api.posts()
Api.suggestionUsers()