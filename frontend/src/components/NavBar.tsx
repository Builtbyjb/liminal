import ThinkLogo from "../assets/black-logomark.png";

export default function NavBar() {
  return (
    <nav className="w-[90%] sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[60%] mx-auto mt-4">
      <div className="flex items-center justify-between">
        <div className="flex justify-around gap-10">
          <a href="/">
            <div className="flex items-center justify-center">
              <div className="flex h-[1rem] items-center">
                <img src={ThinkLogo} alt="Thinkledger Logo" className="w-5" />
                <h3 className="text-gray-900 text-xl ms-2">Thinkledger</h3>
              </div>
              <div className="ms-2 h-[1rem]">
                <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg" className="w-auto h-full">
                  <path
                    d="M20 80 L40 40 L80 20 L100 60 L120 100 L140 40 L160 20 L180 70 L200 100 L220 30"
                    stroke="#005B41"
                    fill="none"
                    strokeWidth="15"
                    strokeLinejoin="miter"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="1000"
                      to="0"
                      dur="1.5s"
                      fill="freeze"
                      begin="0.5s"
                      calcMode="spline"
                      keySplines="0.4 0 0.2 1"
                      repeatCount="indefinite"
                    ></animate>
                  </path>
                </svg>
              </div>
            </div>
          </a>

          {/*<div className="flex gap-3 items-center max-md:hidden ">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-command-icon lucide-command"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              <select name="products" id="products">
                <option value="products" className="bg-inherit text-inherit">
                  Products
                </option>
              </select>
            </div>
            <a className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-coffee-icon lucide-coffee"
              >
                <path d="M10 2v2" />
                <path d="M14 2v2" />
                <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
                <path d="M6 2v2" />
              </svg>
              <p>Blog</p>
            </a>
            <a className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-dollar-sign-icon lucide-dollar-sign"
              >
                <line x1="12" x2="12" y1="2" y2="22" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <p>Pricing</p>
            </a>
          </div>*/}
        </div>

        {/*<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-align-justify-icon lucide-align-justify md:hidden "
          id="menu-button"
        >
          <path d="M3 12h18" />
          <path d="M3 18h18" />
          <path d="M3 6h18" />
        </svg>*/}
      </div>

      {/*<div className="w-[50%] h-full bg-[#dceee0] fixed right-0 top-0 z-10 p-8 hidden" id="side-bar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-x-icon lucide-x absolute right-7"
          id="close-button"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <div className="mt-20 flex flex-col gap-8 ">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-command-icon lucide-command"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            <select name="products" id="products">
              <option value="products" className="bg-inherit text-inherit">
                Products
              </option>
            </select>
          </div>
          <a className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-coffee-icon lucide-coffee"
            >
              <path d="M10 2v2" />
              <path d="M14 2v2" />
              <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
              <path d="M6 2v2" />
            </svg>
            <p>Blog</p>
          </a>
          <a className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-dollar-sign-icon lucide-dollar-sign"
            >
              <line x1="12" x2="12" y1="2" y2="22" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <p>Pricing</p>
          </a>
        </div>
      </div>*/}
    </nav>
  );
}
