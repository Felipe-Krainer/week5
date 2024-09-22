const thanksgivingMeal = {
    starter: { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree: {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables: {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
        },
        sides: {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
        },
        calories: 450
    },
    dessert: {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost: 25.0,
    senior_discount: 0.10,

    //Returning a printed string of the menu
    prettyPrint: function() {
        let menuStr = `Starter: ${this.starter.fruit} and ${this.starter.wine}\n` +
                      `Entree: ${this.entree.meat} or ${this.entree.alt}, with ${this.entree.vegetables.potatoes}, ${this.entree.vegetables.greens}, and ${this.entree.sides.bread}\n` +
                      `Dessert: ${this.dessert.ice_cream} and ${this.dessert.cake}`;
        return menuStr;
    },

    //Calculating total price, considering senior discount
    totalPrice: function(isSenior) {
        let total = this.total_cost;
        if (isSenior) {
            total -= total * this.senior_discount; //Applying discount
        }
        return `$${total.toFixed(2)}`;
    },

    //Calculating total calories
    totalCalories: function() {
        return this.starter.calories + this.entree.calories + this.dessert.calories;
    },

    //Getting calories from a section (starter, entree, dessert)
    caloriesFrom: function(indicator) {
        switch(indicator) {
            case 'starter':
                return this.starter.calories;
            case 'entree':
                return this.entree.calories;
            case 'dessert':
                return this.dessert.calories;
            default:
                return 0;
        }
    }
};

//Displaying the output in the HTML document

//Adding menu information
let menu = document.querySelector(".fullMeal");
menu.innerHTML = thanksgivingMeal.prettyPrint();
 
//Adding price information
let price = document.querySelector(".priceInfo");
price.innerHTML = "Total Price with senior discount: " + thanksgivingMeal.totalPrice(true) + "<br>" + " Total Price without senior discount: " + thanksgivingMeal.totalPrice(false);

//Adding total calories information
let calories = document.querySelector(".calorieInfo");
calories.innerHTML = "Total Calories: " + thanksgivingMeal.totalCalories();

//Adding calories from a specific section
let dessertCalories = document.querySelector(".calorieFromDessert");
dessertCalories.innerHTML = "Calories from Dessert: " + thanksgivingMeal.caloriesFrom('dessert');

//Debugging
console.log(thanksgivingMeal.prettyPrint());
console.log("Total Price with Senior Discount: " + thanksgivingMeal.totalPrice(true));
console.log("Total Price without Senior Discount: " + thanksgivingMeal.totalPrice(false));
console.log("Total Calories: " + thanksgivingMeal.totalCalories());
console.log("Dessert Calories: " + thanksgivingMeal.caloriesFrom('dessert'));
