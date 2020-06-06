import React, { FC, useState, useRef } from 'react'

const InputText: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState('')

  const handleChange = () => {
    const target = inputRef.current
    if (target && target.value.length >= 0) {
      console.log(target.value)
      const chunkedValue =
        target.value.match(/[\da-zA-Z]{1,4}/g)?.join(' ') ?? ''
      console.log(chunkedValue)
      setValue(chunkedValue)
    }
  }

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={handleChange}
      maxLength={4 * 3 + 3}
    />
  )
}

export default InputText
