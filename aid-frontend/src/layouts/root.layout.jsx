import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="relative min-h-screen">
      <div className="background-gradient"></div>
      <main className="container mx-auto relative z-10 p-4">      
        <Outlet />
      </main>
      </div>
  );
}

export default RootLayout;
