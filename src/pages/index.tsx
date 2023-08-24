import { GetStaticProps, NextPage } from "next";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { Pokemon, PokemonListResponse } from "../../interfaces/pokemon-list";
import { PokemonCard } from "@/components/pokemon/PokemonCard";

interface Props {
  pokemons: Pokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  const renderPokemon = (pokemon: Pokemon) => {
    return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
  };

  return (
    <Layout title="Lista de pokemons">
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          columnGap: "4rem",
          rowGap: "2rem",
        }}
      >
        {pokemons.map(renderPokemon)}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{}> = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemonList: Pokemon[] = data.results.map((pokemon, index) => {
    const id = index + 1;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

    return {
      name: pokemon.name,
      url: pokemon.url,
      id: id,
      img: img,
    };
  });

  return {
    props: {
      pokemons: pokemonList,
    },
  };
};

export default HomePage;
