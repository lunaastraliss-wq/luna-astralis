import type { NatalOffer } from "./types";
import { NATAL_OFFERS } from "./offers";

type Props = {
  offer: NatalOffer;
  firstName: string;
};

export default function ReportHeader({ offer, firstName }: Props) {
  const data = NATAL_OFFERS[offer];

  return (
    <div className="natal-report-header">
      <div className="natal-report-badge">{data.badge}</div>

      <h1>
        {data.title} de {firstName}
      </h1>

      <p>{data.subtitle}</p>

      <div className="natal-report-price">{data.price}</div>
    </div>
  );
}
