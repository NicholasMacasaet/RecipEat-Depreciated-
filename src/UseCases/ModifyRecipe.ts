import { ingridient } from '../Objects/ingridient';
import { recipe } from '../Objects/recipe';
import { User } from '../Objects/User';
import { MacroCalc } from './MacroCalc';

class ModifyRecipe {
    //recipe that is being modified is passed in and is from the user's recipe list
    //ingridient that is being modified is passed in and is from the recipe's ingridient list

    increaseORDecreaseQuantity(recipe: recipe, ingridient: ingridient, user: User, quant: number, macroCalc:MacroCalc, indicator: number): void{
        //if indicator is 1, increase quantity, if indicator is 0, decrease quantity
        if(indicator == 0){
            const totalNumIng= recipe.getIngridientsRecord()[ingridient.getName()];
            if(quant > totalNumIng){
                console.log("Error: cannot decrease quantity by more than the total number of ingridients")
                return; 
            }
        }
        const list_cpy = user.getrecipe_list()
        for(let i = 0; i < list_cpy.length; i++){
            const name = list_cpy[i].getName();
            if(name == recipe.getName()){
                    //switch between increase and decrease based on indicator
                    let ingredientsRecord = recipe.getIngridientsRecord();
                    if(indicator == 1){
                        ingredientsRecord[ingridient.getName()] += quant;
                    }
                    else{
                        ingredientsRecord[ingridient.getName()] -= quant;
                    }
                    //TODO: potentially name to setIngredientsRecord
                    recipe.setIngridientsRecord(ingredientsRecord);
    
                    if(indicator == 1){
                        macroCalc.addIngridient(recipe,ingridient,user, quant)
                    }
                    else{
                        macroCalc.deleteIngridient(recipe,ingridient,user, quant)
                    }
                    //todo, make sure macros are calculated only within the user's recipe list
                    macroCalc.calculateMacros(recipe,user);
                    return;


            }
        }

    }
}
    //keeping for reference just in case 
    // increaseQuantity(recipe: recipe, ingridient: ingridient, user: User, quant: number, macroCalc:MacroCalc): void{
    //     const list_cpy = user.getrecipe_list()
    //     for(let i = 0; i < list_cpy.length; i++){
    //         const name = list_cpy[i].getName();
    //         if(name == recipe.getName()){
            
    //             let ingredientsRecord = recipe.getIngridientsQuant();
    //             ingredientsRecord[ingridient.getName()] += quant;
    //             recipe.setIngridientsRecord(ingredientsRecord);

    //             macroCalc.addIngridient(recipe,ingridient,user, quant)
    //             //todo, make sure macros are calculated only within the user's recipe list
    //             macroCalc.calculateMacros(recipe,user);
    //             return;
    //         }
    //     }
    // }

    // decreaseQuantity(recipe: recipe, ingridient: ingridient, user:User, quant:number, macroCalc: MacroCalc): void{
    //     const totalNumIng= recipe.getIngridientsQuant()[ingridient.getName()];
    //     if(quant > totalNumIng){
    //         console.log("Error: cannot decrease quantity by more than the total number of ingridients")
    //     }
    //     else{
    //         const list_cpy = user.getrecipe_list()
    //         for(let i = 0; i < list_cpy.length; i++){
    //             const name = list_cpy[i].getName();
    //             if(name == recipe.getName()){
                
    //                 let ingredientsRecord = recipe.getIngridientsQuant();
    //                 ingredientsRecord[ingridient.getName()] -= quant;
    //                 recipe.setIngridientsRecord(ingredientsRecord);

    //                 macroCalc.deleteIngridient(recipe,ingridient,user, quant)
    //                 //todo, make sure macros are calculated only within the user's recipe list
    //                 macroCalc.calculateMacros(recipe,user);
    //                 return;
    //             }
    //         }
    //     }

    // }

    //since there is duplicate logic, we can make a helper function to switch between the two