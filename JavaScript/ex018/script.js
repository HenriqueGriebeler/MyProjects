a = [0,5,4,7,8,9,4,1,3]
a.sort()
for(let i = 0; i < a.length; i++){
    if(a[i] == 4){
        console.log('Encontrado')
    }
    console.log("A posição "+i+" corresponde ao valor "+a[i])
}