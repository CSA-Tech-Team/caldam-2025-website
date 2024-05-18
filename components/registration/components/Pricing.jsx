import Link from "next/link";

const Pricing = ({
  title,
  subTitle,
  isEarlyBird,
  regularPrice,
  earlyBirdPrice,
  registerUrl,
  className,
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="space-y-2">
        <p className="text-xl font-medium lg:text-2xl">{title}</p>
        <p className="font-light opacity-70 lg:text-lg">{subTitle}</p>
      </div>
      <div className="space-y-2">
        {/* {isEarlyBird && <p className="line-through">{regularPrice}</p>} */}
        <div className="flex items-center space-x-2">
          <div className="w-fit bg-gradient-to-r from-orange to-[#585aac] bg-clip-text text-3xl font-semibold text-transparent lg:text-2xl xl:text-4xl">
            <p>{isEarlyBird ? earlyBirdPrice : regularPrice}</p>
          </div>
          {/* {isEarlyBird && (
            <span className="rounded-full bg-bluevariants-300 px-3 py-1 text-xs text-white">
              EARLY BIRD
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
