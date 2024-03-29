import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  header: string;
  align?: "left" | "center";
  title: string;
  desc?: string;
}

const SectionHeader = (props: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-5xl",
        props.align === "left"
          ? "items-start justify-start text-start"
          : "items-center justify-center text-center"
      )}
    >
      <div className="">
        <span className="text-blue text-base sm:text-xl md:text-2xl xl:text-2xl">
          {props.header}
        </span>
        <h2
          className="text-2xl sm:text-[32px] md:text-4xl xl:text-5xl xl:leading-[57.6px] font-[700] text-[#F5F8FF] font-Montserrat mt-2 xl:mt-4"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
      </div>
      {props.desc && (
        <p className="text-[#7A7C80] text-xs sm:text-sm xl:text-base max-w-[628px]">
          {props.desc}
        </p>
      )}
    </div>
  );
};
export default SectionHeader;
