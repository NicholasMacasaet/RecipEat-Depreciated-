"use strict";
class ingridient {
    constructor(carbs, protein, fat, name) {
        this.carbs = carbs;
        this.protein = protein;
        this.fat = fat;
        this.name = name;
    }
    setCarbs(carbs) {
        this.carbs = carbs;
    }
    getCarbs() {
        return this.carbs;
    }
    setProtein(protein) {
        this.protein = protein;
    }
    getProtein() {
        return this.protein;
    }
    setFat(fat) {
        this.fat = fat;
    }
    getFat() {
        return this.fat;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
