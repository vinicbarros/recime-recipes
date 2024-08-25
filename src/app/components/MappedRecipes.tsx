import styled from "styled-components";
import RecipeCard from "./RecipeCard";

interface MappedRecipesProps {
  difficulty: DifficultyType;
  recipes: Recipe[];
}

export default function MappedRecipes({
  difficulty,
  recipes,
}: MappedRecipesProps) {
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
  width: 336px;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 600px) {
    width: 512px;
  }

  @media (min-width: 1024px) {
    width: 688px;
  }
`;
