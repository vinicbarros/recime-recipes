"use client";

import { theme } from "@/styles/styles";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface DifficultySelectorProps {
  difficulty: DifficultyType;
  setDifficulty: Dispatch<SetStateAction<DifficultyType>>;
}

export default function DifficultySelector({
  difficulty,
  setDifficulty,
}: DifficultySelectorProps) {
  const handleFilterChange = (newDifficulty: DifficultyType | null) => {
    setDifficulty(newDifficulty);
  };

  return (
    <FilterContainer>
      <StartButton
        onClick={() => handleFilterChange("Easy")}
        $isSelected={difficulty === "Easy"}
        $difficulty={difficulty}
      >
        Easy
      </StartButton>
      <MiddleButton
        onClick={() => handleFilterChange("Medium")}
        $isSelected={difficulty === "Medium"}
      >
        Medium
      </MiddleButton>
      <EndButton
        onClick={() => handleFilterChange("Hard")}
        $isSelected={difficulty === "Hard"}
      >
        Hard
      </EndButton>
    </FilterContainer>
  );
}

const FilterContainer = styled.menu`
  text-align: center;
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div<{ $isSelected: boolean }>`
  padding: 10px 36px;
  cursor: pointer;

  border: 2px solid
    ${({ $isSelected }) =>
      $isSelected ? theme.colors.blue : theme.colors.gray_500};

  font-weight: 600;
  font-size: 14px;
`;

const StartButton = styled(Button)<{
  $isSelected: boolean;
  $difficulty: DifficultyType | null;
}>`
  margin-right: -2px;
  z-index: ${({ $isSelected }) => ($isSelected ? 2 : 1)};
  border-radius: 10px 0px 0px 10px;
`;

const MiddleButton = styled(Button)<{ $isSelected: boolean }>`
  z-index: ${({ $isSelected }) => ($isSelected ? 2 : 1)};
`;

const EndButton = styled(Button)<{ $isSelected: boolean }>`
  margin-left: -2px;
  z-index: ${({ $isSelected }) => ($isSelected ? 2 : 1)};
  border-radius: 0px 10px 10px 0px;
`;
