import { StyleSheet, View } from "@react-pdf/renderer";

type Star = {
  top: number;
  left: number;
  size: number;
  opacity: number;
};

const STARS: Star[] = [
  { top: 28, left: 34, size: 2, opacity: 0.9 },
  { top: 54, left: 112, size: 1.4, opacity: 0.6 },
  { top: 88, left: 218, size: 2.2, opacity: 0.85 },
  { top: 42, left: 338, size: 1.2, opacity: 0.55 },
  { top: 96, left: 462, size: 1.8, opacity: 0.8 },
  { top: 132, left: 74, size: 1.1, opacity: 0.5 },
  { top: 156, left: 174, size: 2.4, opacity: 0.9 },
  { top: 122, left: 286, size: 1.5, opacity: 0.7 },
  { top: 178, left: 402, size: 1.9, opacity: 0.8 },
  { top: 222, left: 42, size: 1.7, opacity: 0.75 },
  { top: 248, left: 138, size: 1.2, opacity: 0.55 },
  { top: 214, left: 252, size: 2.1, opacity: 0.9 },
  { top: 272, left: 356, size: 1.4, opacity: 0.65 },
  { top: 236, left: 488, size: 2.3, opacity: 0.85 },
  { top: 326, left: 86, size: 1.3, opacity: 0.6 },
  { top: 344, left: 208, size: 2.2, opacity: 0.9 },
  { top: 312, left: 318, size: 1.1, opacity: 0.55 },
  { top: 364, left: 446, size: 1.8, opacity: 0.75 },
  { top: 414, left: 38, size: 2.1, opacity: 0.8 },
  { top: 452, left: 148, size: 1.2, opacity: 0.5 },
  { top: 426, left: 272, size: 1.9, opacity: 0.85 },
  { top: 476, left: 382, size: 1.4, opacity: 0.65 },
  { top: 438, left: 512, size: 2.2, opacity: 0.9 },
  { top: 536, left: 72, size: 1.6, opacity: 0.7 },
  { top: 568, left: 188, size: 2.3, opacity: 0.9 },
  { top: 524, left: 302, size: 1.1, opacity: 0.55 },
  { top: 592, left: 426, size: 1.8, opacity: 0.8 },
  { top: 642, left: 46, size: 1.3, opacity: 0.6 },
  { top: 676, left: 164, size: 2.1, opacity: 0.85 },
  { top: 624, left: 278, size: 1.5, opacity: 0.7 },
  { top: 694, left: 396, size: 2.4, opacity: 0.9 },
  { top: 652, left: 506, size: 1.2, opacity: 0.55 },
  { top: 752, left: 94, size: 1.9, opacity: 0.8 },
  { top: 724, left: 224, size: 1.2, opacity: 0.55 },
  { top: 776, left: 348, size: 2.2, opacity: 0.9 },
  { top: 738, left: 472, size: 1.6, opacity: 0.7 },
];

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#06101f",
  },

  haloTop: {
    position: "absolute",
    top: -90,
    right: -70,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: "#102849",
    opacity: 0.45,
  },

  haloBottom: {
    position: "absolute",
    bottom: -100,
    left: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#172342",
    opacity: 0.4,
  },

  star: {
    position: "absolute",
    borderRadius: 999,
    backgroundColor: "#fff8e7",
  },

  goldStar: {
    backgroundColor: "#d4af4e",
  },
});

export default function HoroscopeStarBackground() {
  return (
    <View style={styles.background} fixed>
      <View style={styles.haloTop} />
      <View style={styles.haloBottom} />

      {STARS.map((star, index) => (
        <View
          key={`${star.top}-${star.left}-${index}`}
          style={[
            styles.star,
            index % 4 === 0 ? styles.goldStar : {},
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
