import { SimplePokemon } from "@/pokemons/interfaces";
import { PokemonCard } from "./PokemonCard";
//import Image from "next/image";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center ml-64 flex-1 overflow-y-auto p-15 ">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
