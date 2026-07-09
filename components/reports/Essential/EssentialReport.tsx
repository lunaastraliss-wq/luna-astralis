import "./EssentialStyles.css";

import EssentialCover from "./EssentialCover";
import EssentialWelcome from "./EssentialWelcome";
import EssentialSummary from "./EssentialSummary";
import EssentialPlanet from "./EssentialPlanet";
import EssentialElements from "./EssentialElements";
import EssentialModalities from "./EssentialModalities";
import EssentialConclusion from "./EssentialConclusion";

type Props = {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  planets: any[];
  angles: any;
};

export default function EssentialReport(props: Props) {
  return (
    <div className="essential-report">

      <EssentialCover
        name={props.name}
        birthDate={props.birthDate}
        birthTime={props.birthTime}
        birthPlace={props.birthPlace}
      />

      <EssentialWelcome />

      <EssentialSummary
        planets={props.planets}
        angles={props.angles}
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Sun"
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Moon"
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Mercury"
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Venus"
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Mars"
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Jupiter"
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Saturn"
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Uranus"
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Neptune"
      />

      <EssentialPlanet
        planets={props.planets}
        planet="Pluto"
      />

      <EssentialElements
        planets={props.planets}
      />

      <EssentialModalities
        planets={props.planets}
      />

      <EssentialConclusion />

    </div>
  );
}
