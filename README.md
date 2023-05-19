
# _WAITER_ APP
<div>
	<img src="https://user-images.githubusercontent.com/101602651/204911676-ca120db1-f616-4158-9aa4-9ad4ea7d8ccd.PNG" id="cover-image" alt="Logo" />
</div>
</br>

<div id='introducao'>

O **WAITERAPP** é uma aplicação voltada para restaurantes e locais de gastronomia 
no geral. Esse projeto foi desenvolvido em aula na imersão do Mateus Silva
no Youtube, e o mesmo liberou para que os alunos publicassem e fizessem as suas
próprias alterações.

Futuramente irei acrescentar novas funcionalidades que você pode conferir no [Roadmap](#roadmap).
</div>

## Tópicos

* [Introdução](#introducao)
* [Instalar e rodar o projeto localmente](#instalacao)
* [Stack utilizada](#stack_utilizada)
* [Demonstração](#demonstração)
* [Roadmap](#roadmap)
* [Aprendizados](#aprendizados)
* [Status](#status)
* [Contatos](#contatos)

<div id='instalacao'>

## Instalando e rodando o projeto localmente:

Para rodar o WAITER**APP** em sua máquina é bem simples.

Você precisa ter instalado:

- Node.js LTS v16
- MongoDB Compass v1.33.1 (apenas caso você queira criar e editar pedidos e categorias, não é necessário para testar)
- Expo para celular ou o Emulador do Android ou IOS.

Para a instalação dos pacotes você deve entrar em cada pasta individualmente
e rodar o comando `yarn install`, pois neste projeto temos a _API_, _WEB_ e _MOBILE_

Navegue para `./api` e rode no terminal o comando:
```bash
yarn install
```
Repita esse passo para `../app` e depois em `../fe`.

### Rotas

Lembre-se de alterar as rotas da aplicação nos arquivos:
<div>
	
`\waiterapp\app\src\components\ProductModal\index.tsx`

	
`\waiterapp\app\src\components\Menu\index.tsx`

	
`\waiterapp\app\src\components\Cart\index.tsx`

</div>

> Para facilitar você pode buscar na raíz do projeto por `uri:` que o VSCode encontra para você.

E mais um detalhe, a porta padrão da aplicação foi definida para `:3001`. Caso você queira alterar basta entrar em:
`\waiterapp\api\src\index.ts` 
ou pesquisar na raíz do projeto por `const port` e alterar o valor da váriavel.

Pronto, agora você está preparado para utilizar esta aplicação.
Para iniciar a _API_ e a _WEB_ basta rodar `yarn dev` em suas respectivas pastas.
E para iniciar a versão _MOBILE_ basta rodar `yarn start` em sua respectiva pasta.  

**OBS:** Caso você queira rodar a _API_ fora do ambiente de desenvolvimento, você pode
rodar o comando `yarn build` e logo em seguida passar a utilizar o comando `yarn start`.
</div>
<div id='stack_utilizada'>
<h2>Stack utilizada</h2>

* **Front-end:** React, React-Native, Styled-Components, Axios, Expo, Intl e Typescript.

* **Back-end:** Node, Express, Multer, Socket.io, Mongoose e Typescript.
</div>
<div id='demonstração'>
<h2>Demonstração</h2>

Para fazer um pedido iremos utilizar o aplicativo.

1. Na tela inicial escolha um item, e logo em seguda será solicitado o número da mesa.

<p align="center">
  <img height="550" width="250" src="https://user-images.githubusercontent.com/101602651/204911673-a749e68f-fe0d-415a-bf5b-d319ab177e30.PNG"/>  
  <img height="550" width="250" src="https://user-images.githubusercontent.com/101602651/204911675-83ea0087-8cfe-46d3-a3a8-6e31b94d22b5.PNG"/>  
</p>

2. Logo em seguida você poderá adicionar, remover itens ou cancelar o pedido.

<p align="center">
  <img height="550" width="250" src="https://user-images.githubusercontent.com/101602651/204911663-26fc58c1-92a0-4355-aa41-e0f8024b5e8e.PNG"/>  
</p>

3. Após clicar em `Confirmar pedido` ele aparecerá na sua _Dashboard_ no navegador.
   Onde você poderá iniciar a produçao, finalizar, limpar ou cancelar o pedido.

<p align="center">
  <img height="550" width="250" src="https://user-images.githubusercontent.com/101602651/204923135-1950441e-6b75-4056-87b0-8c8088f7dec3.PNG"/>  
</p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/101602651/204923935-afe27062-6d68-4cd2-a39d-a658e9aedfd0.gif"/>  
</p>
</div>

<div id='aprendizados'>
<h2>Aprendizados</h2>

Neste projeto aprendemos a utilizar muito bem o React, principalmente o `useState` e
`useEffect` como podemos ver neste trecho de código:

```bash
\waiterapp\app\src\Main\index.tsx

    const [isTableModalVisible, setIsTableModalVisible] = useState(false);
	const [selectedTable, setSelectedTable] = useState('');
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [categories, setCategories] = useState<Category[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoadindProducts, setIsLoadindProducts] = useState(false);
```

Além disso o uso de `Interfaces` se faz presente durante todas as etapas do projeto, como podemos ver aqui:
```bash
\waiterapp\app\src\components\Cart\index.tsx

interface CartProps {
	cartItems: CartItem[];
	onAdd: (product: Product) => void;
	onDecrement: (product: Product) => void;
	onConfirmOrder: () => void;
	selectedTable: string;
}
```
Utilizamos tambem durante toda a estilização do projeto o _Styled-Components_, facilitando
a leitura do código tanto na _WEB_ quanto no _MOBILE_.


Vale lembrar também da criação das rotas utilizando o `node:path`, `express` e `multer`.
</div>
<div id='roadmap'>
<h2>Roadmap</h2>

- Lançamento da v1.0 ✅
- Adicionar animação **Shimmer Effect** 🔲
- Adicionar **Splash Screen** 🔲
- Adicionar **versão responsiva ao Dashboard** 🔲
- Adicionar **autenticação de usuários** 🔲
- Adicionar **nova tela de criar e alterar pedidos dentro do MOBILE** 🔲
</div>

<div id='status'>
<h2>Status</h2>
<p>
    <img align="left" height="100em" alt="Jim Carrey"
      src="https://user-images.githubusercontent.com/101602651/203405592-5045955d-4107-4e6d-ba53-734873fdeb45.gif">
    <div align="left">
      <br/>
      <i>      Este é um Projeto Full Stack e continua em construção!</i>
    </div>
</p>
</div>

</br>
</br>
</br>

<div id='contatos' align="center">

<h2>Entre em contato comigo!</h2>
	
<a href="https://www.instagram.com/birgiman_eduardo/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
  <a href = "mailto:eduardo.birgiman@outlook.com"><img src="https://img.shields.io/badge/Microsoft_Outlook-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/eduardo-birgiman-domingues/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>
