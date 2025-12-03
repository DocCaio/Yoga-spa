# Yoga — Página spbre yopa e spa

Projeto desenvolvido com Vue 3 + TypeScript, incluindo Dark Mode, componentes reutilizáveis e layout responsivo.

## ✨ Features

🎨 Tema Claro/Escuro (Dark Mode) com persistência no localStorage

🛍️ Listagem de roupas e sapatos com grid responsivo

⚡ Vue 3 + Composition API para melhor organização do código

🧩 Componentização para facilitar manutenção

🛠️ TypeScript garantindo tipagem forte

📱 Responsivo para mobile, tablet e desktop


| Tecnologia         | Descrição               |
| ------------------ | ----------------------- |
| 🟩 **Vue 3**       | Framework SPA           |
| 🟦 **TypeScript**  | Tipagem estática        |
| 🎨 **CSS / SCSS**  | Estilização e dark mode |
| 🌑 **modo escuro** | Alternância de tema     |

## 📂 Estrutura do Projeto

├── .gitignore
├── .vscode
    └── extensions.json
├── README.md
├── env.d.ts
├── index.html
├── package.json
├── public
    ├── assets
    │   └── Logo.png
    ├── favicon.ico
    └── images
    │   ├── Eat
    │       ├── Leaf.png
    │       └── drinks.png
    │   ├── MainTitle
    │       ├── food.png
    │       └── yoga.png
    │   ├── OrganicProduce
    │       ├── icon.png
    │       └── organic.png
    │   ├── PlantProtective
    │       ├── BgFlorest.png
    │       ├── leaf.png
    │       └── plants.png
    │   └── Wellbeing
    │       ├── Leaf.png
    │       └── Woman.png
├── src
    ├── app
    │   ├── App.vue
    │   ├── app.css
    │   ├── components
    │   │   ├── Eat
    │   │   │   ├── Eat.css
    │   │   │   └── Eat.vue
    │   │   ├── Foot
    │   │   │   ├── Foot.css
    │   │   │   └── Foot.vue
    │   │   ├── MainTitle
    │   │   │   ├── MainTitle.css
    │   │   │   └── MainTitle.vue
    │   │   ├── NavBar
    │   │   │   ├── NavBar.css
    │   │   │   └── Navbar.vue
    │   │   ├── OrganicProduce
    │   │   │   ├── OrganicProduce.css
    │   │   │   └── OrganicProduce.vue
    │   │   ├── PlantProtective
    │   │   │   ├── PlantProtective.css
    │   │   │   └── PlantProtective.vue
    │   │   └── Wellbeing
    │   │   │   ├── Wellbeing.css
    │   │   │   └── Wellbeing.vue
    │   ├── main.ts
    │   ├── modules
    │   │   ├── auth
    │   │   │   └── page
    │   │   │   │   └── AuthPage.vue
    │   │   └── samples
    │   │   │   └── pages
    │   │   │       ├── HomePage.vue
    │   │   │       ├── Login.vue
    │   │   │       └── NewsLetter.vue
    │   ├── router
    │   │   ├── index.ts
    │   │   └── routes.ts
    │   └── shared
    │   │   └── layout
    │   │       └── AppLayout.vue
    └── stores
    │   └── counter.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock

## 🧪 Como Rodar o Projeto

```
# instalar dependências
yarn install

# iniciar ambiente de desenvolvimento
yarn  dev

# build para produção
yarn build

```


## 🤝 Contribuição

Sinta-se à vontade para abrir issues, pull requests ou sugerir melhorias!

