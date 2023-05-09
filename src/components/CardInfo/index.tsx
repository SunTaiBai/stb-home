import "./index.scss";
import Image from "next/image";
interface CardInfoProps {
  /** 飘带名 & svg名 */
  ribbonName: string;
  /** 图标名 */
  iconName?: string;
  /** Dom */
  children?: React.ReactNode;
}

export default function CardInfo({
  ribbonName,
  iconName,
  children,
}: CardInfoProps) {
  return (
    <div className="cardInfoContent">
      <div className="ribbon">
        <div className="flex py-1.5 pl-20 pr-9">
          {iconName && (
            <Image
              src={"/svg/" + iconName + ".svg"}
              alt="Logo SVG"
              width={25}
              height={25}
              priority
              className="mr-1.5"
            />
          )}
          <span>{ribbonName}</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}
