import styled from "styled-components";

export const NavBarCont = styled.nav`
  position: fixed;
  top: 0;
  background: var(--elevation4);
  height: fit-content;
  width: 100vw;
  display: flex;
  align-items: center;
  height: 4em;
  padding: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 16px;
  z-index: 5;
`;

export const NavFolder = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const LinkList = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  @media (max-width: 700px) {
    position: absolute;
    top: 4em;
    right: 0;
    width: 232px;
    height: calc(100vh - 4em);
    flex-direction: column;
    justify-content: flex-start;
    background: #1e1e1e;
    transition: transform 0.8s;
    box-shadow: -4px 6px 8px rgba(0, 0, 0, 0.5);

    ${(props) =>
      props.navModal
        ? "transform: translateX(0%);"
        : "transform: translateX(110%);"};
  }
`;

export const IconsList = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  margin-left: auto;
`;

export const LinkCont = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled.button`
  position: relative;
  color: rgba(251, 220, 158, 0.9);
  text-shadow: 0.5px 0.5px 2px rgba(255, 246, 186, 0.5);
  letter-spacing: 2px;
  height: 3em;
  padding: 0px 8px;
  margin: 0px 8px;
  background: #232323;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  /* line to indicate page */
  /* border-image: linear-gradient(
      90deg,
      #bf953f -65%,
      #fcf6ba -26.33%,
      #b38728 20.08%,
      #fbf5b7 63.91%,
      #aa771c 100%
    )
    1 / 1 0%;
  border-top: none; */
  border: none;
  overflow: hidden;
  transition: all 0.1s;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 100%;
    height: 4rem;
    margin: 8px 0px;
  }

  &:hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }
`;

export const NavIcon = styled.a`
  position: relative;
  background: none;
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: center;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  height: calc(3em - 8px);
  width: calc(3em - 8px);
  margin: 0px 8px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }
`;

export const LogoIcon = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
  margin: 6px 16px 0px;
  border-radius: 50%;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.8);
  transition: all 0.2s;
  &:hover {
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 1);
    transform: translateY(-2px);
  }
`;

export const SandwichIcon = styled.button`
  display: auto;
  position: absolute;
  height: 3em;
  width: 3em;
  border-radius: 50%;
  border: none;
  background: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  transition: all 0.1s;
  margin: 0px 8px;
  opacity: 0;
  pointer-events: none;
  @media (max-width: 700px) {
    opacity: 1;
    pointer-events: auto;
    position: relative;
  }
  &:hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }
`;

export const Line1 = styled.div`
  width: 60%;
  height: 3px;
  background: linear-gradient(
    90deg,
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
  border-radius: 1px;
  position: absolute;
  transition: transform 0.5s;

  ${(props) =>
    props.navModal
      ? "top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg);"
      : "top: 33%; left: 50%; transform: translate(-50%, -50%);"}
`;
export const Line2 = styled.div`
  width: 60%;
  height: 3px;
  background: linear-gradient(
    90deg,
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
  border-radius: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${(props) => props.navModal && "display: none;"}
`;
export const Line3 = styled.div`
  width: 60%;
  height: 3px;
  background: linear-gradient(
    90deg,
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
  border-radius: 1px;
  position: absolute;
  transition: transform 0.5s;
  ${(props) =>
    props.navModal
      ? "top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg);"
      : "top: 67%;; left: 50%; transform: translate(-50%, -50%);"}
`;

export const TabIndicator = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 2px;
  transform: ${(props) =>
    props.currentTab ? `translateX(-8px)` : `translateX(100%)`};
  background: linear-gradient(
    90deg,
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
  @media (max-width: 700px) {
    height: 100%;
    width: 1px;
    left: 0px;
    bottom: 0px;
    transform: ${(props) =>
      props.currentTab ? `translateX(0px)` : `translateY(110%)`};
  }
`;
