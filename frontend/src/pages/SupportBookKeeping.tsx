import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SupportBookKeeping() {
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
          className="lucide lucide-book-open-icon lucide-book-open"
        >
          <path d="M12 7v14" />
          <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
        </svg>
        <h3 className="font-medium text-lg">Bookkeeping</h3>
      </div>
      <p className="leading-[1.5]">
        Our software automatically retrieves your business transaction data from your connected banking services. Using
        generative AI, we convert this data into journal entries in your Google Sheets. For business users, the entries
        follow a double-entry format that clearly shows the accounts being credited and debited. The Google Sheets file
        is then stored in a folder we automatically generate in the Google Drive account linked to the email address you
        used to create your account.
      </p>
    </div>
  );
}
