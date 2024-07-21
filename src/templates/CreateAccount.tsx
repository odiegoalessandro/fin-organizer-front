import { useState } from "react";
import { Link } from "react-router-dom";
import { PasswordInput } from "../componets/passwordInput";
import { TextInput } from "../componets/textInput";

export function CreateAccount() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("")

  return (
    <div className="h-screen bg-red-100 flex items-center justify-center">
      <main className="w-full h-full xl:max-h-[850px] xl:max-w-[950px] 2xl:max-w-[1450px] mx-auto">
        <div className="flex h-full">
          <div className="w-full bg-red-500 flex">
            <div className="w-full bg-white text-black max-sm:px-5 px-20 py-16 flex flex-col justify-around max-xl:h-screen">
              <h3 className="text-3xl">FinOrganizer</h3>
              <nav>
                <h2 className="font-bold text-red-300 text-4xl max-sm:text-2xl">Crie sua conta</h2>
                <p className="font-light mb-6">e organize sua vida financeira com fin.</p>
                <form className="flex flex-col gap-4">
                  <TextInput 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Informe seu nome"
                  />
                  <TextInput
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Informe seu e-mail"
                  />
                  <PasswordInput
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Informe sua senha"
                  />
                  <Link to="/" className="text-gray-400 hover:text-gray-600 transition-colors text-sm underline">Ja possui conta? Clique aqui!</Link>
                  <button type="submit" className="bg-red-500 text-white font-bold max max-w-80 py-4 rounded-md hover:bg-red-700 transition-all delay-75">Login</button>
                </form>
              </nav>
            </div>
            <div className="hidden xl:flex h-full w-full mt-auto bg-[url('/background.jpg')] bg-cover" />
          </div>
        </div>
      </main>
    </div>
  );
}
