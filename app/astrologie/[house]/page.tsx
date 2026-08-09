import { redirect, notFound } from "next/navigation";

type Props = {
  params: {
    house: string;
  };
};

const VALID_HOUSES = [
  "maison-1",
  "maison-2",
  "maison-3",
  "maison-4",
  "maison-5",
  "maison-6",
  "maison-7",
  "maison-8",
  "maison-9",
  "maison-10",
  "maison-11",
  "maison-12",
] as const;

export default function OldHouseRedirect({ params }: Props) {
  if (!VALID_HOUSES.includes(params.house as (typeof VALID_HOUSES)[number])) {
    notFound();
  }

  redirect(`/fr/astrologie/maisons/${params.house}`);
}
