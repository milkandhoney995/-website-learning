export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return(
    <section>
      <div>nested layout</div>
      <div className="">{children}</div>
    </section>
  );
}