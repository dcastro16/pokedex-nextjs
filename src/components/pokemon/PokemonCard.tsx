import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/react";
import { Pokemon } from "../../../interfaces";
import { FC } from "react";
import { useRouter } from "next/router";
import { capitalizeFLetter } from "@/utils/helpers";

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
      <CardBody className="justify-center">
        <Image
          alt={`Image of ${pokemon.name}`}
          src={pokemon.img}
          width="100%"
          height={50}
        ></Image>
        <CardFooter className="justify-between">
          <b>{capitalizeFLetter(pokemon.name)}</b>
          <p className="text-default-500">{pokemon.id}</p>
        </CardFooter>
      </CardBody>
    </Card>
  );
};
