import styled from 'styled-components';

import CustomStyles from '../custom-styles/custom-styles';

export const ErrorImageOverlay = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 22px;
  color: ${CustomStyles.primaryColor};

  @media screen and (max-width: ${CustomStyles.smBreakPoint}) {
    font-size: 16px;
  }
`;
