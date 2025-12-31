import { HardDrive, FileSpreadsheet, FileText, ShoppingBag } from "lucide-react";

export default function IntegrationDemo() {
  const workspaceIntegrations = [
    {
      id: "google-drive",
      name: "Google Drive",
      description: "Keep control of your financial data",
      category: "storage",
      icon: <HardDrive />,
      status: "connected",
      badge: "Pro / Enterprise",
    },
    {
      id: "spreadsheets",
      name: "Google Sheets",
      description: "Export table data",
      category: "spreadsheets",
      icon: <FileSpreadsheet />,
      status: "available",
      badge: "Pro / Enterprise",
    },
    {
      id: "google-docs",
      name: "Google Docs",
      description: "View generated financial reports",
      category: "docs",
      icon: <FileText />,
      status: "available",
      badge: "Pro / Enterprise",
    },
    {
      id: "shopify",
      name: "Shopify",
      description: "Sync product and sales data",
      category: "shopping",
      icon: <ShoppingBag />,
      status: "available",
      badge: "Pro / Enterprise",
    },
  ];
  return (
    <div>
      <div className="space-y-6 p-4 border border-gray-400 shadow-xl rounded-lg">
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-4">Integrations</h3>
          <div className="space-y-3">
            {workspaceIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.id}
                name={integration.name}
                description={integration.description}
                icon={integration.icon}
                status={integration.status}
                badge={integration.badge}
              />
            ))}
          </div>

          {workspaceIntegrations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No integrations found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: string;
  status: "available" | "connected";
  badge?: string;
}

export function IntegrationCard({ name, description, icon, status, badge }: IntegrationCardProps) {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-400 bg-card hover:border-muted-foreground/30 transition-colors">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-lg">{icon}</div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-sm font-medium text-foreground">{name}</h3>
            {/*{badge && (
              <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground border-accent/30">
                {badge}
              </Badge>
            )}*/}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="ml-4">
        {status === "connected" ? (
          // <Button variant="outline" size="sm" className="min-w-[80px] bg-transparent">
          <button>Manage</button>
        ) : (
          // </Button>
          // <Button variant="outline" size="sm" className="min-w-[80px] bg-transparent">
          <button>Add</button>
          // </Button>
        )}
      </div>
    </div>
  );
}
