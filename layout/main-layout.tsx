import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getFooter, getNavData } from "@/lib/directus";

export const MainLayout = async ({ children }) => {
  const [navData, footerData] = await Promise.all([getNavData(), getFooter()]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar data={navData} />
      <div className="flex-1">{children}</div>
      <Footer data={footerData} />
    </div>
  );
};
