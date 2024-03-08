import Navbar from "../navbar";

interface IAppLayoutProps {
  children: React.ReactNode;
}
const AppLayout = ({ children }: IAppLayoutProps) => {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="mt-14 2xl:mt-16">{children}</main>
    </div>
  );
};
export default AppLayout;
