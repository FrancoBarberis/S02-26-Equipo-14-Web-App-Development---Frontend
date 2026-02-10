// app/cart/page.tsx
export default function CartPage() {
  return (
    <div className="h-full w-full bg-green-700 p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-white">Tu carrito</h1>
      <p className="mt-2 text-white/80">Aún no agregaste productos.</p>
    </div>
  );
}