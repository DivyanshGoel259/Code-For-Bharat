import { IconArgs } from "@/types";

export const IconCard = ({
  icon: Icon,
  iconText,
  title,
  titleSize,
  iconTextSize,
  iconColor,
  titleColor,
}: IconArgs) => {
  return (
    <div>
      <div>
        <div className="p-2 flex flex-col justify-center items-center ">
          <div className="h-20 w-20">
          <Icon ></Icon>
          </div>
          
        </div>
        <div className={` text-center ${iconTextSize} ${iconColor}`}>
          {iconText}
        </div>
        <div className={`mt-2 text-center ${titleSize} ${titleColor}`}>{title}</div>
      </div>
    </div>
  );
};
