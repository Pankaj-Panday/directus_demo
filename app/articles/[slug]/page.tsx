import { getArticleBySlug, getAssetUrl } from "@/lib/directus";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getArticleBySlug(slug);
  return {
    title: `Blogger | ${data?.title}`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="flex flex-col justify-center items-center mt-20 px-4 text-center">
        <h2 className="mb-4 font-bold text-gray-800 text-2xl">Article Not Found</h2>
        <p className="mb-6 text-gray-600">Sorry, the article you are looking for does not exist.</p>
        <Link href="/articles" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-white transition">
          ← Back to Articles
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto px-4 sm:px-6 md:px-8 py-12 max-w-4xl">
      <Link href="/articles" className="block mb-6 text-gray-600 text-sm hover:underline">
        ← Back to Articles
      </Link>

      {/* Category Badge */}
      {article.category && (
        <span className="inline-block bg-gray-100 mb-4 px-3 py-1 rounded-full font-medium text-gray-700 text-xs">
          {article.category.name}
        </span>
      )}

      {/* Title */}
      <h1 className="mb-6 font-bold text-3xl sm:text-4xl">{article.title}</h1>

      {/* Cover Image */}
      {article.cover_image && (
        <div className="mb-6 w-full">
          <Image
            src={getAssetUrl(article.cover_image)}
            alt={article.title}
            width={800}
            height={450}
            className="rounded-lg w-full h-48 sm:h-72 md:h-full max-h-[400px] object-cover"
          />
        </div>
      )}

      {/* Author */}
      {article.author && (
        <div className="flex items-center mb-6">
          {article.author.avatar && (
            <div className="mr-3 rounded-full w-10 h-10 overflow-hidden">
              <Image
                src={getAssetUrl(article.author.avatar)}
                alt={article.author.name}
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <p className="text-gray-600 text-sm">By {article.author.name}</p>
        </div>
      )}

      {/* Content */}
      <div
        className="max-w-none prose prose-sm sm:prose lg:prose-lg"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </main>
  );
}
