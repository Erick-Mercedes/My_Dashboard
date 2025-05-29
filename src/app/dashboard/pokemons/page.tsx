import { Sidebar } from "@/components/sidebar/Sidebar";
import { PokemonsResponsive, SimplePokemon } from "@/pokemons/interfaces";
import { PokemonGrid } from "./components/PokemonGrid";

export const metadata = {
  title: "PokeDex",
  description: "Fugiat nulla cillum voluptate enim.",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponsive = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <Sidebar />
      <span className="flex-1 ml-65 p-10 overflow-y-auto text-center text-5xl font-bold mb-6">
        Pokedex{" "}
        <small className="text-2xl font-normal text-blue-950">estatico</small>
      </span>

      <PokemonGrid pokemons={pokemons}></PokemonGrid>
    </div>
  );
}
