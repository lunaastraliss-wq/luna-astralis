.natal-share-card {
  position: relative;
  width: 900px;
  min-height: 1200px;
  padding: 48px 54px 42px;
  overflow: hidden;
  background:
    radial-gradient(circle at top, rgba(244, 201, 93, 0.18), transparent 36%),
    radial-gradient(circle at 20% 70%, rgba(120, 130, 255, 0.18), transparent 32%),
    linear-gradient(180deg, #130d2f 0%, #070816 100%);
  color: #ffffff;
  border: 2px solid rgba(244, 201, 93, 0.48);
  font-family: Arial, sans-serif;
  text-align: center;
}

.natal-share-stars {
  position: absolute;
  inset: 0;
  opacity: 0.42;
  background-image:
    radial-gradient(circle, rgba(255,255,255,.75) 1px, transparent 1.5px),
    radial-gradient(circle, rgba(244,201,93,.55) 1px, transparent 1.5px);
  background-size: 42px 42px, 68px 68px;
  background-position: 0 0, 18px 24px;
  pointer-events: none;
}

.natal-share-header,
.natal-share-wheel,
.natal-share-footer,
.natal-share-site {
  position: relative;
  z-index: 2;
}

.natal-share-header {
  margin-bottom: 18px;
}

.natal-share-brand {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 999px;
  background: rgba(244, 201, 93, 0.16);
  border: 1px solid rgba(244, 201, 93, 0.42);
  color: #f4c95d;
  font-size: 20px;
  font-weight: 950;
  margin-bottom: 24px;
}

.natal-share-header h2 {
  margin: 0 0 12px;
  font-size: 58px;
  line-height: 1.05;
  letter-spacing: -1px;
}

.natal-share-header p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 22px;
  font-weight: 700;
}

.natal-share-wheel {
  margin: 12px auto 26px;
}

.natal-share-footer {
  margin: 18px auto 0;
  padding: 22px 26px;
  max-width: 760px;
  border-radius: 24px;
  background: rgba(244, 201, 93, 0.11);
  border: 1px solid rgba(244, 201, 93, 0.3);
  color: #f4c95d;
  font-size: 25px;
  font-weight: 900;
  line-height: 1.35;
}

.natal-share-footer span {
  display: block;
  margin-top: 6px;
  color: rgba(255,255,255,.88);
  font-size: 20px;
  font-weight: 700;
}

.natal-share-site {
  margin-top: 28px;
  color: rgba(255,255,255,.72);
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.5px;
}
