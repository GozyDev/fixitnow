import "@/app/globals.css";
import { poppins } from "@/lib/font";
import SideNav from "./componentC/sidenav";

export default function ConsumerDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`h-full ${poppins.className} antialiased`}>
        <div className="flex min-h-screen bg-gradient-to-br from-purple-50/30 to-white/50">
          {/* Modern Sidebar */}
          <aside className="sticky top-0 h-screen w-64 flex flex-col bg-white/95 backdrop-blur-lg border-r border-purple-100/50 shadow-xl">
            <nav className="pt-9 px-4 space-y-[50px]">
              <div className=" ">
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Handy Dashboard
                </h1>
              </div>
              <ul className="flex">
                <SideNav />
              </ul>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col overflow-y-auto">
            <div className="p-4 max-w-7xl mx-auto w-full">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl  border border-white/20 p-6">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}