const searchButton = () => {
    const input = document.getElementById('search-field');
    const error = document.getElementById('error');
     const inputValue =parseInt(input.value);
    if(isNaN(inputValue) || inputValue == ''){
    //   alert('plase enter a number');
    // or 
    error.innerText='Please give a number';
    input.value = ''
    main.innerHTML='';
    }

    else if(inputValue<=0){
        // alert('Please give a positive number')
        // or 
        error.innerText="Please give a positive number";
        input.value = '';
        main.innerHTML='';
    }

    else{
        main.innerHTML='';
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
        .then(res => res.json())
        .then(data => cardDisplay(data.cards))
        input.value = '';
        error.innerHTML= '';
       
    }

}

const cardDisplay = cards => {
    // console.log(cards);
    // cards = cards.cards[0]; or data.cards[0] same kaj korbe
    // console.log(cards);
const main = document.getElementById('main');

    for(const card of cards){
        console.log(card);
        const div = document.createElement('div');

        div.classList.add('col-md-4') 
        // or html code a bootstrap class grid use korle hobe 
        div.classList.add("mb-5")
        div.innerHTML=`
        <div  class="card h-100">
        <img src="${card.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${card.suit}</h5>
          <button onclick = "cardDetails('${card.code}')" class="btn btn-primary">See Details</button> 
        </div>
      </div>
        `
        main.appendChild(div);

    }
}


const cardDetails = (code) => {
    console.log(code);

}

// onclick = "loadMealDetail(${meal.idMeal})"
{/* <p class="card-text">${meal.strInstructions.slice(0,200)}</p> */}