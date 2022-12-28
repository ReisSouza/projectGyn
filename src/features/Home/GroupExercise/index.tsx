import { FlatList, HStack } from "native-base";
import React, { useState } from "react";

import { ButtonGroup } from "@components/index";

type GroupExerciseProps = {
  groupExercises: string[];
  onSelectExercise: (exercie: string) => void;
};

const GroupExercise: React.FC<GroupExerciseProps> = ({
  groupExercises,
  onSelectExercise,
}: GroupExerciseProps) => {
  const [ExerciseSelected, setExerciseSelected] = useState<string>(
    groupExercises[0]
  );
  return (
    <HStack width="100%" space={4}>
      <FlatList
        data={groupExercises}
        keyExtractor={(Exercise) => Exercise}
        renderItem={({ item: Exercise }) => {
          return (
            <ButtonGroup
              name={Exercise}
              onPress={() => {
                setExerciseSelected(Exercise);
                onSelectExercise(Exercise);
              }}
              isActive={Exercise === ExerciseSelected}
            />
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
          my: 10,
          maxHeight: 10,
        }}
      />
    </HStack>
  );
};
export default GroupExercise;
