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

            <button className="mt-8 bg-[#002349] text-white px-8 py-3 font-serif hover:bg-[#003366] transition-all shadow-md active:scale-95 uppercase tracking-widest text-sm">
            Guardar Cambios
            </button>
        </section>

        {/* Stable */}
        <section className="mt-12">
            <h3 className="text-xl font-serif text-[#002349] mb-6">
            Mi Establo
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2].map((horse) => (
                <div
                key={horse}
                className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                <div className="h-40 bg-gray-200 relative">
                    <Image
                    src="/horse-placeholder.jpg"
                    alt="Caballo"
                    fill
                    className="object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-[#C1A461] text-white text-[10px] px-2 py-1 uppercase font-bold">
                    Pura Sangre
                    </span>
                </div>

                <div className="p-4">
                    <h4 className="font-serif text-lg text-[#002349]">
                    Noble Spirit
                    </h4>
                    <p className="text-sm text-gray-500 italic">
                    Macho - 5 años
                    </p>
                </div>
                </div>
            ))}

            <button className="border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-gray-400 hover:border-[#C1A461] hover:text-[#C1A461] transition-colors">
                <span className="text-3xl">+</span>
                <span className="text-xs uppercase tracking-widest mt-2">
                Añadir Caballo
                </span>
            </button>
            </div>
        </section>
        </div>
    </>
  )
}

export default PersonalInformation
