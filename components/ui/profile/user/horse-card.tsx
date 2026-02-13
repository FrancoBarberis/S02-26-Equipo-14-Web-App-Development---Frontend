import Image from "next/image";

export default function HorseCard({
  name,
  breed,
  age,
  gender,
  status,
  img,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow border border-primary/5 flex flex-col hover:scale-105 transition">

      <div className="relative h-65 overflow-hidden">
        <Image 
            src={img} 
            alt={name}
            fill
            className="w-full h-full object-cover" 
        />
        <span className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
          {status}
        </span>
      </div>

      <div className="p-6 flex flex-col grow">
        <p className="text-[10px] text-gold font-bold uppercase mb-1">
          {breed}
        </p>

        <h3 className="text-xl font-bold mb-4">
          {name}
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6 text-xs">
          <div>
            <p className="text-slate-400 uppercase">Age</p>
            <p className="font-semibold">{age}</p>
          </div>

          <div>
            <p className="text-slate-400 uppercase">Gender</p>
            <p className="font-semibold">{gender}</p>
          </div>
        </div>

        <button className="mt-auto py-3 bg-primary text-white rounded-lg text-sm font-bold uppercase hover:scale-105 transition hover:cursor-pointer">
          View Profile
        </button>
      </div>
    </div>
  );
}
