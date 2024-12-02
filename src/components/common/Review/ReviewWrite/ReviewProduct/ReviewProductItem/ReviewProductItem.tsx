import { IMAGE_FOO_URL } from "@src/constants/common";

export interface ReviewProductItemProps {
}

export default function ReviewProductItem({ }: ReviewProductItemProps) {
  return (
    <div className="flex flex-row items-center">
      <img src={IMAGE_FOO_URL} className="w-[96px] h-[96px] rounded-[10px] object-cover" />
      <div className="ml-3 flex flex-col flex-1 gap-y-[8px]">
        <p className="text-[16px] leading-[22px] text-primary-black">[입이즐거운그만두] 미친 만두</p>
        <p className="text-[12px] text-[#898989] leading-[17px]">
          {"2024.08.28"}&nbsp;&nbsp;{"배송완료"}
        </p>
        <p className="text-[12px] text-black leading-[17px]">
          {"09.28까지 작성 가능 "}&nbsp;&nbsp;<span className="text-[#F9831F] text-[12px] leading-[17px] font-bold">30일 남음</span>
        </p>
      </div>
    </div>
  );
}
