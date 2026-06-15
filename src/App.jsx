import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [trace, setTrace] = useState('');
  const [activeTheme, setActiveTheme] = useState('fallback'); // dynamic theme state
  const terminalEndRef = useRef(null);

  const suggestions = [
    { label: "📚 Search Book", text: "search for Introduction to Algorithms" },
    { label: "🍲 Today's Lunch", text: "What is for lunch today?" },
    { label: "🎯 Campus Events", text: "Are there any club events tomorrow?" },
    { label: "📜 Attendance Policy", text: "What is the attendance policy rule?" }
  ];

  // Auto-scroll terminal log component to the bottom on update
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  // Color-coded mapping theme extractor based on routed MCP target
  const getThemeStyles = (serverName) => {
    if (!serverName) return { border: 'border-gray-800', bg: 'bg-gray-900', text: 'text-gray-400', badge: 'bg-gray-800 text-gray-400 border-gray-700' };
    const name = serverName.toLowerCase();
    if (name.includes('library')) {
      return { border: 'border-emerald-500/30', bg: 'bg-emerald-950/20', text: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
    }
    if (name.includes('mess') || name.includes('cafeteria')) {
      return { border: 'border-amber-500/30', bg: 'bg-amber-950/20', text: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
    }
    if (name.includes('event')) {
      return { border: 'border-cyan-500/30', bg: 'bg-cyan-950/20', text: 'text-cyan-400', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' };
    }
    if (name.includes('academic')) {
      return { border: 'border-fuchsia-500/30', bg: 'bg-fuchsia-950/20', text: 'text-fuchsia-400', badge: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20' };
    }
    return { border: 'border-orange-500/30', bg: 'bg-orange-950/20', text: 'text-orange-400', badge: 'bg-orange-500/10 text-orange-400 border-orange-500/20' };
  };

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim() || isLoading) return;

    setIsLoading(true);
    setLogs((prev) => [...prev, `> Intercepting query cluster: "${searchQuery}"...`]);
    setResult(null);
    setTrace('');
    setActiveTheme('fallback');

    try {
      const response = await fetch('https://campus-intelligence-matrix.onrender.com/api/orchestrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!response.ok) throw new Error("Target cluster returned unexpected status branch.");

      const data = await response.json();
      
      setLogs((prev) => [
        ...prev, 
        `> Analyzing natural language intents...`,
        `> Routing stream safely to node: [${data.routedServer || 'Fallback Engine'}]`, 
        `> [OK] payload matrix payload stream synchronized.`
      ]);
      
      setTrace(data.routedServer || 'Fallback Engine');
      setResult(data.aiResponse);

    } catch (error) {
      setLogs((prev) => [...prev, '> ERROR: Handshake rejected or cloud infrastructure cluster offline.']);
      setResult('❌ Operational Link Failure: Could not establish secure socket layer down to the orchestration instance.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentTheme = getThemeStyles(trace);

  return (
    <div className="min-h-screen bg-[#05070c] text-gray-100 p-4 md:p-8 font-sans selection:bg-orange-500/30">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* TOP STATUS HEADER PANEL */}
        <header className="border-b border-gray-900 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <h1 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-orange-400 to-red-500">
                Campus Intelligence Matrix
              </h1>
            </div>
            <p className="mt-1 text-sm text-gray-500 font-mono">Decoupled MCP Cluster Engine Pipeline v2.4.0</p>
          </div>
          <div className="bg-gray-950 px-4 py-2 rounded-lg border border-gray-900 font-mono text-xs text-gray-400 flex items-center gap-4">
            <div>SYSTEM EDGE: <span className="text-green-400 font-bold">ONLINE</span></div>
            <div className="border-l border-gray-800 h-4"></div>
            <div>GATEWAY URL: <span className="text-orange-400">RENDER CLOUD</span></div>
          </div>
        </header>

        {/* INTERACTIVE COMPONENT CONTROL INPUT */}
        <div className="bg-gray-950 p-4 rounded-xl border border-gray-900 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={query}
                disabled={isLoading}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
                placeholder="Query distributed knowledge cluster nodes (e.g. food, rules, books)..."
                className="w-full bg-[#0b0f19] border border-gray-800 rounded-lg pl-4 pr-12 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-orange-500/50 text-sm font-mono disabled:opacity-50 transition-colors"
              />
              {isLoading && (
                <div className="absolute right-4 top-4 animate-spin rounded-full h-4 w-4 border-2 border-orange-500 border-t-transparent"></div>
              )}
            </div>
            <button
              onClick={() => handleSearch(query)}
              disabled={isLoading || !query.trim()}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-900 disabled:text-gray-700 text-white px-6 py-3.5 rounded-lg font-semibold text-sm transition-all shadow-lg shadow-orange-950/20 active:scale-[0.98]"
            >
              Initialize Node Query
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-gray-600 font-mono uppercase tracking-wider text-[10px]">Suggestions:</span>
            {suggestions.map((sug, idx) => (
              <button
                key={idx}
                disabled={isLoading}
                onClick={() => {
                  setQuery(sug.text);
                  handleSearch(sug.text);
                }}
                className="bg-[#0b0f19] hover:bg-[#121829] text-gray-400 hover:text-orange-400 border border-gray-800 hover:border-orange-500/30 px-3 py-1.5 rounded-md font-mono transition-all disabled:opacity-30"
              >
                {sug.label}
              </button>
            ))}
          </div>
        </div>

        {/* MONITORING CONSOLE INTERFACE LAYER */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* VISUAL MONITORING MATRIX PANELS */}
          <div className={`lg:col-span-3 bg-gray-950 rounded-xl p-6 border transition-all duration-300 h-[28rem] flex flex-col ${currentTheme.border}`}>
            <div className="flex items-center justify-between mb-4 border-b border-gray-900 pb-3">
              <h2 className="text-sm font-bold tracking-wider font-mono text-gray-400 uppercase">Data Output Matrix</h2>
              {trace && (
                <span className={`text-[10px] px-2.5 py-0.5 rounded font-mono border uppercase tracking-wider ${currentTheme.badge}`}>
                  Active: {trace}
                </span>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {trace && (
                <div className={`text-xs font-mono p-3 rounded-lg border flex items-center gap-3 ${currentTheme.badge} ${currentTheme.bg}`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
                  </span>
                  <span>ROUTE DETECTED: Core transaction intercepted via operational pipeline.</span>
                </div>
              )}
              
              {result ? (
                <div className="text-gray-200 text-sm leading-relaxed bg-[#0b0f19] p-5 rounded-lg border border-gray-900 whitespace-pre-wrap font-sans">
                  {result}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center flex-col text-center p-8">
                  <div className="text-3xl mb-2 text-gray-800">⚡</div>
                  <p className="text-gray-600 italic text-xs font-mono">Awaiting query routing transaction from peripheral layer...</p>
                </div>
              )}
            </div>
          </div>

          {/* VIRTUAL TERMINAL INSTANCE LOGS */}
          <div className="lg:col-span-2 bg-black rounded-xl p-6 border border-gray-900 font-mono text-xs h-[28rem] flex flex-col shadow-inner">
            <div className="flex items-center justify-between text-gray-600 mb-4 border-b border-gray-900 pb-3">
              <div>&gt;_ orchestrator-terminal.log</div>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gray-800"></span>
                <span className="w-2 h-2 rounded-full bg-gray-800"></span>
                <span className="w-2 h-2 rounded-full bg-gray-800"></span>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2.5 pr-2 text-gray-400 tracking-wide scrollbar-thin">
              <div className="text-green-500 bg-green-950/10 p-2 rounded border border-green-900/20 text-[11px]">
                &gt; [INITIALIZATION COMPLETE] Four internal MCP nodes tracked locally inside virtual memory runtime structures.
              </div>
              {logs.map((log, index) => (
                <div key={index} className="text-sky-400 pl-1 border-l-2 border-sky-950/50 py-0.5">
                  {log}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;