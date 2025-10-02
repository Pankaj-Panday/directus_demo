import { Article, Footer, Navbar, Page, PageMetaData } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL;

export function getAssetUrl(fileId: string) {
  return `${BASE_URL}/assets/${fileId}`;
}

export async function getNavData(): Promise<Navbar> {
  const res = await fetch(
    `${BASE_URL}/items/navbar?fields=logo_text,nav_links.links_id.title,nav_links.links_id.url,nav_links.links_id.id`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data.data[0];
}

export async function getFooter(): Promise<Footer> {
  const res = await fetch(`${BASE_URL}/items/footer`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.data;
}

export async function getPageMetaData(slug?: string): Promise<PageMetaData> {
  const res = await fetch(`${BASE_URL}/items/pages?[filter][slug][_eq]=/${slug || ""}&fields=title`, {
    next: { revalidate: 30 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch meta data");
  }
  const data = await res.json();
  return data.data[0];
}

export async function getPageData(slug?: string): Promise<Page> {
  const baseUrlForBlocks = `/items/pages?[filter][slug][_eq]=/${slug || ""}&fields=*,blocks.item.*,blocks.collection`;

  const urlForCardGroup = `blocks.item.cards.card_id.id,blocks.item.cards.card_id.title,blocks.item.cards.card_id.description,blocks.item.cards.card_id.image`;

  const urlForArticles = `blocks.item.articles.articles_id.id,blocks.item.articles.articles_id.title,blocks.item.articles.articles_id.slug,blocks.item.articles.articles_id.cover_image,blocks.item.articles.articles_id.author.name,blocks.item.articles.articles_id.author.avatar,blocks.item.articles.articles_id.category.name&_limit=2`;

  const url = `${baseUrlForBlocks},${urlForCardGroup},${urlForArticles}`;
  const res = await fetch(`${BASE_URL}${url}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data[0];
}

export async function getAllArticles(): Promise<Omit<Article, "content">[]> {
  const res = await fetch(
    `${BASE_URL}/items/articles?fields=id,title,cover_image,category.name,author.avatar,author.name,slug`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data;
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const res = await fetch(
    `${BASE_URL}/items/articles?[filter][slug][_eq]=${slug}&fields=id,title,cover_image,category.name,author.avatar,author.name,content`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.data[0];
}
