const search = document.querySelector('#search-model');

search.addEventListener('keyup', filterModels);

function filterModels(){
    //  get input value

    const searchValue = document.querySelector('#search-model').value.toLowerCase();

    //  ====== get names ul 

    const models = document.querySelectorAll('.model');

    //  ====== loop through collection items 

    models.forEach(e =>{
        
        if(e.innerHTML.toLowerCase().indexOf(searchValue) > -1){
            e.style.display = ''
        }else{
            e.style.display = 'none'
        }
    });

}