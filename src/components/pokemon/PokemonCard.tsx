import { FC } from "react";
import { useRouter } from "next/router";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/react";

import { Pokemon } from "../../../interfaces";
import { capitalizeFLetter } from "@/utils/helpers";
import styles from "./PokemonCard.module.css";
interface Props {
  pokemon: Pokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Card isHoverable isPressable onPress={onClick}>
      <CardBody className={styles["card"]}>
        <div className={styles["card__image-container"]}>
          <Image
            alt={`Image of ${pokemon.name}`}
            src={pokemon.img}
            className={styles["card__image"]}
          ></Image>
        </div>
        <CardFooter className="justify-between">
          <b>{capitalizeFLetter(pokemon.name)}</b>
          <p className="text-default-500">{pokemon.id}</p>
        </CardFooter>
      </CardBody>
    </Card>
  );
};
