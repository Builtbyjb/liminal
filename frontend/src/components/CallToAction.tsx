import { useEffect, useState } from "react";
import api from "../api/api.js";

export default function CallToAction() {
  const [waitlistBtnState, setWaitlistBtnState] = useState(false);

  useEffect(() => {
    if (waitlistBtnState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [waitlistBtnState]);

  const handleWaitlistDisplay = (value: boolean) => {
    setWaitlistBtnState(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    api
      .post("/api/join_waitlist", formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {!waitlistBtnState ? (
        <div className="mb-8">
          <button
            onClick={() => handleWaitlistDisplay(true)}
            id="display-join-waitlist-form"
            className=" bg-secondary  text-gray-100 py-2 px-4 rounded-lg transition
            duration-200 ease-in-out transform hover:scale-110 cursor-pointer w-[15rem]"
          >
            Join waitlist
          </button>
        </div>
      ) : (
        <div
          id="join-waitlist-form"
          className="w-[100%] h-[100%] bg-black/50 fixed flex top-0 left-0 items-center justify-center p-4 overflow-hidden z-10"
        >
          <div className="mx-auto w-[30rem] bg-primary border rounded-lg p-4 sm:p-8 md:p-8 lg:p-8 xl:p-8 2xl:p-8 border-gray-600 text-left overflow-hidden">
            <div className="flex w-full justify-between mb-8 items-center">
              <h3 className="text-2xl text-gray-900">Join our waitlist</h3>
              <button
                id="close-join-waitlist-form"
                className="hover:scale-120 rounded-lg cursor-pointer"
                onClick={() => handleWaitlistDisplay(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-x-icon lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
            </div>
            <p className="mb-4">Be the first to know when we launch. Get early access to our product.</p>

            <form onSubmit={handleSubmit} className="space-y-4" id="join-waitlist-submit">
              <div>
                <label htmlFor="firstname">
                  First Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  className="w-full text-gray-900 bg-white border-2 rounded-lg h-[2rem] p-4"
                  id="firstname"
                  name="firstname"
                  type="text"
                />
                <p className="text-sm text-red-500"></p>
              </div>

              <div>
                <label htmlFor="lastname">
                  Last Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  name="lastname"
                  id="lastname"
                  type="text"
                  className="w-full text-gray-900 bg-white border-2 rounded-lg h-[2rem] p-4"
                />
                <p className="text-sm text-red-500 clear-field"></p>
              </div>

              <div>
                <label htmlFor="email">
                  Email
                  <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className="w-full text-gray-900 bg-white border-2 rounded-lg h-[2rem] p-4"
                />
                <p className="text-sm text-red-500 clear-field"></p>
              </div>
              <p className="text-sm">
                Your privacy matters to us, and we will never share or sell your information. Read our
                <a
                  href="/privacy-policy#communication-preferences"
                  target="_blank"
                  className="underline hover:cursor-pointer"
                >
                  privacy policy
                </a>
                for more information.
              </p>
              <button
                type="submit"
                className=" bg-[#1f583e] hover:bg-[#2b7a56] text-white font-medium py-2 px-4 rounded-lg transition
              duration-200 ease-in-out transform hover:scale-110 cursor-pointer w-[15rem]"
              >
                Join waitlist
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
