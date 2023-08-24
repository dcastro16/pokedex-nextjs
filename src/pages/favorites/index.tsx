import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { localFavorites } from "../../utils";
import { NoFavorites } from "@/components/ui/NoFavorites";
import { Card, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemons: number[];
}

const FavoritesPage: FC<Props> = ({ pokemons }) => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);
  const router = useRouter();

  const onClick = (pokemonId: number) => {
    router.push(`/pokemon/${pokemonId}`);
  };

  const renderPokemon = (pokemonId: number) => {
    return (
      <Card
        isHoverable
        isPressable
        onPress={() => onClick(pokemonId)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          width: "300px",
          height: "300px",
        }}
      >
        <Image
          alt="Pokemon photo"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    );
  };

  useEffect(() => {
    setFavoritePokemons(localFavorites.getPokemons());
    console.log(localFavorites.getPokemons());
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 295px)",
            columnGap: "4rem",
            rowGap: "2rem",
          }}
        >
          {favoritePokemons.map(renderPokemon)}
        </ul>
      )}
    </Layout>
  );
};

export default FavoritesPage;
