import styled from "styled-components";

export const BgTrending = styled.div`
  background-color: white;
  padding: 52px 0;
`;

export const TrendingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const H5 = styled.span`
  color: #121212;
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
`;

export const H3 = styled.span`
  color: #121212;
  font-family: SpaceGrotesk;
  font-size: 54px;
  font-weight: 500;
  letter-spacing: -1px;
`;

export const P = styled.p`
  color: #3e3e59;
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
`;

export const Right = styled.div`
  width: 40%;
`;

export const TrendingImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;