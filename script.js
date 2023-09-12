// POST DATA TIL FIREBASE

// const pizzaer =
// [
//   {
//     name: "Hawaii",
//     toppings: ["ananas", "skinke"]
//   },
//   {
//     name: "Genova",
//     toppings: ["ananas", "kylling", "karry"]
//   },
//   {
//     name: "Tango",
//     toppings: ["oksekød", "skinke", "bacon"]
//   },
//   {
//     name: "Grækeren",
//     toppings: ["oksekød", "spinat", "champignon", "rødløg"]
//   }
// ];


// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST", // *GET, POST, PUT, DELETE, etc.
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
      
//       body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });
//     // return response.json(); // parses JSON response into native JavaScript objects
//   }

//   postData("https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json", pizzaer);


// GET DATA; MANIPULER OG INDSÆT I index.php

const list = document.querySelector(".menu_indhold div");
// console.log(list);

// Kalder udenTopping og mapper array'et således at et nyt array indeholder list items <li>
// ad hvert element i array'et. Disse list items tilføjes til div elementet der indholder listen
// i html dokumentet.
const menukort = async (topping) => {
    try {
        list.innerHTML ="<ul>";
    const menukortet = await udenTopping(topping);
    
    let piz = menukortet.map(e => { 
        return "<li>"+e.name+"</li>";
    }).forEach(e => list.innerHTML += e);

        list.innerHTML += "</ul>";
    } catch (err) {
        console.error(err);
    }
};

// kalder getData() for at hente data, hvorefter der filtreres så der returneres et array
// der IKKE indeholder den "topping" der er angivet i parameteren
async function udenTopping(topping) {
    try {
        let pizzaer = await getData();
        // console.log(pizzaer);
        // console.log(pizzaer[0]["toppings"]);
        const result = pizzaer.filter(p => {
            p["toppings"].forEach(t => {
                if(t===topping) {
                // console.log(p["name"]);
                // console.log(t);
                return false;
                }     
            });
            return true;
        });
        return result;

    } catch (err) {
        console.error(err);
    }

    
} 


// Henter data fra vores kilde: her er det pizza.json. Der er udkommenteret firebase source
// Data returneres som et array
async function getData() {
    try {
        // const response = await fetch("https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json");
        const response = await fetch("pizza.json");
        const pizza = await response.json();
        return pizza;
    } catch(err) {
        console.error(err);
    }    
}
  
async function getpi() {
    try {
        await getData();
        console.log(pizzaer);
    } catch (err) {
        console.error(err);
    }

}
// getData();
// getpi();

// udenTopping("ananas");
menukort("ananas");

