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
          !pathname.startsWith("/dashboard")
            ? "mt-[85px] xl:mt-[80px] bg-background  max-w-[1450px] mx-auto"
            : ""
        )}
      >
        {children}
      </main>
    </div>
  );
};
export default AppLayout;
