# Sistema Web para Clínica Veterinária

## Parte 1 - Proposta da Aplicação

O sistema é uma aplicação web voltada para clínicas veterinárias, com foco no cadastro e acompanhamento de tutores e seus pets.

A aplicação resolve o problema da organização das informações dos animais, permitindo registrar dados básicos dos pets e associá-los aos seus respectivos tutores. Isso facilita o controle dos animais atendidos pela clínica e serve como base para futuras funcionalidades, como agendamento de consultas, histórico veterinário e lembretes de vacinação.

Os principais usuários do sistema são os tutores de pets e os profissionais da clínica veterinária.

As duas entidades centrais da aplicação são:

- **Tutor**
- **Pet**

---

## Parte 2 - Modelagem de Dados 



```javascript
const TutorSchema = {
  id: "number",        // Identificador único do tutor
  nome: "string",     // Nome completo do tutor
  telefone: "string", // Telefone para contato
  email: "string"     // E-mail para comunicação e identificação do tutor
};
2.2 Entidade Pet
const PetSchema = {
  nome: "string",     // Nome do pet
  especie: "string",  // Espécie do animal, como cachorro, gato, coelho etc.
  raca: "string",     // Raça do pet
  idade: "number",    // Idade aproximada do pet em anos
  tutor_id: "number"  // Identificador do tutor responsável pelo pet
};
```




// Registros mockados



```
const tutores = [
  {
    id: 1,
    nome: "Mariana Souza",
    telefone: "(43) 99912-3456",
    email: "mariana.souza@email.com"
  },
  {
    id: 2,
    nome: "Carlos Henrique Lima",
    telefone: "(43) 98845-6721",
    email: "carlos.lima@email.com"
  },
  {
    id: 3,
    nome: "Fernanda Oliveira",
    telefone: "(43) 99734-2210",
    email: "fernanda.oliveira@email.com"
  },
  {
    id: 4,
    nome: "Rafael Martins",
    telefone: "(43) 99678-9034",
    email: "rafael.martins@email.com"
  }
];
```


```
const pets = [
  {
    nome: "Thor",
    especie: "Cachorro",
    raca: "Golden Retriever",
    idade: 4,
    tutor_id: 1
  },
  {
    nome: "Luna",
    especie: "Gato",
    raca: "Siamês",
    idade: 2,
    tutor_id: 2
  },
  {
    nome: "Mel",
    especie: "Cachorro",
    raca: "Shih-tzu",
    idade: 6,
    tutor_id: 3
  },
  {
    nome: "Nina",
    especie: "Gato",
    raca: "SRD",
    idade: 3,
    tutor_id: 4
  }
];
```


## Parte 3 - Interface 

A interface foi implementada em React no arquivo `App.jsx`, utilizando componentes funcionais e dados mockados das entidades **Tutor** e **Pet**.

### Componentes criados

#### `PerfilTutor`

Responsável por exibir os dados do tutor responsável pelo pet selecionado.  
Consome dados da entidade **Tutor**, recebidos por props, como `nome`, `telefone` e `email`.

#### `PerfilPet`

Responsável por exibir os dados do pet selecionado e apresentar ações relacionadas ao animal, como agendar consulta, registrar vacinação e visualizar histórico.  
Consome dados da entidade **Pet**, recebidos por props, como `nome`, `especie`, `raca`, `idade` e `tutor_id`.

#### `ListaPets`

Responsável por listar os pets cadastrados em formato de cards. Permite selecionar um pet para visualizar seus detalhes.  
Consome o array mockado de **Pets** e também utiliza o array de **Tutores** para mostrar o nome do tutor responsável.

#### `FormularioPet`

Responsável por exibir um formulário visual para cadastro de um novo pet.  
Consome os dados mockados de **Tutores** para preencher o campo de seleção do tutor responsável. O formulário não persiste os dados, mas exibe uma mensagem de sucesso após a submissão.

### Gerenciamento de estado

A aplicação utiliza `useState` para controlar o pet selecionado, os campos do formulário e as mensagens de feedback exibidas ao usuário.

### Biblioteca de CSS utilizada

A biblioteca escolhida foi o **Tailwind CSS**, pois permite estilizar a interface diretamente por classes utilitárias, facilitando a criação de uma tela organizada, responsiva e visualmente consistente. Além disso, atende ao requisito da atividade sem utilizar bibliotecas de componentes prontos, como Material UI ou Chakra UI.
