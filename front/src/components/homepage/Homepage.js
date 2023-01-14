import rocket from "./rocketship.png";
import smoke from "./smoke.png";
import stars from "./stars.png";

export function Homepage() {
  // this function is to stretch the textarea; if u
  // find another way, delete this function
  const changeHeight = () => {
    let counter;
    const height = 15; // arbitrary height
    const area = document.getElementById("reached-limit");
    const rows = area.ariaValueMax.split("\n");
    if (rows[0] !== "undefined" && rows.length < height) {
      counter = rows.length;
    } else if (rows.length >= height) {
      counter = height;
    } else {
      counter = 1;
    }
    height.rows = counter;
  };

  return (
    <div className="relative flex flex-col items-center">
      <div className="text-center flex flex-col items-center relative pt-8">
        <div className="flex flex-col items-center">
          <img
            className="object-contain"
            src={rocket}
            alt="rocket ship"
            draggable="false"
          ></img>
          <img
            className="object-contain"
            src={smoke}
            alt="smoke"
            draggable="false"
          ></img>
          <img
            className="object-contain absolute top-1/2"
            src={stars}
            alt="stars"
            draggable="false"
          ></img>
        </div>
        <div className="text-white text-4xl font-bold absolute top-1/2">
          SentiMate
        </div>
      </div>
      <div>
        <textarea
          autoFocus
          cols={10}
          name="senti-text"
          id="reached-limit"
          className="z-10 rounded"
          onChange={changeHeight}
        ></textarea>
      </div>
    </div>
  );
}
