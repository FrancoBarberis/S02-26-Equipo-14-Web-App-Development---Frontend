import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Plus,
  Lock,
  Bell,
  Headset,
  ArrowRight,
} from "lucide-react";

export default function MyPaymentMethods() {

  return (
    <main className="flex-1 overflow-y-auto px-8 py-12 lg:px-16 lg:py-16">
      {/* Header */}
      <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>

          <h2 className="text-4xl serif-text font-semibold mb-2">
            Payment Methods
          </h2>

          <p className="text-slate-500 dark:text-slate-400 max-w-xl">
            Manage your secure credit and debit information for seamless
            equestrian acquisitions and stable upkeep.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
          <ShieldCheck className="text-primary w-5 h-5" />
          <div>
            <p className="text-[10px] uppercase font-bold tracking-tighter opacity-60">
              Security Level
            </p>
            <p className="text-xs font-semibold">AES-256 Encrypted</p>
          </div>
        </div>
      </header>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Card */}
        <div className="relative group">
          <div className="absolute -top-3 left-4 z-10 bg-[#C1A461] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Primary
          </div>

          <div className="aspect-[1.618/1] bg-[#002349] rounded-xl p-6 flex flex-col justify-between text-white shadow-2xl border-2 border-primary relative overflow-hidden">
            <div className="absolute -inset-x-20 -inset-y-40 bg-linear-to-tr from-transparent via-white/5 to-transparent rotate-45" />

            <div className="flex justify-between items-start">
              <div className="w-12 h-9 bg-linear-to-br from-primary via-[#e9d19a] to-primary rounded-md" />
              <div className="text-white opacity-90 italic serif-text text-xl font-bold tracking-widest">
                VISA
              </div>
            </div>

            <div className="space-y-4">
              <div className="text-2xl tracking-[0.25em] font-light font-display">
                •••• •••• •••• 4242
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[8px] uppercase opacity-40 mb-1">
                    Cardholder Name
                  </p>
                  <p className="serif-text text-lg uppercase">
                    Harrison J. Vance
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[8px] uppercase opacity-40 mb-1">
                    Expires
                  </p>
                  <p className="text-sm font-mono">12 / 28</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between px-2">
            <p className="text-xs opacity-50">
              Used for monthly boarding fees
            </p>
            <div className="flex gap-4">
              <button className="text-[10px] font-bold uppercase text-primary hover:underline hover:cursor-pointer">
                Edit
              </button>
              <button className="text-[10px] hover:text-red-600 font-bold uppercase opacity-30 hover:opacity-100 hover:cursor-pointer">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Add new */}
        <button className="group hover:cursor-pointer hover:scale-105 transition">
          <div className="aspect-[1.618/1] rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center justify-center transition-all group-hover:bg-primary/5 group-hover:border-primary">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
              <Plus className="text-primary w-8 h-8" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Add New Method
            </span>
            <span className="text-[10px] opacity-40 mt-1">
              Visa, Mastercard, Amex
            </span>
          </div>
        </button>
      </div>

      {/* Security section */}
      <section className="mt-20 border-t border-primary/10 pt-12">
        <h3 className="serif-text text-2xl font-semibold mb-8">
          Security & Preferences
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
              <Lock className="text-primary mt-1" />
              <div>
                <h4 className="font-bold text-sm uppercase mb-1">
                  Enhanced Privacy Mode
                </h4>
                <p className="text-sm opacity-60">
                  Mask sensitive card details unless authenticated.
                </p>
                <button className="mt-3 text-xs font-bold text-primary flex items-center gap-1">
                  Enable Now <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border hover:border-primary/10">
              <Bell className="text-primary mt-1" />
              <div>
                <h4 className="font-bold text-sm uppercase mb-1">
                  Transaction Alerts
                </h4>
                <p className="text-sm opacity-60">
                  Notifications for purchases exceeding $5,000 USD.
                </p>
              </div>
            </div>
          </div>

          {/* Concierge */}
          <div className="bg-equestrian-navy/30 rounded-xl p-8 border border-primary/10 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="serif-text text-xl mb-4">
                Concierge Billing
              </h4>

              <p className="text-sm opacity-60 mb-6">
                For large transactions, contact your relationship manager.
              </p>

              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZaYZTF2KersJr6fhZI-2p3JiHYTbpyMlmVWtLThy-P_aO5PnuEF5C4m1_6sKAczWeN14aI-BdCBEa9-ZkswNtrf_fCUq8h6ABzyeOMVXWfQPsXtwqpNpNdbaGfyg-vS-TZawZ5Sp-8OQbyHBHCj2cpnCO88SpucFp9PTtLmGi3VcBLZ2JUOnT5HpR8uSVNehJ1l0wQdokIaXIklP8IOrR9Aq5_MOQ9kHn2A-f4TMcnj5T73JY8zBez5H4zL6yVOOgL2h03r9oORU"
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-[#1e1b14]"
                  />
                </div>

                <button className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase hover:brightness-110 hover:scale-105 hover:cursor-pointer transition">
                  Contact Advisor
                </button>
              </div>
            </div>

            <Headset className="absolute -bottom-8 -right-8 text-white/5 w-40 h-40" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-t border-primary/10">
        <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0">
          <Image src="/pci.png" alt="pci" width={80} height={24} />
          <Image src="/trust.png" alt="trust" width={80} height={24} />
        </div>

        <div className="text-center md:text-right">
          <p className="text-[10px] uppercase opacity-40">
            Your data is protected by private cloud infrastructure
          </p>

          <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
            <Link className="text-[10px] font-bold text-primary uppercase hover:underline" href="#">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 bg-primary/20 rounded-full" />
            <Link className="text-[10px] font-bold text-primary uppercase hover:underline" href="#">
              Vault Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}


