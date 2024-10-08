import Image from "next/image";
import React from "react";

export default function Category({ category }) {
  return (
    <div className="border-l-[15px] border-[#FF9119] h-full ">
      <div className="mx-[81px] ">
        {/* Category Titles */}
        <h2 className="text-[18px] text-[#000000] font-medium leading-5 font-poppins">
          {category?.homeCategorySubtitle}
        </h2>
        <div className="flex items-center gap-[14px]">
          <h1 className="my-[23px] font-bold text-3xl font-poppins">
            {category?.homeCategoryTitle}
          </h1>
          <Image src="/crayons.png" alt="crayons" width={178} height={10} />
        </div>
        <div className="flex gap-2 justify-around mt-4">
          <div className="flex-none w-[622px] h-[522px] relative">
            {category.categories[0]?.image?.node?.sourceUrl && (
              <>
                <Image
                  src={category.categories[0]?.image?.node?.sourceUrl}
                  alt={"First Image"}
                  width={311}
                  height={211}
                  className="object-cover w-full h-full"
                />
                <div className="h-[76px] w-full absolute bottom-0 bg-[#FF9119] flex justify-between items-center px-[16px]">
                  <h2 className="text-[#FFFFFF] font-semibold font-poppins text-xl">
                    {category?.categories[0]?.title}
                  </h2>
                  <button className="border-[1px] font-poppins font-semibold text-xs text-[#FF9119] px-[22px] py-[14px] rounded-[20px] bg-[#fff]">
                    <a href="#" title="Read More" target="">
                      {"Read More"}
                    </a>
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Grid of 4 Images */}
          <div className="flex-1 grid grid-cols-2 gap-1 ">
            {category.categories.slice(1, 5).map((c, index) => (
              <div key={index} className="relative ">
                <Image
                  src={c?.image?.node?.sourceUrl || "/default-image.jpg"}
                  alt={`Grid Image ${index + 1}`}
                  width={267}
                  height={248}
                  className="object-cover w-full h-[260px]"
                />
                <h2 className="text-[#FFFFFF] font-semibold font-poppins text-xl absolute bottom-[16px] left-[16px]">
                  {c.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
