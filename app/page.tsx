import { PageRenderer } from "@/components/page-renderer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogger | Home",
};

export default async function Home() {
  return <PageRenderer />;
}
