import { PageRenderer } from "@/components/page-renderer";
import { getPageMetaData } from "@/lib/directus";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await getPageMetaData(slug);
  return {
    title: `Blogger | ${data?.title}`,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PageRenderer slug={slug} />;
}
