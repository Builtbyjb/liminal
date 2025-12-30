export default function FinancialStatementsDemo() {
  return (
    <div className="relative">
      {/* Main card */}
      <div className="border border-gray-400 p-4 shadow-xl rounded-lg">
        <div className="space-y-6">
          {/* Header */}
          <div className="border-b border-border pb-4">
            <h3 className="text-xl font-medium text-foreground">Income Statement</h3>
            <p className="text-sm text-gray-700 mt-1">For the Year Ended December 31, 2024</p>
          </div>

          {/* Revenue section */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-700">Revenue</span>
              <AnimatedValue value="$1,250,000" />
            </div>
            <div className="flex justify-between items-center text-sm pl-4">
              <span className="text-gray-700">Product Sales</span>
              <AnimatedValue value="$850,000" />
            </div>
            <div className="flex justify-between items-center text-sm pl-4">
              <span className="text-gray-700">Service Revenue</span>
              <AnimatedValue value="$400,000" />
            </div>
          </div>

          {/* Expenses section */}
          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-900">Expenses</span>
              <AnimatedValue value="$780,000" />
            </div>
            <div className="flex justify-between items-center text-sm pl-4">
              <span className="text-gray-700">Cost of Goods Sold</span>
              <AnimatedValue value="$420,000" />
            </div>
            <div className="flex justify-between items-center text-sm pl-4">
              <span className="text-gray-700">Operating Expenses</span>
              <AnimatedValue value="$360,000" />
            </div>
          </div>

          {/* Net income */}
          <div className="border-t-2 border-border pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-900">Net Income</span>
              <AnimatedValue value="$470,000" />
            </div>
          </div>

          {/* Profit margin indicator */}
          {/*<div className="">
            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-accent transition-all duration-1000 ease-out" />
            </div>
            <span className="text-accent font-semibold">37.6% margin</span>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

function AnimatedValue({ value }: { value: string }) {
  return <span className="font-medium transition-all duration-500 text-gray-900 ">{value}</span>;
}
