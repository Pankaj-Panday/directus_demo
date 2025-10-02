import { Footer as FooterType } from "@/types";

interface Footer {
  data: FooterType;
}

export const Footer = async ({ data }: Footer) => {
  return (
    <div className="py-10 border-gray-100 border-t">
      <p className="text-center">{data.content}</p>
    </div>
  );
};
