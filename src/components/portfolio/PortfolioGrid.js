import React from "react";
import Magic8Ball from "./projects/magic-8-ball/Magic8Ball";
import TetrisProject from "./projects/tetris/TetrisProject";

import styled from "styled-components";
import ReactStoreApi from "./projects/react-store-api/ReactStoreApi";
import KAConstruction from "./projects/ka-construction/KAConstruction";
import SteamClone from "./projects/steam-clone/SteamClone";
import Dngn from "./projects/dngn-bynder/Dngn";

const PortfolioGridContainer = styled.div`
  display: grid;

  gap: 24px;
  width: min-content;
  z-index: 1;
  position: relative;
  margin-bottom: 64px;

  grid-template-columns: 90vw;
  grid-template-rows: 60vw 60vw 180vw 160vw 120vw 120vw;
  grid-template-areas:
    "ka"
    "sc"
    "te"
    "eb"
    "dg"
    "st";

  @media (min-width: 490px) {
    grid-template-columns: 90vw;
    grid-template-rows: 40vw 40vw 80vw 120vw 120vw 120vw;
    grid-template-areas:
      "ka"
      "sc"
      "te"
      "eb"
      "dg"
      "st";
  }

  @media (min-width: 750px) {
    grid-template-columns: repeat(6, 13vw);
    grid-template-rows: repeat(14, 13vw);
    grid-template-areas:
      "ka ka ka ka ka ka"
      "ka ka ka ka ka ka"
      "ka ka ka ka ka ka"
      "ka ka ka ka ka ka"
      "sc sc sc sc sc sc"
      "sc sc sc sc sc sc"
      "sc sc sc sc sc sc"
      "eb eb eb dg dg dg"
      "eb eb eb dg dg dg"
      "eb eb eb dg dg dg"
      "eb eb eb dg dg dg"
      "te te te te st st"
      "te te te te st st"
      "te te te te st st";
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(6, 13vw);
    grid-template-rows: repeat(11, 13vw);
    grid-template-areas:
      "ka ka ka ka ka ka"
      "ka ka ka ka ka ka"
      "ka ka ka ka ka ka"
      "sc sc sc sc sc sc"
      "sc sc sc sc sc sc"
      "sc sc sc sc sc sc"
      "eb eb dg dg te te"
      "eb eb dg dg te te"
      "eb eb dg dg te te"
      "st st st st te te"
      "st st st st . .";
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, 13vw);
    grid-template-rows: repeat(8, 13vw);
    grid-template-areas:
      "ka ka ka ka te te"
      "ka ka ka ka te te"
      "ka ka ka ka te te"
      "sc sc sc sc te te"
      "sc sc sc sc st st"
      "eb eb dg dg st st"
      "eb eb dg dg st st"
      "eb eb dg dg . .";
  }

  @media (min-width: 1600px) {
    grid-template-areas:
      "ka ka ka ka te te te"
      "ka ka ka ka te te te"
      "ka ka ka ka te te te"
      "st st st sc sc sc sc"
      "st st st sc sc sc sc"
      "st st st dg dg eb eb"
      ". . . dg dg eb eb"
      ". . . dg dg eb eb";
    grid-template-columns: repeat(7, 10vw);
    grid-template-rows: repeat(8, 10vw);
  }
`;

const GridContainer1 = styled.div`
  position: relative;
  grid-area: ka;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
const GridContainer2 = styled.div`
  grid-area: te;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
const GridContainer3 = styled.div`
  grid-area: st;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
const GridContainer4 = styled.div`
  grid-area: dg;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
const GridContainer5 = styled.div`
  grid-area: eb;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;
const GridContainer6 = styled.div`
  grid-area: sc;
  position: relative;
  &::before {
    content: "";
    height: calc(100% + 8px);
    width: calc(100% + 8px);
    top: -4px;
    left: -4px;
    position: absolute;
    z-index: -1;
    background-image: var(--gold-gradient);
  }
`;

export default function PortfolioGrid() {
  return (
    <PortfolioGridContainer>
      <GridContainer1>
        <KAConstruction />
      </GridContainer1>
      <GridContainer2>
        <TetrisProject />
      </GridContainer2>
      <GridContainer3>
        <ReactStoreApi />
      </GridContainer3>
      <GridContainer4>
        <Dngn />
      </GridContainer4>
      <GridContainer5>
        <Magic8Ball />
      </GridContainer5>
      <GridContainer6>
        <SteamClone />
      </GridContainer6>
    </PortfolioGridContainer>
  );
}
