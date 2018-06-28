 function limpa_formulário_cep() {$('.rua, .bairro, .cidade, .estado').val("");}  
   $('.cep').blur(function() {
       var cep = $(this).val().replace(/\D/g, '');
       if (cep != "") {
           var validacep = /^[0-9]{8}$/;
           if(validacep.test(cep)) {
               $('.rua, .bairro, .cidade, .estado').val("...");
               $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
                   if (!("erro" in dados)) {
                       $('.rua').val(dados.logradouro);
                       $('.bairro').val(dados.bairro);
                       $('.cidade').val(dados.localidade);
                       $('.estado').val(dados.uf);
                   }
                   else {
                       limpa_formulário_cep();
                       generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">CEP não encontrado.</div></div>');
                   }
               });
           }
           else {
 
               limpa_formulário_cep();
               generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">Formato de CEP inválido</div></div>');
           }
       } 
       else {
           limpa_formulário_cep();
       }
   });