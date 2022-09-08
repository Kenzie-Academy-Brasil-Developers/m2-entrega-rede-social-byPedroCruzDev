import {Api} from "./API.js"
export class Login {
    static buttonsHeader(){
        //header buttons
        const btnLoginPage      = document.getElementById("btnLoginPage")
        const btnRegisterPage   = document.getElementById("btnRegisterPage")
        console.log(btnLoginPage, btnRegisterPage)
        btnLoginPage.addEventListener("click", (event) =>{
            event.preventDefault()
            window.location.assign("../../../index.html")
        })
        btnRegisterPage.addEventListener("click", (event) =>{
            event.preventDefault()
            window.location.assign("./src/pages/signUp.html")
        })
    }

    static inputsLogin(){
        const inputEmail    = document.getElementById("emailLogin")
        const inputPassword = document.getElementById("senhaLogin")
        const btnLogin      = document.getElementById("btnLogin")
        const btnSignUp     = document.getElementById("pgSignUp")

        btnLogin.addEventListener("click", (event) =>{
            event.preventDefault()
            
            const body = {
                    email: inputEmail.value, 
                    password: inputPassword.value,
            }
            Api.loginRequest(body)
        })

        btnSignUp.addEventListener("click", (event) =>{
            event.preventDefault()
            console.log(event)
            window.location.assign("./src/pages/signUp.html")
        })
    }
}
