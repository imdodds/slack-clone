import styled from "styled-components";

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }`;

export { AppBody, AppLoading, AppLoadingContents };