export interface Ingredient {
    name: string,
    price: number,
    selected: boolean
}

export const Ingredients:Ingredient[] = [
    {
        name: "Onions",
        price: 10,
        selected: false
    },
    {
        name: "Tomatoes",
        price: 15,
        selected: false
    },
    {
        name: "Lettuce",
        price: 15,
        selected: false
    },
    {
        name: "Cheese slice",
        price: 10,
        selected: false
    },
    {
        name: "Patty",
        price: 80,
        selected: false
    },
    {
        name: "Whole wheat bun",
        price: 20,
        selected: false
    }

]