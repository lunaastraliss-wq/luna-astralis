export type PremiumPlanetSignContent = {
  energy: string;
};

export type PremiumPlanetSignTexts = Record<
  string,
  Record<string, PremiumPlanetSignContent>
>;

export const PREMIUM_PLANET_SIGN_TEXTS: PremiumPlanetSignTexts = {
  Sun: {
    Aries: {
      energy:
        "Votre Soleil en Bélier révèle une personnalité animée par le besoin d’avancer, d’initier et de se mesurer directement à la vie. Vous développez votre identité en agissant, en prenant des décisions et en explorant des chemins qui n’ont pas encore été tracés. Votre volonté se renforce lorsque vous sentez que vous disposez d’une réelle liberté d’action. Vous possédez naturellement une énergie franche et mobilisatrice, capable de transformer rapidement une intention en mouvement. Votre défi consiste moins à trouver le courage de commencer qu’à apprendre à maintenir votre engagement lorsque l’enthousiasme des débuts diminue.",
    },

    Taurus: {
      energy:
        "Votre Soleil en Taureau révèle une personnalité qui cherche à construire une vie stable, cohérente et profondément enracinée dans ses valeurs. Vous avancez généralement avec prudence, mais votre détermination devient remarquable lorsque vous savez précisément ce que vous souhaitez préserver ou développer. Votre identité se consolide à travers les réalisations concrètes, la continuité et la capacité à créer une sécurité durable. Vous avez besoin de temps pour intégrer les changements et accorder votre confiance, mais cette lenteur apparente cache souvent une grande force de résistance. Votre rayonnement s’affirme lorsque vous acceptez d’évoluer sans renoncer à ce qui constitue votre véritable base intérieure.",
    },

    Gemini: {
      energy:
        "Votre Soleil en Gémeaux révèle une personnalité curieuse, adaptable et naturellement stimulée par les idées, les échanges et la découverte. Vous construisez votre identité en observant le monde sous plusieurs angles, en posant des questions et en établissant des liens entre des informations parfois très différentes. Votre vivacité mentale vous permet de comprendre rapidement les situations et d’ajuster votre manière de communiquer selon vos interlocuteurs. Vous avez besoin de mouvement intellectuel pour vous sentir pleinement vivant. Votre potentiel se développe lorsque vous dépassez la simple accumulation d’idées afin de choisir les connaissances, les relations et les projets auxquels vous souhaitez donner une véritable continuité.",
    },

    Cancer: {
      energy:
        "Votre Soleil en Cancer révèle une personnalité sensible, protectrice et profondément influencée par la mémoire émotionnelle. Vous construisez votre identité à travers les liens de confiance, le sentiment d’appartenance et la possibilité de prendre soin de ce qui compte réellement pour vous. Derrière une certaine réserve peut se trouver une volonté particulièrement tenace, surtout lorsqu’il s’agit de défendre vos proches, votre foyer ou votre sécurité intérieure. Vous percevez souvent les besoins et les ambiances avant qu’ils soient clairement exprimés. Votre rayonnement devient plus stable lorsque vous apprenez à honorer votre sensibilité sans laisser les réactions du passé déterminer automatiquement vos choix présents.",
    },

    Leo: {
      energy:
        "Votre Soleil en Lion révèle une personnalité créative, expressive et naturellement appelée à occuper une place visible dans son environnement. Vous développez votre identité en donnant une forme personnelle à vos idées, en partageant ce qui vous passionne et en assumant progressivement ce qui vous distingue. Votre chaleur, votre générosité et votre capacité à encourager les autres peuvent faire de vous une présence inspirante. Vous avez besoin de sentir que votre contribution est reconnue, mais votre véritable confiance ne peut dépendre uniquement du regard extérieur. Votre lumière devient plus puissante lorsque vous créez et dirigez par conviction, plutôt que pour obtenir constamment l’approbation de votre entourage.",
    },

    Virgo: {
      energy:
        "Votre Soleil en Vierge révèle une personnalité attentive, lucide et orientée vers l’amélioration de ce qui l’entoure. Vous construisez votre identité à travers la compétence, la précision et le sentiment de pouvoir apporter une contribution réellement utile. Votre esprit remarque facilement les détails, les incohérences et les ajustements nécessaires pour rendre une situation plus efficace. Cette capacité d’analyse constitue une force importante, mais elle peut également vous amener à mesurer votre valeur selon des critères excessivement exigeants. Votre rayonnement s’affirme lorsque vous reconnaissez que la maîtrise ne vient pas de la perfection, mais d’une progression consciente, patiente et suffisamment respectueuse de vos limites.",
    },

    Libra: {
      energy:
        "Votre Soleil en Balance révèle une personnalité qui cherche naturellement l’équilibre, la justesse et la qualité des relations. Vous construisez votre identité à travers les échanges, la coopération et la possibilité de créer davantage d’harmonie autour de vous. Votre capacité à comprendre plusieurs points de vue vous rend souvent diplomate et attentive aux conséquences de vos décisions sur les autres. Cependant, ce désir d’équilibre peut parfois rendre plus difficile l’affirmation claire de vos propres préférences. Votre volonté devient plus solide lorsque vous comprenez que préserver l’harmonie ne signifie pas éviter toute tension, mais apprendre à exprimer vos besoins avec respect, cohérence et courage.",
    },

    Scorpio: {
      energy:
        "Votre Soleil en Scorpion révèle une personnalité qui cherche naturellement à comprendre ce qui se cache derrière les apparences. Vous avancez rarement de façon superficielle : vous préférez explorer, transformer et donner du sens à ce que vous vivez. Votre volonté devient particulièrement forte lorsque vous poursuivez un objectif qui vous passionne réellement. Vous possédez une grande capacité d’observation et percevez souvent les motivations, les tensions ou les non-dits que les autres ne remarquent pas immédiatement. Votre rayonnement s’intensifie lorsque vous utilisez cette profondeur pour créer, guérir ou reconstruire, plutôt que pour maintenir un contrôle permanent sur ce qui pourrait vous rendre vulnérable.",
    },

    Sagittarius: {
      energy:
        "Votre Soleil en Sagittaire révèle une personnalité animée par le besoin d’élargir ses horizons et de donner une direction significative à son existence. Vous construisez votre identité à travers l’exploration, l’apprentissage et les expériences qui remettent en question vos anciennes limites. Votre enthousiasme peut transmettre aux autres une confiance nouvelle et une envie d’avancer. Vous avez besoin de sentir que votre vie mène quelque part et qu’elle reste ouverte à de nouvelles possibilités. Votre potentiel se développe lorsque vous reliez votre vision à des engagements concrets, en évitant que le désir de liberté ou la recherche d’un nouvel horizon vous éloigne trop rapidement de ce qui mérite d’être approfondi.",
    },

    Capricorn: {
      energy:
        "Votre Soleil en Capricorne révèle une personnalité déterminée à construire quelque chose de durable et à gagner progressivement la maîtrise de sa trajectoire. Vous développez votre identité à travers la responsabilité, l’effort et la capacité à transformer une ambition en réalisation concrète. Vous possédez souvent une grande endurance ainsi qu’une conscience précoce des exigences de la vie. Cette maturité peut toutefois vous amener à porter davantage que ce qui vous appartient ou à croire que votre valeur dépend uniquement de vos résultats. Votre rayonnement devient plus naturel lorsque vous autorisez votre ambition à coexister avec la sensibilité, le repos et la reconnaissance de ce qui est déjà accompli.",
    },

    Aquarius: {
      energy:
        "Votre Soleil en Verseau révèle une personnalité indépendante, inventive et naturellement portée à remettre en question les modèles devenus trop étroits. Vous construisez votre identité en développant une vision personnelle du monde et en recherchant des façons différentes de penser, de créer ou de contribuer. Votre capacité à prendre du recul vous permet souvent de percevoir des solutions que d’autres ne considèrent pas encore. Vous avez besoin d’authenticité et d’espace pour ne pas vous sentir enfermé dans des attentes collectives. Votre rayonnement s’affirme lorsque votre originalité devient une force de connexion et de progrès, plutôt qu’une manière de vous protéger de l’intimité ou de la vulnérabilité.",
    },

    Pisces: {
      energy:
        "Votre Soleil en Poissons révèle une personnalité réceptive, imaginative et profondément sensible aux dimensions émotionnelles de l’existence. Vous construisez votre identité à travers l’intuition, la compassion, la créativité et la capacité à percevoir ce qui échappe parfois aux explications rationnelles. Votre souplesse intérieure vous permet de comprendre des réalités très différentes, mais elle peut aussi rendre vos propres limites moins faciles à reconnaître. Vous avez besoin d’un espace où votre sensibilité peut devenir une source d’inspiration plutôt qu’une surcharge. Votre rayonnement se renforce lorsque vous donnez une forme concrète à votre monde intérieur et que vous protégez votre énergie sans fermer votre cœur.",
    },
  },
};

export function getPremiumPlanetSignContent(
  planet: string,
  sign: string
): PremiumPlanetSignContent | null {
  const planetContent =
    PREMIUM_PLANET_SIGN_TEXTS[planet];

  if (!planetContent) {
    return null;
  }

  return planetContent[sign] || null;
}
