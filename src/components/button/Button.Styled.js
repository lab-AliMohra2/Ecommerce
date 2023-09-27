import styled from "styled-components";

export const StyledButton = styled.div`
  color: ${(props) => props.theme.pallete.white};
  background: ${(props) => props.bg};
  border-radius: 8px;
  width: 30%;
  padding: 26px;
`;
