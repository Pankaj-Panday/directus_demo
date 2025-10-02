import { Navbar as NavbarType } from "@/types";
import Link from "next/link";

interface Navbar {
  data: NavbarType;
}

export const Navbar = async ({ data }: Navbar) => {
  const links = data?.nav_links?.map((link) => ({
    id: link.links_id.id,
    title: link.links_id.title,
    url: link.links_id.url,
  }));

  return (
    <nav className="top-0 z-50 sticky bg-white shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-gray-800 text-xl">
            {data.logo_text}
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-6">
            {links?.map((link) => (
              <Link key={link.id} href={link.url} className="font-medium text-gray-700 hover:text-gray-900">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
