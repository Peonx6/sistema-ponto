import { Carousel, Table, Spin, message } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

import { useGetSessoes, useDeleteSessao } from "../../hook/sessions";

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

  // 1. READ: Buscar sessões ativas do back-end
  const { data: sessoesDaApi, isLoading } = useGetSessoes();

  // 2. DELETE: Hook para deletar a sessão (encerrar)
  const { mutate: deletarSessao } = useDeleteSessao({
    onSuccess: () => message.success("Sessão encerrada com sucesso!"),
    onError: () => message.error("Erro ao encerrar a sessão."),
  });

  const handleFazerLogin = () => {
    navigate("/login");
  };

  // Função auxiliar para extrair apenas a hora do 'createdAt' do MongoDB (Ex: 22:34)
  const formatarHoraChegada = (dataString) => {
    if (!dataString) return "--:--";
    const data = new Date(dataString);
    return data.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Função auxiliar simplificada para o "Tempo" (Você pode aprimorar a lógica depois para calcular tempo real)
  const calcularTempoDecorrido = (dataString) => {
    // Por enquanto, retorna um valor fixo, mas aqui entraria a lógica de (Hora Atual - Hora de Chegada)
    return "01:30";
  };

  const colunas = [
    {
      title: "MEMBRO",
      key: "membro",
      render: (_, registro) => (
        <div>
          <MemberName>
            {registro.id_usuario?.nome || "Usuário Desconhecido"}
          </MemberName>
          <MemberRole>{registro.id_usuario?.cargo || "-"}</MemberRole>
        </div>
      ),
    },
    {
      title: "CHEGADA",
      key: "chegada",
      render: (_, registro) => (
        <StatusChip>{formatarHoraChegada(registro.createdAt)}</StatusChip>
      ),
    },
    {
      title: "TEMPO",
      key: "tempo",
      render: (_, registro) => (
        <StatusChip>{calcularTempoDecorrido(registro.createdAt)}</StatusChip>
      ),
    },
    {
      title: "",
      key: "acao",
      render: (_, registro) => (
        <DeleteActionIcon
          onClick={() => deletarSessao(registro._id)}
          style={{ cursor: "pointer" }}
        />
      ),
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
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2rem",
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <Table
              dataSource={sessoesDaApi}
              rowKey="_id"
              columns={colunas}
              pagination={false}
            />
          )}
        </TableWrapper>
      </ContainerPrincipal>
    </PageContainer>
  );
}
