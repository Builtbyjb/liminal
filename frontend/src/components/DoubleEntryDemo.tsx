// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ArrowRight, Plus, Check } from "lucide-react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function DoubleEntryDemo() {
  return (
    <div className="relative">
      <div className="relative border border-gray-400 rounded-lg p-4 shadow-xl">
        {/* Animation header */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-medium text-gray-900">Journal Entry</h3>
        </div>

        {/* Journal entries */}
        <div className="overflow-x-auto rounded-lg border border-gray-400">
          <table className="w-full">
            <thead>
              <tr className="bg-primary border-b border-gray-400 ">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-900">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Account</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Debit</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">Credit</th>
              </tr>
            </thead>
            <tbody>
              {/* Debit row */}
              <tr className="">
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </td>
                <td className="py-4 px-4">
                  <div>
                    <p className="font-medium text-gray-900">Office Supplies</p>
                    <p className="text-xs text-muted-foreground">Asset</p>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="font-medium text-gray-700 text-lg">$500.00</span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="text-muted-foreground">—</span>
                </td>
              </tr>

              {/* Credit row */}
              <tr className="">
                <td className="py-4 px-4 text-sm text-muted-foreground">
                  {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </td>
                <td className="py-4 px-4">
                  <div>
                    <p className="font-medium text-gray-900">Cash</p>
                    <p className="text-xs text-muted-foreground">Asset</p>
                  </div>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="text-muted-foreground">—</span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="font-medium text-gray-700 text-lg">$500.00</span>
                </td>
              </tr>

              {/* Total row */}
              <tr className={`bg-muted/30 transition-all duration-700 `}>
                <td colSpan={2} className="py-4 px-4 font-medium text-gray-900">
                  Total
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="font-medium text-gray-900 text-lg">$500.00</span>
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="font-medium text-gray-900 text-lg">$500.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Balance check */}
        <div className="mt-4">
          <div className="bg-primary border border-gray-400 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
                <span className="font-medium text-foreground">Books Balanced</span>
              </div>
              <span className="text-sm text-muted-foreground">Debits = Credits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
