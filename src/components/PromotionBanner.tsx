import SelectMenu from "@/ui/components/Select";
import React from "react";

const PromotionBanner = () => {
  return (
    <div className="bg-black h-[48px]  flex justify-between items-center px-4 lg:px-20">
      <div className="text-center text-white w-[100%] text-xs lg:text-[13px]">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
          <span className="cursor-pointer font-bold border-b-2 border-white ml-3">ShopNow</span>
        </p>
      </div>
      <div className="hidden lg:flex relative z-10 max-w-max flex-1 items-center justify-center">
        <SelectMenu />
      </div>
    </div>
  );
};

export default PromotionBanner;
