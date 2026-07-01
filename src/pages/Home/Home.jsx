import { Button, Carousel, Table } from 'antd'; //componentes do Ant Design
import Header from '../../components/Header'; //Header
import { DeleteOutlined } from '@ant-design/icons';

export function Home() {

  const estiloDoSlide = {
    height: '250px',
    backgroundColor: '#f5f5f5', 
    borderRadius: '15px',       
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontSize: '24px',
    fontWeight: 'bold'
  };

  const dadosMocados = [
    {
      key: '1', 
      nome: 'Mariana Rabelo',
      cargo: 'Gerente de Recrutamento e Seleção',
      chegada: '22:34',
      tempo: '01:34',
    },
    {
      key: '2',
      nome: 'Oswaldo Neto',
      cargo: 'Dev Líder',
      chegada: '22:34',
      tempo: '01:34',
    },
    {
      key: '3',
      nome: 'João Pirajá',
      cargo: 'Dev Líder',
      chegada: '22:34',
      tempo: '01:34',
    }
  ];

  const colunas = [
    {
      title: 'MEMBRO',
      dataIndex: 'membro', 
      key: 'membro',
      render: (texto, registro) => (
        <div>
          <div style={{ fontWeight: 'bold', color: '#FFF' }}>{registro.nome}</div>
          <div style={{ color: '#FFE712', fontSize: '12px' }}>{registro.cargo}</div>
        </div>
      )
    },
    {
      title: 'CHEGADA',
      dataIndex: 'chegada',
      key: 'chegada',
      render: (texto) => (
        <span style={{ border: '1px solid #FFE712', borderRadius: '15px', padding: '4px 15px', color: '#FFE712' }}>
          {texto}
        </span>
      )
    },
    {
      title: 'TEMPO',
      dataIndex: 'tempo',
      key: 'tempo',
      render: (texto) => (
        <span style={{ border: '1px solid #FFE712', borderRadius: '15px', padding: '4px 15px', color: '#FFE712' }}>
          {texto}
        </span>
      )
    },
    {
      title: '', // Título vazio para a coluna da lixeira
      key: 'acao',
      render: () => <DeleteOutlined style={{ fontSize: '24px', color: '#FFF', cursor: 'pointer' }} />
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', display: 'flex', flexDirection: 'column' }}>

      <style>{`
        .slick-prev::before, .slick-next::before,
        .ant-carousel .slick-prev, .ant-carousel .slick-next {
          color: #FFE712 !important;
          font-size: 35px !important; 
        }
        .slick-prev { left: -45px !important; z-index: 1; }
        .slick-next { right: -45px !important; z-index: 1; }
        
        
        .ant-table-thead > tr > th {
          background-color: #FFE712 !important;
          color: #000 !important;
          font-weight: bold !important;
          border-bottom: none !important;
        }
        
        .ant-table-tbody > tr > td {
          background-color: #333333 !important;
          border-bottom: 1px solid #555 !important;
        }
        
        .ant-table {
          border-radius: 15px;
          overflow: hidden;
        }
      `}</style>

      <Header />

      <main style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        padding: '40px 20px', 
        gap: '40px' 
      }}>
        <div style={{ width: '100%', maxWidth: '700px', textAlign: 'center' }}>
        <Carousel arrows autoplay >
          <div>
            <div style={estiloDoSlide}>
              Primeira Imagem
            </div>
          </div>

           <div>
            <div style={estiloDoSlide}>
              Segunda Imagem
            </div>
          </div>

           <div>
            <div style={estiloDoSlide}>
              Terceira Imagem
            </div>
          </div>
          
        </Carousel>
      </div>

      <div style={{ width: '100%', maxWidth: '700px', display: 'flex', justifyContent: 'flex-end' }}>
    <Button 
      ghost 
      style={{ borderColor: '#FFE712', color: '#FFE712', borderRadius: '15px', padding: '0 25px' }}
    >
      Fazer login
    </Button>
  </div>

      <div style={{ width: '100%', maxWidth: '700px', marginBottom: '50px' }}>
        <Table 
          dataSource={dadosMocados} 
          columns={colunas} 
          pagination={false} 
        />
        </div>
      </main>
    </div>
  );
}