"use client";

import { theme } from "@/styles/styles";
import styled from "styled-components";

interface RecipesContainerProps {
  difficulty: DifficultyType;
  recipes: Recipe[];
}

export default function RecipesContainer({
  difficulty,
  recipes,
}: RecipesContainerProps) {
  return (
    <Container>
      <RecipeGrid>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            $highlight={recipe.difficulty === difficulty}
          >
            <Image src={recipe.imageUrl} alt={recipe.name} />
            <TextWrapper>
              <RecipeName>{recipe.name}</RecipeName>
              <RecipeDifficulty>{recipe.difficulty}</RecipeDifficulty>
            </TextWrapper>
          </RecipeCard>
        ))}
      </RecipeGrid>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  row-gap: 32px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const RecipeCard = styled.div<{ $highlight: boolean }>`
  border: 2px solid
    ${({ $highlight }) => ($highlight ? theme.colors.blue : theme.colors.black)};
  border-radius: 1rem;
  text-align: center;
  background-color: white;

  width: 160px;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 12px 12px 0px 0px;
`;

const TextWrapper = styled.div`
  padding-inline: 10px;
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const RecipeName = styled.h2`
  font-size: 16px;
  width: 120px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const RecipeDifficulty = styled.p`
  color: gray;
  font-size: 14px;
`;
