import React from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/question");
  };

  return (
    <div>
      <h1>Welcome to "What Book Should I Read?"</h1>
      <p>Answer a few questions to discover your next great read!</p>
      <button onClick={handleStart}>Start Questionnaire</button>
    </div>
  );
};

export default HomePage;
