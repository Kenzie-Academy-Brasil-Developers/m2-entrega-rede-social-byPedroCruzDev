import {Dashboard} from "./dashboard.js"
import { Error }from "./error.js"

export class Api {
    static async loginRequest(obj){
       //verificação se usuario existe
        await fetch("https://m2-rede-social.herokuapp.com/api/users/login/",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(obj)
        })
        //resposta 
        .then((res) => res.json())
        .then((res) => {
        
            if(res.token !== undefined){
                localStorage.setItem("KenzieToken", res.token)
                localStorage.setItem("KenzieUser",res.user_uuid)
                window.location.assign("./src/pages/dashboard.html")
            }else{
                Error.toastError("Login ou senha invalido!")
            }
        })
        .catch((res) => console.log(res))
    }
    //object sao as informações do usuario
    static async singUpRequest(object){
        await fetch("https://m2-rede-social.herokuapp.com/api/users/", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify(object)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            window.location.assign("../../../index.html")
            return res
        })
        .catch((res) => console.log(res))
    }

    static async dataUser(){
        //dados do localStorage
        const userId = localStorage.getItem("KenzieUser")
        const token  = localStorage.getItem("KenzieToken")
    
        await fetch(`https://m2-rede-social.herokuapp.com/api/users/${userId}/`,{
            method: "GET",
            headers:{
                "Content-Type": "application/json", 
                Authorization: `Token ${token}`
            },
        })
        .then((res) => res.json())
        .then((res) => Dashboard.loggedUser(res))
        .catch((res) => console.log(res))
    }
    static async posts(){
        //interação com o post
        const userId = localStorage.getItem('KenzieUser')
        const token  = localStorage.getItem('KenzieToken')
        await fetch("https://m2-rede-social.herokuapp.com/api/posts/?limit=10&offset=284", {
            method: "GET",
            headers:{
                "Content-Type": "application/json", 
                Authorization: `Token ${token}`
            },
        })
        .then((res) => res.json())
        .then((res) => {
            fetch(`https://m2-rede-social.herokuapp.com/api/posts/?limit=10&offset=${res.count -9}`,{
                method: "GET",
                headers:{
                    "Content-Type": "application/json", 
                    Authorization: `Token ${token}`
                },
            })
            .then((res) => res.json())
            .then((res) => Dashboard.renderPosts(res.results))
        })
    }

    static async createPost(object){
        const token  = localStorage.getItem('KenzieToken')
        await fetch("https://m2-rede-social.herokuapp.com/api/posts/", {
            method: "POST",
            headers:{
                "Content-Type": "application/json", 
                Authorization: `Token ${token}`
            },
            body:JSON.stringify(object)
        })
        .then((res) => res.json())
        .then(Api.posts())
        .catch((res) => console.log(res))
    }

    static async suggestionUsers(){
        const token  = localStorage.getItem('KenzieToken')

        await fetch(`https://m2-rede-social.herokuapp.com/api/users/`, {
            method: "GET",
            headers:{
                "Content-Type": "application/json", 
                Authorization: `Token ${token}`
            },
        })
    
        .then((res) => res.json())
        
        .then((res) =>{
        const userSug = res.results
        Dashboard.userSuggests(userSug)})
    }
    static async likePost(id){
        //like
        const token  = localStorage.getItem('KenzieToken')
        await fetch("https://m2-rede-social.herokuapp.com/api/likes/",{
            method: "POST",
            headers:{
                "Content-Type": "application/json", 
                Authorization: `Token ${token}`
            },
            body:JSON.stringify(id)
        })
        .then((res) => res.json())
        
        .then((res) => Api.posts()) 
    }
    static async unlikePost(id){
        //deletando um like
        const token  = localStorage.getItem('KenzieToken')
        await fetch(`https://m2-rede-social.herokuapp.com/api/likes/${id}/`,{
            method: "DELETE",
            headers:{
                Authorization: `Token ${token}`
            },
        })
        .then(Api.posts())
        .catch((res)=> console.log(res))
    }

    static async followUser (obj){
        const token  = localStorage.getItem('KenzieToken')
        await fetch("https://m2-rede-social.herokuapp.com/api/users/follow/",{
            method: "POST",
            headers:{
                "Content-Type": "application/json", 
                Authorization: `Token ${token}`
            },
            body:JSON.stringify(obj)
        })
        .then((res) => res.json())
        .then(Api.suggestionUsers())
    }

    static async unfollowUser(id){
        //removendo seguir
        const token  = localStorage.getItem('KenzieToken')
        await fetch(`https://m2-rede-social.herokuapp.com/api/users/unfollow/${id}/`,{
            method: "DELETE",
            headers:{
                Authorization: `Token ${token}`
            },
        })
        .then(Api.suggestionUsers())
    }
}
export default Api 