import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h1 className="text-4xl font-medium">Coming soon...</h1>
      <br />
      <button
        className=" bg-secondary text-gray-200 font-medium py-2 px-4 rounded-lg transition
        duration-200 ease-in-out transform hover:scale-110 cursor-pointer w-[15rem]"
      >
        <Link to="/">Go to Homepage</Link>
      </button>
    </div>
  );
}
