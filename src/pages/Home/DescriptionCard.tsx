interface DescriptionCardProps {
  title: string;
  desc: string;
  icon: any;
}

const DescriptionCard = (props: DescriptionCardProps) => {
  return (
    <div className="rounded-3xl border-[#313233] border bg-[#121721] flex flex-col items-center justify-center gap-4 xl:gap-6 w-full py-5 px-10 xl:px-5 max-w-[332px] xl:max-w-[400px]">
      <img src={props.icon} className="h-8 w-8 xl:h-10 xl:w-10" />
      <div className="flex flex-col items-center justify-center text-center gap-2 xl:gap-3">
        <h3 className="font-semibold text-base sm:text-lg xl:text-2xl text-white font-Montserrat">
          {props.title}
        </h3>
        <p className="text-[#ABAEB2] text-xs leading-[18px] xl:text-base xl:leading-[24px] ">
          {props.desc}
        </p>
      </div>
    </div>
  );
};
export default DescriptionCard;
