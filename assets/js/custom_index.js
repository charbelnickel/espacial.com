

document.getElementById("form_contact").addEventListener("submit", function (e) {
    let name = $("#name").val();
    let email = $("#email").val();
    let subject = $("#subject").val();
    let message = $("#message").val();

    /* var tempParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send("service_4vmkw9x", "template_ygki2kg", tempParams)
        .then(function (res) {
            console.log("success", res.status)
        }); */

    e.preventDefault();
});
