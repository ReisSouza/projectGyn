import { Container } from "@components/index";
import { CardImageExercice, HeaderExercise } from "@features/index";
import { ScrollView } from "native-base";
import React from "react";

type ExerciseProps = {};

const Exercise: React.FC<ExerciseProps> = ({}: ExerciseProps) => {
  return (
    <Container>
      <ScrollView>
        <HeaderExercise />
        <CardImageExercice />
      </ScrollView>
    </Container>
  );
};
export default Exercise;
