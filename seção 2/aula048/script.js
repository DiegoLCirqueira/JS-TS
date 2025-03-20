const data = new Date();
let diaSemana = data.getDay();
const diaSemanaTexto = getWeekDay(diaSemana);

function getWeekDay(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
    }
    
}
let dia = data.getDate(); // Dia do mês (1-31)
let mes = data.getMonth(); // Mês (0-11)
let ano = data.getFullYear(); // Ano completo (ex: 2025)
let hora = data.getHours(); // Hora (0-23)
let minutos = data.getMinutes(); // Minutos (0-59)

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

minutos = minutos < 10 ? '0' + minutos : minutos;



console.log(diaSemana, diaSemanaTexto);
document.getElementById('diaSemana').innerHTML = diaSemanaTexto + ", "+ dia + " de "+ meses[mes] + " de " + ano + ", " + hora + ":" + minutos;