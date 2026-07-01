import { Form, Input, Button, Typography } from 'antd'; //componentes do Ant Design
import { Link } from 'react-router-dom';
import Header from '../../components/Header'; //Header
const { Title, Text } = Typography;

export function Cadastro() {
  const onFinish = (valores) => {//função que vai ser chamada quando o usuario clicar no botão de entrar
    console.log('Valores preenchidos:', valores);
  }; 

  return (
   
    <div style={{ minHeight: '100vh', backgroundColor: '#000000', display: 'flex', flexDirection: 'column' }}>
      
      <Header />  

      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}> {/* div centralizada */}
      
        <div style={{ width: '100%', maxWidth: '350px', textAlign: 'center' }}>
          
          <Title level={2} style={{ color: '#FFD700', marginBottom: '40px', letterSpacing: '1px' }}>
            CADASTRO
          </Title>

          {/* ANT DESIGN */}
          <Form
            name="form_cadastro"
            layout="vertical" // Deixa um campo debaixo do outro
            onFinish={onFinish}
            size="large" // Deixa os inputs maiores
          >
            {/* NOME */}
            <Form.Item
              name="nome"
              rules={[{ required: true, message: 'Insira seu nome!' }]}
            >
              <Input 
                placeholder="Nome" 
                style={{ borderRadius: '25px' }} // Arredondando a borda igual 
              />
            </Form.Item>

             {/* E-MAIL */}
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Insira seu e-mail!' }]}
            >
              <Input 
                placeholder="E-mail" 
                style={{ borderRadius: '25px' }} 
              />
            </Form.Item>

             {/* CARGO */}
            <Form.Item
              name="cargo"
              rules={[{ required: true, message: 'Insira seu cargo!' }]}
            >
              <Input 
                placeholder="Cargo" 
                style={{ borderRadius: '25px' }} // Arredondando a borda igual 
              />
            </Form.Item>

            {/* SENHA */}
            <Form.Item
              name="senha"
              rules={[{ required: true, message: 'Insira sua senha!' }]}
            >
              <Input.Password 
                placeholder="Senha" 
                style={{ borderRadius: '25px' }} 
              />
            </Form.Item>

            {/* REPETIR SENHA */}
            <Form.Item
              name="confirmarSenha"
              rules={[{ required: true, message: 'Insira sua senha novamente!' }]}
            >
              <Input.Password 
                placeholder="Repita sua senha" 
                style={{ borderRadius: '25px' }} 
              />
            </Form.Item>

            {/* CADASTRO */}
            <div style={{ marginBottom: '30px', marginTop: '-10px' }}>
              <Text style={{ color: '#ffffff' }}>Já tem cadastro? Faça o login </Text>
              <Link to="/login" style={{ color: '#FFD700', fontWeight: 'bold' }}>
                aqui.
              </Link>
            </div>

            {/* BOTÃO DE CRIAR CONTA */}
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                style={{ 
                  backgroundColor: '#FFD700', 
                  color: '#000000', 
                  fontWeight: 'bold', 
                  borderRadius: '25px',
                  padding: '0 50px',
                  height: '45px'
                }}
              >
                CRIAR CONTA
              </Button>
            </Form.Item>
          </Form>
        </div>
      </main>
    </div>
  );
}