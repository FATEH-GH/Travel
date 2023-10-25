import Image from "next/image";
const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full ">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="text-green-50">WE ARE HERE FOR YOU</p>
      </div>
      <div className="padding-container max-container w-full xl:flex xl:justify-between">
        <h2 className="font-bold text-[40px] lg:text-[60px] py-4 lg:max-w-[390px]">
          Guide You <br className="hidden lg:block" />
          to Easy Path
        </h2>
        <p className="text-slate-400 lg:max-w-[520px] xl:pt-10 ">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connaction in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </p>
      </div>
      <div className="flexCenter max-container relative w-full lg:mx-5">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center lg:rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col ">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50 ">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Callentes</p>
            </div>
            <div className="flex w-full flex-col ">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">
                Wonorejo Pasuruan
              </h4>

              <p className="bold-20 mt-2">Aguas Callentes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
