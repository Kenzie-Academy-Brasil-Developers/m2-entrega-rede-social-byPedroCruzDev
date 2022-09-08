export class Error {
    static toastError (error){
    Toastify({
        text: error,
        duration: 3000,
        close: true,
        gravity: "botton",
        position: "center", 
        stopOnFocus: true, 
        style: {
        background: "linear-gradient(to right, #4263EB, #4263EB)",
        },
  }).showToast();
    }
}