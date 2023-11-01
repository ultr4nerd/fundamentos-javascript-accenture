function getPokemonDeprecated(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data.name);
      })
      .catch(() => {
        reject(
          new Error(`No se ha podido encontrar el Pokémon con el ID ${id}`)
        );
      });
  });
}

async function getPokemon(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data.name;
  } catch {
    throw new Error(`No se ha podido encontrar el Pokémon con el ID ${id}`);
  }
}

getPokemon(5)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
