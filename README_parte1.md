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





// Registros mockados




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
