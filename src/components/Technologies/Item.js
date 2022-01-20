import {
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Item = ({ title, tool, icon }) => {
  return (
    <ListItem>
      {icon}
      <ListContainer>
        <ListTitle>{title}</ListTitle>
        <ListParagraph>
          Experienced with <br />
          {tool}
        </ListParagraph>
      </ListContainer>
    </ListItem>
  );
};

export default Item;
