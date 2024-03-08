import userSquareImg from "@/assets/images/user-square.svg";
import { cn } from "@/utils/cn";
const AboutUsCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "rounded-3xl border-[#313233] border bg-[#121721] flex flex-col items-center justify-center gap-3 w-full p-6 max-w-[332px]",
        className
      )}
    >
      <img src={userSquareImg} className="h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10" />
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h3 className="font-semibold text-base sm:text-lg xl:text-2xl text-white font-Montserrat">Recorded Lectures</h3>
        <p className="p">
          Learn on your schedule with access to recorded lectures.
        </p>
      </div>
    </div>
  );
};
export default AboutUsCard;
