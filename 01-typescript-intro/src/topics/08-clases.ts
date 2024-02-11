export class Person  {
    //public name: string;
    //public address: string;
    constructor( 
        public firstName: string,
        public lastName: string, 
        public address?: string 
        ) {}
}

/*export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'New York');
    }
}*/

export class Hero {
        //public person: Person;
    
        constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {
        //this.person = new Person(realName);
    }
}

const tony = new Person('Tony ', 'Stark', 'New York');
const ironMan = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironMan);