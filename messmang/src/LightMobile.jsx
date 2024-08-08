import React, { useState, useEffect } from 'react';

const LightMobile = () => {
  // 움직일 두 꼭짓점의 X 좌표를 state로 관리, Y 좌표는 고정
  const [point2X, setPoint2X] = useState(0);
  const [point5Y, setPoint5Y] = useState(300);

  // 고정된 Y 좌표
  const point2Y = 0;
  const point5X = 0;
  
  // 고정된 나머지 세 꼭짓점의 좌표
  const point1X = 0;
  const point1Y = 0;
  
  const point3X = 328;
  const point3Y = 489;
  
  const point4X = 321;
  const point4Y = 489;

  // 애니메이션 속도와 범위 설정
  const duration = 150; // 밀리초 단위로 설정
  let moveRange = 20; // 움직일 범위

  useEffect(() => {
    const interval = setInterval(() => {
      setPoint2X((prev) => {
        let newValue = prev + moveRange;
        if (newValue > 280 || newValue < 0) moveRange = -moveRange;
        return newValue;
      });

      setPoint5Y((prev) => {
        let newValue = prev + moveRange;
        if (newValue > 800 || newValue < 400) moveRange = -moveRange;
        return newValue;
      });
    }, duration);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
  }, [duration, moveRange]);

  // path 데이터를 state에 따라 생성
  const pathData = `M${point1X} ${point1Y} L${point2X} ${point2Y} L${point3X} ${point3Y} L${point4X} ${point4Y} L${point5X} ${point5Y} Z`;

  return (
    <div className="mShow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 360 850"
        style={{
          position: "absolute",
          top: 0,
          left: "-40px",
          zIndex: -10,
          width: "360px",
          height: "850px",
        }}
        fill="none"
      >
        <path d={pathData} fill="#1f1f1f"/>
      </svg>
    </div>
  );
};

export default LightMobile;
