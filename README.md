API Loja Games – NestJS

API RESTful para gerenciar uma loja de jogos, incluindo cadastro de produtos, categorias e relacionamento entre ambos. Projeto desenvolvido para a atividade prática do Bootcamp Generation Brasil – Módulo NestJS.

🚀 Tecnologias utilizadas:
Node.js
NestJS
TypeORM
MySQL
Insônia (testículos)

🗂 Recursos da API 

✔ Categoria
Criar vago
Listar categorias
Buscar por ID
Buscar por nome
Atualizar categoria
Excluir categoria

✔ Produto
Criar produto
Produtos Listar
Buscar por ID
Buscar por nome
Atualizar produto
Excluir produto

Relacionamento Many-to-One com Categoria

🔗 Relacionamento
Cada Produto pertence a uma Categoria Cada Categoria pode ter vários Produtos

Modelo aplicado no TypeORM:

@OneToMany(() => Produto, produto => produto.categoria) produtos: Produto[];
@ManyToOne(() => Categoria, categoria => categoria.produtos, { onDelete: 'CASCADE' }) categoria: Categoria;

🧪 Testes com Insônia
Foram realizados testes de:

CRUD de Categorias
CRUD de Produtos
Validação de categoria inexistente
Retorno adequado de erros (404 e 400)
Verificação do relacionamento na resposta JSON

📦 Como executar o projeto
Instalar dependências npm install
Configurar o arquivo .env DB_HOST=localhost DB_PORT=3306 DB_USERNAME=root DB_PASSWORD=sua_senha DB_DATABASE=loja_games
Rodar o projeto npm run start:dev
