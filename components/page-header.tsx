import { getAssetUrl } from "@/lib/directus";
import { BlockPageHeader } from "@/types";
import Image from "next/image";

export const PageHeader = ({ data }: { data: BlockPageHeader }) => {
  return (
    <header className="relative flex justify-center items-center bg-gray-100 w-full h-48 md:h-72">
      {data.bg_image && (
        <Image
          src={getAssetUrl(data.bg_image)}
          alt={data.heading}
          width={1920}
          height={480}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <h1 className="z-10 relative font-bold text-white text-3xl sm:text-5xl text-center">{data.heading}</h1>
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </header>
  );
};
