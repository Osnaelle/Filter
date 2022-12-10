const filterElement = document.querySelector('header input')
const cards = document.querySelectorAll('.cards li' )

filterElement.addEventListener('input', filterCards)


function filterCards(){
  if(filterElement.value != ''){
    for(let card of cards){
     let cardHeading = card.querySelector('h2')
     cardHeading = cardHeading.textContent.toLowerCase()
     console.log(cardHeading)
    let filterTitle = filterElement.value.toLowerCase()
      if(!cardHeading.includes(filterTitle)){
        card.style.display='none'
      }
      else{
          card.style.display='block'
      }
    }
  }
  else{
    for(let card of cards){
        card.style.display='block'

    }

  }
}