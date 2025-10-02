import { ContactForm } from "@/components/contact-form";
import { PageRenderer } from "@/components/page-renderer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogger | Contact Us",
};

export default async function Page() {
  return (
    <>
      <PageRenderer slug="contact" />
      <ContactForm />
    </>
  );
}
