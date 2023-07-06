"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ingridient = void 0;
class ingridient {
    constructor(carbs, protein, fat, cals, name, conversionFactor
    //conversion factor is the amount of the ingridient that is 1 serving
    //multiply this by 100mg servings 
    ) {
        this.carbs = carbs;
        this.protein = protein;
        this.fat = fat;
        this.cals = cals;
        this.name = name;
        this.conversionFactor = conversionFactor;
    }
    //some basic getters and setters
    setCals(cals) {
        this.cals = cals;
    }
    getCals() {
        return this.cals;
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
    getConversionFactor() {
        return this.conversionFactor;
    }
    setConversionFactor(conversionFactor) {
        this.conversionFactor = conversionFactor;
    }
}
exports.ingridient = ingridient;
