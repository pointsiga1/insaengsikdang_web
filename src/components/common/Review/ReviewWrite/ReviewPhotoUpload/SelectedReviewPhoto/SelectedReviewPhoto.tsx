import Close from '@assets/icons/review/close.svg?react'
export interface SelectedReviewPhotoProps {
  fileUri: any,
  onDeleteFile: () => void
}

export default function SelectedReviewPhoto({ fileUri, onDeleteFile }: SelectedReviewPhotoProps) {
  return (
    <div className="w-[70px] h-[70px] relative">
      <img src={fileUri} className="w-full h-full object-cover rounded-[10px]" />
      <button
        onClick={() => {
          onDeleteFile()
        }}
        className="w-[20px] h-[20px] bg-[#404040] rounded-full absolute top-[-7px] right-[-7px] items-center justify-center flex">
        <Close />
      </button>
    </div>
  );
}
