abstract class ingridient{
    constructor(
        private carbs: number,
        private protein: number,
        private fat: number,
        private name: string
    ){}
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
    
}