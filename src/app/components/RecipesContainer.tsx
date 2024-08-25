"use client";

import styled from "styled-components";
import RecipeCard from "./RecipeCard";

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
            recipe={recipe}
            highlight={recipe.difficulty === difficulty}
          />
        ))}
      </RecipeGrid>
    </Container>
  );
}

const Container = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
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
    grid-template-columns: repeat(4, 1fr);
  }
`;
