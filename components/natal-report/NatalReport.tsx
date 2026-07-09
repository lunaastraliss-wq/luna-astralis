import type { NatalOffer, NatalReportData } from "./types";
import { NATAL_OFFERS } from "./offers";
import ReportHeader from "./ReportHeader";
import ReportSection from "./ReportSection";

type Props = {
  offer: NatalOffer;
  data: NatalReportData;
};

export default function NatalReport({ offer, data }: Props) {
  const selectedOffer = NATAL_OFFERS[offer];

  return (
    <article className={`natal-report natal-report-${offer}`}>
      <ReportHeader offer={offer} firstName={data.firstName} />

      <ReportSection title="Informations de naissance">
        <p><strong>Date :</strong> {data.birthDate}</p>
        <p><strong>Heure :</strong> {data.birthTime}</p>
        <p><strong>Ville :</strong> {data.birthCity}</p>
      </ReportSection>

      {selectedOffer.sections.map((section) => (
        <ReportSection key={section} title={section}>
          <p>
            Cette section sera générée automatiquement selon les données
            astrologiques de {data.firstName}.
          </p>
        </ReportSection>
      ))}
    </article>
  );
}
