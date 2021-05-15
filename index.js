import {getRandomInt} from './random.js'

let n = 0;    

const createCardNode = ()=>{
    const imagen = document.createElement("img")
    // debugger
    imagen.src=`https://source.unsplash.com/random/${getRandomInt()}` 
    const imageContainer = document.createElement("div")
    imageContainer.className = "image-container"
    const parrafo = document.createElement("p")
    parrafo.className = "description"
    const text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias perferendis ex, repudiandae dolorum illo illum itaque autem eveniet corporis et obcaecati est provident assumenda fuga aut debitis ab vel voluptas.')
    parrafo.appendChild(text)
    const card = document.createElement("div")
    card.className="card"

    imageContainer.appendChild(imagen)
    card.appendChild(imageContainer)
    card.appendChild(parrafo)

    return card
}

const delateCardNode = ()=>{
    
    const delateCard=document.querySelector(".card")
    return delateCard
}

const mountNode = document.querySelector(".contenedor")
const addCardButton = document.querySelector('.agregar')
/*document.querySelector('button')*/ 

const eliminarCardButton = document.querySelector('.eliminar')

const addCard=()=>{
    mountNode.appendChild(createCardNode())
    n++;
}

const eliminarCard=()=>{
    if(n > 0){
        n--;
        const ultimo_hijo = mountNode.childNodes[n];
        ultimo_hijo.parentNode.removeChild(ultimo_hijo);
    }else{
        console.log("n = 0")
    }
}

addCardButton.addEventListener('click', addCard)
eliminarCardButton.addEventListener('click', eliminarCard)


