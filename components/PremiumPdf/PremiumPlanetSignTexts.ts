export type PremiumPlanetSignContent = {
  energy: string;
};

export type PremiumPlanetSignTexts = Record<
  string,
  Record<
    string,
    PremiumPlanetSignContent
  >
>;

export const PREMIUM_PLANET_SIGN_TEXTS: PremiumPlanetSignTexts =
  {
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

    Moon: {
      Aries: {
        energy:
          "Votre Lune en Bélier révèle une vie émotionnelle vive, spontanée et profondément liée au besoin d’agir. Vous ressentez rapidement ce qui se passe et vos réactions peuvent apparaître avec franchise avant même que vous ayez eu le temps de les analyser. Vous retrouvez votre équilibre lorsque vous pouvez exprimer ce que vous ressentez, reprendre l’initiative et sentir que vous conservez une liberté intérieure. Votre courage émotionnel vous permet souvent de rebondir après les périodes difficiles. Cependant, l’impatience ou la colère peuvent parfois masquer une sensibilité plus vulnérable. Votre sécurité intérieure se renforce lorsque vous apprenez à accueillir vos émotions avant de les transformer immédiatement en action.",
      },

      Taurus: {
        energy:
          "Votre Lune en Taureau révèle un monde émotionnel stable, sensuel et profondément attaché à la continuité. Vous avez besoin de repères fiables, d’un environnement apaisant et de relations dans lesquelles la confiance peut se construire progressivement. Votre calme naturel vous permet souvent d’apporter une présence rassurante aux autres, même lorsque vous traversez vous-même une période d’incertitude. Vous êtes sensible au confort, aux rythmes réguliers et aux plaisirs simples qui vous reconnectent à votre corps. Toutefois, votre besoin de sécurité peut vous pousser à conserver une situation devenue insatisfaisante. Votre équilibre grandit lorsque vous acceptez le changement sans croire qu’il menace nécessairement votre stabilité.",
      },

      Gemini: {
        energy:
          "Votre Lune en Gémeaux révèle une vie émotionnelle mobile, curieuse et étroitement liée au besoin de comprendre ce que vous ressentez. Vous cherchez souvent à mettre des mots sur vos émotions, à les partager ou à les examiner sous différents angles afin de retrouver une impression de clarté. Les échanges, les idées nouvelles et la diversité des expériences contribuent fortement à votre équilibre intérieur. Votre adaptabilité vous aide à traverser rapidement certaines variations d’humeur, mais elle peut aussi vous amener à rester dans l’analyse plutôt qu’à vivre pleinement une émotion. Votre sécurité se consolide lorsque votre intelligence devient un moyen d’accueillir votre sensibilité plutôt que de vous en éloigner.",
      },

      Cancer: {
        energy:
          "Votre Lune en Cancer révèle une sensibilité profonde, intuitive et fortement influencée par la mémoire émotionnelle. Vous ressentez les ambiances, les besoins et les changements de ton avec une grande finesse, parfois avant même qu’ils soient exprimés clairement. Votre sécurité intérieure dépend beaucoup de la qualité de vos liens, du sentiment d’appartenance et de la possibilité de vous retirer dans un espace protecteur. Vous possédez une capacité naturelle à nourrir, rassurer et soutenir les personnes que vous aimez. Cependant, vous pouvez aussi absorber les émotions des autres ou rester attaché à certaines blessures anciennes. Votre équilibre grandit lorsque vous protégez votre sensibilité sans laisser le passé gouverner le présent.",
      },

      Leo: {
        energy:
          "Votre Lune en Lion révèle un monde émotionnel chaleureux, généreux et animé par le besoin de se sentir reconnu avec sincérité. Vous recherchez des relations dans lesquelles votre affection, votre créativité et votre présence peuvent être accueillies pleinement. Lorsque vous vous sentez apprécié, vous offrez naturellement de la chaleur, du courage et une grande loyauté. Votre fierté émotionnelle peut toutefois rendre plus difficile l’expression de certaines fragilités ou la reconnaissance d’un besoin de réconfort. Vous pouvez parfois chercher à paraître fort alors que vous aimeriez simplement être rassuré. Votre sécurité intérieure se développe lorsque vous vous accordez une valeur stable, indépendante de l’attention ou de l’approbation extérieure.",
      },

      Virgo: {
        energy:
          "Votre Lune en Vierge révèle une sensibilité discrète, attentive et souvent orientée vers le besoin de comprendre, d’organiser ou d’améliorer ce qui vous entoure. Vous exprimez fréquemment votre affection par les gestes utiles, la disponibilité et l’attention portée aux détails. Votre équilibre émotionnel dépend d’un certain ordre intérieur et d’un sentiment de compétence dans votre quotidien. Cependant, vous pouvez analyser vos émotions avec une telle exigence que vous finissez par les juger plutôt que par les accueillir. Une inquiétude persistante peut apparaître lorsque tout ne semble pas parfaitement maîtrisé. Votre sécurité grandit lorsque vous acceptez que vos besoins méritent du soin, même lorsqu’ils ne sont ni logiques ni parfaitement formulés.",
      },

      Libra: {
        energy:
          "Votre Lune en Balance révèle un monde émotionnel profondément sensible à la qualité des relations, à l’équilibre et à l’atmosphère qui vous entoure. Vous recherchez naturellement la coopération, la douceur et la possibilité de résoudre les tensions avec respect. Votre capacité à percevoir plusieurs points de vue vous rend attentive aux besoins des autres et souvent habile pour apaiser les conflits. Cependant, vous pouvez hésiter à reconnaître vos propres désirs lorsque vous craignez de déstabiliser une relation. Le besoin d’harmonie peut alors vous éloigner de ce que vous ressentez véritablement. Votre sécurité intérieure se renforce lorsque vous comprenez qu’une relation authentique peut supporter le désaccord et l’expression claire de vos limites.",
      },

      Scorpio: {
        energy:
          "Votre Lune en Scorpion révèle une vie émotionnelle intense, lucide et rarement superficielle. Vous ressentez profondément les liens, les changements de loyauté et les tensions invisibles qui traversent les relations. Votre intuition vous permet souvent de percevoir ce que les autres tentent de dissimuler, mais cette sensibilité peut aussi nourrir la méfiance lorsque vous craignez d’être trahi ou exposé. Vous avez besoin de liens sincères dans lesquels la confiance se construit à travers la profondeur, la constance et la vérité. Votre pouvoir de régénération est considérable. Votre sécurité intérieure grandit lorsque vous acceptez la vulnérabilité comme une forme de courage plutôt que comme une perte de contrôle.",
      },

      Sagittarius: {
        energy:
          "Votre Lune en Sagittaire révèle un monde émotionnel optimiste, mobile et nourri par le besoin d’espace, de sens et de nouvelles perspectives. Vous retrouvez souvent votre équilibre lorsque vous pouvez prendre du recul, apprendre quelque chose ou vous projeter vers un horizon plus vaste. Votre enthousiasme vous aide à traverser les difficultés en recherchant les possibilités de croissance qu’elles contiennent. Cependant, vous pouvez parfois minimiser une émotion inconfortable ou vous éloigner trop rapidement d’une situation qui demanderait davantage de présence. Votre sécurité intérieure se renforce lorsque votre besoin de liberté ne devient pas une fuite, mais une manière consciente de retrouver une direction qui vous ressemble.",
      },

      Capricorn: {
        energy:
          "Votre Lune en Capricorne révèle une sensibilité contenue, responsable et souvent plus profonde qu’elle ne le paraît. Vous cherchez à conserver votre maîtrise émotionnelle et pouvez avoir appris très tôt à répondre aux exigences de la vie avant d’exprimer vos propres besoins. Votre sécurité intérieure se construit à travers la fiabilité, l’autonomie et la capacité à produire des résultats concrets. Les autres peuvent vous percevoir comme solide, même lorsque vous traversez intérieurement une période de fatigue ou de doute. Vous pouvez avoir du mal à demander du soutien. Votre équilibre grandit lorsque vous reconnaissez que la vulnérabilité, le repos et la tendresse ne diminuent pas votre force, mais lui donnent une base plus humaine.",
      },

      Aquarius: {
        energy:
          "Votre Lune en Verseau révèle un monde émotionnel indépendant, original et souvent observé avec une certaine distance intérieure. Vous avez besoin d’espace pour comprendre ce que vous ressentez sans vous sentir envahi par les attentes ou les réactions des autres. Votre sécurité dépend fortement de votre liberté d’être différent et de créer des liens fondés sur l’amitié, le respect et la stimulation intellectuelle. Vous pouvez offrir une présence ouverte et non jugeante, mais il vous arrive aussi de rationaliser vos émotions lorsqu’elles deviennent trop intenses. Votre équilibre se renforce lorsque vous permettez à votre sensibilité de rester vivante sans croire qu’elle menace votre autonomie ou votre lucidité.",
      },

      Pisces: {
        energy:
          "Votre Lune en Poissons révèle une sensibilité extrêmement réceptive, imaginative et ouverte aux atmosphères émotionnelles de votre environnement. Vous ressentez souvent ce qui ne se dit pas et pouvez absorber les états intérieurs des autres sans toujours distinguer clairement ce qui vous appartient. Votre compassion, votre intuition et votre capacité à comprendre la souffrance humaine constituent de grandes forces. Vous avez besoin de solitude, de créativité ou de spiritualité pour retrouver votre centre. Cependant, le flou émotionnel peut parfois vous fatiguer ou vous conduire à éviter les réalités trop douloureuses. Votre sécurité intérieure grandit lorsque vous protégez vos limites tout en préservant votre douceur et votre capacité d’émerveillement.",
      },
    },
  };

export function getPremiumPlanetSignContent(
  planet: string,
  sign: string
): PremiumPlanetSignContent | null {
  const planetContent =
    PREMIUM_PLANET_SIGN_TEXTS[
      planet
    ];

  if (!planetContent) {
    return null;
  }

  return (
    planetContent[sign] ||
    null
  );
}
