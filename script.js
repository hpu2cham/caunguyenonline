console.log(" Joined Successfully! ");
function SendMail() {
    var params = {
        form_name : document.getElementById("fullname").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_xi9plb4", "template_xu69dvh", params).then(function (res) {
        })
    }
var form = document.querySelector(".form");
var btn = document.querySelector(".btn");
var iconClose = document.querySelector(".xmark i")

function toggleForm(e){
    form.classList.toggle('hide')
}
btn.addEventListener('click', toggleForm)
iconClose.addEventListener('click', toggleForm)
form.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleForm()
    }
})