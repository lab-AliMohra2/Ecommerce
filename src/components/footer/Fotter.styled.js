import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #fafafb;
  padding: 72px 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterWrapperLeft = styled.div`
  flex: 1;
  max-width: 424px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FooterLeftTitle = styled.h3`
  color: #121212;
  font-size: 34px;
  font-weight: 500;
`;

export const FooterLeftDescription = styled.p`
  color: #605f5f;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`;

export const FooterLeftSocialWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 9px;
  border-radius: 50%;
  
  background-color: #fff;
  color: #121212;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #222;
    color: #fff;
  }
  
  & > a {
    text-decoration: none;
    color: #121212;
  }
`;

export const FooterWrapperRight = styled.div`
  display: flex;
  gap: 120px;
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FooterLinksTitle = styled.span`
  color: #121212;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 2px;
`;

export const FooterLink = styled.span`
  & > a {
    color: #000000;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
  }
`;