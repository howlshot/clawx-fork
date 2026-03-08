import { AlertCircle, RefreshCw, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useGatewayStore } from '@/stores/gateway';

interface GatewayRecoveryBannerProps {
  compact?: boolean;
}

export function GatewayRecoveryBanner({ compact = false }: GatewayRecoveryBannerProps) {
  const gatewayStatus = useGatewayStore((s) => s.status);
  const lastError = useGatewayStore((s) => s.lastError);
  const recover = useGatewayStore((s) => s.recover);
  const relaunchApp = useGatewayStore((s) => s.relaunchApp);

  if (gatewayStatus.state === 'running') return null;

  return (
    <Card className="border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10">
      <CardContent className={compact ? 'py-3 px-4' : 'py-4 px-4'}>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            <div>
              <p className="font-medium text-yellow-800 dark:text-yellow-300">
                Gateway connection problem
              </p>
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                State: <span className="font-medium">{gatewayStatus.state}</span>
                {gatewayStatus.port ? <> · Port: <span className="font-medium">{gatewayStatus.port}</span></> : null}
              </p>
              {lastError || gatewayStatus.error ? (
                <p className="mt-1 text-xs break-words text-yellow-700/90 dark:text-yellow-400/90">
                  {lastError || gatewayStatus.error}
                </p>
              ) : (
                <p className="mt-1 text-xs text-yellow-700/90 dark:text-yellow-400/90">
                  Try recovery first. If the app still feels dead, relaunch ClawX.
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={recover}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Recover Now
            </Button>
            <Button size="sm" variant="outline" onClick={relaunchApp}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Relaunch App
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default GatewayRecoveryBanner;
