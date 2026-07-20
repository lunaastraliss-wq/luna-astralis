import {
  StyleSheet,
  View,
} from "@react-pdf/renderer";

type HoroscopeStar = {
  top: number;
  left: number;
  size: number;
  opacity: number;
  gold?: boolean;
};

const STARS: HoroscopeStar[] = [
  { top: 22, left: 34, size: 2, opacity: 0.9, gold: true },
  { top: 48, left: 112, size: 1.2, opacity: 0.6 },
  { top: 76, left: 218, size: 2.2, opacity: 0.85 },
  { top: 36, left: 338, size: 1.1, opacity: 0.55 },
  { top: 92, left: 462, size: 1.8, opacity: 0.8, gold: true },
  { top: 126, left: 74, size: 1.1, opacity: 0.5 },
  { top: 154, left: 174, size: 2.4, opacity: 0.9 },
  { top: 118, left: 286, size: 1.5, opacity: 0.7 },
  { top: 176, left: 402, size: 1.9, opacity: 0.8 },
  { top: 142, left: 530, size: 1.2, opacity: 0.55 },

  { top: 218, left: 42, size: 1.7, opacity: 0.75 },
  { top: 246, left: 138, size: 1.2, opacity: 0.55 },
  { top: 212, left: 252, size: 2.1, opacity: 0.9, gold: true },
  { top: 270, left: 356, size: 1.4, opacity: 0.65 },
  { top: 234, left: 488, size: 2.3, opacity: 0.85 },

  { top: 322, left: 86, size: 1.3, opacity: 0.6 },
  { top: 342, left: 208, size: 2.2, opacity: 0.9 },
  { top: 308, left: 318, size: 1.1, opacity: 0.55 },
  { top: 362, left: 446, size: 1.8, opacity: 0.75, gold: true },
  { top: 388, left: 548, size: 1.2, opacity: 0.5 },

  { top: 412, left: 38, size: 2.1, opacity: 0.8 },
  { top: 450, left: 148, size: 1.2, opacity: 0.5 },
  { top: 424, left: 272, size: 1.9, opacity: 0.85 },
  { top: 474, left: 382, size: 1.4, opacity: 0.65 },
  { top: 436, left: 512, size: 2.2, opacity: 0.9, gold: true },

  { top: 532, left: 72, size: 1.6, opacity: 0.7 },
  { top: 566, left: 188, size: 2.3, opacity: 0.9 },
  { top: 520, left: 302, size: 1.1, opacity: 0.55 },
  { top: 590, left: 426, size: 1.8, opacity: 0.8 },
  { top: 548, left: 536, size: 1.2, opacity: 0.55 },

  { top: 640, left: 46, size: 1.3, opacity: 0.6 },
  { top: 674, left: 164, size: 2.1, opacity: 0.85, gold: true },
  { top: 622, left: 278, size: 1.5, opacity: 0.7 },
  { top: 692, left: 396, size: 2.4, opacity: 0.9 },
  { top: 650, left: 506, size: 1.2, opacity: 0.55 },

  { top: 748, left: 94, size: 1.9, opacity: 0.8 },
  { top: 722, left: 224, size: 1.2, opacity: 0.55 },
  { top: 774, left: 348, size: 2.2, opacity: 0.9, gold: true },
  { top: 736, left: 472, size: 1.6, opacity: 0.7 },
  { top: 800, left: 552, size: 1.2, opacity: 0.5 },
];

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#06101F",
  },

  haloTop: {
    position: "absolute",
    top: -95,
    right: -75,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#122B4E",
    opacity: 0.42,
  },

  haloMiddle: {
    position: "absolute",
    top: 275,
    left: 165,
    width: 270,
    height: 270,
    borderRadius: 135,
    backgroundColor: "#101D38",
    opacity: 0.22,
  },

  haloBottom: {
    position: "absolute",
    bottom: -110,
    left: -85,
    width: 290,
    height: 290,
    borderRadius: 145,
    backgroundColor: "#172342",
    opacity: 0.38,
  },

  star: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "#FFF8E7",
  },

  goldStar: {
    backgroundColor: "#F4C95D",
  },
});

export default function HoroscopeStarBackground() {
  return (
    <View style={styles.background} fixed>
      <View style={styles.haloTop} />
      <View style={styles.haloMiddle} />
      <View style={styles.haloBottom} />

      {STARS.map((star, index) => (
        <View
          key={`${star.top}-${star.left}-${index}`}
          style={[
            styles.star,
            star.gold ? styles.goldStar : {},
            {
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
            },
          ]}
        />
      ))}
    </View>
  );
}
