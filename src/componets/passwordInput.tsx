import { useState } from "react"

interface InputProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function PasswordInput({ placeholder, value, onChange }: InputProps){
  // futuramente posso adicionar um eye button para visualizar a senha
  const [isVisible] = useState(false)
  
  return (
    <input 
      className="bg-white border rounded max-w-80 px-4 py-2 text-gray-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={isVisible ? "text" : "password"}
    />
  )
}