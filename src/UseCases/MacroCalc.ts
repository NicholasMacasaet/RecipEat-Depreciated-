
import { ingridient } from '../Objects/ingridient';
import { recipe } from '../Objects/recipe';
import { User } from '../Objects/User';

//delegate the macro calculations to a separate class 
//class to calculate the macros of a recipe as  well as add ingridients to a recipe


//methods are written under the assumption that the recipe being passed in is from the user's recipe list
export class MacroCalc {
    calculateMacros(recipe: recipe, user: User): void{
        //calculate the macros of the recipe by summing the macros of the ingridients and multiplying by the conversion factor

        let ingredients_list = recipe.getIngridients();
        let ingredients_record = recipe.getIngridientsQuant();

        for(let i = 0; i < ingredients_list.length; i++){
            //retrieve the quantity of the ingridient and multiply it by the macros of the ingridient
            let quantity = ingredients_record[ingredients_list[i].getName()];

            //set the carbs, protein, fat, and cals of the recipe to the sum of the macros of the ingridients
            //use the conversion factor to convert from 100mg to the average serving size of the ingridient
            recipe.setCarbs(recipe.getCarbs() + ingredients_list[i].getCarbs() *quantity * ingredients_list[i].getConversionFactor());
            recipe.setProtein(recipe.getProtein() + ingredients_list[i].getProtein() * quantity * ingredients_list[i].getConversionFactor());
            recipe.setFat(recipe.getFat() + ingredients_list[i].getFat() * quantity * ingredients_list[i].getConversionFactor());
            recipe.setCals(recipe.getCals() + ingredients_list[i].getCals() * quantity  * ingredients_list[i].getConversionFactor());

            //keeping the old code for reference
            // recipe.carbs += recipe.ingridients[i].getCarbs() *quantity;
            // recipe.protein += recipe.ingridients[i].getProtein() * quantity;
            // recipe.fat += recipe.ingridients[i].getFat() * quantity;
            // recipe.cals += recipe.ingridients[i].getCals() * quantity;
        }

        let user_recip_list = user.getrecipe_list();
        for(let i = 0; i < user_recip_list.length; i++){
            if(user_recip_list[i].getName() == recipe.getName()){
                user_recip_list[i] = recipe;
                user.setrecipe_list(user_recip_list);
                return;
            }
        }

        //we should never get here
        this.flagToConsole();
        return;
    }

    //todo: potentially consider consolidating the two methods below into one method, but for now, keep them separate
    addIngridient(recipe: recipe, ingridient: ingridient, user:User, quantity: number): void{

        //do a check to see if the recipe is in the user's recipe list
        //if the recipe is not in the user's recipe list, return and flag to console
        if(this.isInRecipeList(recipe,user) == false){
            this.flagToConsole();
            return;
        }
        else{
            //if the recipe is in the user's recipe list, continue
            let ingredients_list = recipe.getIngridients();
            let ingredientsRecord = recipe.getIngridientsQuant();

            //do a check to see if the ingridient is already in the recipe
            for(let i = 0; i < ingredients_list.length; i++){
                if(ingredients_list[i].getName() == ingridient.getName()){
                    //if the ingridient is already in the recipe, just increment the quantity by <quantity> and recalculate the macros
                    ingredientsRecord[ingridient.getName()]+= quantity;
                    //remember to set the new quantity for that ingridient
                    recipe.setIngridientsQuant(ingredientsRecord);
                    //this.calculateMacros();

                    //now that the quantity has been incremented in the record and the record has been set, recalculate the macros
                    this.calculateMacros(recipe,user);
                    return;
                }
            }
            //if the ingridient is not in the recipe, add it to the ingridients array
            ingredients_list.push(ingridient)
            //remember to set the new ingridients list
            recipe.setIngridients(ingredients_list);

            //next, set the quantity to 1
            ingredientsRecord[ingridient.getName()] = quantity;
            //remember to set the new quantity for that ingridient in the record
            recipe.setIngridientsQuant(ingredientsRecord);

            //finally recalculate the macros
            this.calculateMacros(recipe,user);
        }
    }

    deleteIngridient(recipe: recipe, ingridient: ingridient, user:User, quantity: number): void{

        //do a check to see if the recipe is in the user's recipe list
        //if the recipe is not in the user's recipe list, return and flag to console
        if(this.isInRecipeList(recipe,user) == false){
            this.flagToConsole();
            return;
        }
        else{
            //if the recipe is in the user's recipe list, continue
            let ingredients_list = recipe.getIngridients();
            let ingredientsRecord = recipe.getIngridientsQuant();

            //we need to check if the ingridient is in the recipe
            //if the ingridient is not in the recipe, return
            if(!ingredients_list.includes(ingridient)){
                //simpler logic here 
             return;
            }
            else{//if the ingridient is in the recipe, decrement the quantity and recalculate the macros
                for(let i = 0; i < ingredients_list.length; i++){
                    if(ingredients_list[i].getName() == ingridient.getName()){//if the ingrident's quantity is 1, delete it from the recipe
                        if(ingredientsRecord[ingridient.getName()] == 1){
                            //delete the ingridient from the ingridientsQuant dict, we dont need to deincrement it since its going to be deleted
                            delete ingredientsRecord[ingridient.getName()];

                            //delete the ingridient from the ingridients array
                            ingredients_list.splice(ingredients_list.indexOf(ingridient), 1);
                            //remember to set the new ingridients list since we deleted an ingridient
                            recipe.setIngridients(ingredients_list);
    
                        }
                        else{
                            /*check for if the quantity of the ingridient is greater than quantity in recipe done outside of this function
                            in the ModifyRecipe class*/
                            //if the quantity is greater than the quantity of the ingridient, deincrement the number of ingridients by the quantity
                            ingredientsRecord[ingridient.getName()]-= quantity;

                        }
                        
                        /*since we changed the quantity in both cases, 
                        remember to set the new quantity for that ingridient*/
                        recipe.setIngridientsQuant(ingredientsRecord);
                        //finally,recalculate the macros
                        this.calculateMacros(recipe,user);
                        break;
                    }
                    return; 
                }
            }
        }

        
    }


    public flagToConsole():void {
        console.log("Error in macro calculation, recipe not found in user's recipe list");
    }


    public isInRecipeList(recipe: recipe, user: User): boolean{
        let user_recip_list = user.getrecipe_list();
        for(let i = 0; i < user_recip_list.length; i++){
            if(user_recip_list[i].getName() == recipe.getName()){
                return true;
            }
        }
        return false;
    }
}