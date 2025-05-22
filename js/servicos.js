// Função para buscar serviços da API
async function buscarServicos() {
    try {
        const response = await fetch('https://sui-production.up.railway.app/api/servicos?limite=20');
        const result = await response.json();
        
        if (result.success) {
            // Retorna apenas serviços ativos
            return result.data.filter(servico => servico.ativo);
        } else {
            console.error('Erro ao buscar serviços:', result);
            return [];
        }
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        return [];
    }
}

// Função para obter o parâmetro da URL
function obterParametro(nome) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nome);
}

// Função para mapear ícones da API para classes do Font Awesome
function mapearIcone(iconeAPI) {
    const mapeamentoIcones = {
        'health': 'heartbeat',
        'people': 'users',
        'document': 'file-alt',
        'education': 'graduation-cap',
        'work': 'briefcase',
        'home': 'home'
    };
    return mapeamentoIcones[iconeAPI] || iconeAPI;
}

// Função para criar um card de serviço
function criarCard(servico) {
    return `
        <div class="service-card">
            <div class="service-header">
                <div class="service-info">
                    <span class="service-category">
                        <i class="fa-solid fa-${mapearIcone(servico.categoria_icone)}"></i>
                        ${servico.categoria_nome}
                    </span>
                    <h3 class="service-name">${servico.nome}</h3>
                </div>
                <div class="expand-icon" onclick="alternarServico(this)">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
            <div class="service-content">
                <p class="service-description">${servico.descricao}</p>
                <div class="service-details">
                    <div class="documents">
                        <h4>Documentos Necessários:</h4>
                        <ul>
                            ${servico.documentacao_exigida.split(',').map(doc => `<li>${doc.trim()}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="location">
                        <h4>Informações Importantes:</h4>
                        <p><strong>Público Alvo:</strong> ${servico.publico_alvo}</p>
                        <p><strong>Como Acessar:</strong> ${servico.como_acessar}</p>
                    </div>
                </div>
                <a href="${servico.link_agendamento}" class="action-button" target="_blank">Acessar Serviço</a>
            </div>
        </div>
    `;
}

// Função para renderizar os serviços baseados na área selecionada
async function carregarServicos() {
    const areaParam = obterParametro('area');
    const container = document.querySelector('main.container');
    
    // Verifica se existe o elemento de busca e mantém ele
    const searchContainer = container.querySelector('.search-container');
    
    // Limpa o conteúdo atual, mantendo apenas a barra de busca
    container.innerHTML = '';
    
    // Adiciona a barra de busca de volta
    if (searchContainer) {
        container.appendChild(searchContainer);
    } else {
        container.innerHTML += `
            <div class="search-container">
                <input type="text" placeholder="Buscar serviços..." class="search-input">
                <i class="fa-solid fa-search search-icon"></i>
            </div>
        `;
    }
    
    // Atualiza o título da página
    const tituloServico = document.querySelector('.services-title h2');
    const descricaoServico = document.querySelector('.services-title p');
    
    // Busca os serviços da API
    const servicos = await buscarServicos();
    
    if (areaParam) {
        // Filtra serviços pela categoria selecionada (case insensitive)
        const servicosFiltrados = servicos.filter(servico => 
            servico.categoria_nome.toLowerCase() === areaParam.toLowerCase()
        );
        
        // Atualiza o título
        if (tituloServico) {
            tituloServico.textContent = `Serviços de ${areaParam}`;
            
            if (descricaoServico) {
                descricaoServico.textContent = `Lista de serviços disponíveis na área de ${areaParam}`;
            }
        }
        
        // Renderiza os serviços filtrados
        if (servicosFiltrados.length > 0) {
            servicosFiltrados.forEach(servico => {
                container.innerHTML += criarCard(servico);
            });
        } else {
            container.innerHTML += `
                <div class="no-services">
                    <p>Nenhum serviço encontrado para esta área.</p>
                </div>
            `;
        }
    } else {
        // Se não tiver parâmetro, exibe todos os serviços
        if (tituloServico) {
            tituloServico.textContent = "Todos os Serviços";
            
            if (descricaoServico) {
                descricaoServico.textContent = "Lista completa de serviços disponíveis";
            }
        }
        
        // Renderiza todos os serviços
        if (servicos.length > 0) {
            servicos.forEach(servico => {
                container.innerHTML += criarCard(servico);
            });
        } else {
            container.innerHTML += `
                <div class="no-services">
                    <p>Nenhum serviço disponível no momento.</p>
                </div>
            `;
        }
    }
    
    // Adiciona o evento de busca à barra de pesquisa
    const campoBusca = document.querySelector('.search-input');
    if (campoBusca) {
        campoBusca.addEventListener('input', filtrarPorBusca);
    }
}

// Função para filtrar serviços na busca
function filtrarPorBusca() {
    const termoBusca = this.value.toLowerCase();
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        const nomeServico = card.querySelector('.service-name').textContent.toLowerCase();
        const categoriaServico = card.querySelector('.service-category').textContent.toLowerCase();
        const descricaoServico = card.querySelector('.service-description').textContent.toLowerCase();
        
        if (nomeServico.includes(termoBusca) || 
            categoriaServico.includes(termoBusca) || 
            descricaoServico.includes(termoBusca)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Função para atualizar o link "Voltar para Início"
function atualizarLink() {
    const linkVoltar = document.querySelector('.back-link');
    if (linkVoltar) {
        linkVoltar.href = 'index.html';
    }
}

// Inicializa a página quando carregada
document.addEventListener('DOMContentLoaded', function() {
    carregarServicos();
    atualizarLink();
});