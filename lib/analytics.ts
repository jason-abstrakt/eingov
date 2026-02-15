const SESSION_KEY = 'ein_analytics_sid';

function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let sid = sessionStorage.getItem(SESSION_KEY);
  if (!sid) {
    sid = crypto.randomUUID();
    sessionStorage.setItem(SESSION_KEY, sid);
  }
  return sid;
}

export interface AnalyticsEvent {
  eventType: string;
  stepNumber?: number;
  metadata?: Record<string, unknown>;
}

export function trackEvent(event: AnalyticsEvent): void {
  const sessionId = getSessionId();
  if (!sessionId) return;

  const payload = JSON.stringify({
    sessionId,
    eventType: event.eventType,
    stepNumber: event.stepNumber,
    metadata: event.metadata ?? {},
  });

  // Use sendBeacon for fire-and-forget (works during page unload)
  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: 'application/json' });
    navigator.sendBeacon('/api/analytics/event', blob);
  } else {
    // Fallback: non-blocking fetch
    fetch('/api/analytics/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  }
}
