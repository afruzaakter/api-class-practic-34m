
  // ----------keyboard enter press process ------------

  const searchBtn = document.getElementById("button-search");
  const searchInput = document.getElementById("search-field");

  searchInput.addEventListener("keypress", function(event) {
    // event.preventDefault(); deya jabe na
    if (event.key == 'Enter'){
      searchBtn.click();
    }
    
});
  
/////////////////////////////

// -----spinner add start----------
const toggleSpinner = displayStyle => {
  document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
  document.getElementById('meal-details').style.display = displayStyle;
}
// -----spinner add end----------
const searchFood = () => {



    const searchField = document.getElementById('search-field');
    const error = document.getElementById('error');
//  display spinner 
    toggleSpinner('block');
    toggleSearchResult('none');
    // console.log(searchField);
    let searchText = searchField.value;
    // console.log(searchText);
    //clear data
    searchField.value = '';
// error message handle 
if(searchText == ""){
  //  alert("Please search food name"); 
  error.innerText = "Please search food name, try again"
   searchResult.innerHTML= "";
   mealDetails.innerHTML= "";
  //  error.innerText= "";
}
 else if(searchText<= 0){
alert("Show no result found, Please search food name , try again")
searchResult.innerHTML= "";
   mealDetails.innerHTML= "";
}

else {
       //load data
        error.innerText= "";
       const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
          console.log(url);
       fetch(url)
       .then(res => res.json())
       .then(data => displaySearchResult(data.meals));

        searchResult.innerHTML= "";
        mealDetails.innerHTML= "";
        
//    .catch(error => console.log(error));
}

}

const displaySearchResult = meals => {
    console.log(meals);
    const searchResult = document.getElementById('search-result');
    // way number-1 use na kora balo 
    // searchResult.innerHTML='';
    // way number-2 use kora jai 
    searchResult.textContent='';
    if(!meals){
        alert('Show no result found, Please search food name , try again')
      //  or 
        // error.innerText="show no result found, Please try again"
        // toggleSpinner('block')
    }
    meals?.forEach(meal => {
        console.log(meal);
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML=`
      <div onclick = "loadMealDetail(${meal.idMeal})" class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
      </div>
    </div>
      ` ; 
      searchResult.appendChild(div);   
    });
    toggleSpinner('none');
    toggleSearchResult('block');
}

const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    console.log(meal);
 const mealDetails = document.getElementById('meal-details');
//  clear data 
mealDetails.textContent= '';

 const div = document.createElement('div')
div.classList.add('card');
div.innerHTML = `
<img  src="${meal.strMealThumb}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${meal.strMeal}</h5> 
  <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
  <a href="${meal.strYoutube}" class="btn btn-primary">Play Video</a>
</div>
`
mealDetails.appendChild(div);

}