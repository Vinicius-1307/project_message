export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-teal-950  ">
        <form className="p-16 border border-emerald-400 rounded-sm">
          <h1 className="p-8 items-center text-white text-2xl ">Fazer Login</h1>

          <div>
            <label className="text-white flex flex-col mb-4">
              Nome:
              <input
                className="p-2 text-black rounded-lg "
                type="text"
                name="name"
                placeholder="Digite seu nome"
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
                placeholder="Digite sua senha"
              />
            </label>
          </div>

          <div>
            <button className="p-2 bg-emerald-400 rounded-lg mt-8 hover:bg-emerald-500 w-full ">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
