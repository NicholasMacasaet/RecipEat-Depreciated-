"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//delegate the macro calculations to a separate class 
class MacroCalc {
    calculateMacros(recipe) {
        //calculate the macros of the recipe by summing the macros of the ingridients and multiplying by the conversion factor
        let ingredients_list = recipe.getIngridients();
        let ingredients_record = recipe.getIngridientsQuant();
        for (let i = 0; i < ingredients_list.length; i++) {
            //retrieve the quantity of the ingridient and multiply it by the macros of the ingridient
            let quantity = ingredients_record[ingredients_list[i].getName()];
            //set the carbs, protein, fat, and cals of the recipe to the sum of the macros of the ingridients
            //use the conversion factor to convert from 100mg to the average serving size of the ingridient
            recipe.setCarbs(recipe.getCarbs() + ingredients_list[i].getCarbs() * quantity * ingredients_list[i].getConversionFactor());
            recipe.setProtein(recipe.getProtein() + ingredients_list[i].getProtein() * quantity * ingredients_list[i].getConversionFactor());
            recipe.setFat(recipe.getFat() + ingredients_list[i].getFat() * quantity * ingredients_list[i].getConversionFactor());
            recipe.setCals(recipe.getCals() + ingredients_list[i].getCals() * quantity * ingredients_list[i].getConversionFactor());
            //keeping the old code for reference
            // recipe.carbs += recipe.ingridients[i].getCarbs() *quantity;
            // recipe.protein += recipe.ingridients[i].getProtein() * quantity;
            // recipe.fat += recipe.ingridients[i].getFat() * quantity;
            // recipe.cals += recipe.ingridients[i].getCals() * quantity;
        }
    }
    addIngridient(recipe, ingridient) {
        let ingredients_list = recipe.getIngridients();
        let ingredientsRecord = recipe.getIngridientsQuant();
        //do a check to see if the ingridient is already in the recipe
        for (let i = 0; i < ingredients_list.length; i++) {
            if (ingredients_list[i].getName() == ingridient.getName()) {
                //if the ingridient is already in the recipe, just increment the quantity and recalculate the macros
                ingredientsRecord[ingridient.getName()]++;
                //remember to set the new quantity for that ingridient
                recipe.setIngridientsQuant(ingredientsRecord);
                //this.calculateMacros();
                //now that the quantity has been incremented in the record and the record has been set, recalculate the macros
                this.calculateMacros(recipe);
                return;
            }
        }
        //if the ingridient is not in the recipe, add it to the ingridients array
        ingredients_list.push(ingridient);
        //remember to set the new ingridients list
        recipe.setIngridients(ingredients_list);
        //next, set the quantity to 1
        ingredientsRecord[ingridient.getName()] = 1;
        //remember to set the new quantity for that ingridient in the record
        recipe.setIngridientsQuant(ingredientsRecord);
        //finally recalculate the macros
        this.calculateMacros(recipe);
    }
    deleteIngridient(recipe, ingridient) {
        //if the ingridient is not in the recipe, return
        let ingredients_list = recipe.getIngridients();
        let ingredientsRecord = recipe.getIngridientsQuant();
        //we need to check if the ingridient is in the recipe
        if (!ingredients_list.includes(ingridient)) {
            return;
        }
        else { //if the ingridient is in the recipe, decrement the quantity and recalculate the macros
            for (let i = 0; i < ingredients_list.length; i++) {
                if (ingredients_list[i].getName() == ingridient.getName()) { //if the ingrident's quantity is 1, delete it from the recipe
                    if (ingredientsRecord[ingridient.getName()] == 1) {
                        //delete the ingridient from the ingridientsQuant dict, we dont need to deincrement it since its going to be deleted
                        delete ingredientsRecord[ingridient.getName()];
                        //delete the ingridient from the ingridients array
                        ingredients_list.splice(ingredients_list.indexOf(ingridient), 1);
                        //remember to set the new ingridients list since we deleted an ingridient
                        recipe.setIngridients(ingredients_list);
                    }
                    else { //else there is more than one ingridient, so just decrement the quantity
                        ingredientsRecord[ingridient.getName()]--;
                    }
                    //since we changed the quantity in both cases, remember to set the new quantity for that ingridient
                    recipe.setIngridientsQuant(ingredientsRecord);
                    //finally,recalculate the macros
                    this.calculateMacros(recipe);
                    break;
                }
                return;
            }
        }
    }
}
