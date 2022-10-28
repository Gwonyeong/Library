class Human {
    HP: number;
    MP: number;
    constructor(HP: number, MP: number) {
        this.HP = HP;
        this.MP = MP;
    }

    recoverHP(): string {
        return "회복 완료!";
    }
}

class NoHuman {
    recoverHP(): string {
        return "회복 완료!";
    }
}

class Warrior extends NoHuman {
    Power: number;
    Armor: number;

    constructor(HP: number, MP: number, Power: number, Armor: number) {
        super();
        this.Power = Power;
        this.Armor = Armor;
        console.log(super.recoverHP());
    }
}

let warrior = new Warrior(100, 40, 75, 40);
console.log(warrior.recoverHP());
