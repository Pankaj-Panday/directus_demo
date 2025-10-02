import { getPageData } from "@/lib/directus";
import { Hero } from "./hero";
import { ImageText } from "./image-text";
import { CardGroup } from "./card-group";
import { FeaturedArticles } from "./featured-articles";
import { PageHeader } from "./page-header";

export const PageRenderer = async ({ slug }: { slug?: string }) => {
  const page = await getPageData(slug);
  return (
    <div>
      {page?.blocks?.map((block) => {
        switch (block.collection) {
          case "block_hero":
            return <Hero key={block.item.id} data={block.item} />;
          case "block_image_text":
            return <ImageText key={block.item.id} data={block.item} />;
          case "block_card_group":
            return <CardGroup key={block.item.id} data={block.item} />;
          case "block_featured_articles":
            return <FeaturedArticles key={block.item.id} data={block.item} />;
          case "block_page_header":
            return <PageHeader key={block.item.id} data={block.item} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
