"use client";

import RecipesContainer from "./RecipesContainer";
import TrendingRecipes from "./TrendingRecipes";
import DifficultySelector from "./DifficultySelector";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

export default function RecipesSection() {
  const [difficulty, setDifficulty] = useState<DifficultyType>(null);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("/recipes.json");
        const data: Recipe[] = await res.json();
        setRecipes(data.sort((a, b) => a.position - b.position));
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const sortedRecipes = recipes.sort((a, b) => {
    if (difficulty) {
      if (a.difficulty === difficulty && b.difficulty !== difficulty) {
        return -1;
      } else if (a.difficulty !== difficulty && b.difficulty === difficulty) {
        return 1;
      }
    }
    return a.position - b.position;
  });

  if (loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      <TrendingRecipes />
      <DifficultySelector
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <RecipesContainer difficulty={difficulty} recipes={sortedRecipes} />
    </>
  );
}

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
