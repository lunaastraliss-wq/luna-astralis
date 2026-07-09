import "./EssentialStyles.css";
import EssentialCover from "./EssentialCover";

type Props = {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
};

export default function EssentialReport(props: Props) {
  return (
    <div className="essential-report">
      <EssentialCover {...props} />
    </div>
  );
}
