/* DONT CHANGE THIS CODE - START */
function wait(ms = 1000) { return new Promise(resolve => setTimeout(resolve, ms)) }

class Dish {
    constructor(cookingTime) {
        this.cookingTime = cookingTime;
    }

    async cook() {
        const actualCookingTime = this.cookingTime * (1 + Math.random()) * 100;
        await wait(actualCookingTime);
        return this;
    }
}
/* DONT CHANGE THIS CODE - END */

/*
    YOUR CODE HERE
*/

class Kitchen {
    constructor() {
        this.fridge = [];
        this.orders = [];
    }
    addToFridge(ingridients) {
        this.fridge = this.fridge.concat(ingridients);
    }
    
    async order(Dish) {
        if (this.fridge.length === 0) {
            throw new Error("Not enough ingridients in fridge");
        }

        // let contains = this.fridge.every(element => {
            // return Dish.needs.includes(element);});  

        let enough = true;
        let such = 0;
        for (let i = 0; i < Dish.needs.length; i++) {
            for (let j = 0; j < this.fridge.length; j++) {
                if (Dish.needs[i].name === this.fridge[j].name) {
                    such += 1;
                    if (Dish.needs[i].amount > this.fridge[j].amount) {
                        enough = false;
                    }
                }
            }
        }

        if (enough && (such === Dish.needs.length)) {
            this.orders.push(Dish);
            
            // this.fridge = this.fridge.filter(element => { Dish.needs.includes(element) });

            for (let i = 0; i < Dish.needs.length; i++) {
                for (let j = 0; j < this.fridge.length; j++) {
                    if (Dish.needs[i].name === this.fridge[j].name) {
                        this.fridge[j].amount -= Dish.needs[i].amount;
                    }
                }
            }

        } else {
            throw new Error("Not enough ingridients in fridge");
        }
    }

    async cookFastestOrder() {
        let fastest = this.orders[0];
        for (let i = 0; i < this.order; i++) {
            let dish = new Dish(this.order[i]);
            if (dish.cookingTime < fastest.cookingTime) {
                fastest = dish;
            }
        }
        return fastest.cook();
    }

    async cookAllOrders() {
        for (let i = 0; i < this.orders.length; i++) {
            let dish = new Dish(this.orders[i]);
            await dish.cook();
        }
    }
}

class Ingridient {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

class Bolognese extends Dish {
    constructor() {
        super(10);
    this.needs = [new Ingridient('spaghetti', 1), new Ingridient('tomato', 1)];
    }
}

class MashedPotatoes extends Dish {
    constructor() {
        super(8);
        this.needs = [new Ingridient('potato', 1)];
    }
}

class Steak extends Dish {
    constructor() {
        super(7);
        this.needs = [new Ingridient('meat', 1)];
    }

}

class SteakAndFries extends Dish {
    constructor() {
        super(15);
        this.needs = [new Ingridient('meat', 1), new Ingridient('fries', 1)];
    }
}

async function test() {
    const kitchen = new Kitchen();
    kitchen.addToFridge([
        new Ingridient('potato', 1),
        new Ingridient('spaghetti', 1),
        new Ingridient('meat', 3),
        new Ingridient('tomato', 2)
    ])

    kitchen.order(new Bolognese()); // Bolognese extends Dish (cookingTime = 10)
    kitchen.order(new MashedPotatoes()); // MashedPotatoes extends Dish (cookingTime = 8)
    kitchen.order(new Steak()); // Steak extends Dish (cookingTime = 7)

    // Feel free to experiment with various dishes and ingridients

    await kitchen.cookFastestOrder(); // Returns fastest dish to make
    await kitchen.cookAllOrders(); // Returns two dishes in array

    kitchen.order(new SteakAndFries()); // Throws Error: Not enough ingridients in fridge
}

test();