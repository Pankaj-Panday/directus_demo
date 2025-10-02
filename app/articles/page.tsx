import { ArticleCard } from "@/components/article-card";
import { getAllArticles } from "@/lib/directus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogger | Articles",
};

export default async function Page() {
  const articles = await getAllArticles();
  return (
    <main className="bg-gray-50 px-4 sm:px-6 md:px-8 py-12 min-h-screen">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <h1 className="mb-8 font-bold text-gray-900 text-3xl sm:text-4xl">Articles</h1>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}
