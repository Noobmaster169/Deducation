import React from 'react'

type FormItemProps = {
  placeholder: string;
  maxLength: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormItem = ({ placeholder, maxLength, onChange }: FormItemProps) => {
  return (
    <>
      <input
        className="flex bg-secondary bg-opacity-20 rounded-md p-2 w-full ring-0 focus:outline-none"
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
      />
    </>
  )
}

export default FormItem