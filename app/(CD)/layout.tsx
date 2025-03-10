import "@/app/globals.css";
import { poppins } from "@/lib/font";
import SideNav from "./componentC/sidenav";

export default function ConsumerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html >
      <body className={`h-full ${poppins.className}`}>
        <div className="flex min-h-screen bg-gradient-to-br from-purple-50/20 to-white">
          {/* Modern Sidebar */}
          <aside className="w-60 flex flex-col bg-gradient-to-b from-purple-900 to-indigo-900 border-r border-white/10 shadow-xl">
            <nav className="pt-10 ">
              <ul className="flex flex-col gap-y-2.5 ">
                <SideNav />
              </ul>
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col overflow-auto">
            <div className="py-[10px] max-w-[1200] mx-auto w-full">
              <div className="">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}