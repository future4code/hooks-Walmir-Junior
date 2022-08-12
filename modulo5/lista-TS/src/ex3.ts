enum GENRE {
	ACTION="ação",
	DRAMA="drama",
	COMEDY="comédia",
	ROMANCE="romance",
	HORROR="terror"
}

type Movies = {
    name:string,
    releaseYear:number,
    genre: GENRE
    rating?:number
}

const addMovies = (name:string, releaseYear:number, genre:GENRE, rating?:number) :Movies => {

    const movie:Movies = {
        name,
        releaseYear,
        genre,
        rating
    }

    return movie
}

console.log(addMovies("Soul", 2020, GENRE.DRAMA, 10000))