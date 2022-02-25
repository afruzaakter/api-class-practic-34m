const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const error = document.getElementById('error');
    // console.log(searchField);
    let searchText = searchField.value;
    // console.log(searchText);
    //clear data
    searchField.value = '';
// error message handle 
if(searchText == ""){
  //  alert("Please search food name"); 
  error.innerText = "Please search food name"
   searchResult.innerHTML= "";
   mealDetails.innerHTML= "";
  //  error.innerText= "";
}
// else if(isNaN(searchText) == 'number'){
//   alert("Please type  food name ")
//    searchResult.innerHTML= "";
//    mealDetails.innerHTML= "";
// }
 else if(searchText<= 0){
alert("Please type  positive number")
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
    // if(meals.length==0){
    //     alert('show no result found')
    // }
    meals.forEach(meal => {
        // console.log(meal);
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
    })
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