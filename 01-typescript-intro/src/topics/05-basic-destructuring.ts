//Desestructuracion de Objetos
/*interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Demons',
    details: {
        author: 'Imagine Dragons',
        year: 2013
    }
}

const nextSong = 'Monsters';

const { 
    song:actualSong, 
    songDuration:actualSongDuration,
    details:{author:actualSongAuthor}
} = audioPlayer;

console.log('Canción Actual: ', actualSong);
console.log('Duración de la Canción', actualSongDuration);
console.log('Autor de la cancion: ', actualSongAuthor);
console.log('Siguiente canción: ', nextSong);*/

//Desestucturacion de Arreglos
const [, , p3]: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('El tercer personaje es:', p3);





export{};