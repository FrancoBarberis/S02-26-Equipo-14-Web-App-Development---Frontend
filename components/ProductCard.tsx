import Image from "next/image";
import HorseIMG from "../public/HorseHero.jpg";
import { Eye } from "lucide-react";

function ProductCard() {
  return (
    <div className="p-0 lg:w-56 rounded-xs bg-white group">
      {/* Wrapper que RECORTA la imagen */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-xs bg-muted">
        <Image
          src={HorseIMG}
          alt="Silla de montar"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 14rem, 100vw"
          priority
        />

        {/* Overlay UI (botones sobre la imagen) */}
        <div className="absolute inset-0 flex items-start justify-between p-2">
          <button className="rounded bg-black/50 px-2 py-1 text-xs text-white cursor-pointer lg:opacity-0 pointer-events-none group-hover:opacity-100 uppercase transition-opacity group-focus-within:opacity-100">
            Ampliar
          </button>
          <button className="rounded bg-black/50 px-2 py-1 text-xs text-white cursor-pointer lg:opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity group-focus-within:opacity-100">
            Favorito
          </button>
        </div>

        <span className="absolute bottom-2 left-2 rounded bg-emerald-600 px-2 py-0.5 text-xs text-white cursor-default uppercase">
          In stock
        </span>
      </div>

      <div className="mt-1 px-3 py-2">
        <h3 className="product-title text-xs font-semibold uppercase">Silla de montar</h3>
        <p className="text-xs font-medium">$ 250.000</p>
        <button className="bg-blue-950 mt-3 px-2 py-1 uppercase text-xs cursor-pointer w-full text-white">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;