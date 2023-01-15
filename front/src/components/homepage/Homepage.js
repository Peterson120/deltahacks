import rocket from "./rocketship.png";
import smoke from "./smoke.png";
import stars from "./stars.png";

export function Homepage() {
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
        <input type="file" className="text-white mt-[35px]"></input>
      </div>
      <div>
        <button className="text-4xl bg-blueBg text-white font-bold rounded-full border-solid border-blue border-2 p-4">
          Launch!
        </button>
      </div>
    </div>
  );
}
