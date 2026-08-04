"use client";





import __i18n from "../i18n/migrated/fr/components/welcomevideo.json";
import { useCallback, useEffect, useRef, useState } from "react";

export default function WelcomeVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [soundReady, setSoundReady] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.volume = 1;

    (async () => {
      try {
        await v.play();
      } catch {}
    })();
  }, []);

  const toggleSound = useCallback(async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      if (!soundOn) {
        v.muted = false;
        v.volume = 1;
        await v.play();
        setSoundOn(true);
        setSoundReady(true);
      } else {
        v.muted = true;
        setSoundOn(false);
        setSoundReady(true);
      }
    } catch {
      v.muted = true;
      setSoundOn(false);
      setSoundReady(false);
    }
  }, [soundOn]);

  return (
    <div className="astro-video-wrap" aria-label={__i18n["bienvenue_luna_astralis"]}>
      <div className="astro-video-frame">
        <video
          ref={videoRef}
          className="astro-video"
          src="/luna_welcome_fr.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>

      <div className="astro-video-actions">
        <button type="button" className="btn btn-small btn-ghost" onClick={toggleSound}>
          {soundOn ? "Couper le son" : "Activer le son"}
        </button>

        <span className="astro-video-hint">
          {!soundReady ? "Le son démarre après un clic." : " "}
        </span>
      </div>

      <p className="astro-video-caption">{__i18n["bienvenue_sur_luna_astralis"]}</p>
    </div>
  );
}
