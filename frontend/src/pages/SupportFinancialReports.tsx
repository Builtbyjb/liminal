import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SupportFinancialReports() {
  return (
    <div>
      <div className="mb-8">
        <Link to="/support">
          <ArrowLeft />
        </Link>
      </div>
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
      <div className="space-y-4">
        <p className="leading-[1.5]">
          Our software automatically generates the following financial statements for business users:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Income statements (profit and loss statements).</li>
          <li>Owner's equity statements.</li>
          <li>Balance Sheets.</li>
          <li>Cashflow statements</li>
        </ul>
        <p>These financial statements are updated automatically as new transactions are recorded.</p>
      </div>
    </div>
  );
}
