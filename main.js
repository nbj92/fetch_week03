const response = await fetch(`https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json`)
.then(function (response) {
    return response.json();
})

.then(function (pizza) {
    pizza.forEach(function (pizza) {
        console.log(pizza); 
    });
})
.catch(function (error) {
    console.log.error(error);
}); 

const fetchPizza = async () => {
    try {
        const response = await fetch("https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json")
        const pizza = await response.json();
        pizza.forEach((song) => console.log(pizza)); 
    } catch (error) {
        console.log.error(error);
    }
};

fetchPizza(); 