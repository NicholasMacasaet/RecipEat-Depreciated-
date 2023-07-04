abstract class recipe{
    constructor(
        private name: string,
        private carbs: number,
        private protein: number,
        private fat: number,
        //store the quantity of each ingredient in a dict with the name of the ingridient as the key
        private ingridientsQuant: Record<string, number>,
        //store the ingridients in an array
        private ingridients: ingridient[]
    ){}
    

    setName(name: string): void{
        this.name = name;
    }
    getName(): string{
        return this.name;
    }

    calculateMacros(): void{
        for(let i = 0; i < this.ingridients.length; i++){
            //retrieve the quantity of the ingridient and multiply it by the macros of the ingridient
            let quantity = this.ingridientsQuant[this.ingridients[i].getName()];

            this.carbs += this.ingridients[i].getCarbs() *quantity;
            this.protein += this.ingridients[i].getProtein() * quantity;
            this.fat += this.ingridients[i].getFat() * quantity;
        }
    }

    addIngridient(ingridient: ingridient): void{

        for(let i = 0; i < this.ingridients.length; i++){
            if(this.ingridients[i].getName() == ingridient.getName()){
                //if the ingridient is already in the recipe, just increment the quantity and recalculate the macros
                this.ingridientsQuant[ingridient.getName()]++;
                this.calculateMacros();
                return;
            }
        }
        //if the ingridient is not in the recipe, add it to the ingridients array and set the quantity to 1
        this.ingridients.push(ingridient);
        this.ingridientsQuant[ingridient.getName()] = 1;

        //then recalculate the macros
        this.calculateMacros();

    }
    deleteIngridient(ingridient: ingridient): void{
        //if the ingridient is not in the recipe, return
        if(!this.ingridients.includes(ingridient)){
            return;
        }
        else{//if the ingridient is in the recipe, decrement the quantity and recalculate the macros
            for(let i = 0; i < this.ingridients.length; i++){
                if(this.ingridients[i].getName() == ingridient.getName()){//if the ingrident's quantity is 1, delete it from the recipe
                    if(this.ingridientsQuant[ingridient.getName()] == 1){
                        //delete the ingridient from the ingridientsQuant dict, we dont need to deincrement it since its going to be deleted
                        delete this.ingridientsQuant[ingridient.getName()]
                        
                        //delete the ingridient from the ingridients array
                        this.ingridients.splice(this.ingridients.indexOf(ingridient), 1);
    
                    }
                    else{//else there is more than one ingridient, so just decrement the quantity
                        this.ingridientsQuant[ingridient.getName()]--;
                    }
                    //finally,recalculate the macros
                    this.calculateMacros();
                    break;
                }
                return; 
            }
        }
    }
}