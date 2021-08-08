 $("#bot").on("click", function() {
    var numcep = $("#cep").val();
    var url = "https://viacep.com.br/ws/"+numcep+"/json/";

    $.ajax({
        url: url,
        type:"get",
        dataType: "json",
        success: function(resposta){
            console.log(resposta)
            $("#logradouro").html(resposta.logradouro)
             $("#localidade").html(resposta.localidade)
             $("#bairro").html(resposta.bairro)
             $("#uf").html(resposta.uf)
             $("#complemento").html(resposta.complemento)
             $("#ibge").html(resposta.ibge)
             $("#ddd").html(resposta.ddd)




        }


    })
    
})  