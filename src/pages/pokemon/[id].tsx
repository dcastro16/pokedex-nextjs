import { useEffect, useState } from "react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Button, Image } from "@nextui-org/react";
import { FiHeart } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { PokemonData } from "../../../interfaces";
import { capitalizeFLetter } from "@/utils/helpers";
import { Layout } from "@/components/layouts";
import { localFavorites } from "@/utils";
import confetti from "canvas-confetti";
import { getPokemonInfo } from "@/utils/getPokemonInfo";

interface Props {
  pokemon: PokemonData;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(false);

  const handleFavClick = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (isInFavorites) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      origin: {
        x: 0.5,
        y: 0.6,
      },
    });
  };

  useEffect(() => {
    if (localFavorites.existInFavorites(pokemon.id)) {
      setIsInFavorites(true);
    }
  }, []);

  return (
    <Layout title={capitalizeFLetter(pokemon.name)}>
      <div
        className="pokemon-container"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "5rem",
          paddingTop: "2rem",
        }}
      >
        <Image
          alt={`Image of ${pokemon.name}`}
          src={
            pokemon.sprites.other?.dream_world.front_default || "/no-image.png"
          }
          width={400}
          height={150}
        />
        <div
          className="pokemon-data"
          style={{
            width: "50%",
          }}
        >
          <div
            className="pokemon-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <h1
              style={{
                fontSize: "36px",
                fontStyle: "bold",
              }}
            >
              {capitalizeFLetter(pokemon.name)}
            </h1>
            <Button
              color="danger"
              aria-label="Like"
              onClick={handleFavClick}
              variant={!isInFavorites ? "shadow" : "ghost"}
            >
              {isInFavorites ? (
                <>
                  <FiX /> Eliminar de favoritos
                </>
              ) : (
                <>
                  <FiHeart /> Guardar en favoritos
                </>
              )}
            </Button>
          </div>
          <h2
            className="text"
            style={{
              fontSize: "25px",
            }}
          >
            Sprites:
          </h2>
          <div
            className="sprites"
            style={{
              display: "flex",
              width: "100%",
            }}
          >
            <Image
              alt={`Image of ${pokemon.name}`}
              src={pokemon.sprites.front_default}
              width={150}
              height={150}
            />
            <Image
              alt={`Image of ${pokemon.name}`}
              src={pokemon.sprites.back_default}
              width={150}
              height={150}
            />
            <Image
              alt={`Image of ${pokemon.name}`}
              src={pokemon.sprites.front_shiny}
              width={150}
              height={150}
            />
            <Image
              alt={`Image of ${pokemon.name}`}
              src={pokemon.sprites.back_shiny}
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  return {
    props: {
      pokemon: await getPokemonInfo(id),
    },
  };
};

export default PokemonPage;
