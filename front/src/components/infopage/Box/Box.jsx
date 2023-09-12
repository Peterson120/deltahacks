import "./Box.css";
import { motion } from 'framer-motion';
import loading from './loading.gif';

function Box(props) {
  const data = Array.from(props.data);
  const addBox = (e) => {
    props.setModalOpen(true);
    props.setTitle(props.title);

    let modalText = "";
    const rightData = e.target.innerText;
    for (let i = 0; i < props.sents.length; i++) {
      if (props.sents[i].includes(rightData)) {
        modalText += `- ${props.sents[i]} \n`;
      }
    }
    props.setModalText(modalText);
  };

  return (
    <div className="mt-auto mb-auto flex justify-center">
      <div className="box flex border-2 border-solid border-[#FFD178]">
        <div className="gradient self-start flex justify-center" id={props.id}>
          <h2 className="title-text">{props.title}</h2>
        </div>
        {props.loading ? <div className="flex flex-col w-full h-full justify-center overflow-y-scroll overflow-x-hidden">
          {data.map((data, index) => (
              <ol key={index} className="list-disc list-none">
                <motion.li
                    id="press"
                    className="text-[#FFD178] font-bold hover:cursor-pointer"
                    onClick={addBox}
                    whileHover={{scale: 1.1}}
                >
                  {data.name}
                </motion.li>
                <li className="text-white">{data.count} occurrences</li>
              </ol>
          ))}
        </div> : <img className={"m-auto"} src={loading} alt={"Loading..."} width={50} />}
      </div>
    </div>
  );
}

export default Box;
