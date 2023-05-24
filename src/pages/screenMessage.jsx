export default function Message() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-teal-950  ">
        <div>
          <button className="p-5 bg-emerald-400 rounded-lg hover:bg-emerald-500 w-full">
            Novas Mensagens
          </button>
        </div>

        <div>
          <button className="p-5 bg-emerald-400 rounded-lg mt-8 hover:bg-emerald-500 w-full">
            Mensagens Lidas
          </button>
        </div>
      </div>
    </>
  );
}
