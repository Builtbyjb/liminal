import CallToAction from "../components/CallToAction";
import ChatDemo from "../components/ChatDemo";
import DoubleEntryDemo from "../components/DoubleEntryDemo";
import FinancialStatementsDemo from "../components/FinancialStatementDemo";
import IntegrationDemo from "../components/IntegrationDemo";
import {
  // Database,
  // BookOpen,
  // ChartNoAxesColumn,
  CircleDollarSign,
  Hourglass,
  ChartCandlestick,
  MousePointerClick,
  HandCoins,
  Timer,
  Cog,
} from "lucide-react";

export default function Index() {
  return (
    <>
      <main className="min-h-[50vh] mb-20 mt-10 space-y-15">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <div className="z-20 mb-4 ">
              <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-6xl font-medium mb-4 lg:leading-[4rem]">
                Keep Track of Your Businesses Financial Health
              </h1>
              <p className=" text-gray-700 mb-4">
                Automated, real-time accounting with seamless integrations and accurate insights. Know where your money
                goes and how to grow it, all in one platform.
              </p>
              <p className="text-gray-700 mb-4">Join the waitlist to get early access.</p>
              <CallToAction />
            </div>
          </div>
          <div>
            <ChatDemo />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 bg-primary border border-gray-400 rounded-lg">
            <div className="flex gap-2">
              <HandCoins />
              <h3 className="text-lg font-medium mb-2">Cost Savings</h3>
            </div>
            <p className="text-gray-700">
              Cut down on accounting expenses and manual errors with automated bookkeeping and AI-powered reporting.
            </p>
          </div>
          <div className="p-4 bg-primary border border-gray-400 rounded-lg">
            <div className="flex gap-2">
              <Timer />
              <h3 className="text-lg mb-2 text-gray-900 font-medium">Time Efficiency</h3>
            </div>
            <p className="text-gray-700">
              Focus on running your business, not reconciling books. Real-time financial updates and instant report
              generation free up your schedule for what matters most.
            </p>
          </div>
          <div className="p-4 bg-primary border border-gray-400 rounded-lg">
            <div className="flex gap-2">
              <Cog />
              <h3 className="text-lg mb-2 text-gray-900 font-medium">Simplify Operations</h3>
            </div>
            <p className="text-gray-700">
              Integrate all your financial touch points into one clean, intuitive platform that keeps everything in sync
              and easy to manage
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <DoubleEntryDemo />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 mb-4">Automated Bookkeeping</h2>
            <p className="text-gray-700 mb-2">
              Our AI-powered ledger ensures total accuracy and transparency—automatically.
            </p>
            <ul className="list-disc text-gray-700 space-y-2 mx-4">
              <li>Automatic debit-credit balancing in real time</li>
              <li>Instant, audit-ready financial records</li>
              <li>AI-powered error and anomaly detection</li>
              <li>Accurate balance sheets and cashflow reports</li>
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl text-gray-900 mb-4">Real Time Financial Statements</h2>
            <p className="text-gray-700 mb-2">
              No more waiting for end-of-month reports, see your income, balance sheet, and cashflow update the moment
              transactions happen.
            </p>
            <ul className="list-disc text-gray-700 space-y-2 mx-4">
              <li>Live balance sheets, P&L, and cashflow statements</li>
              <li>Automatically generated from synced integrations</li>
              <li>Always accurate and audit-ready</li>
              <li>Instant visibility into financial health</li>
              <li>Perfect foundation for fast, data-driven decisions</li>
            </ul>
          </div>
          <div>
            <FinancialStatementsDemo />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <IntegrationDemo />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 mb-4">Seamless Integrations</h2>
            <p className="text-gray-700 mb-2">
              All your financial data, unified in one place. Connect your financial touch points and let everything sync
              automatically.
            </p>
            <ul className="list-disc text-gray-700 space-y-2 mx-4">
              <li>Integrates with major shopping platforms</li>
              <li>Connects to storage services and document apps</li>
              <li>Syncs with spreadsheets for instant data updates</li>
              <li>Pulls insights from financial and business tools</li>
              <li>Reduces manual data entry and human error</li>
            </ul>
          </div>
        </section>

        <section id="pricing" className=""></section>

        <section id="testimonials" className=""></section>
      </main>
    </>
  );
}
