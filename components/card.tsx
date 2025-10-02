import Image from "next/image";
import { BlockCard } from "@/types";
import { getAssetUrl } from "@/lib/directus";

interface CardProps {
  data: BlockCard;
}

export const Card = ({ data }: CardProps) => {
  return (
    <div className="flex flex-col items-center bg-white shadow hover:shadow-lg p-4 rounded-lg text-center transition">
      {data.image && (
        <div className="relative mb-4 w-24 h-24">
          <Image
            src={getAssetUrl(data.image)}
            alt={data.title}
            width={96}
            height={96}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      )}
      <h3 className="mb-2 font-bold text-lg">{data.title}</h3>
      {data.description && <p className="text-gray-600 text-sm">{data.description}</p>}
    </div>
  );
};
