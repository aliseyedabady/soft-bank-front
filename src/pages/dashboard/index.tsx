import React, { useEffect } from "react";
import Card from "../../components/card";
import IconWrapper from "../../components/iconWrapper";
import ColumnChart from "../../components/charts/column/index";
import PieChart from "../../components/charts/pie";
import pusherJs from "pusher-js";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="md:col-span-2 col-span-3">
          <div className="flex items-center justify-between  mb-5">
            <h4 className="text-[22px] text-text font-semibold">کارت های من</h4>
            <p className="text-[17px] text-text font-semibold">مشاهده همه</p>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            <div className="col-span-2 md:col-span-1">
              <Card
                wrapperClassName="orange-gradient"
                footerClassName="orange-light-gradient"
                bolt={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="30"
                    viewBox="0 0 44 30"
                    fill="none"
                  >
                    <circle
                      cx="15"
                      cy="15"
                      r="15"
                      fill="white"
                      fill-opacity="0.5"
                    />
                    <circle
                      cx="29"
                      cy="15"
                      r="15"
                      fill="white"
                      fill-opacity="0.5"
                    />
                  </svg>
                }
                icon={require("../../assets/images/chip-img-1.png")}
              />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Card
                bolt={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="30"
                    viewBox="0 0 44 30"
                    fill="none"
                  >
                    <circle
                      cx="15"
                      cy="15"
                      r="15"
                      fill="#9199AF"
                      fill-opacity="0.5"
                    />
                    <circle
                      cx="29"
                      cy="15"
                      r="15"
                      fill="#9199AF"
                      fill-opacity="0.5"
                    />
                  </svg>
                }
                keyClassName="!text-text-100"
                valueClassName="!text-text"
                footerClassName="bg-white border-t border-t-[#DFEAF2]"
                wrapperClassName="bg-white border border-[#DFEAF2]"
                cardNumberClassName="!text-text"
                icon={require("../../assets/images/chip-img-2.png")}
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 col-span-3">
          <h4 className="text-[22px] text-text font-semibold mb-5">
            تراکنش های اخیر
          </h4>
          <div className="rounded-[25px] bg-white p-[25px]">
            <div className="flex items-center justify-between mb-3">
              <IconWrapper
                className="bg-[#FFF5D9]"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                  >
                    <path
                      d="M18.6452 24.6094H5.67984C4.9859 24.6087 4.32059 24.3327 3.8299 23.842C3.33921 23.3513 3.06322 22.686 3.0625 21.992V14.2543C3.06322 13.5604 3.33921 12.8951 3.8299 12.4044C4.32059 11.9137 4.9859 11.6377 5.67984 11.637H18.6452C19.3391 11.6377 20.0044 11.9137 20.4951 12.4044C20.9858 12.8951 21.2618 13.5604 21.2625 14.2543V21.992C21.2618 22.686 20.9858 23.3513 20.4951 23.842C20.0044 24.3327 19.3391 24.6087 18.6452 24.6094ZM5.67984 13.2776C5.42089 13.2779 5.17263 13.3809 4.98952 13.564C4.80641 13.7471 4.70341 13.9954 4.70312 14.2543V21.992C4.70341 22.251 4.80641 22.4993 4.98952 22.6824C5.17263 22.8655 5.42089 22.9685 5.67984 22.9688H18.6452C18.9041 22.9685 19.1524 22.8655 19.3355 22.6824C19.5186 22.4993 19.6216 22.251 19.6219 21.992V14.2543C19.6216 13.9954 19.5186 13.7471 19.3355 13.564C19.1524 13.3809 18.9041 13.2779 18.6452 13.2776H5.67984Z"
                      fill="#FFBB38"
                    />
                    <path
                      d="M22.3212 20.1917H20.4422C20.2246 20.1917 20.016 20.1053 19.8621 19.9515C19.7083 19.7976 19.6219 19.589 19.6219 19.3714C19.6219 19.1538 19.7083 18.9452 19.8621 18.7914C20.016 18.6375 20.2246 18.5511 20.4422 18.5511H22.3212C22.58 18.5505 22.828 18.4474 23.0109 18.2643C23.1937 18.0812 23.2966 17.8331 23.2969 17.5744V9.83664C23.2967 9.57778 23.1939 9.32954 23.0111 9.14635C22.8282 8.96315 22.5801 8.85995 22.3212 8.85938H9.35593C9.09698 8.85966 8.84871 8.96266 8.66561 9.14577C8.4825 9.32888 8.3795 9.57714 8.37921 9.83609V12.4567C8.37921 12.6743 8.29279 12.8829 8.13895 13.0368C7.98511 13.1906 7.77646 13.277 7.5589 13.277C7.34134 13.277 7.13269 13.1906 6.97885 13.0368C6.82501 12.8829 6.73859 12.6743 6.73859 12.4567V9.83664C6.73917 9.1426 7.01509 8.47715 7.5058 7.98635C7.9965 7.49554 8.6619 7.21947 9.35593 7.21875H22.3212C23.0151 7.21976 23.6802 7.49595 24.1707 7.98673C24.6611 8.47751 24.9369 9.14279 24.9375 9.83664V17.5744C24.9368 18.2681 24.6609 18.9333 24.1705 19.4239C23.68 19.9146 23.015 20.1907 22.3212 20.1917Z"
                      fill="#FFBB38"
                    />
                    <path
                      d="M20.4422 18.7464H3.88281C3.66525 18.7464 3.4566 18.6599 3.30276 18.5061C3.14893 18.3523 3.0625 18.1436 3.0625 17.9261V15.1709C3.0625 14.9533 3.14893 14.7447 3.30276 14.5909C3.4566 14.437 3.66525 14.3506 3.88281 14.3506H20.4422C20.6597 14.3506 20.8684 14.437 21.0222 14.5909C21.1761 14.7447 21.2625 14.9533 21.2625 15.1709V17.9261C21.2625 18.1436 21.1761 18.3523 21.0222 18.5061C20.8684 18.6599 20.6597 18.7464 20.4422 18.7464ZM4.70312 17.1057H19.6219V15.9912H4.70312V17.1057Z"
                      fill="#FFBB38"
                    />
                  </svg>
                }
              />
              <div className="">
                <p className="text-secondary font-medium text-[13px]">
                  برداشت از کارت من
                </p>
                <p className="number mt-2 text-text-100 text-xs">
                  23 آبان 1401
                </p>
              </div>
              <p className="text-red text-[11px] font-medium">-125/000</p>
            </div>
            <div className="flex items-center justify-between mb-3">
              <IconWrapper
                className="bg-[#E7EDFF]"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M16.425 5.98755C16.4151 4.8945 15.9744 3.84948 15.1985 3.07947C14.4227 2.30946 13.3744 1.87665 12.2813 1.87505H6.25001C6.1002 1.87312 5.95469 1.92507 5.83997 2.02143C5.72525 2.1178 5.64897 2.25216 5.62501 2.40005L3.48751 15.8063C3.47415 15.8951 3.48008 15.9857 3.50488 16.072C3.52969 16.1582 3.57279 16.2382 3.63126 16.3063C3.68934 16.376 3.76193 16.4323 3.84396 16.4712C3.92599 16.51 4.01549 16.5305 4.10626 16.5313H6.68751L6.55001 17.4001C6.5354 17.4901 6.54069 17.5822 6.56549 17.67C6.59029 17.7578 6.634 17.8391 6.69357 17.9082C6.75313 17.9773 6.82709 18.0325 6.91026 18.07C6.99343 18.1074 7.08379 18.1262 7.17501 18.1251H10.0813C10.2302 18.1272 10.3749 18.0761 10.4895 17.981C10.6041 17.8859 10.681 17.753 10.7063 17.6063L11.3313 13.7876H13.3C14.5322 13.7826 15.7124 13.29 16.5826 12.4175C17.4527 11.545 17.9421 10.3635 17.9438 9.1313V8.9563C17.9431 8.37667 17.8052 7.80543 17.5412 7.2894C17.2772 6.77337 16.8947 6.32724 16.425 5.98755ZM6.78126 3.12505H12.2813C12.937 3.12706 13.5727 3.35124 14.0846 3.76101C14.5965 4.17077 14.9544 4.74194 15.1 5.3813C14.8296 5.31789 14.5527 5.28642 14.275 5.28755H9.06251C8.9127 5.28562 8.76718 5.33757 8.65247 5.43393C8.53775 5.5303 8.46147 5.66466 8.43751 5.81255L8.06876 8.12505C8.04223 8.29081 8.08265 8.46032 8.1811 8.59628C8.27956 8.73225 8.428 8.82353 8.59376 8.85005C8.75952 8.87657 8.92902 8.83616 9.06499 8.7377C9.20095 8.63925 9.29223 8.49081 9.31876 8.32505L9.60626 6.52505H14.2875C14.5871 6.52662 14.8838 6.58385 15.1625 6.6938C15.0437 7.67221 14.5716 8.57354 13.8351 9.2284C13.0985 9.88327 12.1481 10.2466 11.1625 10.2501H8.26251C8.11361 10.2479 7.96884 10.299 7.85425 10.3941C7.73967 10.4892 7.66281 10.6221 7.63751 10.7688L6.87501 15.2813H4.83751L6.78126 3.12505ZM16.6938 9.1313C16.6921 10.032 16.3344 10.8956 15.6987 11.5337C15.063 12.1717 14.2007 12.5326 13.3 12.5376H10.8C10.6511 12.5354 10.5063 12.5865 10.3918 12.6816C10.2772 12.7767 10.2003 12.9096 10.175 13.0563L9.55001 16.8751H7.90001L8.03751 16.0063L8.78751 11.5126H11.15C12.3168 11.5091 13.4497 11.1198 14.3722 10.4054C15.2946 9.69092 15.9549 8.6914 16.25 7.56255C16.5401 7.96927 16.6953 8.45673 16.6938 8.9563V9.1313Z"
                      fill="#396AFF"
                    />
                  </svg>
                }
              />
              <div className="">
                <p className="text-secondary font-medium text-[13px]">
                  برداشت از کارت من
                </p>
                <p className="number mt-2 text-text-100 text-xs">
                  23 آبان 1401
                </p>
              </div>
              <p className="text-red text-[11px] font-medium">-125/000</p>
            </div>
            <div className="flex items-center justify-between">
              <IconWrapper
                className="bg-[#DCFAF8]"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0001 8.12785C10.3544 8.12785 10.6438 8.4165 10.6438 8.77085C10.6438 9.09419 10.9066 9.35626 11.23 9.35626C11.5526 9.35626 11.8154 9.09419 11.8154 8.77085C11.8154 7.97652 11.2979 7.30621 10.5855 7.06112V6.72892C10.5855 6.40631 10.3234 6.14277 10.0001 6.14277C9.67602 6.14277 9.41395 6.40631 9.41395 6.72892V7.06112C8.70156 7.30621 8.18554 7.97652 8.18554 8.77085C8.18554 9.77262 8.99907 10.5861 10.0001 10.5861C10.3544 10.5861 10.6438 10.8755 10.6438 11.2299C10.6438 11.585 10.3544 11.8736 10.0001 11.8736C9.64575 11.8736 9.35711 11.585 9.35711 11.2299C9.35711 10.9065 9.0943 10.6437 8.77095 10.6437C8.44687 10.6437 8.18554 10.9065 8.18554 11.2299C8.18554 12.0242 8.70156 12.6938 9.41395 12.9389V13.2711C9.41395 13.5951 9.67602 13.858 10.0001 13.858C10.3234 13.858 10.5855 13.5951 10.5855 13.2711V12.9389C11.2979 12.6938 11.8154 12.0242 11.8154 11.2299C11.8154 10.2288 11.0011 9.41458 10.0001 9.41458C9.64575 9.41458 9.35711 9.12593 9.35711 8.77085C9.35711 8.4165 9.64575 8.12785 10.0001 8.12785ZM14.9086 13.2534C15.1957 13.4047 15.5493 13.2947 15.6999 13.0097C16.1872 12.0892 16.4441 11.0483 16.4441 9.99999C16.4441 6.44765 13.5524 3.55676 10.0001 3.55676C6.44702 3.55676 3.55613 6.44765 3.55613 9.99999C3.55613 13.5531 6.44702 16.444 10.0001 16.444C11.0329 16.444 12.059 16.1944 12.9678 15.7212C13.2549 15.5729 13.3664 15.2178 13.2173 14.9313C13.0682 14.6456 12.7146 14.532 12.4266 14.6818C11.6744 15.0746 10.8572 15.2731 10.0001 15.2731C7.09297 15.2731 4.72696 12.9079 4.72696 9.99999C4.72696 7.0936 7.09297 4.72759 10.0001 4.72759C12.9072 4.72759 15.2732 7.0936 15.2732 9.99999C15.2732 10.8585 15.0621 11.7097 14.6649 12.4612C14.5129 12.7477 14.6221 13.102 14.9086 13.2534ZM10.0001 1.21216C8.30292 1.21216 6.6552 1.69791 5.23559 2.61552C4.96319 2.79122 4.88567 3.15369 5.06137 3.42536C5.23781 3.69702 5.5988 3.7738 5.87194 3.59958C7.10035 2.80525 8.52956 2.38446 10.0001 2.38446C14.1999 2.38446 17.6156 5.80097 17.6156 9.99999C17.6156 14.1998 14.1999 17.6163 10.0001 17.6163C5.80034 17.6163 2.38383 14.1998 2.38383 9.99999C2.38383 8.54347 2.7965 7.12682 3.57828 5.90506C3.7525 5.63191 3.67277 5.26944 3.39963 5.09522C3.12722 4.921 2.76475 5.00073 2.59127 5.27314C1.68916 6.68388 1.21227 8.31979 1.21227 9.99999C1.21227 14.8464 5.15365 18.7878 10.0001 18.7878C14.8458 18.7878 18.7879 14.8464 18.7879 9.99999C18.7879 5.15502 14.8458 1.21216 10.0001 1.21216Z"
                      fill="#16DBCC"
                    />
                  </svg>
                }
              />
              <div className="">
                <p className="text-secondary font-medium text-[13px]">
                  برداشت از کارت من
                </p>
                <p className="number mt-2 text-text-100 text-xs">
                  23 آبان 1401
                </p>
              </div>
              <p className="text-red text-[11px] font-medium">-125/000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 mt-6 gap-[30px]">
        <div className="md:col-span-2 col-span-3">
          <h4 className="text-text text-[22px] font-semibold mb-[18px]">
            فعالیت شما
          </h4>
          <div className="bg-white rounded-[25px] p-8">
            <ColumnChart />
          </div>
        </div>
        <div className="md:col-span-1 col-span-3">
          <h4 className="text-text text-[22px] font-semibold mb-[18px]">
            آمار هزینه
          </h4>
          <div className="bg-white rounded-[25px] p-8">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
