type Props = {
  title?: string;
  label?: string;
  primary?: boolean;
};

export default function AddressCard({ title, label, primary }: Props) {
  return (
    <div className={`bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm relative group transition hover:shadow-md
      ${primary ? "border-2 border-blue-900" : "border border-slate-200 dark:border-slate-800"}
    `}>
      {label && (
        <div className="absolute top-2 right-4">
          <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold px-2 py-1 rounded">
            {label}
          </span>
        </div>
      )}

      <div className="flex flex-col h-full">
        <div className="mb-6">
          <h3 className="text-lg font-bold text-navy-deep dark:text-white mt-2 mb-2 p-2">
            {title}
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            White Oak Stables<br />
            1240 Equestrian Way<br />
            Wellington, FL
          </p>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex gap-4">
          <button className="text-xs font-semibold text-slate-500 hover:text-blue-900 uppercase">
            Edit
          </button>

          <button className="text-xs font-semibold text-slate-500 hover:text-red-600 uppercase">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
