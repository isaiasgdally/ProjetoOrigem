let diaDaSemana;
let idade;




function verificador(diaDaSemana, idade){

if(idade < 12){
    console.log('Criança');
} else if (idade > 12 && idade <= 18){
    console.log('Adolescente');
}else if(idade > 18){
    console.log('Adulto');
}

switch(diaDaSemana){
 case 'domingo':
    console.log('Ir ao parque');
    break;
    case 'segunda':
        console.log('Estudar Programação');
        break;
    case 'terça':
        console.log('Praticar esporte');
        break;
    case 'quarta':
        console.log('Ler um livro');
        break;
    case 'quinta':
        console.log('Assistir um fime');
        break;
    case 'sexta':
        console.log('Encontrar amigos');
        break;
    case 'sábado':
        console.log('Fazer uma viagem curta');
        break;
    default:
        console.log('Dia invalido')
    break;
}
}

console.log(verificador('domingo', 12))