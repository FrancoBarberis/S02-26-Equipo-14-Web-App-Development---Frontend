//app/cart/page
export default function CartPage() {
  return (
    <div className="container h-full w-full bg-green-700 p-6">
      <h1 className="text-2xl md:text-3xl font-bold">Tu carrito</h1>
      <p className="mt-2 text-muted-foreground">Aún no agregaste productos.</p>
      {/* Acá después metés tu tabla/lista de productos */}
    </div>
  );
}