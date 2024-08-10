# Primeiros passos com MongoDB

--> Essa foi uma API simples feita com MongoDB 

--> Foi utilizada para uma apresentação com o tema back-end com MongoDB 

# Skills
[![My Skills](https://skillicons.dev/icons?i=docker,express,nodejs,js,mongodb,git,npm,vscode)](https://skillicons.dev)

# Instruções
Clone o Repositório:<br>
`git clone https://github.com/LPeter-nm/MongoDB.git`<br>

Entre na pasta da aplicação:<br>
`$ cd MongoDB`<br>

Instale as Dependências:<br>
`npm install`<br>
`yarn install`<br>

Inicie o Servidor de Desenvolvimento:<br>
`npm run dev`<br>

# Schema

```javascript
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String, 
            required: true,
        },

        quantity: {
            type: Number,
            required: true, 
            default: 0,
        },

        price: {
            type: Number,
            required: true, 
            default: 0,
        },

        image: {
            type: String, 
            required: false,
        },  
    },

    {
        timeStamp: true,
    }
);
