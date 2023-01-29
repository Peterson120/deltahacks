import Box from "../Box/Box";
import Nav from "../Nav/Nav";
import { useEffect, useRef, useState } from "react";

export function InfoPage() {
  useEffect(() => {
    async function loadTable() {
      let posArr = [];
      let negArr = [];

      await fetch("/data").then((res) =>
        res.json().then((data) => {
          for (let i = 0; i < data.PositiveList.length; i++) {
            let dataObjPos = {};
            let dataObjNeg = {};
            dataObjPos["name"] = data.PositiveList[i][0];
            dataObjPos["count"] = data.PositiveList[i][1];
            posArr.push(dataObjPos);

            dataObjNeg["name"] = data.NegativeList[i][0];
            dataObjNeg["count"] = data.NegativeList[i][1];
            negArr.push(dataObjNeg);
          }
          setPosData(posArr);
          setNegData(negArr);
          setPosSent(data.PositiveInput);
          setNegSent(data.NegativeInput);
        })
      );
    }

    loadTable();
  });

  const infoRef = useRef(null);

  const [posData, setPosData] = useState({
    PositiveList: [],
  });

  const [negData, setNegData] = useState({
    NegativeList: [],
  });

  const [posSent, setPosSent] = useState({
    positiveSent: [],
  });

  const [negSent, setNegSent] = useState({
    positiveSent: [],
  });

  return (
    <div ref={infoRef} id="info-page" className="fadeIn">
      <Nav />
      <div className="flex justify-center items-center">
        <div className="main flex flex-row items-center">
          <Box title="Positive" data={posData} sents={posSent}></Box>
          <Box id="b2" title="Negative" data={negData} sents={negSent}></Box>
        </div>
      </div>
    </div>
  );
}
