import { useEffect, useState } from "react";

function ViewCounter({ pagePath }: { pagePath: string }) {
  const [views, setViews] = useState<number | null>(null);
  const [userViews, setUserViews] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const toKey = (p: string) =>
      (p || "/")
        .replace(/\s+/g, "-")
        .replace(/[^a-zA-Z0-9-_/]/g, "_")
        .replace(/\/+$/, "") || "/";

    const loadScript = (): Promise<void> =>
      new Promise((resolve, reject) => {
        if ((window as any).Counter) return resolve();
        const s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/npm/counterapi/dist/counter.browser.min.js";
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error("CounterAPI CDN failed to load"));
        document.head.appendChild(s);
      });

    const run = async () => {
      const pageKey = `page-${toKey(pagePath)}`;

      // Per-user local count (no network): increment once per session to avoid duplicates
      try {
        const sessionKey = `visited:${pageKey}`;
        const lsKey = `views:${pageKey}`;
        const already = sessionStorage.getItem(sessionKey) === "1";
        const current = Number(localStorage.getItem(lsKey) || "0");
        const next = already ? current : current + 1;
        localStorage.setItem(lsKey, String(next));
        if (!already) sessionStorage.setItem(sessionKey, "1");
        if (mounted) setUserViews(next);
      } catch {
        if (mounted) setUserViews(0);
      }

      // Try global counter via CDN (best effort)
      try {
        await loadScript();
        const Ctr = (window as any).Counter;
        if (!Ctr) throw new Error("Counter global not available");
        const counter = new Ctr({
          workspace: "koder-spark-2s-team-1505",
          token: "ut_SyRlq2AfX0oWra5UhQ7EGoi7GFPy1P0GTqNcYU0r",
        });
        const result = await counter.up(pageKey);
        if (!mounted) return;
        const val = (result && (result.value ?? result.count)) ?? null;
        setViews(typeof val === "number" ? val : Number(val) || 0);
      } catch (err) {
        // If global fails, just show userViews only; keep global as null to avoid confusion
        if (mounted) setViews(null);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    run();
    return () => {
      mounted = false;
    };
  }, [pagePath]);

  if (loading) return <span>Loading views...</span>;
  // Prefer showing both: Global (if available) and per-user
  return (
    <span>
      {views != null ? `${views} views` : "views —"}
      {" "}• You: {userViews}
    </span>
  );
}

export default ViewCounter;
