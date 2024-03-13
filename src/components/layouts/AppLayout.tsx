import { useLocation } from "react-router-dom";
import Navbar from "../navbar";
import { cn } from "@/utils/cn";

interface IAppLayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: IAppLayoutProps) => {
  const { pathname } = useLocation();
  return (
    <div className="bg-background">
      {!pathname.startsWith("/dashboard") && <Navbar />}
      <main
        className={cn(
          pathname !== "/dashboard/myCourse" ? "mt-14 2xl:mt-16" : ""
        )}
      >
        {children}
      </main>
    </div>
  );
};
export default AppLayout;
