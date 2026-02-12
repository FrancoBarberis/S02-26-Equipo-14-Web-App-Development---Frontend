import HorseCard from "./horse-card";

export default function MyStableManagement() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* HEADER */}
        <header className="mb-12 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h1 className="text-5xl font-extralight mb-4">
              Management <span className="font-bold italic">Dashboard</span>
            </h1>
            <p className="text-slate-500 max-w-lg">
              Manage your elite horse collection and monitor performance.
            </p>
          </div>
        </header>

        {/* SEARCH */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            className="w-full pl-4 pr-4 py-4 rounded-xl bg-white dark:bg-slate-800 shadow"
            placeholder="Search by name, breed or registration..."
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {/* ADD CARD */}
          <button className="min-h-105 border-2 border-dashed border-primary/20 rounded-xl flex flex-col items-center justify-center hover:bg-primary/5">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="material-icons text-primary text-3xl">add</span>
            </div>
            <span className="font-bold text-primary text-sm uppercase tracking-widest">
              Register New Horse
            </span>
          </button>

          {/* HORSE CARD */}
          <HorseCard
            name="Silver Knight"
            breed="Pura Raza Española"
            age="7 Years"
            gender="Stallion"
            status="Active"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBjKztu_M59NgQu2qsKp_gazPXpxgNYh3zMWa43KKAvtp5-OuiPYJlmBl_bA0fRykxxy66bBy70Lf2VSl2bYxT7fJXzZ6B0WFvEywSEzP3M6t5iZAIv1fjrDweMt8rG2O2NSuwFI1o7CO605KdTh8BVADdSnrlgxpXnIXGkvovp9YFyMRk564cQvfHVbAnzpOTrHX1DdYUyIIqBvKDEBsBjokYxbR2Gx-2H2x4-btTPi35vrTK6uI_Y3uV5XTITIhuHsjCxnNt9cOA"
          />

          <HorseCard
            name="Lady Grace"
            breed="Thoroughbred"
            age="5 Years"
            gender="Mare"
            status="Champion"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDBXFlmobEDG5B0jIKqjtPtEGHuxz1L29BAQ4n1h6dOwI0ls7_7VmQv2AwdzcgBl_qStwniU99skcV-___rzzaYLQqly66BZoPs9nlVLrX9F_D2gu_-xkFA7OaT8Myl21fwcroyRd7ScnrjMhCTTl6UTeMwPrinb1pRdpqkMmD2b-1H5k2DrvgdPde8MDXofXYARYw-NEm2BOianHhZaFybu-CvS8xFim9nEPXZblKpuvdXXr3yLMQS-OFqdjtT6mCVzHeUpqfgeaQ"
          />

        </div>

        {/* FOOTER */}
        <footer className="mt-24 pt-12 border-t border-primary/10 text-center text-xs text-slate-400">
          © 2024 Equine Elite Management Systems
        </footer>

      </main>
    </div>
  );
}


