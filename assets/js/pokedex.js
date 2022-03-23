const pokeFetch = () => {
  const pokeName = document.getElementById("pokeName");
  let input = pokeName.value.toLowerCase();

  const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  //const url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 300)}`;
  fetch(url)
    .then((info) => {
      if (info.status != "200") {
        console.log(info);
        imagenPokemon("./assets/images/piplup.gif");
      } else {
        return info.json();
      }
    })
    .then((data) => {
      console.log(data);
      let pokeImage = data.sprites.other.home.front_default;
      console.log(pokeImage);
      imagenPokemon(pokeImage);
    });
};

pokeFetch();

const imagenPokemon = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};

// const mostrarPokemon = () => {
//   console.log(`hola ${input}`);
// };
