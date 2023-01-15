import React from "react";
import "./Box.css";

function Box(props) {
  const addBox = (e) => {
    const staticArr = [
      "The waiter got my order wrong",
      "I had to wait for over and hour for my food",
      "Patricia is the rudest waitress I've ever met",
      "The restaurant was unclean",
      "I had an excellent dinner at McDonalds",
      "I enjoyed Bob's entree recommendations",
      "The restaurant was beautiful inside",
      "The food was served in a good portion",
      "I ordered a pizza",
      "The food was mediocre",
    ];

    const modal = document.querySelector(".modal");
    modal.classList.add("block");
    modal.classList.remove("hidden");

    const info = document.getElementById("info");
    info.innerText = "";

    const rightData = e.target.innerText;

    for (let i = 0; i < staticArr.length; i++) {
      if (staticArr[i].includes(rightData)) {
        info.innerText += `- ${staticArr[i]} \n`;
      }
    }
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
          <div className="border-2 border-solid border-[#FFD178] my-[15%] mx-auto p-[20px] w-[400px] rounded">
            <span
              onClick={closeModal}
              className="float-right text-xl font-bold text-[#FFD178] hover:text-[#FFD178] hover:no-underline hover:cursor-pointer"
            >
              &times;
            </span>
            <h1 id="info" className="text-[#FFD178]"></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
