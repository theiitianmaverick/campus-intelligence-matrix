import React, { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [terminalLog, setTerminalLog] = useState([
    { type: 'system', text: 'System idle. Select a query option on the left to test routing matrix pipelines.' }
  ]);
  const [activeNodes, setActiveNodes] = useState({
    library: false, catering: false, events: false, handbook: false
  });

  const probes = [
    "Is Introduction to Algorithms available in the library?",
    "What is being served for lunch in the mess today?",
    "Are there any upcoming coding club events?",
    "What is the minimum attendance requirement policy?"
  ];

  const handleRouteQuery = async (textToSend) => {
    if (!textToSend.trim()) return;
    setLoading(true);
    setTerminalLog(prev => [...prev, { type: 'user', text: `> ${textToSend}` }]);

    try {
      const response = await fetch('/api/orchestrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // We are sending every common keyword so your backend finds exactly what it needs
        body: JSON.stringify({ 
            prompt: textToSend,
            query: textToSend,
            message: textToSend,
            text: textToSend
        })
      });
      
      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }
      
      const data = await response.json();

      const nodeName = data.routedServer || data.routedNode || "Unknown";
      const lowerNode = String(nodeName).toLowerCase();
      
      setActiveNodes({
        library: lowerNode.includes('library'),
        catering: lowerNode.includes('dining') || lowerNode.includes('catering'),
        events: lowerNode.includes('activity') || lowerNode.includes('event'),
        handbook: lowerNode.includes('registrar') || lowerNode.includes('policy')
      });

      const responseText = data.aiResponse || data.payload || JSON.stringify(data);

      setTerminalLog(prev => [
        ...prev,
        { type: 'route', text: `[ROUTING TRACE] -> Directed query payload straight to: ${nodeName}` },
        { type: 'success', text: String(responseText) }
      ]);
    } catch (err) {
      console.error("Matrix Orchestrator Error:", err);
      setTerminalLog(prev => [...prev, { type: 'error', text: `[CRITICAL_ERR] ${err.message}` }]);
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <p className="text-xs font-mono text-emerald-500 tracking-widest uppercase">Zero-DB Live Node System</p>
          <h1 className="text-2xl font-black text-white tracking-tight">Campus Intelligence Matrix</h1>
        </div>
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-mono text-slate-400">4 ACTIVE MCP SERVERS</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 shadow-2xl">
            <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <span>⚡</span> Ask the Campus Intelligent Core
            </h2>
            <div className="flex gap-2 mb-6">
              <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleRouteQuery(query)}
                placeholder="Ask about books, foods, policies, events..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500 text-slate-200"
              />
              <button 
                onClick={() => handleRouteQuery(query)}
                disabled={loading}
                className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm"
              >
                {loading ? 'Routing...' : 'Send'}
              </button>
            </div>
            <p className="text-xs font-semibold text-slate-400 mb-2">Suggested Live Probes:</p>
            <div className="flex flex-col gap-2">
              {probes.map((probe, idx) => (
                <button
                  key={idx}
                  onClick={() => handleRouteQuery(probe)}
                  className="w-full text-left bg-slate-950/60 hover:bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 rounded-lg p-2.5 transition-all"
                >
                  &gt; {probe}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-3">📦 Live Decoupled Nodes</h3>
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className={`p-3 rounded-lg border ${activeNodes.library ? 'bg-emerald-950/30 border-emerald-500 text-emerald-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>📖 Library Node</div>
              <div className={`p-3 rounded-lg border ${activeNodes.catering ? 'bg-emerald-950/30 border-emerald-500 text-emerald-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>🍳 Catering Node</div>
              <div className={`p-3 rounded-lg border ${activeNodes.events ? 'bg-emerald-950/30 border-emerald-500 text-emerald-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>📅 Events Node</div>
              <div className={`p-3 rounded-lg border ${activeNodes.handbook ? 'bg-emerald-950/30 border-emerald-500 text-emerald-400 font-bold' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>📜 Handbook Node</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden min-h-[420px]">
          <div className="bg-slate-950 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between font-mono text-xs text-slate-400">
            <span>💻 Orchestrator Output Terminal</span>
            <span className="text-[10px] bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded text-slate-500">REALTIME_STREAM</span>
          </div>
          <div className="flex-1 p-4 font-mono text-xs flex flex-col gap-2.5 bg-slate-950/40">
            {terminalLog.map((log, index) => (
              <div 
                key={index} 
                className={`p-2.5 rounded border ${
                  log.type === 'user' ? 'bg-slate-900 border-slate-800 text-blue-400' :
                  log.type === 'route' ? 'bg-amber-950/20 border-amber-800/40 text-amber-400' :
                  log.type === 'success' ? 'bg-emerald-950/30 border-emerald-800/50 text-emerald-300' :
                  log.type === 'error' ? 'bg-rose-950/40 border-rose-900/60 text-rose-400' : 'bg-slate-950/80 border-slate-800/60 text-slate-400'
                }`}
              >
                {log.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}