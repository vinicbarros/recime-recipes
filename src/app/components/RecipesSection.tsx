"use client";

import MappedRecipes from "./MappedRecipes";
import TrendingRecipes from "./TrendingRecipes";
import DifficultySelector from "./DifficultySelector";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

interface IFetchData {
  data: Recipe[] | undefined;
  error: boolean;
  loading: boolean;
}

export default function RecipesSection() {
  const [difficulty, setDifficulty] = useState<DifficultyType>(null);
  const [fetchData, setFetchData] = useState<IFetchData>({
    data: undefined,
    error: false,
    loading: true,
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("/recipes.json");
        const data: Recipe[] = await res.json();
        setFetchData({
          data: data.sort((a, b) => a.position - b.position),
          loading: false,
          error: false,
        });
      } catch (error) {
        setFetchData({
          data: undefined,
          loading: false,
          error: true,
        });
      }
    };

    fetchRecipes();
  }, []);

  if (fetchData.loading) {
    return (
      <div className="loading">
        <Spinner />
      </div>
    );
  }

  if (fetchData.error) {
    return (
      <Center>
        <h1>An error ocurred :(</h1>
      </Center>
    );
  }

  const sortedRecipes = fetchData.data?.sort((a, b) => {
    if (difficulty) {
      if (a.difficulty === difficulty && b.difficulty !== difficulty) {
        return -1;
      } else if (a.difficulty !== difficulty && b.difficulty === difficulty) {
        return 1;
      }
    }
    return a.position - b.position;
  });

  return (
    <>
      <TrendingRecipes />
      <DifficultySelector
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
      <MappedRecipes
        difficulty={difficulty}
        recipes={sortedRecipes !== undefined ? sortedRecipes : []}
      />
    </>
  );
}

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 36px;
`;
