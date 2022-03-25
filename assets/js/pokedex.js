const pokeFetch = () => {
  const pokeName = document.getElementById("pokeName");
  let input = pokeName.value.toLowerCase();

  const pokeNombre = document.querySelector(".pokemon-nombre");
  const pokeId = document.querySelector(".pokemon-id");
  const pokeTipo = document.querySelector(".pokemon-tipo");
  const pokeTipo2 = document.querySelector(".pokemon-tipo-2");

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
      pokeNombre.textContent = data.name;
      pokeId.textContent = data.id;
      pokeTipo.textContent = data.types[0].type.name;
      if (data.types[1] != undefined) {
        pokeTipo2.textContent = data.types[1].type.name;
      } else {
        pokeTipo2.textContent = " - ";
      }
    });
};

pokeFetch();

const imagenPokemon = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
  const color = "#00121901";
};

// const mostrarPokemon = () => {
//   console.log(`hola ${input}`);
// };
