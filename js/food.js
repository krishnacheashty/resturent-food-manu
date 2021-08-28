const searchFood=()=>{
    const searchField=document.getElementById('search-field');
    const fieldText=searchField.value;
    // console.log(fieldText)

    searchField.value='';/* search e click korar por input field clear korar jonno */

    const url=`https://www.themealdb.com/api/json/v1/1/search.php?f=${fieldText}`
            // console.log(url)
            fetch(url)
            .then(res=>res.json())
            .then(data=> meals(data.meals))
    
}
const meals=items=>{
    // console.log(items);
    const mealDiv=document.getElementById('search-result');
    const div=document.createElement('div');
    div.classList.add('col')
    

    items.forEach(item => {
        // console.log(item);
        const div=document.createElement('div');
        div.classList.add('col')
        // div.classList.add('col-md-3')
        div.innerHTML=`
   
        <div class="card">
            <img onclick="detailMeal('${item.idMeal}')" src="${item.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.strMeal}</h5>
                <p class="card-text"> Instructions:${item.strInstructions.slice(0,200)} </p>
            </div>
        </div>
    
        `
        mealDiv.appendChild(div);
        
    });

}

const detailMeal=(meal)=>{
    // console.log(meal);
    
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`
   /*  const mealContainer=async fetch=>url
    .then =await res.json()
    .then =await data=>console.log(data) */
    fetch(url)
    .then(res=>res.json())
    .then(data=>mealDescribe(data))
 
}

const mealDescribe=mealItem=>{
    // console.log(mealItem.meals[0]);
    const foodItems=mealItem.meals[0];
    console.log(foodItems);
    const detailFoodInformation=document.getElementById('meal-detail');
    const div=document.createElement('div')
    div.classList.add('col')
   
    div.innerHTML=`
    <div class="card">
        <img  src="${foodItems.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${foodItems.strMeal}</h5>
            <p class="card-text"> strTags:${foodItems.strTags} </p>
        </div>
    </div>
    
    `

    detailFoodInformation.appendChild(div);
}