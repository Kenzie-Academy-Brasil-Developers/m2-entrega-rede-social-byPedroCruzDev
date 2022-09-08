export class Modal{

    static postModal(main){
        
        const body      = document.querySelector("body")

        const divBackground = document.createElement("div")
        
        const divModal  = document.createElement("div")

        const divUser   = document.createElement("div")
        const userImg   = document.createElement("img")
        const userName  = document.createElement("h2")
        const spanWork  = document.createElement("span")

        const titleH2  = document.createElement("h2")
        const descPost  = document.createElement("p")

        const btnClose  = document.createElement("button")

        divBackground.classList = "divModalBG"
        divModal.classList  = "divModal"
        divUser.classList   = "divUserModal"
        userImg.classList   = "imageUser"
        spanWork.classList  = "workUser"
        userName.classList  = "userName"

        
        userImg.src         = main.children[0].children[0].src
        userName.innerText  = main.children[0].children[1].innerText
        spanWork.innerText  = main.children[0].children[2].innerText
        titleH2.innerText  = main.children[1].children[0].innerText
        descPost.innerText  = main.children[1].children[1].innerText

        btnClose.innerText  = "X"
        
        btnClose.addEventListener("click", (event) =>{
            divBackground.remove()
        })

        divUser.append(userImg, userName, spanWork)
        divModal.append(divUser, titleH2, descPost, btnClose)
        divBackground.append(divModal)

        body.append(divBackground)
        

        
    }
}
 