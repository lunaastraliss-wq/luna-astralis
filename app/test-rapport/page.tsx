import EssentialReport from "@/components/reports/Essential/EssentialReport";

export default function Page() {
  return (
    <EssentialReport
      name="Marie Tremblay"
      birthDate="17 novembre 1970"
      birthTime="21 h 36"
      birthPlace="Québec, Canada"
      planets={[]}
      angles={{}}
    />
  );
}
