import ExerciceCard from "@components/ExerciseCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { FlatList } from "native-base";
import React from "react";

type ListExerciseProps = {
  data: string[];
};

const ListExercise: React.FC<ListExerciseProps> = ({
  data,
}: ListExerciseProps) => {
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const handleOpenDetailsExercices = () => {
    navigate("exercise");
  };
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        console.log(item);
        return <ExerciceCard onPress={handleOpenDetailsExercices} />;
      }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator
      _contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};
export default ListExercise;
