import Image from "next/image"
import AddressCard from "./address-card"

import { ShieldCheck, Truck, Headset } from "lucide-react"


const UserAddress = () => {
  return (
    <>
       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-slate-500">
          Account / <span className="font-semibold ml-2">Manage Addresses</span>
        </nav>

        {/* Header */}
        <div className="flex justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-navy-deep dark:text-white">
              Manage Addresses
            </h1>
            <p className="text-slate-500 mt-2">
              Update your delivery locations and billing info.
            </p>
          </div>

          <button className="bg-blue-950 text-[#f8c757] text-gold font-semibold px-4 rounded h-12 hover:scale-105 transition hover:cursor-pointer hover:text-[#ffce5d]">
            + Add New Address
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AddressCard title="Jameson Sterling" primary label="Default Shipping" />
          <AddressCard title="Jameson Sterling" label="Default Billing" />
          <AddressCard title="Jameson Sterling" />
        </div>

        <section className="mt-20 py-12 border-t border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                <div className="flex flex-col items-center md:items-start gap-4">
                <ShieldCheck color="#2563eb" className="text-primary w-8 h-8" />
                <div>
                    <h4 className="font-bold text-navy-deep dark:text-white">
                    Secure Storage
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                    Your personal details are encrypted and handled with the highest security standards.
                    </p>
                </div>
                </div>

                <div className="flex flex-col items-center md:items-start gap-4">
                <Truck color="#2563eb" className="text-primary w-8 h-8" />
                <div>
                    <h4 className="font-bold text-navy-deep dark:text-white">
                    Global Logistics
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                    Premium international shipping to over 150 countries with real-time tracking.
                    </p>
                </div>
                </div>

                <div className="flex flex-col items-center md:items-start gap-4">
                <Headset color="#2563eb" className="text-primary w-8 h-8" />
                <div>
                    <h4 className="font-bold text-navy-deep dark:text-white">
                    Concierge Service
                    </h4>
                    <p className="text-sm text-slate-500 mt-1">
                    Need help managing your profile? Our luxury concierge is available 24/7.
                    </p>
                </div>
                </div>

            </div>
        </section>

        {/* Hero image */}
        <div className="mt-16 rounded-xl overflow-hidden relative h-75 bg-background">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB750UvLFp44kP3CKtC7nRvNsTIMKe0VoD6kUZ5iqoWiYw8-Y3wGA-Nc4NI48YdLw0_tZra-XWoXTPbtv-oF4MPPtkKIeyqoS4bBsdNdo7UkEJ4F6DCqLhz593ZH2jMGbMGxDPC4mLsvqTcL0rLyIqeKH0dQuZaN7kj4NZY0x5wLKgUa92gjLR24b7cn59hYn1uL4m6Z0d79-RDDYi4hIshKZarFMOdHjgjn5tK2oKDLmypmxcGz-Ggq6mNFrfyFIk2EUxtquw6wpc"
            alt="Stable"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-navy-deep/40" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white">
            <h2 className="text-3xl font-light italic mb-4">
              Precision in every detail.
            </h2>

            <button className="border-2 border-white/30 px-8 py-2 rounded uppercase text-xs hover:cursor-pointer hover:scale-105 transition">
              View Stable Collections
            </button>
          </div>
        </div>

      </main>
    </>
  )
}

export default UserAddress
