import React from 'react';
import styled from "styled-components";
import './App.css';

import coverImg from "./img/zuzu-summary.png"
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;

  padding-bottom: 4rem;

  gap: 2rem;
`;

const FlexBox = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;
`

const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  width: 100%;
`

const Badge = styled.span`
  opacity: 0.6;
  font-size: 0.8rem !important;
  margin-top: 0.1rem;
`

const ItemBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;

  background: #ffffff1a;
  color: white;

  border: 1px solid #fff;

  &:hover {
    cursor: pointer;
    background: white;
    color: #092F19; 
  }

  @media screen and (max-width: 599px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;
  }
`

const Caption = styled.span`
  margin-top: 0.5rem;
  color: #ffffff6a;

  @media screen and (max-width: 599px) {
  margin-top: 0;
  }
`

const ZuzuDetail = () => {
  return (
    <Container className='zuzu'>
      <Img src={coverImg} ></Img>
      <FlexColBox style={{alignItems:'flex-start', gap: "1rem"}}>
        <FlexBox style={{ gap: "0.5rem"}}>
          <h4 style={{color: "white", fontWeight: "bold"}}>Projects </h4> 
          <Caption>상세 페이지로 이동해요</Caption>
        </FlexBox>
        <FlexBox style={{gap: "1rem", flexWrap: "wrap", justifyContent: "stretch" }}>
          <Link to='https://courageous-smash-dfc.notion.site/2cf1ac9371cf4f708917defd3f1378de?pvs=4' target='_blank'>
            <ItemBtn>천만원+의 계약을 만든 행사 관리 <Badge>신기능</Badge></ItemBtn>
          </Link>
          <Link to='https://courageous-smash-dfc.notion.site/4-2c15985442804757a572386af4101f13?pvs=4' target='_blank'>
            <ItemBtn>4백만원+ 계약을 유치한 자체 계약서 <Badge>신기능 · 개선</Badge></ItemBtn>
          </Link>
          <Link to='https://courageous-smash-dfc.notion.site/1-1-f31251d8196543bab6e5a0c746dc310d?pvs=4' target='_blank'>
            <ItemBtn>1주일 만에 출시한 결제 링크 <Badge>신기능</Badge></ItemBtn>
          </Link>
          <Link to='https://courageous-smash-dfc.notion.site/VOC-1-2127d0fd50314cf7aeecd057e01e6e77?pvs=4' target='_blank'>
            <ItemBtn>다양한 VOC를 만족시킨 1주일 만에 주식 변동 이력 <Badge>개선</Badge></ItemBtn>
          </Link>
          {/* <Link to='https://www.youtube.com/watch?v=-Xp9n7-k6Mc' target='_blank'>
            <ItemBtn>4명 → 13명의 개발팀을 위한 디자인 시스템 <Badge>개선</Badge></ItemBtn>
          </Link> */}
          <Link to='https://www.youtube.com/watch?v=-Xp9n7-k6Mc' target='_blank'>
            <ItemBtn>EO 주관 채용설명회 출연<Badge>youtube</Badge></ItemBtn>  
          </Link>
          {/* <ItemBtn>Pro 요금제 출시 - 세모</ItemBtn>  */}
          {/* (스톡옵션 유료화 + 주식 양수도 유료화) */}
          {/* <ItemBtn>스톡옵션 업셀 넛지</ItemBtn> */}
          {/* <ItemBtn>테스트케이스 양식</ItemBtn> */}
          {/* <ItemBtn>투자 계약 한도</ItemBtn> */}
          {/* <ItemBtn>무상증자 - 세모</ItemBtn> */}
        </FlexBox>
      </FlexColBox>
    </Container>
  );
}

export default ZuzuDetail;