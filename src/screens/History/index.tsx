import React from "react";

import { Container, Header } from "@components/index";
import { SectionHistoryList } from "@features/index";

type HistoryProps = {};

const History: React.FC<HistoryProps> = ({}: HistoryProps) => {
  return (
    <Container>
      <Header title="Historico de exercicios" />
      <SectionHistoryList
        section={[
          { data: ["Remada baixa"], title: "18/12/2022" },
          { data: ["Remada baixa", "Rosca direta"], title: "17/12/2022" },
        ]}
      />
    </Container>
  );
};
export default History;
