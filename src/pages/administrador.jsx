import { useState } from "react";

export default function Admin() {
  const [showFormUser, setShowFormUser] = useState(true);

  return (
    <>
      {showFormUser ? (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-teal-950  ">
          <form className="p-8 border border-emerald-400 rounded-sm">
            <h1 className="p-8 items-center text-white text-2xl ">
              Cadastrar Usuário
            </h1>

            <div>
              <label className="text-white flex flex-col mb-4">
                {" "}
                Nome:
                <input
                  className="p-2 text-black rounded-lg"
                  type="text"
                  name="name"
                  placeholder="Crie um Nome"
                />
              </label>
            </div>

            <div className="">
              <label className="text-white flex flex-col">
                Senha:
                <input
                  className="p-2 text-black rounded-lg"
                  type="password"
                  name="password"
                  placeholder="Crie uma Senha"
                />
              </label>
            </div>

            <div>
              <button className="p-2 bg-emerald-400 rounded-lg mt-8 hover:bg-emerald-500 w-full ">
                Cadastrar
              </button>
            </div>
          </form>
          <div>
            <button
              className="p-2 bg-emerald-400 rounded-lg mt-4 hover:bg-emerald-500 w-full"
              onClick={() => setShowFormUser(false)}
            >
              Criar Mensagem
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-teal-950  ">
          <form className="p-8 border border-emerald-400 rounded-sm">
            <h1 className="p-8 items-center text-white text-2xl ">
              Enviar uma Mensagem
            </h1>

            <div>
              <label className="text-white flex flex-col">
                {" "}
                Escreva sua Mensagem:
                <textarea
                  className="text-black mt-4 rounded-sm"
                  cols="30"
                  rows="10"
                ></textarea>
                {/* <input className="p-2 text-black rounded-lg" type="text" name="name" placeholder="Escreva uma mensagem" /> */}
              </label>
            </div>

            <div>
              <button className="p-2 bg-emerald-400 rounded-lg mt-8 hover:bg-emerald-500 w-full">
                Enviar
              </button>
            </div>
          </form>

          <div>
            <button className="p-2 bg-emerald-400 rounded-lg mt-4 hover:bg-emerald-500 w-full" onClick={() => setShowFormUser(true)}>
              Cadastrar Usuário
            </button>
          </div>
        </div>
      )}
    </>
  );
}
