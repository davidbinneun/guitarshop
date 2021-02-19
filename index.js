class ClassicGuitar {
    constructor(manufactureYear, brand, price) {
    this.manufactureYear = manufactureYear;
    this.brand = brand;
    this.price = price;
    this.numberOfString = 6;
    this.used = false;
    }

    play(){
        this.price = this.price * 0.90;
        this.used = true;
        return "🎶🎶🎶";
    }

    getManufactureYear(){
        return this.getManufactureYear;
    }

    getBrand(){
        return this.brand;
    }

    getPrice(){
        return this.price;
    }

    setPrice(newPrice){
        this.price = newPrice;
    }

    static detectSound(sound){
        switch(sound) {
            case '🎶':
                return 'ClassicGuitar';
            case '🎸':
                return 'ElectricGuitar';
            case '🔊':
                return 'BassGuitar';
            default:
                return 'dafuqIsThat';
        }  
    }
}

class ElectricGuitar extends ClassicGuitar {
    constructor(manufactureYear, brand, price, longNeck) {
        super(manufactureYear, brand, price);
        this.longNeck = longNeck;
    }

    play(){
        this.price = this.price * 0.90;
        this.used = true;
        return "🎸🎸🎸";
    }

    static detectSound(sound){
        switch(sound) {
            case '🎶':
                return 'ClassicGuitar';
            case '🎸':
                return 'ElectricGuitar';
            case '🔊':
                return 'BassGuitar';
            default:
                return 'dafuqIsThat';
            }  
    }
}

class BassGuitar extends ClassicGuitar {
    constructor(manufactureYear, brand, price) { 
        super(manufactureYear, brand, price);
        this.numberOfString = 4;
    }

    play(){
        if (!this.used){
            this.price = this.price * 0.90;
            this.used = true;
        }
        return "🔊🔊🔊";
    }

    playSolo(){
        this.play();

        let solo = '';
        let characters = '💥🤘🎵📢💢🕺';
        for ( let i = 0; i < 6; i++ ) {
            solo += characters.charAt(Math.floor(Math.random() * 6));
        }
        return solo;
    }

    static detectSound(sound){
        switch(sound) {
            case '🎶':
                return 'ClassicGuitar';
            case '🎸':
                return 'ElectricGuitar';
            case '🔊':
                return 'BassGuitar';
            default:
                return 'dafuqIsThat';
            }  
    }
}
