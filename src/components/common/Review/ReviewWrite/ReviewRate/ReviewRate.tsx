import InfoTitle from "@components/common/InfoTitle/InfoTitle";
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import Star from '@assets/icons/store/star.svg?react';
import { useState } from "react";
import Button from "@components/common/Button/Button";

export interface ReviewRateProps {
  writeMode: Boolean
  onWriteReviewClick: () => void
}

export default function ReviewRate({ writeMode, onWriteReviewClick }: ReviewRateProps) {
  const [rate, setRate] = useState(4.5)
  return (
    <div className={`px-4 pb-5 flex flex-col ${!writeMode && "thick-border-bottom"}`}>
      <InfoTitle title="상품은 어떠셨나요?" />
      <div className="flex flex-row items-center justify-between mt-[2px]">
        <Rate
          allowHalf
          onChange={(value) => {
            setRate(value)
          }}
          value={rate}
          character={<Star width={32} height={32} />}
        />
        {!writeMode &&
          <div className="w-[90px]">
            <Button variant='tertiary' height={34} fontSize="sm" onClick={() => {
              onWriteReviewClick()
            }}>
              후기 쓰기
            </Button>
          </div>
        }
      </div>
    </div>
  );
}
