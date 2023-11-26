import React from "react";
interface Props {
  wrapperClassName?: string;
  footerClassName?: string;
  icon: string;
  bolt: JSX.Element;
  keyClassName?: string;
  valueClassName?: string;
  cardNumberClassName?: string;
}
const Card: React.FC<Props> = ({
  wrapperClassName = "",
  footerClassName = "",
  icon,
  keyClassName,
  valueClassName,
  cardNumberClassName,
  bolt,
}) => {
  return (
    <div className={` rounded-[25px] overflow-hidden ${wrapperClassName}`}>
      <div className="py-6 px-[26px]">
        <div className="flex items-center justify-between mb-[33px]">
          <div>
            <p className={`text-white text-xs ${keyClassName}`}>موجودی</p>
            <p className={`text-white text-[20px] ${valueClassName}`}>
              12/000/000
            </p>
          </div>
          <img className="w-[34px] h-[34px]" alt="کارت" src={icon} />
        </div>
        <div className="flex items-center gap-[60px]">
          <div>
            <p className={`text-white-300 text-xs ${keyClassName}`}>
              صاحب کارت
            </p>
            <p className={`text-white text-[15px] ${valueClassName}`}>
              علی سیدآبادی
            </p>
          </div>
          <div>
            <p className={`text-white-300 text-xs ${keyClassName}`}>
              تاریخ انقضا
            </p>
            <p className={`text-white text-[15px] ${valueClassName}`}>۰۲/۰۵</p>
          </div>
        </div>
      </div>
      <div
        className={` py-[22px] px-[26px] flex items-center justify-between ${footerClassName}`}
      >
        <p className={`number text-white text-lg ${cardNumberClassName}`}>
          3778 **** **** 1234
        </p>
        {bolt}
      </div>
    </div>
  );
};

export default Card;
