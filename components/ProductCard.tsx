import Image from "next/image";
import HorseIMG from "../public/HorseHero.jpg";
import { Heart } from "lucide-react";

// function handleClick(): void {
//   //desplegar modal de detalle, implementar que esta card avise al padre que actualice y active el modal 
// }

function ProductCard() {
  return (
    <div className="p-0 w-40 md:w-52 lg:w-56 rounded-xs bg-white group shadow-lg hover:shadow-2xl transition-shadow">
      {/* Wrapper que RECORTA la imagen */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-xs bg-muted">
        <Image
          src={HorseIMG}
          alt="Silla de montar"
          fill
          className="object-cover group-hover:scale-105 transition-transform"
          sizes="(min-width: 1024px) 14rem, 100vw"
          loading="lazy"
        />

        {/* Overlay UI (botones sobre la imagen) */}
        <div className="absolute inset-0 flex items-start justify-between p-2">
          {/* <button className="rounded bg-black/50 px-2 py-1 text-xs text-white cursor-pointer lg:opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto hover:brightness-125 uppercase transition-opacity group-focus-within:opacity-100">
            Ampliar
          </button> */}
          <button className="favourites-button rounded bg-transparent p-0.5 w-fit h-fit aspect-square text-white cursor-pointer lg:opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:bg-black/50 pointer-events-none transition-transform group-focus-within:opacity-100 hover:brightness-125 absolute right-2">
            <Heart className="lg:opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-transform"/>
          </button>
        </div>

        <span className="absolute bottom-2 left-2 rounded bg-emerald-600/60 px-2 py-0.5 text-xs text-white cursor-default uppercase">
          In stock
        </span>
      </div>

      <div className="mt-1 px-3 py-2">
        <h3 className="product-title text-xs font-bold uppercase">Silla de montar</h3>
        <p className="text-xs font-medium text-amber-600">$ 250.000</p>
        <button className="add-button bg-blue-950 mt-3 px-2 py-1 uppercase text-xs cursor-pointer w-full text-white hover:brightness-125 transition-transform" >Add to cart</button>
      </div>
    </div>
  );
}

export default ProductCard;