import React from 'react';
import styled from "styled-components";
import './App.css';
import { Link } from 'react-router-dom';
import { SectionsContainer, Section } from 'react-fullpage';

import bg1 from "./img/zuzu-bg.png"
import bg1m from "./img/zuzu-m-bg.png"
import bg2 from "./img/sh-bg.png"
import bg3 from "./img/drive-bg.png"
import mainImg from "./img/finder-symbol.svg"
import Light from './Light';
import LightMobile from './LightMobile';

const Container = styled.div`
  display: flex;
  align-items: stretch;

  padding-top: 4rem;
  padding-bottom: 4rem;
  height: calc(100% - 8rem);
`;

const Title = styled.div`
  font-size: 4rem !important;
  font-weight: 300;

  
  @media screen and (max-width: 599px) {
    font-size: 2.5rem !important;
    word-break: keep-all;
  }
`

const FlexBox = styled.div`
  display: flex;
  align-items:center;
  justify-content: center;

  @media screen and (max-width: 599px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    gap: 1rem !important;
  }
`

const MobileWrapper = styled(FlexBox)`
  @media screen and (max-width: 599px) {
    align-self: flex-end
  }
`

const FlexColBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 599px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-self: stretch;
    justify-content: unset;
  }
`

const NavBtn = styled.button`
  width: 100%;
  padding: 18px 20px;
  gap: 0.5rem;

  border: none;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  
  &:hover {
    cursor: pointer;
    filter: brightness(1.5);
    border: 1px solid #999;
    box-shadow: 0 0 20px 0px #666;
  }
  
  @media screen and (max-width: 599px) {
    width: 100% !important;
    height: 7.2rem !important;
    background-position: top center;
    background-size: cover;
  }
  `

export const Caption = styled.span`
  font-size: 16px;
  color: #ffffff6a;

  &:hover{
    color: #ffffff9a;
  }
`

const Main = () => {
  let options = {
    anchors: ['cover', 'index'], // the anchors for each sections
    delay: 800,
    // arrowNavigation: false,
    className: "main",
  };

  return (
    <SectionsContainer {...options}>
    <Section >
      <Container >
        <FlexColBox style={{alignItems: "flex-start", justifyContent: "space-between", width: "100%"}}>
          <FlexColBox style={{alignItems: "flex-start", gap: "1rem"}}>    
            <FlexColBox style={{alignItems:'flex-start'}}>
            <Title>
              평범함에서 특별함을 발견하는
            </Title>
            <FlexBox> 
            <Title>
              디자이너 성진민
            </Title>
            <Title className='mHide'>
              입니다.
            </Title>
            </FlexBox>
            </FlexColBox>
            <h4 style={{lineHeight: "1.8", opacity: 0.8}}>
              남겨진 모든 현상에 집중하여 관찰을 통해 특별함을 발견합니다. <br className='mHide'/>
              발견한 의미에 알맞은 가치를 더해 특별함을 확장하여 전달합니다.
            </h4>
          </FlexColBox>
          <LightMobile/>
          <Light/>
          <img src={mainImg} style={{position: "absolute", right: "0", top: "30rem"}} height={80}/>
          <FlexBox style={{justifyContent: "space-between", alignSelf: "stretch"}}>
            <h4 style={{opacity: 0.6}}>2024 Product Designer Portfolio</h4>
            <Caption className="mHide">← → 화살표를 눌러보세요</Caption>
          </FlexBox>
        </FlexColBox>
      </Container>
    </Section>
    <Section>
      <Container>
        <h1 className='mHide' style={{position: "absolute", fontWeight: "bold"}}>Project list</h1>
        <MobileWrapper style={{gap: "2rem", justifyContent: "space-between", flexGrow: 1}}>
          <FlexBox style={{alignSelf: "flex-end"}}>
            <Link to="/zuzu" className='mHide'>
              <NavBtn style={{width: "50rem",  height: "30rem", alignSelf: "flex-end", backgroundImage: `url(${bg1})`}}>
                {/* ZUZU <br/> <Caption>5ea</Caption> */}
              </NavBtn>
            </Link>
          </FlexBox>
          <FlexColBox style={{alignSelf: "flex-start", gap: "2rem", alignItems: "stretch", flexGrow: "1"}}>
            <h2 className='mShow'>Project list</h2>
            <Link to="/zuzu" className="mShow">
              <NavBtn style={{height: "14rem", backgroundImage: `url(${bg1m})`}}></NavBtn>
            </Link>
            <Link to="/same-here" >
              <NavBtn style={{height: "14rem", backgroundImage: `url(${bg2})`}}>
              </NavBtn>
            </Link>
            <Link to="/driving-all-right" >
              <NavBtn style={{height: "14rem", backgroundImage: `url(${bg3})`}}>
              </NavBtn>
            </Link>
            <a href="https://drive.google.com/drive/u/0/folders/1qe7wq5Qab2E0yONcyAjBlJmEqv_CNn5O"
              target="_blank"
              rel="noreferrer noopener" style={{textDecoration:"underline", textAlign: "center"}}
            >
              <Caption>
                프로덕트 외의 작업은 여기에 있어요.
              </Caption>
            </a>
          </FlexColBox>
        </MobileWrapper>
      </Container>
    </Section>
    </SectionsContainer>
  );
}

export default Main;