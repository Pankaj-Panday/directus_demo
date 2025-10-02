import Image from "next/image";
import { BlockImageText } from "@/types";
import { getAssetUrl } from "@/lib/directus";

export const ImageText = ({ data }: { data: BlockImageText }) => {
  const isLeft = data.image_position === "left";

  return (
    <section className="bg-gray-50 px-4 sm:px-8 md:px-16 py-16">
      <div
        className={`max-w-6xl mx-auto flex flex-col ${
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-8`}
      >
        {/* Image */}
        {data.image && (
          <div className="relative flex-shrink-0 w-full md:w-1/2 h-80 md:h-96">
            <Image
              src={getAssetUrl(data.image)}
              alt={data.heading}
              width={600}
              height={400}
              className="shadow-lg rounded-lg w-full h-full object-cover"
              priority={true} // optional, for above-the-fold images
            />
          </div>
        )}

        {/* Text */}
        <div className="w-full md:w-1/2">
          <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl">{data.heading}</h2>
          {data.content && <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{data.content}</p>}
        </div>
      </div>
    </section>
  );
};
