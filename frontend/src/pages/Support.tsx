import { Link } from "react-router-dom";
import api from "../api/api.js";

export default function Support() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    api
      .post("/api/support", formData)
      .then((res) => console.log(res))
      .error((error) => console.log(error));
  };
  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-medium mb-4">How can we help you?</h1>
        <p className="mb-8">Find answers to your questions about our software and services</p>
      </section>

      <section id="support-categories">
        <h2 className="text-xl font-medium mb-8">Support Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/support/bookkeeping">
            <div className="p-4 border-2 rounded-lg border-gray-300 h-full">
              <div className="mb-4 flex items-center gap-4">
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
                  className="lucide lucide-book-open-icon lucide-book-open"
                >
                  <path d="M12 7v14" />
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
                </svg>
                <h3 className="font-medium text-lg">Bookkeeping</h3>
              </div>
              <div>
                <p>Learn how we handle your bookkeeping tasks</p>
              </div>
            </div>
          </Link>

          <Link to="/support/financial_reports">
            <div className="p-4 border-2 rounded-lg border-gray-300 h-full">
              <div className="mb-4 flex items-center gap-4">
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
                  className="lucide lucide-chart-no-axes-column-icon lucide-chart-no-axes-column"
                >
                  <line x1="18" x2="18" y1="20" y2="10" />
                  <line x1="12" x2="12" y1="20" y2="4" />
                  <line x1="6" x2="6" y1="20" y2="14" />
                </svg>
                <h3 className="font-medium text-lg">Financial Reports</h3>
              </div>
              <div>
                <p>Generate and understand your financial reports</p>
              </div>
            </div>
          </Link>

          <Link to="/support/analytics_insights">
            <div className="p-4 border-2 rounded-lg border-gray-300 h-full">
              <div className="mb-4 flex items-center gap-4">
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
                  className="lucide lucide-chart-candlestick-icon lucide-chart-candlestick"
                >
                  <path d="M9 5v4" />
                  <rect width="4" height="6" x="7" y="9" rx="1" />
                  <path d="M9 15v2" />
                  <path d="M17 3v2" />
                  <rect width="4" height="8" x="15" y="5" rx="1" />
                  <path d="M17 13v3" />
                  <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                </svg>
                <h3 className="font-medium text-lg">Analytics & Insights</h3>
              </div>
              <div>
                <p>Get AI-powered insights about your finances</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section id="FAQ">
        <h2 className="text-xl font-semibold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details>
            <summary className="text-lg font-medium">How does the software work?</summary>
            <p>
              AI-powered accounting software streamlines your bookkeeping by using advanced machine learning algorithms.
              It automatically categorizes transactions, reconciles accounts, and generates detailed financial reports.
              Plus, it continuously learns from your data to improve its accuracy and efficiency over time, ensuring you
              get the most reliable insights into your financial health.
            </p>
          </details>
          <details>
            <summary className="text-lg font-medium">Is my financial data stored securely?</summary>
            <p>
              Yes, your financial data is securely stored in the Google Drive account linked to the email address you
              used when creating your account. We organize your records in a dedicated folder named "Thinkledger" to
              ensure both easy access and enhanced security.
            </p>
          </details>
          <details>
            <summary className="text-lg font-medium">How accurate is the AI in categorizing transactions?</summary>
            <p>
              Our AI achieves over 95% accuracy in transaction categorization from day one. As it learns from your
              corrections and patterns, accuracy typically improves to 98-99% within the first few months of use.
            </p>
          </details>
          <details>
            <summary className="text-lg font-medium">Do I still need an accountant if I use your software?</summary>
            <p>
              While our AI handles day-to-day bookkeeping and reporting, we recommend maintaining a relationship with an
              accounting professional for strategic advice, tax planning, and compliance oversight. Many accountants use
              our platform to collaborate with clients more efficiently.
            </p>
          </details>
          <details>
            <summary className="text-lg font-medium">What kind of support do you offer?</summary>
            <p>
              We currently provide support exclusively via email. Our dedicated support team is ready to help with any
              questions or concerns you may have, and we strive to respond promptly and thoroughly. Please feel free to
              reach out to us at support@thinkledger.app for assistance.
            </p>
          </details>
        </div>
      </section>

      <section id="contact">
        <h2 className="text-xl font-medium mb-8">Contact Us</h2>
        <p className="mb-6">Our support team is available to assist you with any questions or issues you may have.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name">
              First Name
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              id="firstname"
              name="firstname"
              type="text"
              className="text-gray-900 border-2 rounded-lg h-[2rem] p-4"
            />
            <p className="text-sm text-red-500"></p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="email"
              id="email"
              type="email"
              className="text-gray-900 border-2 rounded-lg h-[2rem] p-4"
            />
            <p className="text-sm text-red-500"></p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject">
              Subject
              <span className="text-red-500">*</span>
            </label>
            <input
              required
              id="subject"
              name="subject"
              type="text"
              className="text-gray-900 border-2 rounded-lg h-[2rem] p-4"
            />
            <p className="text-sm text-red-500"></p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">
              Description
              <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              name="description"
              id="description"
              className="min-h-[120px] text-gray-900 border-2 rounded-lg p-4"
            ></textarea>
            <p className="text-sm text-red-500"></p>
          </div>
          <div className="flex items-center">
            <input id="contact-form-privacy-policy" type="checkbox" required className="me-2" />
            <p className="text-sm">
              By clicking this you agree to our{" "}
              <Link to="/privacy_policy" className="underline">
                privacy policy
              </Link>
              .
            </p>
          </div>
          <p className="text-sm text-red-500" id="contact-form-privacy-policy-error"></p>
          <button
            type="submit"
            className=" bg-[#1f583e] hover:bg-[#2b7a56] text-white font-medium py-2 px-4 rounded-lg transition
          duration-200 ease-in-out transform hover:scale-110 cursor-pointer w-[15rem]"
          >
            Send Message
          </button>
        </form>
      </section>

      <section id="resources"></section>
    </div>
  );
}
