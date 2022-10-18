import React, { useRef, useState } from "react";
import Checkbox from "./Checkbox";
import passGenerator from "../utils/passGenerator";
import passStrColor from "../utils/passStrColor";
import strength from "../utils/strength";

import { IoIosSquareOutline, IoIosSquare } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";

function Form({ setPassword }) {
  const [passLength, setPassLength] = useState(15);
  const [passStrength, setPassStrength] = useState("WEAK");
  const [passStrengthBar, setPassStrengthBar] = useState([1, 0, 0, 0]);

  const lengthRef = useRef();
  const hasUpRef = useRef();
  const hasNumRef = useRef();
  const hasSymRef = useRef();

  const lengthHandler = () => {
    setTimeout(() => {
      setPassLength(lengthRef.current.value);
    }, 300);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setPassword(
      passGenerator(
        lengthRef.current.value,
        hasUpRef.current.checked,
        hasNumRef.current.checked,
        hasSymRef.current.checked
      )
    );
    setPassStrength(
      strength(
        passLength,
        hasUpRef.current.checked,
        hasNumRef.current.checked,
        hasSymRef.current.checked
      ).score
    );
    setPassStrengthBar(
      strength(
        passLength,
        hasUpRef.current.checked,
        hasNumRef.current.checked,
        hasSymRef.current.checked
      ).scoreArr
    );
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex justify-between items-center mb-3">
        <p>Character Length</p>
        <p className=" text-emerald-300 text-2xl">{passLength}</p>
      </div>
      <input
        style={{ accentColor: "#34d399" }}
        ref={lengthRef}
        onChange={lengthHandler}
        type="range"
        defaultValue={passLength}
        min="10"
        max="30"
        step="1"
        className="w-full h-2 rounded-lg  cursor-pointer dark:bg-gray-700"
      />
      <Checkbox checked disabled>
        Include lowercase Letters
      </Checkbox>
      <Checkbox ref={hasUpRef}>Include UPPERCASE Letters</Checkbox>
      <Checkbox ref={hasNumRef}>Include Numbers</Checkbox>
      <Checkbox ref={hasSymRef}>Include Symbols</Checkbox>
      <div className=" bg-primary-dark p-4 w-full flex justify-between items-center  rounded-md">
        <p>STRENGTH</p>
        <div className="flex justify-center items-center space-x-3">
          <p>{passStrength}</p>
          <div className="flex">
            {passStrengthBar.map((s, key) => {
              if (s === 1) {
                return (
                  <IoIosSquare
                    className={`${passStrColor(passStrengthBar)} `}
                    key={key}
                  />
                );
              } else {
                return <IoIosSquareOutline key={key} />;
              }
            })}
          </div>
        </div>
      </div>
      <button
        type="submit"
        className=" bg-primary-dark p-4 w-full bg-emerald-400 rounded-md text-black my-3 flex justify-center items-center hover:bg-emerald-500"
      >
        Generator <FaArrowRight className="mx-4" />
      </button>
    </form>
  );
}

export default Form;
