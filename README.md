# 📄 Descrição do Projeto

O **SUI (Sistema Unificado de Informações)** é uma plataforma web que centraliza informações sobre serviços sociais públicos, facilitando o acesso da população a recursos essenciais nas áreas de 🏥 saúde, 🎓 educação, 🤝 assistência social, 🏠 habitação, 💼 trabalho e 📄 documentação.

O projeto nasceu da constatação de que muitos brasileiros — especialmente pessoas com baixa escolaridade, idosos 👵👴 e pessoas com deficiência ♿ — têm dificuldade de acessar serviços públicos digitais por falta de informação sobre sua existência e funcionamento. Isso reforça a necessidade de uma ferramenta que reúna e organize essas informações em um só lugar, com interface simples, objetiva e adaptada para dispositivos móveis 📱.

Este sistema visa ampliar o acesso, promover a transparência 🔍 e garantir o direito constitucional de acesso à informação, especialmente no estado do Maranhão 🇧🇷, onde índices de transparência ainda são baixos e o acesso a serviços públicos muitas vezes é dificultado pela falta de divulgação eficiente.

---

# ⚙️ Funcionalidades

- 🏠 **Página Inicial:** apresenta as principais áreas de serviços públicos com cards ilustrativos e botões para explorar cada área.

- 🔎 **Listagem e Busca de Serviços:** página dedicada para listar todos os serviços disponíveis, com busca dinâmica por nome, categoria ou descrição.

- 📋 **Detalhes dos Serviços:** cada serviço apresenta documentos necessários, público-alvo, instruções de acesso e link para agendamento ou informações adicionais.

- 📱 **Interface Responsiva:** design adaptado para uso em dispositivos móveis e desktops.

- 🔗 **Integração com API RESTful:** comunicação com backend para busca e atualização dinâmica dos serviços.

- 🔄 **Atualização e Manutenção Facilitadas:** backend pensado para que gestores atualizem as informações facilmente.

---

# 🛠️ Tecnologias Utilizadas

### Frontend:
- HTML5, CSS3 (com Google Fonts, FontAwesome e Flaticon para ícones)  
- JavaScript (fetch API para comunicação assíncrona e manipulação do DOM)

### Backend:
- Node.js com Express.js (planejado para API RESTful)  
- Banco de dados PostgreSQL (via Supabase)

### Infraestrutura:
- Hospedagem da API via Railway  
- Versionamento de código com GitHub

---

# 📂 Estrutura do Projeto

/css  
&nbsp;&nbsp;&nbsp;&nbsp;├── servicos.css                    # Estilos para a página de listagem de serviços  
&nbsp;&nbsp;&nbsp;&nbsp;└── style.css                       # Estilos gerais e da página inicial  

/js  
&nbsp;&nbsp;&nbsp;&nbsp;└── servicos.js                     # Script para carregar e filtrar serviços via API  

index.html                # Página inicial com visão geral das áreas de serviços  
servicos.html             # Página com listagem e busca detalhada dos serviços  


---

# 🚀 Como Rodar o Projeto Localmente

1. Clone o repositório:

```
git clone https://github.com/Alan-mondego/sis-unificado.git
```

Navegue para a pasta do projeto:

```
cd sis-unificado
```
O projeto é estático, então você pode abrir o arquivo index.html diretamente no navegador. Para rodar um servidor local, baixe a extensão live server.


# 🔍 Como Funciona a Busca e Visualização dos Serviços
A busca de serviços é feita via requisição para a API hospedada em Railway:
https://sui-production.up.railway.app/api/servicos?limite=20

- A lista pode ser filtrada por área temática ou por termos digitados pelo usuário.

- Cada serviço apresenta informações essenciais, como documentos exigidos, público-alvo, formas de acesso e link para agendamento.

- A interface permite expandir e recolher detalhes para facilitar a navegação.

# 🎯 Público-Alvo
- Cidadãos maranhenses de diferentes níveis de alfabetização e inclusão digital, com interface adaptada para facilitar o uso, principalmente em celulares 📱.

- Organizações da sociedade civil (ONGs, associações) para controle social e monitoramento.

- Gestores públicos responsáveis por atualizar os dados.

- Pesquisadores, jornalistas e órgãos de controle que necessitam de dados estruturados para análises.

# ⚠️ Desafios Enfrentados

- Baixa resposta em questionários para validação da necessidade.

- Dificuldade de integração com APIs públicas e sistemas legados.

- Ajustes no frontend para garantir compatibilidade e usabilidade para públicos diversos.

- Limitações nas opções gratuitas para deploy da aplicação web.

# 📈 Próximos Passos
- Implementação da API RESTful backend em Node.js + Express.js com banco PostgreSQL.

- Autenticação de usuários para gestão de serviços.

- Publicação e divulgação em larga escala para alcançar os cidadãos do Maranhão.

- Coleta de feedbacks para aprimoramento da plataforma.

- Inclusão de funcionalidades adicionais e suporte a múltiplos idiomas 🌐.

