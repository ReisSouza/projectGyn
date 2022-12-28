import { HistoryCard } from "@components/index";
import { Center, Heading, SectionList, Text } from "native-base";
import React from "react";
type SectionProps = {
  title: string;
  data: string[];
};
type SectionListHistoryProps = {
  section: SectionProps[];
};

const SectionListHistory: React.FC<SectionListHistoryProps> = ({
  section,
}: SectionListHistoryProps) => {
  return (
    <SectionList
      contentContainerStyle={
        section.length ? {} : { flex: 1, justifyContent: "center" }
      }
      ListEmptyComponent={() => {
        return (
          <Center>
            <Text fontSize="md" color="gray.200" textAlign="center">
              Não ha exercicio registrados ainda. {"\n"} Vamos treinar
            </Text>
          </Center>
        );
      }}
      px={8}
      sections={section}
      keyExtractor={(item) => item}
      renderItem={({ item }) => {
        return <HistoryCard title={item} />;
      }}
      renderSectionHeader={({ section }) => {
        return (
          <Heading fontFamily="heading" fontSize="md" mt={10} mb={3} color="gray.200">
            {section.title}
          </Heading>
        );
      }}
    />
  );
};
export default SectionListHistory;
