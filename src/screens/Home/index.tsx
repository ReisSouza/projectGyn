import React, { useState } from "react";

import { Container } from "@components/index";
import {
  GroupExercise,
  HomeHeader,
  ListExercise,
  SectionInfor,
} from "@features/index";
import { VStack } from "native-base";

type HomeProps = {};

const Home: React.FC<HomeProps> = ({}: HomeProps) => {
  const [groupExercises, setGroupExercises] = useState([
    "Bícpes",
    "Costas",
    "Trícpes",
    "Ombro",
  ]);
  const [exercises, setExercises] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
  ]);
  return (
    <Container>
      <VStack flex={1}>
        <HomeHeader />
        <GroupExercise
          onSelectExercise={(exrcice) => console.log(exrcice)}
          groupExercises={groupExercises}
        />
        <VStack px={8} flex={1}>
          <SectionInfor amountExercises={exercises.length} />
          <ListExercise data={exercises} />
        </VStack>
      </VStack>
    </Container>
  );
};
export default Home;
