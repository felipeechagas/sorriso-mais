const { type } = require("express/lib/response");

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});


function sendWhatsApp() {
    var phonenumber = "+5581992189378";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/" + phonenumber + "?text="
        + "*Nome:* " + name + "%0a"
        + "*Email:* " + email + "%0a"
        + "*Telefone:* " + phone + "%0a"
        + "*Mensagem:* " + message
        + "%0a%0a"
        + "%0a%0a"
        + "This is an example of send HTML form data to WhatsApp";

    window.open(url, '_blank');

    // Limpa os campos do formulário
    document.getElementById("contact-form").reset();
}

