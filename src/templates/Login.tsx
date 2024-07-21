import { useState } from "react";
import { PasswordInput } from "../componets/passwordInput";
import { TextInput } from "../componets/textInput";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="h-screen bg-red-100 flex items-center justify-center">
      <main className="w-full xl:max-h-[850px] xl:max-w-[950px] 2xl:max-w-[1450px] mx-auto">
        <div className="flex h-full">
          <div className="w-full bg-red-500 flex">
            <div className="w-full bg-white text-black max-sm:px-5 px-20 py-16 flex flex-col justify-around max-xl:h-screen">
              <h3 className="text-3xl">FinOrganizer</h3>
              <nav>
                <h2 className="font-bold text-red-300 text-4xl max-sm:text-2xl">Conecte-se</h2>
                <p className="font-light mb-6">Organize sua vida financeira com fin.</p>
                <form className="flex flex-col gap-4">
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
                </form>
              </nav>
            </div>
            <div className="hidden xl:flex h-auto w-full mt-auto">
              <img src="/people.png" className="bg-cover p-20" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
