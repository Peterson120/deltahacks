import Box from "./Box/Box";
import Nav from "../Nav/Nav";
import { useEffect, useRef, useState } from "react";

export function InfoPage(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function loadTable() {
      let posArr = [];
      let negArr = [];
      const len = props.data.PositiveList ? props.data.PositiveList.length : 0;
      for (let i = 0; i < len; i++) {
        let dataObjPos = {};
        let dataObjNeg = {};
        dataObjPos["name"] = props.data.PositiveList[i][0];
        dataObjPos["count"] = props.data.PositiveList[i][1];
        posArr.push(dataObjPos);

        dataObjNeg["name"] = props.data.NegativeList[i][0];
        dataObjNeg["count"] = props.data.NegativeList[i][1];
        negArr.push(dataObjNeg);
      }
      setPosData(posArr);
      setNegData(negArr);
      setPosSent(props.data.PositiveInput);
      setNegSent(props.data.NegativeInput);
    }
    setLoading(false);
    loadTable().then(() => {setLoading(props.data.PositiveList !== undefined);});
  }, [props.data]);

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
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="main ">
          <Box title="Positive" data={posData} sents={posSent} loading={loading}></Box>
          <Box id="b2" title="Negative" data={negData} sents={negSent} loading={loading}></Box>
        </div>
      </div>
    </div>
  );
}
