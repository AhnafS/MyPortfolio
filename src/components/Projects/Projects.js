import { React, useState } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Button,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(
          ({ id, image, title, description, tags, source, visit }) => {
            const [readMore, setreadMore] = useState(false);
            return (
              <BlogCard key={id}>
                <Img src={image} />
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>
                  {readMore
                    ? description
                    : `${description.substring(0, 90)}...`}
                  <Button onClick={() => setreadMore(!readMore)}>
                    {readMore ? "Read Less" : "Read More"}
                  </Button>
                </CardInfo>
                <div>
                  <TitleContent style={{ marginTop: "20px" }}>
                    Stack
                  </TitleContent>
                  <TagList>
                    {tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={visit} target="_blank">
                    Live Demo
                  </ExternalLinks>
                  <ExternalLinks href={source} target="_blank">
                    Code
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            );
          }
        )}
      </GridContainer>
    </Section>
  );
};

export default Projects;
