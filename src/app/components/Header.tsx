"use client";

import { theme } from "@/styles/styles";
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderComponent>
      <Text>Recipes</Text>
    </HeaderComponent>
  );
}

const HeaderComponent = styled.header`
  padding-block: 48px;
  background-color: ${theme.colors.gray_100};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  @media (min-width: 600px) {
    width: 512px;
  }

  @media (min-width: 1024px) {
    width: 864px;
  }
`;
