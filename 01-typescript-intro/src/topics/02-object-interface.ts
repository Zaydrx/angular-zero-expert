//const skills: string[] = ['Bash','Counter','Healing'];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}

const datosGenerales: Character = {
    name: 'Zayderx',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

datosGenerales.homeTown = 'Asgard';

console.table(datosGenerales);

export{};