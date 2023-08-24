import { Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <h1
        style={{
          fontSize: "35px",
          fontWeight: "bold",
          marginBottom: "4rem",
        }}
      >
        No hay favoritos
      </h1>
      <Image
        alt="No hay favoritos"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/54.svg"
        width={250}
        height={250}
        style={{
          opacity: 0.3,
        }}
      />
    </div>
  );
};
