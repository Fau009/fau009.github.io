# Central de Projetos · Full Solutions

**Site:** https://fau009.github.io/

Este repositório mantém no ar o site da Central de Projetos. O site é a **forma oficial de apresentar e publicar os projetos** da Full Solutions: todo projeto novo ganha um card aqui assim que é criado.

As regras de trabalho e o histórico de decisões ficam no repositório privado `central-de-projetos`. Este repositório guarda só o site, que é público.

## Como funciona

1. Um projeto novo é criado no próprio repositório, seguindo as regras da `central-de-projetos`.
2. Ele é registrado no `projetos.md` da `central-de-projetos`.
3. Ele ganha um card neste site, numa entrada em `projetos.js`.

## Regra para projetos privados

Projeto com repositório **privado nunca mostra o link do repositório** neste site. No lugar do botão aparece o aviso "Repositório privado".

Se o projeto tiver um site no ar (GitHub Pages, Vercel ou domínio próprio), o botão **Abrir site** aparece normalmente. Exemplo: o Clio é privado e mostra o site `clio.coliseunerd.com.br`.

No `projetos.js`, use `privado: true` com `repo: null` e preencha `site` quando houver. Mesmo que o `repo` seja preenchido por engano, a página não o exibe para projetos privados.

## O que tem no site

- Card de apresentação no topo, com o texto de boas-vindas e os números gerais.
- Busca por nome e filtro por categoria: Utilidade, Ferramenta, Entretenimento, Informação, Esporte e Social. O filtro também funciona por link, por exemplo `https://fau009.github.io/#entretenimento`.
- Ordenação por mais recentes, mais antigos ou nome.
- Um card por projeto, com ícone, categoria, visibilidade, descrição e data de criação. Botão **Abrir site** quando o projeto tem site no ar e botão **Repositório** só para projetos públicos.
- Tema claro e escuro automáticos, seguindo o sistema. Funciona no celular.

## Como incluir um projeto

1. Abra `projetos.js`.
2. Copie um bloco de projeto e preencha `nome`, `descricao`, `categoria`, `criadoEm` (AAAA-MM-DD), `privado`, `site`, `repo` e `icone`.
3. O ícone é um desenho minimalista em SVG numa área de 48×48, só com traços (`<path>`, `<circle>`, `<rect>`). Use `class="fill"` para preencher uma forma.
4. Para criar uma categoria nova, inclua em `CATEGORIAS` no mesmo arquivo.
5. Faça commit e push na `main` e envie também para a `gh-pages`: `git push origin main:gh-pages`.

Os números do topo e os contadores dos filtros se atualizam sozinhos.

## Estrutura

- `index.html`: página, estilos e lógica de busca e filtros.
- `projetos.js`: lista de projetos e categorias.
- `marca/`: logotipo e símbolo da Full Solutions com fundo transparente, favicon e imagem de compartilhamento.

HTML, CSS e JS puros, sem dependências. Publicado pelo GitHub Pages.
