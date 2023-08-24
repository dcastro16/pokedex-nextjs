import Image from "next/image";
import NextLink from "next/link";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles["navbar"]}>
      <div className={styles["navbar__title"]}>
        <NextLink
          href={"/"}
          passHref
          style={{ display: "flex", fontSize: "25px", alignItems: "center" }}
        >
          <Image
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png"
            }
            alt="Icono de la app"
            width={70}
            height={70}
          ></Image>
          <b>P</b>
          <p>okemon</p>
        </NextLink>
      </div>
      <NextLink href={"/favorites"} passHref>
        <p style={{ fontWeight: "400", fontSize: "20px" }}>Favoritos</p>
      </NextLink>
    </div>
  );
};
