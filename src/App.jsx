import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [trace, setTrace] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setLogs((prev) => [...prev, `> Intercepting query: "${query}"...`]);
    setResult(null);
    setTrace('');

    try {
      // 🌐 THIS IS YOUR LIVE CLOUD BACKEND URL! 
      const response = await fetch('https://campus-intelligence-matrix.onrender.com/api/orchestrate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      
      // ✨ FIX: Mapped to match server.js response properties (routedServer & aiResponse)
      setLogs((prev) => [
        ...prev, 
        `> Routing to node: ${data.routedServer}...`, 
        '> Payload extracted successfully.'
      ]);
      setTrace(`[ROUTING TRACE] ⚡ Processed by: ${data.routedServer}`);
      setResult(data.aiResponse);

    } catch (error) {
      setLogs((prev) => [...prev, '> ERROR: Connection to Cloud Orchestrator failed.']);
      setResult('Failed to connect to the backend. Please check if your Render server is awake.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <header className="border-b border-gray-800 pb-6">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Campus Intelligence Matrix 🌐
          </h1>
          <p className="mt-2 text-gray-400">Decoupled MCP Architecture Dashboard</p>
        </header>

        {/* Input Section */}
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about library books, cafeteria menus, or club events..."
            className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-orange-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Routing...' : 'Initialize Query'}
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Real-time Result Panel */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 h-96 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4 text-gray-300">Data Output Matrix</h2>
            
            {trace && (
              <div className="mb-4 text-sm font-mono text-orange-400 bg-orange-400/10 p-2 rounded border border-orange-400/20">
                {trace}
              </div>
            )}
            
            {result ? (
              <div className="prose prose-invert max-w-none text-gray-300 whitespace-pre-wrap">
                {result}
              </div>
            ) : (
              <div className="text-gray-600 italic">
                Awaiting query input...
              </div>
            )}
          </div>

          {/* Orchestrator Terminal UI */}
          <div className="bg-black rounded-lg p-6 border border-gray-800 font-mono text-sm h-96 overflow-y-auto">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-500 ml-2">orchestrator-terminal.log</span>
            </div>
            
            <div className="space-y-2">
              <div className="text-green-400">&gt; System ready. Awaiting instructions...</div>
              {logs.map((log, index) => (
                <div key={index} className={log.includes('ERROR') ? 'text-red-400' : 'text-blue-400'}>
                  {log}
                </div>
              ))}
              {isLoading && <div className="text-gray-500 animate-pulse">&gt; Processing...</div>}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;