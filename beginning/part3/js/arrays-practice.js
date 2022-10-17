/*eslint-env browser*/

//STEP 1
var favoriteMovies = ["The Godfather", "Lord of rings", "The matrix", "Taken", "Avengers"];
window.console.log(favoriteMovies[1]);
//STEP 2

var movies = new Array(5);
movies[0] = favoriteMovies[0];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[2];
movies[3] = favoriteMovies[3];
movies[4] = favoriteMovies[4];
window.console.log(movies[0]);
//STEP 3
var movies = new Array(5);
movies[0] = favoriteMovies[0];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[2];
movies[3] = favoriteMovies[3];
movies[4] = favoriteMovies[4];
movies.splice(2, 0, "The mask");
window.console.log(movies.length);
//STEP 4
var movies = new Array(5);
movies[0] = favoriteMovies[0];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[2];
movies[3] = favoriteMovies[3];
movies[4] = favoriteMovies[4];
delete movies[0];
window.console.log(movies);
//STEP 5
var movies = [];
movies[0] = favoriteMovies[0];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[2];
movies[3] = favoriteMovies[3];
movies[4] = favoriteMovies[4];
movies[5] = "The mask";
movies[6] = "Gladiator";

for(var i=0; i< movies.length;i++){
    window.console.log(movies[i]);
}
//STEP 6
var movies = [];
movies[0] = favoriteMovies[0];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[2];
movies[3] = favoriteMovies[3];
movies[4] = favoriteMovies[4];
movies[5] = "The mask";
movies[6] = "Gladiator";

for(var index in movies){
    window.console.log(movies[index]);
}
//STEP 7
var movies = [];
movies[0] = favoriteMovies[0];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[2];
movies[3] = favoriteMovies[3];
movies[4] = favoriteMovies[4];
movies[5] = "The mask";
movies[6] = "Gladiator";
movies.sort();
for(var index in movies){
    window.console.log(movies[index]);
}
//STEP 8
var movies = [];
movies[0] = favoriteMovies[0];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[2];
movies[3] = favoriteMovies[3];
movies[4] = favoriteMovies[4];
movies[5] = "The mask";
movies[6] = "Gladiator";

var leastFavMovies = [];
leastFavMovies[0] = "Blackl Phone";
leastFavMovies[1] = "The Nun";
leastFavMovies[2] = "Son of the Mask";
for(var index in movies){
    window.console.log(movies[index]);
}

var output ="Movies I like:\n\n";
for(var index in movies){
    output += movies[index] +"\n";
}
output +="Movies I regret watching:\n\n";
for(var index in leastFavMovies){
    output += leastFavMovies[index] +"\n";
}
window.console.log(output)
//STEP 9
var movies = [];
movies[0] = favoriteMovies[0];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[2];
movies[3] = favoriteMovies[3];
movies[4] = favoriteMovies[4];
movies[5] = "The mask";
movies[6] = "Gladiator";

var leastFavMovies = [];
leastFavMovies[0] = "Blackl Phone";
leastFavMovies[1] = "The Nun";
leastFavMovies[2] = "Son of the Mask";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies);
//STEP 10
var movies = [];
movies[0] = favoriteMovies[0];
movies[1] = favoriteMovies[1];
movies[2] = favoriteMovies[2];
movies[3] = favoriteMovies[3];
movies[4] = favoriteMovies[4];
movies[5] = "The mask";
movies[6] = "Gladiator";

var leastFavMovies = [];
leastFavMovies[0] = "Blackl Phone";
leastFavMovies[1] = "The Nun";
leastFavMovies[2] = "Son of the Mask";
movies = movies.concat(leastFavMovies);
movies.sort().reverse();
window.console.log(movies);
window.console.log(movies.pop());
