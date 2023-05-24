import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";

export default function Message() {
  const [showModalMessage, setShowModalMessage] = useState(true);

  return (
    <>
      <Transition appear show={showModalMessage}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setShowModalMessage(false)}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="min-w-full transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all">
                  <div className="flex justify-between items-center p-4 rounded-t border-b border-gray-200">
                    <h3 className="text-base font-semibold text-gray-900">
                      Mensagens não lidas
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowModalMessage(false)}
                      className="text-gray-400 bg-transparent transition-colors hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                      data-modal-toggle="defaultModal"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="max-w-2xl p-10">
                    <div className="flex flex-col">
                      <textarea
                        cols="30"
                        rows="10"
                        className="px-3 py-2 border-2"
                      ></textarea>

                      <button className="py-2 px-3 bg-emerald-400 rounded-lg hover:bg-emerald-500 mt-10">
                        Próxima
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className="flex flex-col justify-center items-center w-full h-screen bg-teal-950  ">
        <div className="w-[500px]">
          <table className="w-full">
            <thead className="w-full bg-green-950">
              <tr className="text-green-300">
                <th className="text-start py-2 px-1">Mensagem</th>
                <th className="text-start py-2 px-1">Data Envio</th>
                <th className="text-start py-2 px-1">Lida</th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-green-400 even:bg-teal-900">
                <td className="px-1">Texto da mensagem vai vim aqui</td>
                <td className="px-1">23/05/2023</td>
                <td className="px-1">Sim</td>
              </tr>
              <tr className="text-green-400 even:bg-teal-900">
                <td className="px-1">Texto da mensagem vai vim aqui</td>
                <td className="px-1">23/05/2023</td>
                <td className="px-1">Sim</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div>
          <button className="p-5 bg-emerald-400 rounded-lg hover:bg-emerald-500 w-full">
            Novas Mensagens
          </button>
        </div>

        <div>
          <button className="p-5 bg-emerald-400 rounded-lg mt-8 hover:bg-emerald-500 w-full">
            Mensagens Lidas
          </button>
        </div> */}
      </div>
    </>
  );
}
