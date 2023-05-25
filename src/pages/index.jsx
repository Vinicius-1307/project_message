import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        'http://127.0.0.1:8000/api/login',
        {
          name,
          password,
        },
        {
          headers: { 'Content-Type': 'application/json' },
        },
      )
      .then((response) => {
        alert(response.data.Message);
        console.log(response.data.data.is_admin);
        if (!!response.data.data.is_admin) {
          router.replace('/administrador');
        } else {
          router.replace('/mensagens');
        }
      })
      .catch((error) => {
        if (error.response.data) {
          alert(error.response.data.Message);
        }
        router.reload();
        console.log(error.response.data);
      })
      .finally(() => {
        setName(null);
        setPassword(null);
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-screen bg-teal-950  ">
        <form
          className="p-16 border border-emerald-400 rounded-sm"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1 className="p-8 items-center text-white text-2xl ">Fazer Login</h1>

          <div>
            <label className="text-white flex flex-col mb-4">
              Nome:
              <input
                className="p-2 text-black rounded-lg "
                type="text"
                name="name"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div>
            <button
              className="p-2 bg-emerald-400 rounded-lg mt-8 hover:bg-emerald-500 w-full"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
