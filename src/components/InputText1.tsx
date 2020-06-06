import React, { FC, useState, useRef, useEffect } from "react";

const InputText: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [prevPosition, setPrevPosition] = useState<
    HTMLInputElement["selectionEnd"]
  >(null);

  const handleChange = () => {
    const target = inputRef.current;
    if (target === null) return;

    console.log(target.value)
    const chunkedValue = target.value
      .replace(/[^\da-zA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
      console.log(chunkedValue)

    setPrevPosition(target.selectionEnd);
    setValue(chunkedValue);
  };

  useEffect(() => {
    const target = inputRef.current;
    if (target === null || prevPosition === null) return;

    const currentPosition = target.selectionEnd;
    if (currentPosition === null || prevPosition === null) return;

    const nextPositionDiff =
      prevPosition + 1 === currentPosition &&
      value.charAt(prevPosition - 1) === " "
        ? 1
        : 0;

    console.log(prevPosition + nextPositionDiff);
  }, [prevPosition, value]);

  return (
    <input
      ref={inputRef}
      value={value}
      onChange={handleChange}
      maxLength={4 * 3 + 3}
    />
  );
};

export default InputText;
