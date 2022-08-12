var GENRE;
(function (GENRE) {
    GENRE["ACTION"] = "a\u00E7\u00E3o";
    GENRE["DRAMA"] = "drama";
    GENRE["COMEDY"] = "com\u00E9dia";
    GENRE["ROMANCE"] = "romance";
    GENRE["HORROR"] = "terror";
})(GENRE || (GENRE = {}));
const addMovies = (name, releaseYear, genre, rating) => {
    const movie = {
        name,
        releaseYear,
        genre,
        rating
    };
    return movie;
};
console.log(addMovies("Soul", 2020, GENRE.DRAMA, 10000));
//# sourceMappingURL=ex3.js.map