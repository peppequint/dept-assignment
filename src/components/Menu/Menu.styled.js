import styled from "styled-components";

export const StyledMenu = styled.nav`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background: black;
  transition: all 0.25s linear;
  opacity: ${({ open }) => (open ? "1" : "0")};
  .nav-list {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 5rem 1.25rem;
    .nav-item {
      width: 100%;
      position: relative;
      margin-top: 0.5rem;
      color: white;
      font-family: "Teko", sans-serif;
      font-size: 2.5rem;
      text-align: right;
      text-transform: uppercase;
      line-height: 0.8;
      a {
        display: inline-flex;
        align-items: center;
        &::after {
          content: "";
          position: absolute;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid transparent;
          border-left: 10px solid white;
          transition: all 0.25s linear;
          transform: translate3d(-40px, -4px, 0);
          opacity: 0;
        }
        &:hover::after {
          transform: translate3d(-25px, -4px, 0);
          opacity: 1;
        }
      }
    }
    .nav-item:not(:last-child) {
      border-bottom: 1px solid rgba(163, 163, 163, 0.5);
    }
  }
`;
