import Image from "next/image";
import { getAssetUrl } from "@/lib/directus";
import { Article } from "@/types";
import Link from "next/link";

interface ArticleCardProps {
  article: Omit<Article, "content">;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="flex flex-col bg-white shadow hover:shadow-lg rounded-lg overflow-hidden transition">
      {/* Cover Image */}
      {article.cover_image && (
        <div className="w-full">
          <Image
            src={getAssetUrl(article.cover_image)}
            alt={article.title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 items-start p-4">
        {/* Category Badge */}
        {article.category && (
          <span className="inline-block bg-gray-100 mb-3 px-3 py-1 rounded-full font-medium text-gray-700 text-xs">
            {article.category.name}
          </span>
        )}

        <h3 className="mb-2 font-semibold text-gray-900 text-lg line-clamp-2">{article.title}</h3>

        {article.author && <p className="mb-4 text-gray-500 text-sm">By {article.author.name}</p>}

        <Link href={`/articles/${article.slug}`} className="mt-auto font-medium text-blue-600 hover:underline">
          Read more →
        </Link>
      </div>
    </article>
  );
};
