console.log("Console carregado");
function validaCPF(cpf){
    if(cpf.length !=11){
        return false;
    }else{
        return true;
    }
}

function validacao(){
    console.log("Iniciando validacao");
    var cpf = document.getElementById('cpf_digitado').value;
    console.log(cpf);
    var resuldadoValidacao= validaCPF(cpf);
    if(resuldadoValidacao){
       document.getElementById('success').style.display = 'block';
    }else{
        document.getElementById('error').style.display = 'block';
    }
}
