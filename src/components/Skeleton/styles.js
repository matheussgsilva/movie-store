import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  height: 350px;
`;

export const ContentArea = styled.div`
  width: 100%;
  border: 2px solid #C7D2DB;
  border-bottom: none;
  border-radius: 5px 5px 0px 0px;
`;

export const PosterArea = styled.div`
  width: 100%;
  height: 200px;
  border-bottom: 2px solid #C7D2DB; 
  background-image: linear-gradient(90deg, #CCC 0px, rgb(229 229 229 / 90%) 40px, #CCC 80px);
  background-size: 200%;
  background-position: 100% 0;
  animation: shimer 1.2s infinite;

  @keyframes shimer {
    to {
      background-position: -100% 0;
    }
  }
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 110px;
`;

export const InfoText = styled(PosterArea)`
  width: 150px;
  height: 15px;
  margin: 8px;
`;

export const ButtonArea = styled(PosterArea)`
  width: 185px;
  height: 30px;
  border-radius: 5px;
  margin-top: -10px;
`;