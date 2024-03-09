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
      <div>
        <span className="text-blue text-base sm:text-xl md:text-2xl">
          {props.header}
        </span>
        <h2
          className="text-xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#F5F8FF] font-Montserrat"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
      </div>
      {props.desc && <p className="p max-w-[628px]">{props.desc}</p>}
    </div>
  );
};
export default SectionHeader;
