import { useSelector } from "react-redux";
import { selectors } from "../../../redux/ducks";
import { Close } from "../icons";
import { Container, Content, TextContainer, Title } from "./styles";
import { PropsEvent, PropsPoint } from "./types";

const Point = ({
  title,
  onDelete,
  id,
  onPlacemarkClick,
}: PropsPoint & PropsEvent) => {
  const isToken = useSelector(selectors.auth.SelectToken);
  const selected = useSelector(selectors.selectedProject.SelectProject);

  const onClick = (id: number) => {
    onPlacemarkClick(id);
  };
  return (
    <Container
      style={{ backgroundColor: selected.id === id ? "red" : undefined }}
    >
      <Content onClick={() => onClick(id)}>
        <TextContainer>
          <Title>{title}</Title>
        </TextContainer>
        {isToken ? <Close fill="black" onClick={() => onDelete(id)} /> : <></>}
      </Content>
    </Container>
  );
};

export default Point;
