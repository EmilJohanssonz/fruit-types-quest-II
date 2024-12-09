
import { fruits } from "./fruits";

// använd fruits-arrayen och returnera det fruit-objekt som matchar name
// finns det ingen sådan fruit så returnera undefined
export const getFruit = (name: string) => {
    return fruits.find(fruit => fruit.name === name);
};

// använd fruits-arrayen och returnera ikonen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getIcon = (name: string) => {
    const fruit = getFruit(name);
    return fruit ? fruit.icon : undefined;
};


// använd fruits-arrayen och returnera färgen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getColor = (name: string) => {
	const fruit = getFruit(name);
	return fruit ? fruit.color : undefined;
};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori
export const getCategories = (name: string) => {
	const fruit = getFruit(name);
	return fruit ? fruit.category : undefined;
};

// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
// finns det inga frukter av den färgen så svara 0
export const numberOfColoredFruits = (color: string) => {
	return fruits.filter(fruit => fruit.color === color).length;
};

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori
export const numberOfCategoryFruits =(category: string) => {
	return fruits.filter(fruit => fruit.category === category).length;
};

// använd fruits-arrayen
// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
export const getFruitsByCategory = (category: string) => {
	return fruits.filter(fruit => fruit.category === category);
};

// gör en getFruitsByColor också
export const getFruitsByColor = (color:string) => {
	return fruits.filter(fruit => fruit.color === color);
};

// använd fruits-arrayen
// ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
export const getIconsByCategory = (category:string) => {
	return fruits.filter(fruit => fruit.category === category).map(fruit => fruit.icon);
};

// gör en getIconsByColor också
export const getIconsByColor = (color: string) => {
    return fruits
        .filter(fruit => fruit.color === color)
        .map(fruit => fruit.icon);
};
// gör en getCategories som returnerar en array av alla kategorier
export const getCategorie = () => {
    return Array.from(new Set(fruits.map(fruit => fruit.category)));
};
// gör en getColors som returnerar en array av alla färger
export const getColors = () => {
    return Array.from(new Set(fruits.map(fruit => fruit.color)));
};