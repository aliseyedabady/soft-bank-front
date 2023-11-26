import React from "react";
interface Props {
  icon: JSX.Element;
  className: string;
}
const IconWrapper: React.FC<Props> = ({ icon, className }) => {
  return (
    <div
      className={`w-[55px] flex items-center justify-center h-[55px] rounded-full ${className}`}
    >
      {icon}
    </div>
  );
};

export default IconWrapper;
