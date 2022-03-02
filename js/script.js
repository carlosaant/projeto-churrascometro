// Carne - 400 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let camp_adultos, camp_criancas, camp_horas, op_refrigerante, op_cerveja, bt_calcular;

onload = function(){
    camp_adultos = document.getElementById("tex_num_adulto");
    camp_criancas = document.getElementById("tex_num_crianca");
    camp_horas = document.getElementById("tex_num_horas");
    bt_calcular = document.getElementById("bt-calcular");

    bt_calcular.addEventListener("click", calcular_bbq);
}

function calcular_bbq(){
    if(camp_adultos.value || camp_criancas.value > 0){
        if(camp_horas.value > 0){
            op_refrigerante = document.querySelector('input[name="rad_refri"]:checked').value;
            op_cerveja = document.querySelector('input[name="rad_cerveja"]:checked').value;
            calc_gera_bbq();
        }
        else
            alert("A Quantidade de Horas precisa de um valor válido!");
    }
    else
        alert("Uma das Quantidades deve ser preenchida");
}

function calc_gera_bbq(){
    let qtd_carne, qtd_refri, qtd_cerveja;
    if(camp_horas.value >= 6){
        qtd_carne = (650 * camp_adultos.value) + (325 * camp_criancas.value);
        if(op_refrigerante==="sim")
            qtd_refri = (2000 * camp_adultos.value) + (1000 * camp_criancas.value);
        else
            qtd_refri = 0;
        if(op_cerveja==="sim")
            qtd_cerveja = (2000 * camp_adultos.value);
        else
            qtd_cerveja = 0;

        console.log("Carne: "+qtd_carne+" Refri: "+qtd_refri+" Cerveja: "+qtd_cerveja);
        openForm(qtd_carne, qtd_refri, qtd_cerveja);
    }
    else{
        qtd_carne = (400 * camp_adultos.value) + (200 * camp_criancas.value);
        if(op_refrigerante==="sim")
            qtd_refri = (1000 * camp_adultos.value) + (500 * camp_criancas.value);
        else
            qtd_refri = 0;
        if(op_cerveja==="sim")
            qtd_cerveja = (1200 * camp_adultos.value);
        else
            qtd_cerveja = 0;

        console.log("Carne: "+qtd_carne+" Refri: "+qtd_refri+" Cerveja: "+qtd_cerveja);
        openForm(qtd_carne, qtd_refri, qtd_cerveja);
    }
}

function openForm(carne, refri, cerveja) {
    document.querySelector(".mensagem").style.display = "block";
    document.querySelector(".mensagem").innerHTML =
      "<div class='mensagemDiv'><h1>Calculo do Churrasco</h1><p>" +
      "Carne: "+(carne/1000)+" Kg</p>"+
      (refri>0?"<p>Refrigerante: "+(refri/1000)+" Lt</p>":"")+
      (cerveja>0?"<p>Cerveja: "+Math.round(cerveja/350)+" Latas</p>":"")+
      "</div>";
  }

function closeForm() {
    document.querySelector(".mensagem").style.display = "none";
  }