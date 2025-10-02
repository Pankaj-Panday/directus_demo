export interface Author {
  name: string;
  avatar?: string;
}

export interface Category {
  name: string;
}

export interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  cover_image?: string;
  author?: Author;
  category?: Category;
}

export interface FeaturedArticle {
  articles_id: Omit<Article, "content">;
}

export interface NavigationLink {
  id: string;
  title: string;
  url: string;
}

export interface Navbar {
  logo_text: string;
  nav_links: {
    links_id: NavigationLink;
  }[];
}

export interface Footer {
  id: string;
  content: string;
}

export interface BlockHero {
  id: string;
  sort: number | null;
  title: string;
  subtitle?: string;
  bg_image?: string;
  cta_text?: string;
  cta_link?: string;
}

export interface BlockImageText {
  id: string;
  sort: number | null;
  heading: string;
  content?: string;
  image?: string;
  image_position?: "left" | "right";
}

export interface BlockCard {
  id: string;
  title: string;
  description?: string;
  image?: string;
}

export interface BlockCardGroup {
  id: string;
  heading: string;
  description?: string;
  cards: { card_id: BlockCard }[];
}

export interface BlockFeaturedArticles {
  id: string;
  heading: string;
  description: string;
  articles: FeaturedArticle[];
}

export interface BlockPageHeader {
  id: string;
  heading: string;
  bg_image?: string;
}

export type PageBlock =
  | { collection: "block_hero"; item: BlockHero }
  | { collection: "block_image_text"; item: BlockImageText }
  | { collection: "block_card_group"; item: BlockCardGroup }
  | { collection: "block_featured_articles"; item: BlockFeaturedArticles }
  | { collection: "block_page_header"; item: BlockPageHeader };

export interface Page {
  id: string;
  status: "published" | "draft" | "archived" | string;
  title: string;
  slug: string;
  blocks: PageBlock[];
}

export interface PageMetaData {
  title: string;
}
