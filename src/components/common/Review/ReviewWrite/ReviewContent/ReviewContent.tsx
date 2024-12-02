import InfoTitle from "@components/common/InfoTitle/InfoTitle";
import Spacer from "@components/common/Spacer/Spacer";
import TextArea from "@components/common/TextArea/TextArea";
import { useState } from "react";

export interface ReviewContentProps {
}

export default function ReviewContent({ }: ReviewContentProps) {
  const [content, setContent] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const onInputContent = async (text: string) => {
    setContent(text)
    if (text.length < 10) {
      setErrMsg('10자 이상 입력해주세요.')
    } else {
      setErrMsg('')
    }
  }

  return (
    <div className="px-4 pb-[30px]">
      <InfoTitle title="상품 후기를 남겨주세요!" />
      <Spacer height={8} />
      <TextArea name="content" value={content} errorMsg={errMsg} onChange={(e) => { onInputContent(e.target.value) }} placeholder="상세한 후기를 작성해보세요!" />
    </div>
  );
}
