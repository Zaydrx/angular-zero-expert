export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'OscarHola',
}

const passenger2: Passenger = {
    name: 'Fabricio',
    children: ['Cecilia', 'Patricio'],
}
const retrurnChildrenNumber = ( passenger: Passenger ) => {
    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children?.length;

    console.log(passenger.name, howManyChildren)
}

retrurnChildrenNumber( passenger2 );
retrurnChildrenNumber( passenger1 );