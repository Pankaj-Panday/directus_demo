import { getAssetUrl } from "@/lib/directus";
import { BlockHero } from "@/types";

export const Hero = ({ data }: { data: BlockHero }) => {
  return (
    <section
      className="relative flex justify-center items-center bg-gray-900 h-[80vh] overflow-hidden text-white"
      style={{
        backgroundImage: data.bg_image ? `url(${getAssetUrl(data.bg_image)})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="z-10 relative px-4 sm:px-8 md:px-16 max-w-4xl text-center">
        <h1 className="mb-4 font-bold text-4xl sm:text-5xl md:text-6xl">{data.title}</h1>
        {data.subtitle && <p className="mb-6 text-gray-200 text-lg sm:text-xl md:text-2xl">{data.subtitle}</p>}
        {data.cta_text && data.cta_link && (
          <a
            href={data.cta_link}
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium text-white transition-colors duration-300"
          >
            {data.cta_text}
          </a>
        )}
      </div>

      {/* Optional decorative shapes */}
      <div className="bottom-0 left-0 absolute bg-gradient-to-t from-gray-900 to-transparent w-full h-32"></div>
    </section>
  );
};
