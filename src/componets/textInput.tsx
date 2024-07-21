
interface InputProps {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function TextInput({ placeholder, value, onChange }: InputProps){
  return (
    <input 
      className="bg-white border rounded max-w-80 px-4 py-2 text-gray-500"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}