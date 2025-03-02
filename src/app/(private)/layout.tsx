import { Fragment } from "react";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <header className="h-10 sticky inset-0 bg-green-500 flex items-center justify-between z-10">
        Header
      </header>

      <div className="flex relative">
        <aside className="fixed bg-red-500 h-[calc(100%-2.5rem)] bottom-0 w-3xs">
          Sidebar
        </aside>
        <main className="p-5 h-[2000px] ml-64">{children}</main>
      </div>
    </Fragment>
  );
}
