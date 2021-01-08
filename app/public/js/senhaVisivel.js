    var senha = $('#senha');
    var olho = $("#olho");

    olho.mousedown(function() {
        senha.attr("type", "text");
    });

    olho.mouseup(function() {
        senha.attr("type", "password");
    });
    // para evitar o problema de arrastar a imagem e a senha continuar exposta, 
    //citada pelo nosso amigo nos comentários
    $( "#olho" ).mouseout(function() { 
        $("#senha").attr("type", "password");
    });


    var confirma = $('#confirma');
    var olho_confirm = $("#olho_confirm");

    olho_confirm.mousedown(function() {
        confirma.attr("type", "text");
    });

    olho_confirm.mouseup(function() {
        confirma.attr("type", "password");
    });
    // para evitar o problema de arrastar a imagem e a senha continuar exposta, 
    //citada pelo nosso amigo nos comentários
    $( "#olho_confirm" ).mouseout(function() { 
    $("#confirma").attr("type", "password");
    });