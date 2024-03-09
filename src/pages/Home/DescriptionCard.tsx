interface DescriptionCardProps {
  title: string;
  desc: string;
  icon: any;
}

const DescriptionCard = (props: DescriptionCardProps) => {
  return (
    <div className="rounded-3xl border-[#313233] border bg-[#121721] flex flex-col items-center justify-center gap-3 w-full p-6 max-w-[332px] xl:max-w-[400px]">
      <img src={props.icon} className="h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10" />
      <div className="flex flex-col items-center justify-center text-center gap-2">
        <h3 className="font-semibold text-base sm:text-lg xl:text-2xl text-white font-Montserrat">
          {props.title}
        </h3>
        <p className="p">{props.desc}</p>
      </div>
    </div>
  );
};
export default DescriptionCard;
