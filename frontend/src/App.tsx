import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./layouts/Layout";
import SupportLayout from "./layouts/SupportLayout";
import Support from "./pages/Support";
import SupportAnalyticsInsights from "./pages/SupportAnalyticsInsights";
import SupportFinancialReports from "./pages/SupportFinancialReports";
import SupportBookKeeping from "./pages/SupportBookKeeping";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import ComingSoon from "./components/ComingSoon";
import Index from "./pages/Index";

function App() {
  const location = useLocation();

  // Scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/support" element={<SupportLayout />}>
            <Route index element={<Support />} />
            <Route path="analytics_insights" element={<SupportAnalyticsInsights />} />
            <Route path="bookkeeping" element={<SupportBookKeeping />} />
            <Route path="financial_reports" element={<SupportFinancialReports />} />
          </Route>
          <Route path="privacy_policy" element={<PrivacyPolicy />} />
          <Route path="terms_of_service" element={<TermsOfService />} />
          <Route path="blog" element={<ComingSoon />} />
          <Route path="docs" element={<ComingSoon />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
