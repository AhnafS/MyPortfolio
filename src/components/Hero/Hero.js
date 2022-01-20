import { useEffect } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Typing from "../Typing/Typing";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <Typing />
      </SectionTitle>
      <SectionText>
        I am a passionate Full Stack Developer and CS Student learning practical
        and modern tools to create stunning apps.
      </SectionText>
      <Button onClick={() => (window.location = "/#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
