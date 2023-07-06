"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipe = void 0;
class recipe {
    constructor(name, carbs, protein, fat, cals, 
    //store the quantity of each ingredient in a dict with the name of the ingridient as the key
    ingridientsQuant, 
    //store the ingridients in an array
    ingridients) {
        this.name = name;
        this.carbs = carbs;
        this.protein = protein;
        this.fat = fat;
        this.cals = cals;
        this.ingridientsQuant = ingridientsQuant;
        this.ingridients = ingridients;
    }
    //potential other thing: can a recipe have a recipe as an ingridient? if so, how would that work?
    //this is a later problem, but it is something to think about
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getCarbs() {
        return this.carbs;
    }
    setCarbs(carbs) {
        this.carbs = carbs;
    }
    getProtein() {
        return this.protein;
    }
    setProtein(protein) {
        this.protein = protein;
    }
    getFat() {
        return this.fat;
    }
    setFat(fat) {
        this.fat = fat;
    }
    getCals() {
        return this.cals;
    }
    setCals(cals) {
        this.cals = cals;
    }
    getIngridientsQuant() {
        return this.ingridientsQuant;
    }
    setIngridientsQuant(ingridientsQuant) {
        this.ingridientsQuant = ingridientsQuant;
    }
    getIngridients() {
        return this.ingridients;
    }
    setIngridients(ingridients) {
        this.ingridients = ingridients;
    }
}
exports.recipe = recipe;
