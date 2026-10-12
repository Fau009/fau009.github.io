# Central de Projetos · Full Solutions

Site público com todos os projetos, cada um com link para o site e, quando o projeto é público, para o repositório.

**Site:** https://fau009.github.io/

As regras e o histórico de decisões ficam no repositório privado `central-de-projetos`. Este repositório guarda só o site.

## O que tem no site

- Card de apresentação no topo, com a definição da Central e os números gerais.
- Busca por nome e filtro por categoria: Utilidade, Ferramenta, Entretenimento, Informação, Esporte e Social. O filtro também funciona por link, por exemplo `https://fau009.github.io/#entretenimento`.
- Ordenação por mais recentes, mais antigos ou nome.
- Um card por projeto, com ícone, categoria, visibilidade, descrição, data de criação, botão **Abrir site** e botão **Repositório** (ou o aviso "Repositório privado").
- Tema claro e escuro automáticos, seguindo o sistema. Funciona no celular.

## Como incluir um projeto novo

1. Abra `projetos.js`.
2. Copie um bloco de projeto e preencha `nome`, `descricao`, `categoria`, `criadoEm` (AAAA-MM-DD), `site`, `repo` (use `null` se o repositório for privado) e `icone`.
3. O ícone é um desenho em SVG numa área de 48×48, só com traços (`<path>`, `<circle>`, `<rect>`). Use `class="fill"` para preencher uma forma.
4. Para criar uma categoria nova, inclua em `CATEGORIAS` no mesmo arquivo.
5. Faça commit e push na `main`, e envie também para a `gh-pages`: `git push origin main:gh-pages`.

Os números do topo e os contadores dos filtros se atualizam sozinhos.

## Estrutura

- `index.html`: página, estilos e lógica de busca e filtros.
- `projetos.js`: lista de projetos e categorias.
- `marca/`: logotipo e símbolo da Full Solutions com fundo transparente, favicon e imagem de compartilhamento.

HTML, CSS e JS puros, sem dependências. Publicado pelo GitHub Pages a partir da branch `gh-pages`, que é um espelho da `main`.
