import { useState } from "react";
import "./index.css";

const tutoresMock = [
  {
    id: 1,
    nome: "Mariana Souza",
    telefone: "(43) 99912-3456",
    email: "mariana.souza@email.com",
  },
  {
    id: 2,
    nome: "Carlos Henrique Lima",
    telefone: "(43) 98845-6721",
    email: "carlos.lima@email.com",
  },
  {
    id: 3,
    nome: "Fernanda Oliveira",
    telefone: "(43) 99734-2210",
    email: "fernanda.oliveira@email.com",
  },
  {
    id: 4,
    nome: "Rafael Martins",
    telefone: "(43) 99678-9034",
    email: "rafael.martins@email.com",
  },
];

const petsMock = [
  {
    nome: "Thor",
    especie: "Cachorro",
    raca: "Golden Retriever",
    idade: 4,
    tutor_id: 1,
  },
  {
    nome: "Luna",
    especie: "Gato",
    raca: "Siamês",
    idade: 2,
    tutor_id: 2,
  },
  {
    nome: "Mel",
    especie: "Cachorro",
    raca: "Shih-tzu",
    idade: 6,
    tutor_id: 3,
  },
  {
    nome: "Nina",
    especie: "Gato",
    raca: "SRD",
    idade: 3,
    tutor_id: 4,
  },
];

function PerfilTutor({ tutor }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800">Perfil do Tutor</h2>

      <div className="mt-4 space-y-2 text-sm text-slate-700">
        <p>
          <span className="font-semibold">Nome:</span> {tutor.nome}
        </p>
        <p>
          <span className="font-semibold">Telefone:</span> {tutor.telefone}
        </p>
        <p>
          <span className="font-semibold">E-mail:</span> {tutor.email}
        </p>
      </div>
    </div>
  );
}

function PerfilPet({ pet, tutor }) {
  const [mensagem, setMensagem] = useState("");

  function executarAcao(acao) {
    setMensagem(`${acao} para ${pet.nome} registrada com sucesso.`);
  }

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800">Perfil do Pet</h2>

      <div className="mt-4 space-y-2 text-sm text-slate-700">
        <p>
          <span className="font-semibold">Nome:</span> {pet.nome}
        </p>
        <p>
          <span className="font-semibold">Espécie:</span> {pet.especie}
        </p>
        <p>
          <span className="font-semibold">Raça:</span> {pet.raca}
        </p>
        <p>
          <span className="font-semibold">Idade:</span> {pet.idade} anos
        </p>
        <p>
          <span className="font-semibold">Tutor:</span> {tutor?.nome}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          onClick={() => executarAcao("Consulta")}
          className="rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
        >
          Agendar consulta
        </button>

        <button
          onClick={() => executarAcao("Vacinação")}
          className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Registrar vacinação
        </button>

        <button
          onClick={() => executarAcao("Histórico")}
          className="rounded-lg bg-slate-700 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800"
        >
          Ver histórico
        </button>
      </div>

      {mensagem && (
        <p className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-medium text-emerald-700">
          {mensagem}
        </p>
      )}
    </div>
  );
}

function ListaPets({ pets, tutores, onSelecionarPet, petSelecionado }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-slate-800">Pets cadastrados</h2>
      <p className="mt-1 text-sm text-slate-500">
        Selecione um pet para visualizar os detalhes.
      </p>

      <div className="mt-4 grid gap-3">
        {pets.map((pet) => {
          const tutor = tutores.find((item) => item.id === pet.tutor_id);
          const selecionado = petSelecionado?.nome === pet.nome;

          return (
            <button
              key={pet.nome}
              onClick={() => onSelecionarPet(pet)}
              className={`rounded-xl border p-4 text-left transition ${
                selecionado
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-slate-200 bg-slate-50 hover:bg-slate-100"
              }`}
            >
              <h3 className="font-semibold text-slate-800">{pet.nome}</h3>
              <p className="text-sm text-slate-600">
                {pet.especie} • {pet.raca}
              </p>
              <p className="text-sm text-slate-500">Tutor: {tutor?.nome}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FormularioPet({ tutores }) {
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [tutorId, setTutorId] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarFormulario(evento) {
    evento.preventDefault();

    setMensagem(`Pet ${nome} cadastrado visualmente com sucesso!`);

    setNome("");
    setEspecie("");
    setTutorId("");
  }

  return (
    <form
      onSubmit={enviarFormulario}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-xl font-bold text-slate-800">Cadastrar novo pet</h2>

      <div className="mt-4 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Nome do pet
          </label>
          <input
            type="text"
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
            placeholder="Ex: Bob"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Espécie
          </label>
          <select
            value={especie}
            onChange={(evento) => setEspecie(evento.target.value)}
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
          >
            <option value="">Selecione uma espécie</option>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato">Gato</option>
            <option value="Coelho">Coelho</option>
            <option value="Ave">Ave</option>
          </select>
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-slate-700">
            Tutor responsável
          </label>
          <select
            value={tutorId}
            onChange={(evento) => setTutorId(evento.target.value)}
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
          >
            <option value="">Selecione um tutor</option>
            {tutores.map((tutor) => (
              <option key={tutor.id} value={tutor.id}>
                {tutor.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white hover:bg-emerald-700"
        >
          Cadastrar pet
        </button>

        {mensagem && (
          <p className="rounded-lg bg-emerald-50 p-3 text-sm font-medium text-emerald-700">
            {mensagem}
          </p>
        )}
      </div>
    </form>
  );
}

function App() {
  const [petSelecionado, setPetSelecionado] = useState(petsMock[0]);

  const tutorDoPetSelecionado = tutoresMock.find(
    (tutor) => tutor.id === petSelecionado.tutor_id
  );

  return (
    <main className="min-h-screen bg-slate-100 p-6">
      <section className="mx-auto max-w-6xl">
        <header className="mb-8 rounded-2xl bg-emerald-700 p-6 text-white shadow-sm">
          <h1 className="text-3xl font-bold">
            Sistema Web para Clínica Veterinária
          </h1>
          <p className="mt-2 text-emerald-50">
            Gerenciamento de tutores e pets cadastrados na clínica.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <ListaPets
              pets={petsMock}
              tutores={tutoresMock}
              onSelecionarPet={setPetSelecionado}
              petSelecionado={petSelecionado}
            />
          </div>

          <div className="space-y-6 lg:col-span-2">
            <PerfilPet
              pet={petSelecionado}
              tutor={tutorDoPetSelecionado}
            />

            <PerfilTutor tutor={tutorDoPetSelecionado} />

            <FormularioPet tutores={tutoresMock} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;