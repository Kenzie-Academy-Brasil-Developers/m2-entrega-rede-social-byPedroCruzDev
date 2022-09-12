import { Dashboard }from "./models/dashboard.js"
import { Api } from "./models/api.js" 
import { Error } from "./models/error.js"


Error.toastError("Login realizado com sucésso!!")


Dashboard.objPost()
Dashboard.verificationToken()
Dashboard.logout ()


//
Api.dataUser()
Api.posts()
Api.suggestionUsers()