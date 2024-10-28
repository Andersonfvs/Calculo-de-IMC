function calcular() {
    var alt = document.getElementById('altura')
    var pes = document.getElementById('peso')
    var res = document.getElementById('res')
    var altura = parseFloat (alt.value)/100
    var peso = parseFloat(pes.value)
   var imc = peso/(altura*altura)
   var classificacao = ''
   var mensagem = ''

   if (imc < 18.5) {
    classificacao= 'Magreza'
    mensagem = 'Cuidado, você está abaixo do peso ideal'
//magreza
}else if (imc >=18.5 && imc<24.9){
    classificacao = 'Normal'
    mensagem = 'Parabéns, você está com peso normal'
//normal
}else if (imc >= 25 && imc<29.9){
    classificacao = 'Sobrepeso'
    mensagem = 'Cuidado, você está com Sobrepeso'
//sobrepeso
}else if(imc >= 30 && imc <39.9){
    classificacao = 'Obesidade II'
    mensagem = 'Atenção, você esta com Obesidade I, isso pode ser prejudical à saúde'
//obesidade II
}else {
    classificacao = 'Obesidade III'
    mensagem = 'ALERTA, você está com Obesidade III, sua vida está em RISCO'
//obesidade III
}
document.getElementById('res').style.fontSize = '15px'
document.getElementById('res').style.color = ('red')
document.getElementById('res').style.fontFamily = 'arial'
res.innerHTML = `O seu IMC é: ${imc.toFixed(2)} (${classificacao}).<br>${mensagem}`

}
