import Link from "next/link";

export default function OrdersPage() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-primary mb-2">
            My Orders
          </h1>
          <p className="text-primary/60 italic">
            Manage your recent purchases and track shipments.
          </p>
        </header>

        {/* Summary */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-primary/10 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm uppercase tracking-widest text-primary/50 mb-1">
              Active Shipments
            </p>
            <h3 className="text-3xl font-semibold">02</h3>
          </div>

          <div className="bg-primary text-white border border-primary p-8 rounded-xl shadow-sm">
            <p className="text-sm uppercase tracking-widest text-white/60 mb-1">
              Total Spent YTD
            </p>
            <h3 className="text-3xl font-semibold">$4,850.00</h3>
          </div>

          <div className="bg-white border border-primary/10 p-8 rounded-xl shadow-sm">
            <p className="text-sm uppercase tracking-widest text-primary/50 mb-1">
              Loyalty Tier
            </p>
            <h3 className="text-3xl font-semibold">Gold Member</h3>
          </div>
        </section>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <input
            className="w-full md:max-w-md pl-4 pr-4 py-2 bg-white border border-primary/10 rounded"
            placeholder="Search order number or product..."
          />

          <div className="flex gap-4">
            <select className="bg-white border border-primary/10 text-sm px-4 py-2 rounded">
              <option>Last 6 Months</option>
              <option>2023</option>
              <option>2022</option>
            </select>

            <button className="bg-primary text-white px-6 py-2 rounded text-sm uppercase">
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-primary/10 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-primary/5">
              <tr>
                <th className="px-6 py-4 text-xs uppercase">Order ID</th>
                <th className="px-6 py-4 text-xs uppercase">Date</th>
                <th className="px-6 py-4 text-xs uppercase">Status</th>
                <th className="px-6 py-4 text-xs uppercase">Total</th>
                <th className="px-6 py-4 text-right text-xs uppercase">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-primary/5">
              <tr className="hover:bg-primary/2">
                <td className="px-6 py-6 font-medium">#EQ-88291</td>
                <td className="px-6 py-6 italic">Oct 24, 2023</td>
                <td className="px-6 py-6">
                  <span className="px-3 py-1 bg-gold-accent/10 text-gold-accent text-xs rounded-full">
                    In Transit
                  </span>
                </td>
                <td className="px-6 py-6 font-semibold">$1,420.00</td>
                <td className="px-6 py-6 text-right">
                  <Link
                    href="/orders/88291"
                    className="text-gold-accent hover:text-primary italic"
                  >
                    View Details →
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Help */}
        <section className="mt-20 border-t border-primary/10 pt-12">
          <h2 className="text-3xl font-light mb-4">Need Assistance?</h2>

          <div className="flex gap-4 flex-wrap">
            <button className="border border-primary px-8 py-3 rounded text-sm uppercase">
              Contact Concierge
            </button>

            <Link
              href="/returns"
              className="text-gold-accent border-b border-gold-accent pb-1 text-sm uppercase"
            >
              Returns & Exchanges Policy
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white/80 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-6">
              Customer Care
            </h4>
            <ul className="space-y-3 text-sm italic">
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping Info</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs opacity-50 mt-12">
          © 2023 Equestrian Heritage
        </div>
      </footer>
    </>
  );
}
