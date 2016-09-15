$(document).ready(function(){
    $('#form-login').submit(function(evento){
        evento.preventDefault();
        $('#alerta-form').addClass('hide');
        
        var dados = {
          usuario: $('#login').val(),
          senha: $('#senha').val()
        };
        
        $.post('/model/login.php', dados, function(retorno){
            
            
            var retorno = JSON.parse(retorno);
            
            if (retorno.status != 'ok')
            {
                //não encontrado
                $('#alerta-form').html(retorno.msg);
                $('#alerta-form').removeClass('hide');
            } else {
                location.href = "index.php";
            }
        });
        
    });
});