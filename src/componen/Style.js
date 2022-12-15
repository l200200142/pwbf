import styled from "styled-components";

export const Container = styled.div`
  // border-bottom: 9px solid #070707;
  display: flex;
`;
export const Entity = styled.div`
  color: #070707;
  // border: 1px solid #070707;
  max-width: 900px;
  width: 50%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 3rem;
  }
`;
export const Inner = styled.div`
  // padding: 75px 40px;
  max-width: 800px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 3px;
  display: flex;
  font-weight: normal;
  background: yellow;
  padding: 0.75em 1.12em;
  align-items: center;
`;
export const Text = styled.p`
  max-height: 1190px;
  font-size: 19px;
  font-weight: 300;
  line-height: normal;
  background: white;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  // white-space: pre-wrap;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: red;
  line-height: 7;
  margin-top: 0 !important;
  font-size: 25px;
  margin-bottom: 9px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 33px;
  }

  color: red;
`;