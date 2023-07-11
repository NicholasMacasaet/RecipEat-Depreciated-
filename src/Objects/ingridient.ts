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
    public setCals(cals: number): void{
        this.cals = cals;
    }
    public getCals(): number{
        return this.cals;
    }
    public setCarbs(carbs: number): void{
        this.carbs = carbs;
    }
    public getCarbs(): number{
        return this.carbs;
    }
    public setProtein(protein: number): void{
        this.protein = protein;
    }

    public getProtein(): number{
        return this.protein;
    }

    public setFat(fat: number): void{
        this.fat = fat;
    }
    public getFat(): number{
        return this.fat;
    }

    public setName(name: string): void{
        this.name = name;
    }
    public getName(): string{
        return this.name;
    }
    
    public getConversionFactor(): number{
        return this.conversionFactor;
    }
    public setConversionFactor(conversionFactor: number): void{
        this.conversionFactor = conversionFactor;
    }
}