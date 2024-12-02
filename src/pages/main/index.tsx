import useHeaderText from "@hooks/useHeaderText";
import { useEffect } from "react";

export default function MainPage() {
  const { header, handleHeaderText } = useHeaderText();

  useEffect(() => {
    handleHeaderText('메인 페이지');
  }, [])

  useEffect(() => {
    console.log('header', header);
  }, [header])
  return <main>메인 페이지</main>;
}
