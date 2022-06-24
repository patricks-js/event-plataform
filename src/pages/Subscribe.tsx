import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export const Subscribe = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useMutation(
    CREATE_SUBSCRIBER_MUTATION
  );

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await createSubscriber({
        variables: {
          name,
          email,
        },
      });
    } catch (err) {
      console.log(err);
    }
    if (name && email) {
      navigate("/event");
    }
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between pt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-right">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong> , do
            zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            action=""
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              type="text"
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="bg-gray-900 rounded px-5 h-14"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded text-sm houver:bg-green-700 transition-colors disabled:opacity-50"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="./src/assets/code-mockup.png" alt="" className="mt-10" />
    </div>
  );
};
