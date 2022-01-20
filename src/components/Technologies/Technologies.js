import React from "react";
import { DiFirebase, DiReact } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import Item from "./Item";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the Web Dev world, from the
      Back-end to the Front-end
    </SectionText>
    <List>
      <Item title="Front-End" tool="React.js" icon={<DiReact size="3rem" />} />
      <Item
        title="Back-End"
        tool="Node and Express"
        icon={<DiFirebase size="3rem" />}
      />
    </List>
  </Section>
);

export default Technologies;
