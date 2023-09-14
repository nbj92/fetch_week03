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
                console.log(t);
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

const pizzaer =
[
  {
    name: "Hawaii",
    toppings: ["ananans", "skinke"]
  },
  {
    name: "Genova",
    toppings: ["ananans", "kylling", "karry"]
  },
  {
    name: "Tango",
    toppings: ["oksekød", "skinke", "bacon"]
  },
  {
    name: "Grækeren",
    toppings: ["oksekød", "spinat", "champignon", "rødløg"]
  }
];

// JEG SKRIVER HEROVRE IGEN.


// HER ER OPRETTET ET ARRAY MED PIZZA OBJEKTER. DU KAN TJEKKE HVAD VI HAR LAGT IND I FIREBASE PÅ DETTE LINK.
// https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json

// DET GENNEMGÅR JEG NU :)

// VI OPRETTER ET ARRAY MED VORES DATA, HVERT ELEMENT ER ET OBJEKT.

const arr = [
    {
        name: "Michelle",
        age: 30,
    },
    {
        name: "Nicolai",
        age: 31
    },
    {
        name: "Kasper",
        age: 25
    }
];

// Arrayet ovenfor har vi lige lavet


// DISSE DATA SENDER VI MED I FUNKTIONEN, postData, NEDENFOR.

// VI ANGIVER LINKET TIL VORES FIREBASE DATABASE SOM FØRSTE ARGUMENT OG DATA SOM ANDET ARGUMENT.
// postData("https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json",
// arr);

// Når vi kører vores index.php så køres linje 49+50 her i scriptet og så bliver dataene oprettet jeg prøver lige.


async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

//   postData("https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json", pizzaer);


// KODEN DU SER HEROVER ER DEN JEG HAR HENTET FRA DET LINK JEG LAGDE IND I VORES STUDIEGRUPPE CHAT I DISCORD I MANDAGS
// DER KOPIEREDE JEG DEN DEL HVOR MAN SENDER ET POST REQ.
// AT SENDE ET GET REQ. FOREGÅR PÅ SAMME MÅDE MEN DA DET ER DEFAULT BEHØVER DU IKKE ANDET ARGUMENT.ANDETDVS. DET JEG MARKERER
// NU.

// JEG PRØVER NU AT GENNEMGÅ HVORDAN DU SENDER DATA IND I FIREBASE VIA POST REQ.

// SOM SAGT ER FUNKTIONEN OVENFOR TAGET FRA DET SENDTE LINK. OVENOVER LINKET HAR JEG OPRETTET DE DATA VI VIL INDSÆTTE I
// FIREBASE













// function udenTopping(pizzaer, tp) {
//     console.log("kører");
//     console.log(pizzaer);
//     const result = pizzaer.filter(p => {
//         p.topping["toppings"].forEach(t => {
//             if(t==tp) {
//                 console.log(t);
//                 return true;
//             }     
//         });
//         return false;
//       });
//       console.log("kører endnu");

//       return result;
// } 

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


  // vi skal nu lave en funktion svarende til getData() som du ser ovenfor

  async function hent() {
    try {

        const response = await fetch("https://wu-e23a-fetch-arrays-default-rtdb.europe-west1.firebasedatabase.app/pua-pizzaer.json")
        // vi fetcher data fra vores database og læg mærke til at her giver vi kun 1 argument med, linket til vores
        // database. Det er fordi method er GET som default og det er et get request vi lavet.
        const data = await response.json();

        // LINJERNE OVENFOR HENTER/FETCHER DATA FRA FIREBASE OG KONVERTERER VORES JSON RESPONSE TIL JS OBJEKTER

        // indtil videre har vi gjort det samme som før. Sendt et request (før post, nu get) og så får vi et promise
        // tilbage i vores response variable og når den er leveret konverterer vi indholdet fra JSON til JS Objekter.


        // HER PRINTER VI VORES DATA UD SOM VI HAR FÅET TILBAGE
        const keys = Object.keys((data));
        console.log(keys); // key-værdierne printes ud i console. vi prøver lige at tjekke
        console.log(keys[0]); // object 1 / element 0
        console.log(data[keys[0]]); // Vi henter det første objekt i vores response

        console.log(keys[1]);
        console.log(data[keys[1]]);

    } catch(err) {
        console.error(err);
    }
  }

  hent();