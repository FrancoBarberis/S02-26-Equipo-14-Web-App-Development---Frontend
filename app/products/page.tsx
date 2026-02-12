// app/products/page.tsx
import ProductCard from "@/components/ProductCard";

//TODO: estado local para producto seleccionado (modal de detalle activo)

export default function ProductsPage() {
  return (
    <section className="min-h-dvh w-full bg-blue-800">
      {/* Carrusel / hero de categoría */}
      <div className="h-[20vh] bg-red-900 grid place-items-center text-white">
        Carrusel
      </div>

      {/* Contenido: filtros + grid */}
      <div className="flex flex-col mx-auto max-w-7xl px-4 py-6 gap-6 lg:flex-row lg:mx-0 lg:w-full lg:max-w-none">
        {/* Sidebar de filtros */}
        <aside className="w-full shrink-0 rounded-md bg-green-900 p-4 text-white lg:w-70">
          <h2 className="mb-3 text-lg font-semibold">Filtros</h2>
          {/* filtros... */}
          FILTROS
        </aside>

        {/* Grid de productos */}
        <main className="flex-1">
          <div className="grid gap-5 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </main>
      </div>
    </section>
  );
}