import Image from "next/image";
import CardInfo from "@/components/CardInfo";
export default function Home() {
  return (
    <main className="relative w-full h-full overflow-auto">
      <div className="flex flex-col-reverse items-center justify-around lg:flex-row mb-[70px] lg:mb-0 lg:h-[calc(100%-70px)]">
        <div className="w-[80%] h-auto md:w-[500px]">
          <CardInfo ribbonName="博客" iconName="blog">
            <a
              href="https://notes.sunguojia.com/"
              target="_blank"
              className="flex items-center justify-center w-full h-full"
              style={{ fontSize: "25px" }}
            >
              猩猩点灯
            </a>
          </CardInfo>
          <CardInfo ribbonName="GitHub" iconName="GitHub">
          <a
              href="https://github.com/SunTaiBai"
              target="_blank"
              className="flex items-center justify-center w-full h-full"
              style={{ fontSize: "25px" }}
            >
              GitHub
            </a>
          </CardInfo>
          <CardInfo ribbonName="座右铭" iconName="xiaolian">
            <span style={{fontSize: '25px'}}>扬黄牛精神，做平凡工作</span>
          </CardInfo>
        </div>
        <div className="flex flex-col items-center mt-5 mb-10 lg:my-0">
          <Image
            src="/svg/logo.svg"
            alt="Logo Logo"
            className="mb-5 w-[300px] h-[340px] xl:w-[500px]  xl:h-[500px] lg:w-[400px] lg:h-[400px]  md:w-[500px] md:h-[500px]"
            width={300}
            height={300}
            priority
          />
          <span
            className="block w-full text-center"
            style={{ fontSize: "40px", fontWeight: "bold" }}
          >
            SunTaiBai
          </span>
        </div>
      </div>
      <div className="w-full h-[70px] flex items-center justify-center  fixed bottom-0" style={{backgroundColor: 'rgb(0 0 0 / 34%)'}}>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          style={{ color: "rgb(193 193 193)" }}
        >
          京ICP备19013243号-1
        </a>
      </div>
    </main>
  );
}
