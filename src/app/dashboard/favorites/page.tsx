import { Sidebar } from "@/components/sidebar/Sidebar";
import { PokemonGrid } from "@/pokemons/interfaces";

export const metadata = {
  title: "Favoritos",
  description: "Fugiat nulla cillum voluptate enim.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <Sidebar />
      <span className="flex-1 ml-65 p-10 overflow-y-auto text-center text-5xl font-bold mb-6">
        Pokemons Favoritos{" "}
        <small className="text-2xl font-normal text-blue-950">
          Global State
        </small>
      </span>

      <PokemonGrid pokemons={[]}></PokemonGrid>
    </div>
  );
}
