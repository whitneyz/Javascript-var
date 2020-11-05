const getPokemon = () => {
fetch("https://pokeapi.co/api/v2/pokemon/12")
    .then(response => response.json())
    .then(json => console.log(json))//actual JSON data as parameter
    .catch(err => console.error(err));
}
Let displaySprite = document.getElementById("image");
getPokemon();
function indexJson () {
  for (var i = 0; i < )  // describe function
} // how do you call data from Json look W3SCHOOL

document.getElementById("btnJaune").addEventListener("click", displayImage);
function getPokemon () {
document.getElementById("image").innerHTML = displaySprite ();
}

