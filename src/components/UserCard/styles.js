import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
  border-radius: 12px;
  padding: 10px;
  margin-top: 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerText = styled.View`
  margin-left: 10px;
  flex: 1;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;

export const TextUserName = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
  font-size: 18px;
  font-weight: bold;
`;

export const TextEmail = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
  font-size: 14px;
`;
