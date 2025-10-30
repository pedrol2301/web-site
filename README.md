# Portfolio Landing Page - Pedro Henrique Lima

Landing page profissional de portfólio criada com HTML, CSS e JavaScript, apresentando informações sobre experiência, habilidades e projetos.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Design moderno e responsivo com animações
- **JavaScript**: Interatividade e animações dinâmicas
- **Nginx**: Servidor web de alta performance
- **Docker**: Containerização para deploy facilitado

## Características

- Design moderno e responsivo
- **Tema escuro/claro** com toggle animado e persistência no localStorage
- Animações suaves e interativas
- Menu mobile responsivo
- Seções organizadas:
  - Hero com apresentação (gradiente verde)
  - Sobre mim com estatísticas
  - Skills técnicas categorizadas
  - Timeline de experiência profissional
  - Educação
  - Informações de contato
- Otimizado para SEO
- Compressão Gzip
- Headers de segurança configurados
- Health checks para monitoramento

## Pré-requisitos

Para executar este projeto, você precisa ter instalado:

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

3. Acesse no navegador: `http://localhost:8080`

## Comandos Úteis

### Ver logs do container
```bash
docker-compose logs -f
```

### Parar o container
```bash
docker-compose down
```

### Reconstruir a imagem após alterações
```bash
docker-compose up -d --build
```

### Verificar status do container
```bash
docker-compose ps
```

### Verificar health check
```bash
docker inspect --format='{{json .State.Health}}' pedro-lima-portfolio
```

## Estrutura do Projeto

```
.
├── index.html          # Estrutura HTML da página
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
├── nginx.conf          # Configuração do Nginx
├── Dockerfile          # Instruções para build da imagem Docker
├── docker-compose.yml  # Configuração do Docker Compose
├── .dockerignore       # Arquivos ignorados no build
└── README.md           # Documentação do projeto
```

## Personalização

Para personalizar o conteúdo da landing page:

1. Edite o arquivo `index.html` para alterar textos e informações
2. Modifique `styles.css` para ajustar cores, fontes e layout
   - As cores do tema claro e escuro estão definidas nas variáveis CSS em `:root` e `[data-theme="dark"]`
   - Para alterar a paleta de cores, modifique as variáveis `--primary-color`, `--secondary-color`, etc.
3. Atualize `script.js` para modificar animações e interatividade

### Alterando as Cores do Tema

No arquivo `styles.css`, você encontrará as variáveis:

```css
:root {
    --primary-color: #10b981;        /* Verde principal */
    --secondary-color: #059669;      /* Verde secundário */
    --hero-gradient-start: #10b981;  /* Início do gradiente */
    --hero-gradient-end: #059669;    /* Fim do gradiente */
}
```

Após fazer alterações, reconstrua a imagem:

```bash
docker-compose up -d --build
```

## Variáveis de Ambiente

Para alterar a porta de acesso, edite o arquivo `docker-compose.yml`:

```yaml
ports:
  - "SUA_PORTA:80"  # Altere SUA_PORTA para a porta desejada
```

## Deploy em Produção

### Oracle Cloud Infrastructure (OCI)

1. Crie uma instância na OCI
2. Instale Docker e Docker Compose
3. Clone o repositório
4. Execute `docker-compose up -d`
5. Configure o firewall para permitir tráfego na porta 8080

### Outras Plataformas

Este projeto pode ser facilmente deployado em:
- AWS (EC2, ECS, Lightsail)
- Google Cloud Platform
- DigitalOcean
- Heroku (usando heroku.yml)
- Vercel/Netlify (servindo arquivos estáticos)

## Performance

- Servidor Nginx otimizado
- Compressão Gzip ativada
- Cache de assets estáticos configurado
- Imagem Docker leve baseada em Alpine Linux
- Health checks configurados

## Segurança

Headers de segurança configurados:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

## Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## Autor

**Pedro Henrique Lima**
- Email: ppriqq@gmail.com
- Telefone: +55 (34) 99642-5790
- Localização: Uberlândia, Brasil

---

Desenvolvido com dedicação por Pedro Henrique Lima
