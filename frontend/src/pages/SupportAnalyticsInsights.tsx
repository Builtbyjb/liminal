import { Link } from "react-router-dom";
import { ArrowLeft, ChartCandlestick } from "lucide-react";

export default function SupportAnalyticsInsights() {
  return (
    <div>
      <div className="mb-8">
        <Link to="/support">
          <ArrowLeft />
        </Link>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <ChartCandlestick />
        <h3 className="font-medium text-lg">Analytics Insights</h3>
      </div>
      <p className="leading-[1.5]">
        Access financial analytics and insights directly through Google Chat. This user-friendly interface lets you
        interact with your data and our services seamlessly. You can request regular updates on your business's
        financial health, compare performance across different accounting periods, and much more.
      </p>
    </div>
  );
}
