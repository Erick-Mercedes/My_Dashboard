import { WidgetsGrid } from "@/components";
import { Sidebar } from "@/components/sidebar/Sidebar";

export const metadata = {
  title: "Admin Dashboard",
  description: "Laborum eu laboris quis enim enim fugiat veniam sit sunt.",
};

export default function MainPage() {
  return (
    <div className="flex text-center ml-60 p-10">
      <Sidebar />
      <div className="flex-1 p-2 text-black">
        <h1 className="text-gray-700 text-2xl font-bold">Dashboard</h1>
        <span className="text-xl">Information General</span>

        <div className="flex flex-wrap p-2 items-center justify-center"></div>
        <WidgetsGrid />
      </div>
    </div>
  );
}
