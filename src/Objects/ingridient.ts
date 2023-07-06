export abstract class ingridient{
    constructor(
        private carbs: number,
        private protein: number,
        private fat: number,
        private cals: number,
        private name: string,
        private conversionFactor: number
        //conversion factor is the amount of the ingridient that is 1 serving
        //multiply this by 100mg servings 
    ){}
    

    //some basic getters and setters
    setCals(cals: number): void{
        this.cals = cals;
    }
    getCals(): number{
        return this.cals;
    }
    setCarbs(carbs: number): void{
        this.carbs = carbs;
    }
    getCarbs(): number{
        return this.carbs;
    }
    setProtein(protein: number): void{
        this.protein = protein;
    }

    getProtein(): number{
        return this.protein;
    }

    setFat(fat: number): void{
        this.fat = fat;
    }
    getFat(): number{
        return this.fat;
    }

    setName(name: string): void{
        this.name = name;
    }
    getName(): string{
        return this.name;
    }
    
    getConversionFactor(): number{
        return this.conversionFactor;
    }
    setConversionFactor(conversionFactor: number): void{
        this.conversionFactor = conversionFactor;
    }
}