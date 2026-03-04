# Portfolio Landing Page - Pedro Henrique Lima

Landing page profissional de portfólio criada com HTML, CSS e JavaScript, apresentando informações sobre experiência, habilidades e projetos com foco em **Engenharia de Software, Backend e Inteligência de Dados**.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno, responsivo e animações
- **JavaScript**: Interatividade e animações dinâmicas
- **Nginx**: Servidor web de alta performance
- **Docker & Docker Compose**: Containerização para isolamento e deploy facilitado
- **GitHub Actions**: Pipeline de CI/CD para deploy automatizado

## Características

- Design moderno e responsivo com temática "Tech/Data"
- **Tema escuro/claro** com toggle animado e persistência no localStorage
- Animações suaves (Intersection Observer) e contadores dinâmicos
- Menu mobile responsivo
- Seções organizadas:
  - Hero com apresentação (gradiente azul tecnológico)
  - Sobre mim com estatísticas de carreira e cloud
  - Skills técnicas categorizadas (Linguagens, Engenharia de Dados, Cloud, Banco de Dados, etc.)
  - Timeline de experiência profissional
  - Educação
  - Informações de contato
- Otimizado para SEO e compressão Gzip
- Headers de segurança e health checks configurados

## Pré-requisitos

Para executar este projeto localmente, você precisa ter instalado:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Como Executar

### Opção 1: Usando Docker Compose (Recomendado)

1. Clone ou baixe este repositório
2. Navegue até o diretório do projeto
3. Execute o comando:

```bash
docker-compose up -d
```

4. Acesse no navegador: `http://localhost:8080`

### Opção 2: Usando Docker diretamente

1. Build da imagem:

```bash
docker build -t pedro-lima-portfolio .
```

2. Execute o container:

```bash
docker run -d -p 8080:80 --name portfolio pedro-lima-portfolio
```

## Estrutura do Projeto

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml  # Pipeline de CI/CD do GitHub Actions
├── index.html          # Estrutura HTML da página
├── styles.css          # Estilos CSS e variáveis de tema
├── script.js           # JavaScript para interatividade
├── nginx.conf          # Configuração do Nginx
├── Dockerfile          # Instruções para build da imagem Docker
├── docker-compose.yml  # Configuração do Docker Compose
├── .dockerignore       # Arquivos ignorados no build
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Documentação do projeto
```

## Personalização e Cores

Para alterar a paleta de cores, modifique as variáveis no arquivo `styles.css`. O projeto agora utiliza uma paleta focada em tons de azul (Slate/Blue) para remeter à área de dados e infraestrutura:

```css
:root {
    --primary-color: #2563eb;       /* Azul Principal */
    --secondary-color: #1d4ed8;     /* Azul Secundário */
    --hero-gradient-start: #0f172a; /* Início do gradiente (Dark Slate) */
    --hero-gradient-end: #1e3a8a;   /* Fim do gradiente (Dark Blue) */
}
```

Após fazer alterações estruturais, reconstrua a imagem:

```bash
docker-compose up -d --build
```

## Deploy em Produção e CI/CD

### Deploy Automatizado (GitHub Actions)

Este repositório está configurado com integração contínua via GitHub Actions. Sempre que um *push* é feito na branch `main`, a Action se conecta à VPS via SSH, executa um `git pull`, e recria o container Docker automaticamente.

**Secrets necessários no repositório:**
- `VPS_HOST`: IP do servidor
- `VPS_USERNAME`: Usuário SSH
- `VPS_PORT`: Porta SSH (ex: 22)
- `VPS_SSH_KEY`: Chave privada SSH com permissão de acesso ao servidor

### Configuração Inicial na Oracle Cloud Infrastructure (OCI)

Para o primeiro deploy na OCI:
1. Crie uma instância (ex: Ubuntu ou Oracle Linux)
2. Instale Docker, Docker Compose e Git
3. Clone o repositório na pasta desejada (ex: `/opt/web-site/`)
4. Configure as regras de segurança (Security Lists/NSG) da OCI para liberar as portas 80/443 (ou a porta customizada que você definiu)
5. Execute `docker-compose up -d --build` na primeira vez.

## Performance e Segurança

- Imagem Docker leve baseada em Alpine Linux
- Servidor Nginx com cache de assets estáticos e compressão Gzip
- Headers de segurança (X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy)

## Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## Autor

**Pedro Henrique Lima** | *Engenheiro de Software & Dados*
- Email: ppriqq@gmail.com
- Telefone: +55 (34) 99642-5790
- Localização: Uberlândia, MG - Brasil

---
Desenvolvido com dedicação por Pedro Henrique Lima