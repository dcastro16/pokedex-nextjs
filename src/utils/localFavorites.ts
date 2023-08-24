const toggleFavorites = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  console.log("exist in fav llamado");
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const getPokemons = (): number[] => {
    return JSON.parse( localStorage.getItem('favorites') || '[]' );
}

const localFavorites = {
  toggleFavorites,
  existInFavorites,
  getPokemons
};

export default localFavorites;
