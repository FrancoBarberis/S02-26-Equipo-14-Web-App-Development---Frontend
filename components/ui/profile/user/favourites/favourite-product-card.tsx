import Image from "next/image";

type Props = {
  src: string;
  brand: string;
  name: string;
  price: string;
};

export default function FavouriteProductCard({ src, brand, name, price }: Props) {
  return (
    <div className="group relative flex flex-col">
      <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-white mb-6">
        <Image
          src={src}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition"
        />

        <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full text-[#0006b7] flex items-center justify-center hover:scale-105 hover:cursor-pointer transition">
          ♥
        </button>

        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition">
          <button className="w-full py-3 bg-primary text-white text-sm font-bold uppercase rounded-4xl hover:scale-105 transition hover:cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>

      <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-1">
        {brand}
      </span>

      <h3 className="font-serif text-xl mb-2">{name}</h3>

      <p className="mt-auto font-medium">{price}</p>
    </div>
  );
}
