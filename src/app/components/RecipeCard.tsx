import { theme } from "@/styles/styles";
import styled, { keyframes } from "styled-components";

export default function RecipeCard({
  recipe,
  highlight,
}: {
  recipe: Recipe;
  highlight: boolean;
}) {
  return (
    <RecipeBox key={recipe.id} $highlight={highlight}>
      <Image src={recipe.imageUrl} alt={recipe.name} />
      <TextWrapper>
        <RecipeName>{recipe.name}</RecipeName>
        <RecipeDifficulty>{recipe.difficulty}</RecipeDifficulty>
      </TextWrapper>
    </RecipeBox>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const RecipeBox = styled.div<{ $highlight: boolean }>`
  border: 2px solid
    ${({ $highlight }) => ($highlight ? theme.colors.blue : theme.colors.black)};
  border-radius: 16px;
  width: 160px;

  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.6s ease-out;
  will-change: transform;
  transform: scale(${({ $highlight }) => ($highlight ? 1.05 : 1)});
  box-shadow: ${({ $highlight }) =>
    $highlight ? "0 8px 16px rgba(0, 0, 0, 0.2)" : 0};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  cursor: pointer;
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
