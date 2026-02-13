import Image from "next/image"

const PersonalInformation = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
            <div>
            <h1 className="text-4xl font-serif text-[#002349] mb-2">
                Perfil de Usuario
            </h1>
            <p className="text-gray-600">
                Gestiona tu información y la de tus ejemplares.
            </p>
            </div>

            {/* Avatar */}
            <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-[#C1A461] overflow-hidden shadow-lg relative">
                <Image
                src="/avatar-placeholder.png"
                alt="Avatar"
                fill
                className="object-cover"
                />
            </div>
            </div>
        </header>

        {/* Form */}
        <section className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h3 className="text-xl font-serif text-[#002349] mb-6 border-b pb-2">
            Datos Personales
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Nombre Completo
                </label>
                <input
                type="text"
                defaultValue="Alejandro Domínguez"
                className="border-b border-gray-300 py-2 focus:border-[#002349] outline-none transition-colors"
                />
            </div>

            <div className="flex flex-col">
                <label className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                Correo Electrónico
                </label>
                <input
                type="email"
                defaultValue="alejandro@polo.com"
                className="border-b border-gray-300 py-2 focus:border-[#002349] outline-none transition-colors"
                />
            </div>
            </div>

            <button className="mt-8 rounded-xl bg-[#002349] text-white px-8 py-3 font-serif hover:bg-[#003366] transition-all shadow-md active:scale-95 uppercase tracking-widest text-sm hover:cursor-pointer hover:scale-105">
            Guardar Cambios
            </button>
        </section>

        {/* Métodos de Pago */}
        <section className="mt-12">
            <h3 className="text-xl font-serif text-[#002349] mb-6 border-b pb-2">
                Métodos de Pago
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { last4: '4242', brand: 'Visa', exp: '12/25', primary: true },
                    { last4: '8890', brand: 'Mastercard', exp: '09/24', primary: false }
                ].map((card, idx) => (
                    <div
                        key={idx}
                        className={`relative h-48 rounded-xl p-6 flex flex-col justify-between transition-all hover:scale-105 hover:cursor-pointer shadow-sm border ${
                            card.primary 
                            ? 'bg-[#002349] border-[#C1A461] text-white shadow-lg' 
                            : 'bg-white border-gray-200 text-[#002349]'
                        }`}
                    >
                        {card.primary && (
                            <span className="absolute top-4 right-4 bg-[#C1A461] text-white text-[9px] px-2 py-1 uppercase font-bold tracking-widest">
                                Principal
                            </span>
                        )}
                        
                        <div className="flex justify-between items-start mt-4">
                            <div className="w-10 h-8 bg-[#C1A461]/20 rounded-md flex items-center justify-center">
                                {/* Chip Icon Placeholder */}
                                <div className="w-6 h-4 border border-[#C1A461] rounded-sm opacity-50"></div>
                            </div>
                            <span className="font-serif italic text-lg opacity-80">{card.brand}</span>
                        </div>

                        <div>
                            <p className="tracking-[0.2em] text-sm mb-1">•••• •••• •••• {card.last4}</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] uppercase opacity-60 tracking-widest">Titular</p>
                                    <p className="font-serif text-sm">Alejandro Domínguez</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase opacity-60 tracking-widest">Exp</p>
                                    <p className="text-sm">{card.exp}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Botón Añadir Tarjeta */}
                <button className="h-48 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 hover:border-[#C1A461] hover:text-[#C1A461] hover:cursor-pointer hover:scale-105 transition-all bg-white/50">
                    <span className="text-3xl font-light">+</span>
                    <span className="text-xs uppercase tracking-widest mt-2 font-semibold">
                        Añadir Tarjeta
                    </span>
                </button>
            </div>
        </section>
        </div>
    </>
  )
}

export default PersonalInformation
