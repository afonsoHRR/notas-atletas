let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }];
let nomeAtletas = atletas.map(function(nomes){
        return nomes.nome
    })
let notasObtidas = atletas.map(function(notas){
        return notas.notas})
for(let i = 0; i < atletas.length; i++){
    let notasAtleta = notasObtidas[i].slice(1, 4)
            let soma = notasAtleta.reduce(function(total,atual){
                return (total + atual)
            })
            let media = soma/notasAtleta.length
     console.log(`Atletas: ${nomeAtletas[i]}\nNotas Obtidas: ${notasObtidas[i]}\nMedia: ${media}`)       
 }