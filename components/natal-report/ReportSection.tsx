type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ReportSection({
  title,
  children,
}: Props) {
  return (
    <section className="natal-report-section">
      <h2>{title}</h2>

      <div className="natal-report-content">
        {children}
      </div>
    </section>
  );
}
