// const pizzaer =
// [
//   {
//     name: "Hawaii",
//     toppings: ["ananans", "skinke"]
//   },
//   {
//     name: "Genova",
//     toppings: ["ananans", "kylling", "karry"]
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
//     return response.json(); // parses JSON response into native JavaScript objects
//   }

//   postData("https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json", pizzaer);

function udenTopping(pizzaer, tp) {
    console.log("kører");
    console.log(pizzaer);
    const result = pizzaer.filter(p => {
        p.topping["toppings"].forEach(t => {
            if(t==tp) {
                return true;
            }     
        });
        return false;
      });
      console.log("kører endnu");

      return result;
} 

async function getData() {
    try {
    // const response = await fetch("https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json");
        const response = await fetch("pizza.json");
        const pizza = await response.json();
    // console.log(pizza);
    // console.log(Object.keys(pizza));
    // console.log(pizza[Object.keys(pizza)]);
    // const data = pizza[Object.keys(pizza)];
    // console.log(data[0]);
        console.log(pizza);
        



    } catch(err) {
        console.error(err);
    }
    // const data = pizza[Object.keys(pizza)];
    // for(let pizza of data) {
    //     console.log(pizza["name"]);
    // }
  }

  const pizzaer = getData();

  

//   udenTopping(pizzaer, "ananas");

//   console.log(udenTopping(pizzaer, "ananas"));

//   const result = pizzaer.filter(p, t => {
//     p.topping["toppings"].forEach(topping => {
//         if(topping==t) {
//             return true;
//         }     
//     });
//     return false;
//   });

