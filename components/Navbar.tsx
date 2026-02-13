/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import type { SessionUser, Role } from "@/stores/auth-store";
import {
    Menu,
    User,
    ShoppingCart,
    Search,
    Armchair,
    Link2,
    Footprints,
    FlaskConical,
    Shirt,
    LifeBuoy,
    Mail,
    Activity,
    FileText,
    Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { useAuthStore } from "@/stores/auth-store";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface Navbar1Props {
    className?: string;
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
        className?: string;
    };
    menu?: MenuItem[];
    auth?: {
        login: { title: string; url: string };
        signup: { title: string; url: string };
    };
}

const Navbar1 = ({
    logo = {
        url: "/",
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
        alt: "logo",
        title: "EquusShop",
    },
    menu = [
        { title: "Home", url: "/" },
        {
            title: "Productos",
            url: "#",
            items: [
                {
                    title: "Monturas",
                    description: "Sillas, cinchas y accesorios de montura",
                    icon: <Armchair className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Bridones",
                    description: "Bocados y cabezadas",
                    icon: <Link2 className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Estribos",
                    description: "Estribos y accesorios",
                    icon: <Footprints className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Comida / Suplementos",
                    description: "Vitaminas y suplementos nutricionales",
                    icon: <FlaskConical className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Ropa técnica",
                    description: "Indumentaria para entrenamiento y competición",
                    icon: <Shirt className="size-5 shrink-0" />,
                    url: "#",
                },
            ],
        },
        {
            title: "Resources",
            url: "#",
            items: [
                {
                    title: "Help Center",
                    description: "Respuestas a preguntas frecuentes",
                    icon: <LifeBuoy className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Contact Us",
                    description: "Soporte y consultas",
                    icon: <Mail className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Status",
                    description: "Estado de servicios y APIs",
                    icon: <Activity className="size-5 shrink-0" />,
                    url: "#",
                },
                {
                    title: "Terms of Service",
                    description: "Términos y condiciones",
                    icon: <FileText className="size-5 shrink-0" />,
                    url: "#",
                },
            ],
        },
    ],
    auth = {
        login: { title: "Login", url: "/login" },
        signup: { title: "Sign up", url: "/signup" },
    },
    className,
}: Navbar1Props) => {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
    const logout = useAuthStore((s) => s.logout);
    // (opcional)
    
    return (
        <section className={cn("py-4 px-5", className)}>
            <div className="container w-full">
                {/* Desktop Menu */}
                <nav className="hidden items-center justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <a href={logo.url} className="flex items-center gap-2">
                            <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
                            <span className="text-lg font-semibold tracking-tighter">
                                {logo.title}
                            </span>
                        </a>

                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {menu.map((item) => renderMenuItem(item))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>

                    {/* Acciones derechas */}
                    <div className="absolute right-5 flex items-center gap-2">
                        <Button variant="ghost" size="icon" aria-label="Buscar">
                            <Search className="size-5" />
                        </Button>

                        <Button asChild variant="ghost" size="icon" aria-label="Favoritos">
                            <Link href="/wishlist">
                                <Heart className="size-5" />
                            </Link>
                        </Button>

                        {/* Cuenta */}
                        {isAuthenticated ? (
                            <>
                                <Button asChild variant="ghost" size="icon" aria-label="Mi cuenta">
                                    <Link href="/account">
                                        <User className="size-5" />
                                    </Link>
                                </Button>
                                <Button asChild size="icon" aria-label="Carrito">
                                    <Link href="/cart">
                                        <ShoppingCart className="size-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="sm" onClick={logout}>
                                    Cerrar sesión
                                </Button>
                            </>
                        ) : (
                            <>
                                {/* No autenticado → mostrar Login / Sign up */}
                                <Button asChild variant="outline" size="sm">
                                    <Link href={auth.login.url}>{auth.login.title}</Link>
                                </Button>
                                <Button asChild size="sm">
                                    <Link href={auth.signup.url}>{auth.signup.title}</Link>
                                </Button>
                            </>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block w-full lg:hidden">
                    <div className="inner-container w-full flex items-center justify-between">
                        {/* Logo */}
                        <a href={logo.url} className="flex items-center gap-2">
                            <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
                        </a>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" aria-label="Abrir menú">
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>

                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <a href={logo.url} className="flex items-center gap-2">
                                            <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
                                        </a>
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                                        {menu.map((item) => renderMobileMenuItem(item))}
                                    </Accordion>

                                    {/* Auth en mobile */}
                                    <div className="flex flex-col gap-3">
                                        {isAuthenticated ? (
                                            <>
                                                <Button asChild variant="outline">
                                                    <Link href="/account">Mi cuenta</Link>
                                                </Button>
                                                <Button asChild>
                                                    <Link href="/cart">Ir al carrito</Link>
                                                </Button>
                                                <Button variant="outline" onClick={logout}>
                                                    Cerrar sesión
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <Button asChild variant="outline">
                                                    <Link href={auth.login.url}>{auth.login.title}</Link>
                                                </Button>
                                                <Button asChild>
                                                    <Link href={auth.signup.url}>{auth.signup.title}</Link>
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover text-popover-foreground">
                    {item.items.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.title} className="w-80">
                            <SubMenuLink item={subItem} />
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <a key={item.title} href={item.url} className="text-md font-semibold">
            {item.title}
        </a>
    );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
        <a
            className="flex min-w-80 flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
            href={item.url}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold">{item.title}</div>
                {item.description && (
                    <p className="text-sm leading-snug text-muted-foreground">{item.description}</p>
                )}
            </div>
        </a>
    );
};

export { Navbar1 };