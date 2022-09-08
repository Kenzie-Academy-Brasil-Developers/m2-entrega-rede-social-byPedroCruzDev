import { Api }  from "./API.js"
class SignUp{
    static buttonsHeader(){
        const btnLoginPage      = document.getElementById("btnLoginPage")
        const btnRegisterPage   = document.getElementById("btnRegisterPage")
       
        btnLoginPage.addEventListener("click", (event) =>{
            event.preventDefault()
            window.location.assign("../../../index.html")
        })
        btnRegisterPage.addEventListener("click", (event) =>{
            event.preventDefault()
            window.location.assign("../pages/signUpS.html")
        })
    }
    static createSignUp(){

        
        const inputName     = document.getElementById("inputName")
        const inputEmail    = document.getElementById("inputEmail")
        const inputPassword = document.getElementById("inputPassword")
        const inputWork     = document.getElementById("inputWork")
        const inputImg      = document.getElementById("inputImg")
        const btnRegister   = document.getElementById("btnRegister")
        const btnPgLogin    = document.getElementById("btnPgLogin")

        btnRegister.addEventListener("click", (event) => {
            event.preventDefault()
            console.log(
                inputName.value,
                inputEmail.value,
                inputPassword.value,
                inputWork.value,
                inputImg.value
            )
            let body = {
                username: inputName.value,
                email: inputEmail.value, 
                password: inputPassword.value,
                work_at: inputWork.value,
                image: inputImg.value,
            }
            console.log(body)
            Api.singUpRequest(body)
        })

       btnPgLogin.addEventListener("click", (event) =>{
            event.preventDefault()
            window.location.assign("../../../index.html")
        })
    }
}
SignUp.createSignUp()
SignUp.buttonsHeader()