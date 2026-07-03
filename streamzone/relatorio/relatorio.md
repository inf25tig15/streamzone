# StreamZone — Plataforma Estática de Streaming Multimédia

## 1. Project Presentation — Apresentação do Projeto

### 1.1. Identificação do projeto

**Nome do projeto:** StreamZone
**Área temática:** Multimédia
**Tipo de projeto:** Sítio Web estático
**Tecnologias utilizadas:** HTML5, CSS3, JavaScript, XML e XSD
**Disciplina:** Tecnologias Internet
**Curso:** Licenciatura em Informática
**Instituição:** Universidade da Maia
**Grupo:** [inf25tig15]
**Elementos:** [Sérgio Cardoso (A042074)]

### 1.2. Proposta de trabalho

O projeto StreamZone consiste no desenvolvimento de um sítio Web estático que simula uma plataforma de streaming de música e vídeo. O objetivo principal é demonstrar a aplicação prática de tecnologias Web na construção de uma interface multimédia organizada, responsiva e funcional.

A plataforma apresenta conteúdos fictícios de música e vídeo, organizados por título, tipo, género, duração, ano e classificação. Estes dados são armazenados num ficheiro XML e validados através de um schema XSD. Uma das páginas do site permite carregar dinamicamente estes dados para uma tabela HTML através de JavaScript, demonstrando a integração entre XML e HTML no lado do cliente.

O site inclui várias páginas estáticas desenvolvidas com HTML5 semântico, utilizando elementos como `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `footer` e `address`. A apresentação visual é definida através de CSS3 externo, com utilização de seletores, pseudo-classes, pseudo-elementos, box model, posicionamento, flutuação, tabelas formatadas, listas, imagem de fundo e media queries para responsividade.

O projeto inclui também elementos multimédia, como imagem, áudio e vídeo, bem como um formulário de contacto com validação HTML e JavaScript. A StreamZone não representa uma aplicação real com servidor, autenticação ou base de dados, sendo uma simulação estática desenvolvida para fins académicos.

### 1.3. Objetivos do projeto

Os principais objetivos do projeto são:

* desenvolver um sítio Web estático com pelo menos quatro páginas;
* aplicar corretamente HTML5 semântico;
* utilizar CSS3 externo para definir a apresentação gráfica;
* criar uma interface responsiva para diferentes dimensões de ecrã;
* utilizar JavaScript para manipular elementos HTML após eventos;
* integrar dados de um ficheiro XML numa página HTML;
* criar e validar um documento XML com schema XSD;
* disponibilizar o site através da plataforma Netlify;
* documentar o projeto através de um relatório em Markdown.

### 1.4. Estrutura geral do site

O site é composto pelas seguintes páginas:

| Página            | Função                                                |
| ----------------- | ----------------------------------------------------- |
| `index.html`      | Página inicial e apresentação da plataforma           |
| `catalogo.html`   | Catálogo de músicas e vídeos carregado através de XML |
| `planos.html`     | Comparação de planos fictícios e listas informativas  |
| `multimedia.html` | Explicação sobre multimédia, áudio, vídeo e streaming |
| `contactos.html`  | Formulário de contacto e feedback                     |

---

## 2. User Interface — Interface com o Utilizador

### 2.1. Conceito visual

A interface da StreamZone foi pensada para representar uma plataforma moderna de streaming. Foi utilizada uma estética escura, com destaque em azul/ciano, de forma a criar uma associação visual com tecnologia, multimédia e conteúdos digitais.

A organização das páginas segue uma estrutura simples e consistente:

* cabeçalho com logótipo e identificação da plataforma;
* menu de navegação principal;
* área de conteúdo central;
* secções organizadas por tema;
* rodapé com informação académica.

### 2.2. Sitemap

```txt
index.html
│
├── catalogo.html
├── planos.html
├── multimedia.html
└── contactos.html
```

### 2.3. Navegação

O menu principal está presente em todas as páginas e permite aceder às seguintes áreas:

* Início;
* Catálogo;
* Planos;
* Multimédia;
* Contactos.

A página ativa é destacada visualmente através de uma classe CSS específica, permitindo ao utilizador perceber em que secção se encontra.

### 2.4. Wireframe inicial

Representação simplificada da estrutura usada nas páginas:

```txt
+--------------------------------------------------+
| Cabeçalho / Logótipo                             |
+--------------------------------------------------+
| Menu: Início | Catálogo | Planos | Multimédia    |
+--------------------------------------------------+
| Conteúdo principal                               |
|                                                  |
| Secção 1                                         |
| Secção 2                                         |
| Cards / Tabela / Formulário                      |
|                                                  |
+--------------------------------------------------+
| Rodapé                                           |
+--------------------------------------------------+
```

### 2.5. Resultado final da interface

A interface final apresenta:

* fundo escuro;
* logótipo da plataforma;
* menu fixo no topo;
* cartões de conteúdo;
* tabelas formatadas;
* formulários estilizados;
* elementos multimédia;
* adaptação a ecrãs mais pequenos através de media queries.

### 2.6. Responsividade

A responsividade foi implementada com media queries no ficheiro `css/style.css`.

Foram considerados, pelo menos, dois tamanhos de ecrã:

| Dimensão  | Comportamento                                                      |
| --------- | ------------------------------------------------------------------ |
| Até 900px | Ajustes no menu, tabelas e elementos laterais                      |
| Até 600px | Menu vertical, tabelas em blocos e botões a ocupar a largura total |

---

## 3. Product — Produto

### 3.1. Descrição do produto

A StreamZone é um sítio Web estático que simula uma plataforma de streaming multimédia. O produto permite ao utilizador consultar informações sobre conteúdos de música e vídeo, visualizar planos fictícios, aprender conceitos associados a multimédia e preencher um formulário de contacto.

O catálogo é armazenado num ficheiro XML e apresentado numa tabela HTML através de JavaScript. O projeto não utiliza servidor, base de dados ou autenticação.

### 3.2. Ligação para o site

**Netlify:** [https://inf25tig15.netlify.app/]

### 3.3. Repositório GitHub

**GitHub:** [https://github.com/inf25tig15/streamzone]

### 3.4. Estrutura de ficheiros

```txt
streamzone/
│
├── index.html
├── catalogo.html
├── planos.html
├── multimedia.html
├── contactos.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── xml/
│   ├── catalogo.xml
│   └── catalogo.xsd
│
├── imagens/
│   ├── logo.png
│   ├── fundo.jpg
│   ├── musica.jpg
│   ├── video.jpg
│   └── streaming.jpg
│
├── media/
│   ├── exemplo-audio.mp3
│   └── exemplo-video.mp4
│
└── relatorio/
    └── relatorio.md
```

### 3.5. Instalação local

Para executar o projeto localmente:

1. descarregar ou clonar o repositório;
2. abrir a pasta do projeto no Visual Studio Code;
3. instalar a extensão Live Server;
4. abrir o ficheiro `index.html` com Live Server;
5. navegar pelas páginas através do menu.

A utilização de Live Server é recomendada porque a funcionalidade JavaScript que carrega o ficheiro XML utiliza `fetch()`, que pode não funcionar corretamente se o site for aberto diretamente através de `file:///`.

### 3.6. Instalação no Netlify

Para publicar o projeto no Netlify:

1. criar conta no Netlify;
2. associar o repositório GitHub do projeto;
3. configurar a publicação como site estático;
4. definir a pasta raiz do projeto como diretório de publicação;
5. publicar o site;
6. configurar o nome do site no formato pedido.

Não é necessária configuração de servidor, base de dados ou backend.

### 3.7. Regras de utilização

O site não requer autenticação. Todas as páginas são públicas e acessíveis através do menu principal.

Limitações:

* os conteúdos são fictícios;
* não existe reprodução real de catálogo externo;
* não existe conta de utilizador;
* não existe base de dados;
* o formulário não envia dados para servidor;
* o catálogo é carregado a partir de um ficheiro XML local.

### 3.8. Ajuda à navegação

A navegação é feita através de um menu presente em todas as páginas. O item correspondente à página atual é destacado visualmente.

Foram usados efeitos `hover` para indicar elementos interativos, como links, botões e cartões.

### 3.9. Validação de formulários

O formulário da página `contactos.html` utiliza validação HTML através de atributos como:

* `required`;
* `minlength`;
* `type="email"`;
* `select` obrigatório;
* `radio` obrigatório.

Além disso, foi implementada validação complementar em JavaScript, que verifica os valores introduzidos e apresenta uma mensagem de sucesso ou erro.

### 3.10. XML e XSD

O ficheiro `xml/catalogo.xml` contém os dados do catálogo multimédia. Cada conteúdo tem os seguintes campos:

* título;
* tipo;
* género;
* duração;
* ano;
* classificação.

O ficheiro `xml/catalogo.xsd` define as regras de validação do XML, incluindo:

* elemento raiz `catalogo`;
* vários elementos `conteudo`;
* atributo obrigatório `id`;
* tipo de conteúdo limitado a `Musica` ou `Video`;
* ano no formato `xs:gYear`;
* classificação decimal entre 0 e 5.

### 3.11. Integração XML com JavaScript

A página `catalogo.html` inclui um botão que permite carregar os dados do ficheiro XML. O JavaScript utiliza:

* `fetch()` para carregar o ficheiro XML;
* `DOMParser` para interpretar o XML;
* manipulação do DOM para criar linhas e células da tabela;
* tratamento de erros caso o ficheiro XML não seja carregado corretamente.

Esta funcionalidade permite transformar os dados XML em conteúdo HTML visível para o utilizador.

### 3.12. Detalhes de implementação HTML

O projeto utiliza HTML5 semântico, incluindo os seguintes elementos:

| Elemento     | Utilização                       |
| ------------ | -------------------------------- |
| `header`     | Cabeçalho das páginas            |
| `nav`        | Menu de navegação                |
| `main`       | Conteúdo principal               |
| `section`    | Divisão temática do conteúdo     |
| `article`    | Blocos independentes de conteúdo |
| `aside`      | Informação complementar          |
| `figure`     | Agrupamento de imagem            |
| `figcaption` | Legenda de imagem                |
| `footer`     | Rodapé                           |
| `address`    | Informação institucional         |

Também foram usados:

* tabelas com `thead`, `tbody`, `tfoot`, `rowspan` e `colspan`;
* listas ordenadas;
* listas não ordenadas;
* listas de definição;
* listas aninhadas;
* elementos `strong`, `em` e `mark`;
* imagens com `img`;
* links internos e externos;
* formulário;
* elementos `audio` e `video`.

### 3.13. Detalhes de implementação CSS

A apresentação visual foi definida no ficheiro externo `css/style.css`.

Foram utilizados:

| Requisito CSS           | Implementação                                       |
| ----------------------- | --------------------------------------------------- |
| Seletor de tipo         | `body`, `p`, `table`, `img`                         |
| Seletor de id           | `#topo`, `#mensagem-formulario`                     |
| Seletor de classe       | `.card`, `.hero`, `.menu-principal`                 |
| Pseudo-classe           | `:hover`, `:focus`                                  |
| Seletor de atributo     | `input[type="email"]`, `a[download]`                |
| Pseudo-elemento         | `::before`, `::after`                               |
| Combinador              | `.menu-principal > ul`, `main section > h2`         |
| Texto e fonte           | `font-family`, `font-size`, `line-height`           |
| Fundo com cor e imagem  | `background-color`, `background-image`              |
| Listas                  | `list-style-type`                                   |
| Box model               | `margin`, `border`, `padding`, `width`              |
| Flutuação               | `float`                                             |
| Posicionamento          | `position: sticky`, `relative`, `absolute`          |
| Esconder elemento       | `.escondido`                                        |
| Tabelas                 | formatação de `table`, `th`, `td`, `thead`, `tfoot` |
| Substituição por imagem | logótipo aplicado ao `h1` via CSS                   |
| Responsividade          | media queries                                       |

### 3.14. Detalhes de implementação JavaScript

O ficheiro `js/script.js` implementa:

* carregamento de XML;
* criação dinâmica de linhas da tabela;
* botão para mostrar/esconder informação;
* validação do formulário;
* alteração de conteúdo após evento;
* alteração visual de elementos através de classes CSS.

Principais eventos utilizados:

* `DOMContentLoaded`;
* `click`;
* `submit`;
* `reset`.

### 3.15. Validação HTML

Os documentos HTML foram validados através do validador oficial da W3C.

Ficheiros testados:

| Ficheiro          | Resultado                                    |
| ----------------- | -------------------------------------------- |
| `index.html`      | [Validado no W3C Nu Html Checker sem erros.] |
| `catalogo.html`   | [Validado no W3C Nu Html Checker sem erros.] |
| `planos.html`     | [Validado no W3C Nu Html Checker sem erros.] |
| `multimedia.html` | [Validado no W3C Nu Html Checker sem erros.] |
| `contactos.html`  | [Validado no W3C Nu Html Checker sem erros.] |

Comprovativos:

* `relatorio/comprovativos/validacao-html-index.png`;
* `relatorio/comprovativos/validacao-html-catalogo.png`;
* `relatorio/comprovativos/validacao-html-planos.png`;
* `relatorio/comprovativos/validacao-html-multimedia.png`;
* `relatorio/comprovativos/validacao-html-contactos.png`.

### 3.16. Validação CSS

O ficheiro `css/style.css` foi validado através do W3C CSS Validation Service.

Resultado:

```txt
[O ficheiro css/style.css foi validado no W3C CSS Validation Service. O resultado final indicou que não foram encontrados erros de CSS.]
```

Comprovativo:

```txt
relatorio/comprovativos/validacao-css-style.png
```

### 3.17. Validação XML/XSD

O ficheiro `xml/catalogo.xml` foi validado com o respetivo schema `xml/catalogo.xsd`.

Resultado:

```txt
[A validação foi realizada com o comando xmllint --noout --schema xml/catalogo.xsd xml/catalogo.xml. O resultado apresentado foi: xml/catalogo.xml validates.]
```

Comprovativo:

```txt
relatorio/comprovativos/validacao-xml-xsd.png
```

---

## 4. Presentation — Apresentação

### 4.1. Estrutura da apresentação

A apresentação do projeto será organizada da seguinte forma:

1. apresentação geral do tema;
2. demonstração da página inicial;
3. navegação pelas páginas do site;
4. demonstração do catálogo XML carregado com JavaScript;
5. explicação do ficheiro XML e do schema XSD;
6. demonstração da tabela de planos;
7. demonstração dos elementos multimédia;
8. demonstração do formulário;
9. explicação da responsividade;
10. apresentação das validações realizadas.

### 4.2. Pontos a demonstrar

Durante a apresentação serão demonstrados os seguintes aspetos:

* site publicado no Netlify;
* navegação entre páginas;
* HTML5 semântico;
* CSS3 externo;
* responsividade;
* tabela com estrutura completa;
* listas;
* imagens;
* áudio e vídeo;
* formulário;
* XML e XSD;
* carregamento de XML com JavaScript;
* validação dos documentos.

### 4.3. Características diferenciadoras

O projeto inclui algumas funcionalidades adicionais:

* carregamento dinâmico de dados XML para uma tabela HTML;
* manipulação de elementos HTML com JavaScript;
* alteração de estilos após eventos;
* interface responsiva;
* utilização de elementos `audio` e `video`;
* logótipo aplicado por CSS;
* tema visual coerente com uma plataforma de streaming.

### 4.4. Dificuldades encontradas

Durante o desenvolvimento foram encontradas algumas dificuldades, nomeadamente:

* organização inicial da estrutura do projeto;
* criação do ficheiro XML e respetivo XSD;
* carregamento do XML através de JavaScript;
* adaptação da interface a diferentes tamanhos de ecrã;
* validação dos documentos nos validadores oficiais.

Estas dificuldades foram resolvidas através de testes progressivos, consulta da documentação e validação regular dos ficheiros.

### 4.5. Conclusão

O projeto StreamZone permitiu aplicar de forma prática os principais conteúdos abordados na disciplina de Tecnologias Internet. Foram utilizadas tecnologias Web fundamentais, como HTML5, CSS3, JavaScript, XML e XSD, na criação de um sítio Web estático, funcional e responsivo.

O trabalho demonstra a construção de uma interface multimédia, a organização semântica de páginas Web, a separação entre estrutura e apresentação, a manipulação dinâmica do DOM e a integração de dados XML no lado do cliente.

---

## 5. Referências

* MDN Web Docs — documentação sobre HTML, CSS e JavaScript.
* W3C — validação e normas Web.
* Netlify — publicação de sites estáticos.
* GitHub — alojamento de repositórios de código.
