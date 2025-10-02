import { BlockFeaturedArticles, FeaturedArticle } from "@/types";
import { ArticleCard } from "./article-card";

interface FeaturedArticlesProps {
  data: BlockFeaturedArticles;
}

export const FeaturedArticles = ({ data }: FeaturedArticlesProps) => {
  return (
    <section className="bg-gray-50 px-4 sm:px-8 md:px-16 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Heading + Description */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-900 text-3xl sm:text-4xl">{data.heading}</h2>
          {data.description && <p className="text-gray-600 text-lg">{data.description}</p>}
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.articles.slice(0, 3).map((featured: FeaturedArticle) => (
            <ArticleCard key={featured.articles_id.id} article={featured.articles_id} />
          ))}
        </div>
      </div>
    </section>
  );
};
