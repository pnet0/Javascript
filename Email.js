function validateEmail(Email) {
       var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

       return $.trim(Email).match(pattern) ? true : false;
    }
    function validarCPF(cpf) {
       cpf = cpf.replace(/[^\d]+/g, '');
       if (cpf == "") {
           alert("Preencha o CPF");
           return false;
       }
       if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
           return false;
       }
       add = 0;
       for (i = 0; i < 9; i++)
           add += parseInt(cpf.charAt(i)) * (10 - i);
       rev = 11 - (add % 11);
       if (rev == 10 || rev == 11) rev = 0;
       if (rev != parseInt(cpf.charAt(9))) return false;
       add = 0;
       for (i = 0; i < 10; i++)
           add += parseInt(cpf.charAt(i)) * (11 - i);
       rev = 11 - (add % 11);
       if (rev == 10 || rev == 11) rev = 0;
       if (rev != parseInt(cpf.charAt(10))) return false;
       return true;

    }

if (!validateEmail($('.email').val())){
            return false;
}
if (!validarCPF($('.cpf').val())) {
            generate('error', '<div class="activity-item" style="text-align: left"><div class="activity">CPF inválido.</div></div>');
            $('.cpf').focus();
            return false;
}