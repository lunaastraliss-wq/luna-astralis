import { redirect, notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";

type Props = {
  params: {
    locale: string;
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

export default function OldLocalizedHouseRedirect({ params }: Props) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  if (!VALID_HOUSES.includes(params.house as (typeof VALID_HOUSES)[number])) {
    notFound();
  }

  redirect(`/${params.locale}/astrologie/maisons/${params.house}`);
}
