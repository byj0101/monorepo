import { useState } from "react";

function Button() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div>{`카운트 : ${count}`}</div>
      <button onClick={() => setCount(count + 1)}>버튼 입니다</button>
    </div>
  );
}

export default Button;
