"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recipe = void 0;
class recipe {
    constructor(name, carbs, protein, fat, cals, 
    //store the quantity of each ingredient in a dict with the name of the ingridient as the key
    ingridientsRecord, 
    //store the ingridients in an array
    ingridients) {
        this.name = name;
        this.carbs = carbs;
        this.protein = protein;
        this.fat = fat;
        this.cals = cals;
        this.ingridientsRecord = ingridientsRecord;
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
    getIngridientsRecord() {
        return this.ingridientsRecord;
    }
    setIngridientsRecord(ingridientsRecord) {
        this.ingridientsRecord = ingridientsRecord;
    }
    getIngridients() {
        return this.ingridients;
    }
    setIngridients(ingridients) {
        this.ingridients = ingridients;
    }
}
exports.recipe = recipe;
//keeping this code for reference
// calculateMacros(): void{
//     for(let i = 0; i < this.ingridients.length; i++){
//         //retrieve the quantity of the ingridient and multiply it by the macros of the ingridient
//         let quantity = this.ingridientsRecord[this.ingridients[i].getName()];
//         this.carbs += this.ingridients[i].getCarbs() *quantity;
//         this.protein += this.ingridients[i].getProtein() * quantity;
//         this.fat += this.ingridients[i].getFat() * quantity;
//         this.cals += this.ingridients[i].getCals() * quantity;
//     }
// }
// addIngridient(ingridient: ingridient): void{
//     for(let i = 0; i < this.ingridients.length; i++){
//         if(this.ingridients[i].getName() == ingridient.getName()){
//             //if the ingridient is already in the recipe, just increment the quantity and recalculate the macros
//             this.ingridientsRecord[ingridient.getName()]++;
//             this.calculateMacros();
//             return;
//         }
//     }
//     //if the ingridient is not in the recipe, add it to the ingridients array and set the quantity to 1
//     this.ingridients.push(ingridient);
//     this.ingridientsRecord[ingridient.getName()] = 1;
//     //then recalculate the macros
//     this.calculateMacros();
// }
// deleteIngridient(ingridient: ingridient): void{
//     //if the ingridient is not in the recipe, return
//     if(!this.ingridients.includes(ingridient)){
//         return;
//     }
//     else{//if the ingridient is in the recipe, decrement the quantity and recalculate the macros
//         for(let i = 0; i < this.ingridients.length; i++){
//             if(this.ingridients[i].getName() == ingridient.getName()){//if the ingrident's quantity is 1, delete it from the recipe
//                 if(this.ingridientsRecord[ingridient.getName()] == 1){
//                     //delete the ingridient from the ingridientsRecord dict, we dont need to deincrement it since its going to be deleted
//                     delete this.ingridientsRecord[ingridient.getName()]
//                     //delete the ingridient from the ingridients array
//                     this.ingridients.splice(this.ingridients.indexOf(ingridient), 1);
//                 }
//                 else{//else there is more than one ingridient, so just decrement the quantity
//                     this.ingridientsRecord[ingridient.getName()]--;
//                 }
//                 //finally,recalculate the macros
//                 this.calculateMacros();
//                 break;
//             }
//             return; 
//         }
//     }
// }
