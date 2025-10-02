import { BlockCardGroup } from "@/types";
import { Card } from "./card";

interface CardGroupProps {
  data: BlockCardGroup;
}

export const CardGroup = ({ data }: CardGroupProps) => {
  return (
    <section className="mx-auto my-12 max-xl:px-4 max-w-7xl">
      <div className="mb-8 text-center">
        <h2 className="font-bold text-3xl">{data.heading}</h2>
        {data.description && <p className="mt-2 text-gray-600">{data.description}</p>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.cards.map((c) => (
          <Card key={c.card_id.id} data={c.card_id} />
        ))}
      </div>
    </section>
  );
};
