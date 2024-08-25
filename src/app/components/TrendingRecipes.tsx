"use client";

import { theme } from "@/styles/styles";
import styled from "styled-components";

export default function TrendingRecipes() {
  return (
    <Wrapper>
      <Heading>Trending Recipes</Heading>

      <Text $weight={600}>Difficulty</Text>
      <Text color={theme.colors.gray_500}>
        You can filter recipes by difficulty.
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-block: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 28px;
`;

const Text = styled.p<{ color?: string; $weight?: number }>`
  font-size: 16px;
  font-weight: ${({ $weight }) => $weight || 400};
  color: ${({ color }) => color || "inherit"};
`;
