import { Carousel, Table } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import {
  PageContainer,
  ContainerPrincipal,
  CarouselWrapper,
  SlideBox,
  BotaoContainer,
  ActionButton,
  TableWrapper,
  MemberName,
  MemberRole,
  StatusChip,
  DeleteActionIcon,
} from "./styles";

export function Home() {
  const navigate = useNavigate();

  const handleFazerLogin = () => {
    navigate("/login");
  };

  const dadosMocados = [
    {
      key: "1",
      nome: "Mariana Rabelo",
      cargo: "Gerente de Recrutamento e Seleção",
      chegada: "22:34",
      tempo: "01:34",
    },
    {
      key: "2",
      nome: "Oswaldo Neto",
      cargo: "Dev Líder",
      chegada: "22:34",
      tempo: "01:34",
    },
    {
      key: "3",
      nome: "João Pirajá",
      cargo: "Dev Líder",
      chegada: "22:34",
      tempo: "01:34",
    },
  ];

  const colunas = [
    {
      title: "MEMBRO",
      dataIndex: "membro",
      key: "membro",
      render: (texto, registro) => (
        <div>
          <MemberName>{registro.nome}</MemberName>
          <MemberRole>{registro.cargo}</MemberRole>
        </div>
      ),
    },
    {
      title: "CHEGADA",
      dataIndex: "chegada",
      key: "chegada",
      render: (texto) => <StatusChip>{texto}</StatusChip>,
    },
    {
      title: "TEMPO",
      dataIndex: "tempo",
      key: "tempo",
      render: (texto) => <StatusChip>{texto}</StatusChip>,
    },
    {
      title: "",
      key: "acao",
      render: () => <DeleteActionIcon />,
    },
  ];

  return (
    <PageContainer>
      <Header />

      <ContainerPrincipal>
        <CarouselWrapper>
          <Carousel arrows autoplay>
            <div>
              <SlideBox>Primeira Imagem</SlideBox>
            </div>
            <div>
              <SlideBox>Segunda Imagem</SlideBox>
            </div>
            <div>
              <SlideBox>Terceira Imagem</SlideBox>
            </div>
          </Carousel>
        </CarouselWrapper>

        <BotaoContainer>
          <ActionButton ghost onClick={handleFazerLogin}>
            Fazer login
          </ActionButton>
        </BotaoContainer>

        <TableWrapper>
          <Table
            dataSource={dadosMocados}
            columns={colunas}
            pagination={false}
          />
        </TableWrapper>
      </ContainerPrincipal>
    </PageContainer>
  );
}
