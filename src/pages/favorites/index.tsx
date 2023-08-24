import { FC, useEffect, useState } from "react";
import { Card, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

import { Layout } from "../../components/layouts";
import { localFavorites } from "../../utils";
import { NoFavorites } from "@/components/ui/NoFavorites";
import styles from "./favorites.module.css";

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
        className={styles["card"]}
      >
        <Image
          alt="Pokemon photo"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          className={styles["card__image"]}
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
          className={styles["pokemon-list"]}
        >
          {favoritePokemons.map(renderPokemon)}
        </ul>
      )}
    </Layout>
  );
};

export default FavoritesPage;
