//Crea las funciones
//function addNumbers(a: number, b: number) {
    //return a + b;
//}

//function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
    //return firstNumber * base;
//}

//Agrega los números que vamos a ocupar, y hace las operaciones
//const resultAdd: number = addNumbers(1, 2);
//const resultMultiply: number = multiply(5);
//Dice, por medio de consola, los resultados de las operaciones de ariba
//console.log({resultAdd, resultMultiply});

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
    character.hp += amount; 
}

const zayderx: Character = {
    name: 'Zayderx',
    hp: 50,
    showHp() {
    console.log(`Puntos de vida ${this.hp}`);
}
}

healCharacter(zayderx, 50);

zayderx.showHp();


export{};