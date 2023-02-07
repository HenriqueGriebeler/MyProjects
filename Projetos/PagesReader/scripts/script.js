function menu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        
        itens.style.display = 'block'
        
    }
}



page = 0
canOpen = true

    function load(){

        showP(0)
     canOpen = false
    }

    function showP(activePage){

        var pages = document.getElementById('imenu1')
        if(pages.style.display == 'block'){
            pages.style.display = 'none'
        }else{
            pages.style.display = 'block'

           var allPages = document.getElementsByClassName('page')
           for(let i = 0; i < allPages.length; i++){
           allPages[i].style.display = 'none'

        }   
            currentPage = document.getElementById('i'+page)
            currentPage.style.display = 'block'
        
         
        }
        
    }
     
    function nextPage(){    //CONFIGURANDO A TROCA DE PÁGINA
        if(page >= 4){
            page = 4 
            document.getElementById('navigate2').style.color = 'gray' 
            document.getElementById('navigate1').style.color = 'black'
            //DEFININDO A COR
        }else if(page < 4){
        document.getElementById('navigate2').style.color = 'black'
        document.getElementById('navigate1').style.color = 'black'

        page++ 

        var allPages = document.getElementsByClassName('page')
           for(let i = 0; i < allPages.length; i++){
           allPages[i].style.display = 'none'
           }
                      
           

           currentPage = document.getElementById('i'+page)
        currentPage.style.display = 'block'
          
    }

    }   function previousPage(){
        if(page <= 0){
            page = 0 
            document.getElementById('navigate1').style.color = 'gray'
            document.getElementById('navigate2').style.color = 'black'
            //DEFININDO A COR
        }else if(page > 0){
        document.getElementById('navigate1').style.color = 'black'
        document.getElementById('navigate2').style.color = 'black'
        
        page--
        
        var allPages = document.getElementsByClassName('page')
           for(let i = 0; i < allPages.length; i++){
           allPages[i].style.display = 'none'
           }
           currentPage = document.getElementById('i'+page)
        currentPage.style.display = 'block'  
    }
                           
    }  