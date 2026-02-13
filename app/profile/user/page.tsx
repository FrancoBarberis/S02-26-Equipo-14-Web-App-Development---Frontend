"use client";
import { useState } from "react";

import PersonalInformation from "@/components/ui/profile/user/personal-information";
import MyOrders from "@/components/ui/profile/user/my-orders";
import NotFound from "@/app/not-found";
import MyStableManagement from "@/components/ui/profile/user/my-stable-management";
import MyFavorites from "@/components/ui/profile/user/favourites/my-favourites";
import UserAddress from "@/components/ui/profile/user/addresses/user-address";


const menuItems = [
  {
    name: "Información Personal", 
    component: <PersonalInformation />
  },
  {
    name: "Mis Pedidos", 
    component: <MyOrders />
  },
  {
    name: "Mi Establo", 
    component: <MyStableManagement />
  },
  {
    name: "Favoritos", 
    component: <MyFavorites />
  },
  {
    name: "Direcciones", 
    component: <UserAddress />
  },
];

const UserProfilePage = () => {

    const [clicked, setClicked] = useState("Información Personal");

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-[#002349] text-white hidden md:block">
                <div className="p-8">
                <h2 className="text-2xl font-serif italic border-b border-blue-800 pb-4">
                    Mi Cuenta
                </h2>
                </div>

                <nav className="mt-4">
                <ul>
                    {menuItems.map((item) => (
                    <li
                        key={item.name}
                        className={`px-8 py-4 hover:bg-[#003366] cursor-pointer transition-colors ${
                            clicked === item.name
                            ? "bg-[#003366] border-l-4 border-[#C1A461]"
                            : ""
                        }`}
                        onClick={() => {
                            setClicked(item.name);
                        }}
                    >
                        {item.name}
                    </li>
                    ))}
                </ul>
                </nav>
            </aside>

            {/* Main */}
            <main className="flex-1 p-8 md:p-12">
                {menuItems.find((item) => item.name === clicked)?.component || NotFound()}
            </main>
        </div>
    )
}

export default UserProfilePage
