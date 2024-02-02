import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
function Card(props) {
  let reviews = props.reviews;
  let description=reviews.text;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute z-10 top-[-5rem] mx-auto">
        <img
          src={reviews.image}
          className="aspect-square rounded-full w-[150px] h-[150px] z-[20]"
        ></img>
        <div className="w-[150px] h-[150px] rounded-full bg-violet-500 absolute top-[-6px] z-[-12] left-[8px]"></div>
      </div>

      <div className=" text-center mt-8 ">
        <p className="font-bold text-xl">{reviews.name}</p>
      </div>

      <div className=" text-center mt-2 ">
        <p className="text-2xl opacity-40 font-bold uppercase">{reviews.job}</p>
      </div>
      <div className="text-violet-400 mx-auto mt-6">
        <FaQuoteLeft />
      </div>
      <div className="text-center text-slate-500 mt-4">
        <p>{
          description.length>200
          ?(reviews.text.substr(0,200)):(description)
          }</p>
      </div>
      <div className="text-violet-400 mx-auto mt-6">
        <FaQuoteRight />
      </div>
    </div>
  );
}
export default Card;
