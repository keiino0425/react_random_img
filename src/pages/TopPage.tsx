import { Button, Wrap, Img } from "@chakra-ui/react";
import { memo } from "react";

export const TopPage = memo(() => {
  const onClickRandom = () => window.location.reload();
  return (
    <>
      <Button onClick={onClickRandom}>ランダム</Button>
      <Img boxSize="300px" src="https://source.unsplash.com/random" alt="ランダムな画像を表示"></Img>
    </>
  )
});