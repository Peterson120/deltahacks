import React from "react";
import "./Box.css";

function Box(props) {
  const addBox = () => {
    const modal = document.querySelector(".modal");
    modal.classList.add("block");
    modal.classList.remove("hidden");
  };

  const closeModal = () => {
    const modal = document.querySelector(".modal");
    modal.classList.remove("block");
    modal.classList.add("hidden");
  };

  return (
    <div className="mt-auto mb-auto flex justify-center">
      <div className="box flex justify-center">
        <div className="gradient self-start flex justify-center">
          <h2 className="title-text">{props.title}</h2>
        </div>
        <div>
          {props.datas.map((data, index) => (
            <ol key={index} className="list-disc">
              <li
                id="press"
                className="text-[#FFD178] font-bold text-2xl transition-transform hover:translate-x-5 hover:cursor-pointer"
                onClick={addBox}
              >
                {data.name}
              </li>
              <li className="text-white list-none">{data.count} occurences</li>
            </ol>
          ))}
        </div>
        <div className="modal hidden fixed left-0 top-0 w-full h-full overflow-auto bg-darkBg">
          <div className="border-2 border-solid my-[15%] mx-auto p-[20px] w-[400px] rounded">
            <span
              onClick={closeModal}
              className="float-right text-xl font-bold hover:text-[black] hover:no-underline hover:cursor-pointer"
            >
              &times;
            </span>
            <h1>hello world</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
