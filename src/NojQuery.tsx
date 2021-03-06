import React from "react";
import cx from "classnames";
import s from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import useStore from "./useStore";

const NojQuery = () => {
  const navigate = useNavigate();
  const { num, setNum } = useStore((state) => state);
  const test = React.useRef<number>(0);
  // value, trigger
  const [count, setCount] = React.useState<number>(0);

  const handleDomControl = () => {
    const count = document.getElementById("count") as HTMLElement;
    count.innerText = `${Number(count.innerText) + 1}`;
  };

  const handleSend = () => {
    alert(`count의 값은 '${count}'과 같습니다.`);
  };

  return (
    <div>
      <button onClick={() => navigate("/form")}>form</button>
      <h2 id="count">{count}</h2>
      <h2>{test.current}</h2>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>add</button>
      {/* 현재 값을 가져와 변경합니다. - 최대한 다음과 같이 변경해주세요. */}

      <button
        onClick={() => {
          console.log(test.current);
          test.current += 1;
        }}
      >
        test
      </button>
      <button className={cx(s.button)} onClick={() => setCount((state) => state + 1)}>
        현재 값을 이용한 증가
      </button>

      {/* value 값을 사용하여 변경합니다. - 중간에 count를 변경하는 경우가 있으면 오작동합니다. */}
      <button className={cx(s.button)} onClick={() => setCount(count + 1)}>
        value 값을 이용한 증가
      </button>

      {/* jQuery를 쓰면 안되는 이유입니다. 절대 다음과 같이 사용하여 데이터를 변경하지 말아주세요. */}
      <button className={cx(s.button)} onClick={handleDomControl}>
        jQuery와 같이 DOM Control을 이용한 증가
      </button>

      <button className={cx(s.button)} onClick={handleSend}>
        결과 보기
      </button>
    </div>
  );
};

export default NojQuery;
