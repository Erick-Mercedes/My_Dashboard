import { CartCounter } from "@/app/components/shopping-cart";

  export const metadata = {
    title: 'Counter Page',
    description: 'Un simple Contador',
  }
  
export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span> Productos del carrito</span>
      <CartCounter value ={0}/>
    </div>
  );
}
