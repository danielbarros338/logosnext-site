# Site da Logos Next

Site institucional da Logos Next, empresa de engenharia de automação e inteligência artificial. Apresenta soluções para integrar sistemas, automatizar tarefas repetitivas e melhorar rotinas de atendimento e operação.

Endereço: [logosnext.com.br](https://logosnext.com.br).

## Páginas e funcionalidades

| Rota | Conteúdo |
| --- | --- |
| `/` | Apresentação da empresa, soluções, setores atendidos e contato |
| `/seguros` | Automação e IA para corretoras de seguros |
| `/contabilidade` | Automação e IA para escritórios contábeis |
| `/imobiliarias` | Automação e IA para imobiliárias |
| `/api/contact` | Endpoint POST do formulário, com envio de e-mail por SMTP |

As páginas compartilham um template e possuem metadados específicos para SEO e compartilhamento. O projeto também gera sitemap e regras para robôs de busca.

## Tecnologias

- Next.js 16 com App Router e React 19.
- TypeScript e Tailwind CSS 4.
- Nodemailer para envio do formulário por e-mail.
- Docker Compose para implantação e Nginx como proxy reverso.

## Desenvolvimento local

Use Node.js 20 e npm, alinhados à imagem do Dockerfile.

```bash
npm ci
npm run dev
```

Acesse [localhost:3000](http://localhost:3000).

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm start` | Inicia a versão de produção após o build |
| `npm run lint` | Executa o ESLint |

## Formulário de contato

Configure as variáveis abaixo em `.env.local` no desenvolvimento. Reinicie o servidor após alterá-las.

```dotenv
SMTP_HOST=smtp.exemplo.com
SMTP_PORT=587
SMTP_USER=usuario@exemplo.com
SMTP_PASS=substitua-pela-credencial-smtp
SMTP_FROM=usuario@exemplo.com
CONTACT_TO=comercial@logosnext.com.br
```

| Variável | Uso |
| --- | --- |
| `SMTP_HOST` | Servidor SMTP; obrigatório |
| `SMTP_PORT` | Porta SMTP; padrão `587`. A porta `465` ativa TLS direto |
| `SMTP_USER` | Usuário SMTP; obrigatório |
| `SMTP_PASS` | Credencial SMTP; obrigatória |
| `SMTP_FROM` | Remetente; usa `SMTP_USER` quando omitido |
| `CONTACT_TO` | Destinatário; padrão `comercial@logosnext.com.br` |

Sem as credenciais obrigatórias, o endpoint responde com HTTP `503`. Não versione credenciais nem as publique no código do navegador.

Em produção, forneça essas variáveis ao container em tempo de execução. O Compose atual define apenas `NODE_ENV`; ele não repassa automaticamente as variáveis SMTP. Uma opção é manter um arquivo no VPS, fora do diretório de build, e adicionar ao serviço `logosnext-site`:

```yaml
env_file:
  - /etc/logosnext-site/smtp.env
```

Crie esse arquivo com as variáveis necessárias e restrinja seu acesso. Arquivos locais de ambiente dentro do contexto de build também precisam ser excluídos pelo `.dockerignore` para evitar sua inclusão na imagem.

## Implantação no VPS

O Dockerfile usa Node.js 20 Alpine, compila o projeto e inicia o Next.js na porta interna `3000`, com usuário sem privilégios de root.

O site e o proxy reverso precisam compartilhar a rede externa `nginx_net`. Se ela ainda não existir, crie-a uma vez:

```bash
docker network create nginx_net
```

Na pasta do site, valide a configuração e suba a aplicação:

```bash
docker compose config --quiet
docker compose up -d --build
docker compose ps
docker compose logs --tail=100 logosnext-site
```

### Portas e integração com o Nginx

O Compose publica `9091:3000`: a porta `9091` pertence ao VPS e encaminha para a porta `3000` do container. Ela precisa estar livre no servidor. A porta `9090` já é usada pelo `siaed-client` no VPS atual.

O Nginx encaminha o domínio diretamente ao container pela rede `nginx_net`:

```nginx
location / {
    proxy_pass http://logosnext-site:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
}
```

Fluxo de acesso: navegador → Nginx nas portas 80/443 → `logosnext-site:3000`.

Alterar a porta publicada no VPS não exige alterar esse `proxy_pass`. Se todo acesso ocorrer pelo Nginx, o bloco `ports` do site pode ser removido; a comunicação pela rede Docker continua usando a porta interna `3000`.

Depois de recriar o container, confira a comunicação e recarregue o proxy para atualizar a resolução do endereço do site:

```bash
docker exec reverse_nginx wget -S -O /dev/null http://logosnext-site:3000
docker exec reverse_nginx nginx -t && docker exec reverse_nginx nginx -s reload
```

Esses comandos pressupõem que o proxy se chama `reverse_nginx`, conforme a configuração do projeto `logosnext-nginx`. Certificados TLS e configurações do domínio são mantidos naquele projeto.

## Organização do código

| Caminho | Responsabilidade |
| --- | --- |
| `app/page.tsx` | Página inicial |
| `app/[setor]/page.tsx` | Páginas dos setores cadastrados |
| `app/api/contact/route.ts` | Validação do formulário e envio por SMTP |
| `app/layout.tsx` | Layout global, fontes, metadados e dados estruturados |
| `app/globals.css` | Estilos globais |
| `app/sitemap.ts` e `app/robots.ts` | Sitemap e regras de indexação |
| `components/site/` | Template, seções e componentes visuais compartilhados |
| `lib/content.ts` | Textos, contatos, navegação e conteúdo dos setores |
| `public/` | Imagens e outros arquivos estáticos |
| `Dockerfile` e `docker-compose.yml` | Build e execução em container |

Para atualizar os textos e contatos, comece por `lib/content.ts`. Para alterar a apresentação compartilhada das páginas, consulte `components/site/PageTemplate.tsx` e os componentes usados por ele.
