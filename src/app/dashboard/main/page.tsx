import { Sidebar } from '@/app/components/Sidebar';

export default function MainPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-gray-700 text-2xl font-bold">Main Dashboard</h1>

      </main>
    </div>
  );
}
