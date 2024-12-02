import InfoTitle from "@components/common/InfoTitle/InfoTitle";
import { ChangeEvent, useRef, useState } from "react";
import PhotoSelectButton from "./PhotoSelectButton/PhotoSelectButton";
import SelectedReviewPhoto from "./SelectedReviewPhoto/SelectedReviewPhoto";

export interface ReviewPhotoUploadProps {
}

const MAX_FILE_SIZE_MB = 5;

export default function ReviewPhotoUpload({ }: ReviewPhotoUploadProps) {
  const [selectedPhotos, setSelectedPhotos] = useState<any[]>([])
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 사용자가 선택한 파일

    if (file) {
      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        alert(`파일 크기가 ${MAX_FILE_SIZE_MB}MB를 초과했습니다.`);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileUrl = URL.createObjectURL(file);
        setSelectedPhotos((prev) => {
          return [...prev, fileUrl]
        })
      };
      reader.readAsDataURL(file); // 파일을 데이터 URL로 읽음
    }
  };

  const handleSelectFile = () => {
    if (selectedPhotos.length == 5) {
      return;
    }
    inputRef.current?.click();
  };

  return (
    <div className='pb-[26px] px-4'>
      <div className="flex flex-row items-center">
        <InfoTitle title="사진 업로드" />
        <p className="ml-[8px] font-bold text-primary text-[12px] leading-[17px]">
          {selectedPhotos.length}
          <span className="text-[#666666]">
            &nbsp;/ 5
          </span>
        </p>
      </div>

      <div className="mt-[8px] flex flex-row items-start">
        <div className="pt-[7px]">
          <PhotoSelectButton onClick={() => {
            handleSelectFile()
          }} />
        </div>
        <div className="overflow-x-scroll no-scrollbar flex-1">
          <div className='whitespace-nowrap'>
            {selectedPhotos.map((item, index) => {
              return (
                <div className="ml-[10px] inline-block pt-[7px] pb-[0px]">
                  <SelectedReviewPhoto fileUri={item} onDeleteFile={() => {
                    setSelectedPhotos((prev) => {
                      return prev.filter(it => it !== item)
                    })
                  }} />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <input
        ref={inputRef}
        id='profile-input'
        type='file'
        accept='image/*'
        className='hidden'
        onChange={handleImageChange}
      />
    </div>
  );
}
