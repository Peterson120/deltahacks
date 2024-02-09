import {useEffect, useRef, useState} from "react";
import Nav from "../Nav/Nav";
import Box from "./Box/Box";
import {MdOutlineClose} from "react-icons/md";
import axios from "axios";

export function InfoPage(props) {
    const infoRef = useRef(null);

    const [posData, setPosData] = useState({
        PositiveList: {
            name: "",
            count: 0,
        },
    });

    const [negData, setNegData] = useState({
        NegativeList: {
            name: "",
            count: 0
        },
    });

    const [posSent, setPosSent] = useState({
        positiveSent: [],
    });

    const [negSent, setNegSent] = useState({
        positiveSent: [],
    });
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState(props.title);

    useEffect(() => {
        setLoading(true);

        async function loadTable() {
            await axios.post("/acceptData", props.form, {Headers: {'Content-Type': 'multipart/form-data'}})
                .then((res) => {
                    console.log(res.data);
                    setPosData(res.data.PositiveList.map(item => ({
                        name: item[0],
                        count: item[1],
                    })));
                    setNegData(res.data.NegativeList.map(item => ({
                        name: item[0],
                        count: item[1],
                    })));
                    setPosSent(res.data.PositiveInput);
                    setNegSent(res.data.NegativeInput);
                })
                .catch((err) => console.log(err));
        }

        loadTable()
            .then(() => setLoading(false))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [props.form]);

    const [modalText, setModalText] = useState("");

    return (
        <div ref={infoRef} id="info-page" className="fadeIn">
            <Nav/>
            <div
                className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex main flex-col md:flex-row space-y-2 md:space-x-2">
                {modalOpen ? (
                    <>
                        <div className="modal md:w-[35vw] md:h-[35vw] w-[80vw] h-[40vh] flex items-center">
                            <div
                                className="border-2 border-solid border-[#FFD178] w-full h-full m-auto box flex justify-center">
                                <div className="gradient self-start flex items-center">
										<span
                                            className="float-right font-bold text-[#FFD178] hover:text-[#FFD178] hover:no-underline hover:cursor-pointer ml-10 absolute">
											<MdOutlineClose
                                                onClick={() =>
                                                    setModalOpen(false)
                                                }
                                                className="w-14 h-14"
                                            />
										</span>
                                    <h2 className="title-text mx-auto">
                                        {title}
                                    </h2>
                                </div>
                                <h1
                                    id="info"
                                    className="p-[20px] text-[#FFD178] text-center h-full w-full overflow-y-scroll whitespace-pre-line"
                                >
                                    {modalText}
                                </h1>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Box
                            title="Positive"
                            data={posData}
                            sents={posSent}
                            loading={loading}
                            setModalOpen={setModalOpen}
                            setTitle={setTitle}
                            setModalText={setModalText}
                        />
                        <Box
                            id="b2"
                            title="Negative"
                            data={negData}
                            sents={negSent}
                            loading={loading}
                            setModalOpen={setModalOpen}
                            setTitle={setTitle}
                            setModalText={setModalText}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
