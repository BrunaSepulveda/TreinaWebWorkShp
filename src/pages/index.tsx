import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";
import { Button, Typography, Container } from "@material-ui/core";
import useIndex from "data/hooks/pages/useIndex.pages";

export default function Home() {
  const { cep, setCep, cepValido } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais "}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />
      <Container>
        <TextFieldMask
          mask={"99.999-999"}
          label={"Digite seu CEP"}
          fullWidth
          variant={"outlined"}
          value={cep}
          onChange={({ target }) => setCep(target.value)}
        />
        <FormElementsContainer>
          <Typography color={"error"}>CEP inválido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Bruna"}
              picture={"https://github.com/BrunaSepulveda.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Bruna"}
              picture={"https://github.com/BrunaSepulveda.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Bruna"}
              picture={"https://github.com/BrunaSepulveda.png"}
              rating={3}
              description={"São Paulo"}
            />
            <UserInformation
              name={"Bruna"}
              picture={"https://github.com/BrunaSepulveda.png"}
              rating={3}
              description={"São Paulo"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}
