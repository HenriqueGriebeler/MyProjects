function menu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        
        itens.style.display = 'block'
        
    }
}



//COMEÇO DO LEITOR DE PÁGINAS

var pagina = 0

class NewsPaper{
    constructor(){
       var arrayPages = []
    }
       load(){ //FUNÇÃO PRINCIPAL QUE DEVE RODAR
           this.showP()
           this.dataReader()
       }
       dataReader(){
        
    }
        getPageNumber(){



            var numbers = document.getElementsByClassName('page')
            for(let i = 0; i < numbers.length; i++){
                //AQUI VOU COLOCAR ALGO PARA COMPUTAR DENTRO DO OBJETO
            // NEWSPAPER PARA COLOCAR A PÁGINA ATUAL COMO ID, SÓ PRECISO
            // PENSAR MELHOR COMO FAZER ISSO...
            }
       }
    
      /* currentPage(){  IREI CONFIGURAR ADICIONAR AS IMAGENS NO ARRAYPAGES PARA PODER CONTINUAR ESTE

        for(let i = 0; i < arrayPages.length; i++){
            var page = document.getElementById('i'+arrayPages[i])
    
        }
       } */ 
       pageNext(){ /* VOU CONFIGURAR OS BOTÕES AQUI */

       }

       
       
       showP(){
        var page = document.getElementById('imenu1')
        if(page.style.display == 'block'){
            page.style.display = 'none'
        }else{
            page.style.display = 'block'
        }
        }
   }
   
   var newsPaper = new NewsPaper()
  