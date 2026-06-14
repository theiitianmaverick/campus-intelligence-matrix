import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [trace, setTrace] = useState('');

  const suggestions = [
    { label: "📚 Search Book", text: "search for Introduction to Algorithms" },
    { label: "🍲 Today's Lunch", text: "What is for lunch today?" },
    { label: "🎯 Campus Events", text: "Are there any club events tomorrow?" },
    { label: "📜 Attendance Policy", text: "What is the attendance policy rule?" }
  ];

  const handleSearch = async (searchQuery) => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setLogs((prev) => [...prev, `> Intercepting query: "${searchQuery}"...`]);
    setResult(null);
    setTrace('');

    try {
      const response = await fetch('https://campus-intelligence-matrix.onrender.com/api/orchestrate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: searchQuery }),
      });

      const data = await response.json();
      
      setLogs((prev) => [
        ...prev, 
        `> Routing to node: ${data.routedServer || 'Fallback Engine'}...`, 
        '> Payload extracted successfully.'
      ]);
      setTrace(`[ROUTING TRACE] ⚡ Processed by: ${data.routedServer || 'Fallback Engine'}`);
      setResult(data.aiResponse);

    } catch (error) {
      setLogs((prev) => [...prev, '> ERROR: Connection to Cloud Orchestrator failed.']);
      setResult('Failed to connect to the backend.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border-b border-gray-800 pb-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Campus Intelligence Matrix 🌐
          </h1>
          <p className="mt-2 text-gray-400">Decoupled MCP Architecture Dashboard</p>
        </header>

        <div className="space-y-3">
          <div className="flex gap-4">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about campus updates..."
              className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-orange-500"
            />
            <button
              onClick={() => handleSearch(query)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Initialize Query
            </button>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="text-gray-500 self-center mr-1">Suggestions:</span>
            {suggestions.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setQuery(sug.text);
                  handleSearch(sug.text);
                }}
                className="bg-gray-900 hover:bg-gray-800 text-orange-400 border border-gray-800 px-3 py-1.5 rounded-md font-mono"
              >
                {sug.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-96 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Data Output Matrix</h2>
            {trace && <div className="mb-4 text-sm font-mono text-orange-400 bg-orange-400/10 p-2 rounded border border-orange-400/20">{trace}</div>}
            {result ? <div className="text-gray-300 whitespace-pre-wrap">{result}</div> : <div className="text-gray-600 italic">Awaiting query input...</div>}
          </div>

          <div className="bg-black rounded-lg p-6 border border-gray-800 font-mono text-sm h-96 overflow-y-auto">
            <div className="text-gray-500 mb-4">&gt; orchestrator-terminal.log</div>
            <div className="space-y-2">
              <div className="text-green-400">&gt; System ready. Awaiting instructions...</div>
              {logs.map((log, index) => <div key={index} className="text-blue-400">{log}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;