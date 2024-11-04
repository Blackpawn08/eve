"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  BuildingOfficeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useAuthUser from "../hooks/use-auth-users";

export default function NavLinks() {
  const user = useAuthUser();
  const links = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    {
      name: "Categories",
      href: "/dashboard/category",
      icon: DocumentDuplicateIcon,
    },
    { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
    { name: "Cart", href: "/dashboard/cart", icon: ShoppingCartIcon },
  ];

  const pathname = usePathname();
  if (user && user.isAdmin) {
    links.push({
      name: "Admin Area",
      href: "/dashboard/admins",
      icon: BuildingOfficeIcon,
    });
  }
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              pathname === link.href ? "bg-sky-100 text-blue-600" : ""
            }`}
          >
            <LinkIcon className="h-5 w-5 mr-3" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
