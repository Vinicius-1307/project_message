export default function Admin() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-teal-950  ">
        <form className="p-8 border border-emerald-400 rounded-sm">
          <h1 className="p-8 items-center text-white text-2xl ">
            Cadastrar Usuário
          </h1>


          <div>
            <label className="text-white flex flex-col mb-4"> Nome:
              <input className="p-2 text-black rounded-lg" type="text" name="name" placeholder="Crie um Nome" />
            </label>
          </div>

          <div className="">
            <label className="text-white flex flex-col">Senha:
              <input className="p-2 text-black rounded-lg" type="password" name="password" placeholder="Crie uma Senha" />
            </label>
          </div>

          <div>
            <button className="p-2 bg-emerald-400 rounded-lg mt-8 hover:bg-emerald-500">
              Cadastrar Usuário
            </button>
          </div>
        </form>
      </div>

    </>
  )

}
