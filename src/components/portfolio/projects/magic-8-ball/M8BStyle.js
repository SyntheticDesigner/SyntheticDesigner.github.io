import styled from "styled-components";

export const M8BFrame = styled.iframe`
  /* width: 480px; */
  /* max-width: 100%; */
  /* height: min(620px, 140vw); */
  height: 100%;
  width: 100%;
  border: 0;
  border-radius: 4px;
  overflow: hidden;
  border: none;
`;
export const M8BSection = styled.div`
  --background: #101010;
  --nmShadow1: rgba(7, 7, 7, 1);
  --nmShadow2: rgba(62, 62, 62, 0.5);
  --elev1dp: rgba(30, 30, 30, 1);

  --textColorPrimary: rgba(255, 255, 255, 0.8);
  --textColorSecondary: rgba(255, 255, 255, 0.5);
  --textColorEnabled: rgba(130, 250, 100, 0.8);
  --textColorEnabledHover: rgba(130, 250, 70, 1);
  --textColorDisabled: rgba(250, 50, 50, 0.5);
  --textColorDisabledHover: rgba(250, 50, 0, 0.8);
  color: var(--textColorPrimary);
  background-color: var(--background);
  /* width: fit-content; */
  /* width: min(calc(100vw - 192px), 99vw); */
  /* max-width: 1300px; */
  width: 100%;
  height: 100%;
  margin: auto;
`;

// export const M8BArticle = styled.article`
//   width: 40%;
//   text-align: left;
//   p {
//     margin: 24px 0px;
//     color: rgba(255, 250, 206, 0.8);
//   }
//   h1 {
//     font-size: 1.5em;
//   }
//   @media(max-width: 900px){
//     width: 80%;
//   }
// `;
