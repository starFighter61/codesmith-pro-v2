"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
    BookOpen,
    Bug,
    RefreshCw,
    Code2,
    FileText,
    Shield,
    Zap,
    Lightbulb,
    Copy,
    Download,
    Check,
    Loader2,
    Sparkles,
    Lock,
    ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
    { id: "explain", name: "Explain", description: "Get clear explanations", icon: BookOpen, color: "bg-blue-500", pro: false },
    { id: "debug", name: "Debug", description: "Find and fix bugs", icon: Bug, color: "bg-red-500", pro: false },
    { id: "refactor", name: "Refactor", description: "Improve code quality", icon: RefreshCw, color: "bg-green-500", pro: false },
    { id: "translate", name: "Translate", description: "Convert languages", icon: Code2, color: "bg-purple-500", pro: true },
    { id: "document", name: "Document", description: "Generate docs", icon: FileText, color: "bg-amber-500", pro: false },
    { id: "readme", name: "README", description: "Create READMEs", icon: Lightbulb, color: "bg-teal-500", pro: false },
    { id: "security", name: "Security", description: "Find vulnerabilities", icon: Shield, color: "bg-rose-500", pro: true },
    { id: "performance", name: "Performance", description: "Optimize speed", icon: Zap, color: "bg-indigo-500", pro: true },
];

const languages = ["JavaScript", "TypeScript", "Python", "Java", "C#", "C++", "Go", "Rust", "Ruby", "PHP"];

const demoResponses: Record<string, string> = {
    explain: `## Code Explanation

This function implements a debounce pattern, which delays function execution until after a specified time has passed.

### How it works:
1. Creates a closure with a timeout variable
2. Returns a new function that clears any pending timeout
3. Sets a new timeout to call the original function
4. Preserves the correct "this" context and arguments`,

    debug: `## 🔍 Debug Analysis

### ❌ Issues Found

1. **Potential "this" Context Bug** (Line 6)
   - Arrow functions don't bind their own "this" context
   - When using \`fn.apply(this, args)\`, "this" may be undefined

2. **Missing Parameter Validation** (Line 1)
   - No check if \`fn\` is actually a function
   - No check if \`ms\` is a valid number

3. **Memory Leak Risk** (Line 2)
   - Timeout reference persists even when debounce is no longer needed
   - No cleanup method provided

---

### ✅ FIXED CODE

\`\`\`javascript
function debounce(fn, ms = 300) {
  // Validate parameters
  if (typeof fn !== 'function') {
    throw new TypeError('Expected a function');
  }
  if (typeof ms !== 'number' || ms < 0) {
    throw new RangeError('Delay must be a non-negative number');
  }

  let timeoutId = null;

  // Debounced function
  const debounced = function(...args) {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    // Set new timeout
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
      timeoutId = null;
    }, ms);
  };

  // Cancel method to clear pending execution
  debounced.cancel = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  // Flush method to execute immediately
  debounced.flush = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
      fn.apply(this, arguments);
      timeoutId = null;
    }
  };

  return debounced;
}
\`\`\`

---

### 📋 What Was Fixed
| Issue | Fix Applied |
|-------|-------------|
| Undefined "this" | Used regular function instead of arrow |
| No validation | Added type checks with helpful errors |
| Memory leak | Added \`.cancel()\` method |
| No immediate execute | Added \`.flush()\` method |`,

    refactor: `## Refactored Code

\`\`\`javascript
const debounce = (callback, delay = 300) => {
  let timeoutId = null;
  
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
};
\`\`\``,

    document: `## Documentation Generated\n\n### debounce(fn, ms)\n\nCreates a debounced version of a function.\n\n**Parameters:**\n- fn (Function): The function to debounce\n- ms (number): Delay in milliseconds\n\n**Returns:** Function - The debounced function`,

    readme: `# Project Name\n\n> A brief description\n\n## Installation\nnpm install your-package\n\n## Usage\nimport { debounce } from 'your-package';\n\n## License\nMIT`,

    translate: `## 🔄 Code Translation (Python)\n\ndef debounce(ms):\n    import time\n    def decorator(func):\n        last_call = [0]\n        def wrapper(*args, **kwargs):\n            current = time.time() * 1000\n            if current - last_call[0] >= ms:\n                last_call[0] = current\n                return func(*args, **kwargs)\n        return wrapper\n    return decorator`,

    security: `## 🛡️ Security Analysis\n\n### ⚠️ Issues Found\n\n1. **Prototype Pollution Risk** (Medium)\n   - Using this in arrow functions can be unpredictable\n\n2. **Memory Leak Potential** (Low)\n   - Timeout refs may persist\n\n### ✅ Recommendations\n- Add parameter validation\n- Implement cleanup logic`,

    performance: `## ⚡ Performance Analysis & Optimization

### 📊 Current Performance Metrics
- **Time Complexity:** O(1) per call
- **Space Complexity:** O(1) - single closure variable
- **Memory Footprint:** ~48 bytes per debounced function
- **Execution Time:** 0.02ms average per call

---

### 🔍 Issues Identified

1. **No Cleanup Mechanism**
   - Memory leak risk when the debounced function is no longer needed
   - Timeout can fire after component unmount (React)

2. **No Leading Edge Option**
   - Always delays first call, which feels sluggish for some UIs

3. **No Cancel Method**
   - Cannot abort pending execution

4. **No Maximum Wait**
   - Could delay indefinitely with rapid calls

---

### ✅ OPTIMIZED VERSION

\`\`\`javascript
/**
 * Enhanced debounce with performance optimizations
 * - Leading/trailing edge control
 * - Cancel and flush methods  
 * - Maximum wait time
 * - Memory efficient
 */
function debounce(fn, ms, options = {}) {
  const { leading = false, trailing = true, maxWait = null } = options;
  
  let timeout = null;
  let lastCallTime = 0;
  let lastInvokeTime = 0;
  let result;
  let lastArgs;
  let lastThis;

  const invokeFunc = (time) => {
    const args = lastArgs;
    const thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = fn.apply(thisArg, args);
    return result;
  };

  const shouldInvoke = (time) => {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    
    return (
      lastCallTime === 0 ||
      timeSinceLastCall >= ms ||
      (maxWait !== null && timeSinceLastInvoke >= maxWait)
    );
  };

  const debounced = function (...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking && leading && !timeout) {
      return invokeFunc(time);
    }

    if (timeout) clearTimeout(timeout);
    
    timeout = setTimeout(() => {
      if (trailing && lastArgs) {
        invokeFunc(Date.now());
      }
      timeout = null;
    }, ms);

    return result;
  };

  // Cancel pending execution
  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    lastArgs = lastThis = undefined;
    lastCallTime = lastInvokeTime = 0;
  };

  // Immediately execute if pending
  debounced.flush = () => {
    if (timeout) {
      return invokeFunc(Date.now());
    }
    return result;
  };

  return debounced;
}

// Usage Examples:
const search = debounce(query => fetch(\`/api?q=\${query}\`), 300);

// With leading edge (fires immediately, then waits)
const onClick = debounce(handler, 300, { leading: true, trailing: false });

// With max wait (guarantees call within 1 second)
const onScroll = debounce(handler, 100, { maxWait: 1000 });

// Cleanup on unmount
useEffect(() => () => search.cancel(), []);
\`\`\`

---

### 📈 Performance Comparison

| Metric | Original | Optimized |
|--------|----------|-----------|
| Execution Time | 0.02ms | 0.018ms |
| Memory per instance | 48 bytes | 96 bytes |
| Features | Basic | Full |
| Tree-shakeable | No | Yes |

---

### 💡 Additional Recommendations

1. **Use requestAnimationFrame** for visual/animation updates
2. **Consider throttle** if you need guaranteed intervals
3. **Use passive event listeners** for scroll/touch events
4. **Bundle with lodash-es** for tree-shaking support`,
};

function ToolsContent() {
    const searchParams = useSearchParams();
    const [activeTool, setActiveTool] = useState("explain");
    const [language, setLanguage] = useState("JavaScript");
    const [output, setOutput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [showProModal, setShowProModal] = useState(false);
    const [testMode, setTestMode] = useState(true); // Enable test mode for Pro features

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    // Read tool from URL on mount
    useEffect(() => {
        const toolFromUrl = searchParams.get("tool");
        if (toolFromUrl && tools.some(t => t.id === toolFromUrl)) {
            setActiveTool(toolFromUrl);
        }
    }, [searchParams]);

    const currentTool = tools.find((t) => t.id === activeTool);

    const handleGenerate = async () => {
        // In test mode, allow Pro features; otherwise show upgrade modal
        if (currentTool?.pro && !testMode) {
            setShowProModal(true);
            return;
        }

        const code = textareaRef.current?.value || "";
        if (!code.trim()) {
            setOutput("⚠️ Please paste some code first!");
            return;
        }

        setIsLoading(true);
        setOutput("");

        try {
            // Call the real AI API
            const response = await fetch("/api/ai", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    code,
                    tool: activeTool,
                    language: language, // For translate tool
                }),
            });

            const data = await response.json();

            if (response.ok && data.result) {
                setOutput(data.result);
            } else {
                // Fallback to demo responses if API fails
                console.warn("API failed, using demo response:", data.error);
                if (activeTool === "translate") {
                    setOutput(`## 🔄 Demo Translation to ${language}\n\n⚠️ AI API not configured. Add OPENAI_API_KEY to .env.local for real translations.\n\n${demoResponses.translate || ""}`);
                } else {
                    setOutput(demoResponses[activeTool] || "Analysis complete. Configure OPENAI_API_KEY for real AI responses.");
                }
            }
        } catch (error) {
            console.error("Error calling AI:", error);
            // Fallback to demo responses
            setOutput(demoResponses[activeTool] || "Error connecting to AI. Using demo response.");
        }

        setIsLoading(false);
    };
    const handleCopy = async () => {
        await navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: '#f8fafc' }}>
            {/* Header */}
            <div style={{ borderBottom: '1px solid #e2e8f0', padding: '24px 0', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '4px' }}>
                        AI Tools
                    </h1>
                    <p style={{ color: '#64748b' }}>
                        Choose a tool and paste your code to get started
                    </p>
                </div>
            </div>

            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>

                    {/* Sidebar */}
                    <div>
                        <p style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', marginBottom: '16px', textTransform: 'uppercase' }}>
                            Free Tools
                        </p>
                        {tools.filter(t => !t.pro).map((tool) => (
                            <button
                                key={tool.id}
                                onClick={() => { setActiveTool(tool.id); setOutput(""); }}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px',
                                    marginBottom: '8px',
                                    borderRadius: '12px',
                                    border: activeTool === tool.id ? '2px solid #6366f1' : '2px solid transparent',
                                    backgroundColor: activeTool === tool.id ? '#eef2ff' : 'white',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                }}
                            >
                                <div style={{ padding: '8px', borderRadius: '8px' }} className={tool.color}>
                                    <tool.icon style={{ width: '16px', height: '16px', color: 'white' }} />
                                </div>
                                <div>
                                    <p style={{ fontWeight: '500', color: activeTool === tool.id ? '#4f46e5' : '#334155' }}>
                                        {tool.name}
                                    </p>
                                    <p style={{ fontSize: '12px', color: '#64748b' }}>{tool.description}</p>
                                </div>
                            </button>
                        ))}

                        <p style={{ fontSize: '12px', fontWeight: '600', color: '#64748b', marginBottom: '16px', marginTop: '24px', textTransform: 'uppercase' }}>
                            Pro Tools {testMode && <span style={{ color: '#22c55e' }}>✓ Unlocked</span>}
                        </p>
                        {tools.filter(t => t.pro).map((tool) => (
                            <button
                                key={tool.id}
                                onClick={() => { setActiveTool(tool.id); setOutput(""); }}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '12px',
                                    marginBottom: '8px',
                                    borderRadius: '12px',
                                    border: activeTool === tool.id ? '2px solid #6366f1' : '2px solid transparent',
                                    backgroundColor: activeTool === tool.id ? '#eef2ff' : 'white',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    opacity: testMode ? 1 : 0.8,
                                }}
                            >
                                <div style={{ padding: '8px', borderRadius: '8px' }} className={tool.color}>
                                    <tool.icon style={{ width: '16px', height: '16px', color: 'white' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <p style={{ fontWeight: '500', color: activeTool === tool.id ? '#4f46e5' : '#334155' }}>
                                            {tool.name}
                                        </p>
                                        <span style={{ fontSize: '10px', padding: '2px 6px', background: testMode ? 'linear-gradient(to right, #22c55e, #16a34a)' : 'linear-gradient(to right, #f59e0b, #ea580c)', color: 'white', borderRadius: '9999px' }}>
                                            {testMode ? '✓ PRO' : 'PRO'}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: '12px', color: '#64748b' }}>{tool.description}</p>
                                </div>
                                {!testMode && <Lock style={{ width: '16px', height: '16px', color: '#94a3b8' }} />}
                            </button>
                        ))}
                    </div>

                    {/* Main Content */}
                    <div>
                        {/* Input Card */}
                        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', marginBottom: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    {currentTool && (
                                        <div style={{ padding: '8px', borderRadius: '8px' }} className={currentTool.color}>
                                            <currentTool.icon style={{ width: '20px', height: '20px', color: 'white' }} />
                                        </div>
                                    )}
                                    <div>
                                        <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>
                                            {currentTool?.name} Code
                                        </h2>
                                        <p style={{ fontSize: '14px', color: '#64748b' }}>
                                            {currentTool?.description}
                                        </p>
                                    </div>
                                </div>
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    style={{
                                        padding: '8px 12px',
                                        borderRadius: '8px',
                                        border: '1px solid #e2e8f0',
                                        backgroundColor: 'white',
                                        fontSize: '14px',
                                    }}
                                >
                                    {languages.map((lang) => (
                                        <option key={lang} value={lang}>{lang}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Code Textarea */}
                            <textarea
                                ref={textareaRef}
                                defaultValue={`const debounce = (fn, ms) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(
      () => fn.apply(this, args), 
      ms
    );
  };
};`}
                                placeholder="Paste your code here..."
                                style={{
                                    width: '100%',
                                    height: '256px',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    border: '2px solid #334155',
                                    backgroundColor: '#1e293b',
                                    color: '#e2e8f0',
                                    fontFamily: 'monospace',
                                    fontSize: '14px',
                                    resize: 'none',
                                    outline: 'none',
                                }}
                                spellCheck={false}
                            />

                            {/* Generate Button */}
                            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <p style={{ fontSize: '14px', color: (currentTool?.pro && !testMode) ? '#d97706' : '#64748b' }}>
                                    {(currentTool?.pro && !testMode) ? "🔒 Pro feature — Upgrade to use" : "Tip: Be specific about what you need help with"}
                                </p>
                                <Button onClick={handleGenerate} isLoading={isLoading}>
                                    {isLoading ? "Generating..." : `Generate ${currentTool?.name}`}
                                    {!isLoading && <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '8px' }} />}
                                </Button>
                            </div>
                        </div>

                        {/* Output Card */}
                        <div style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <div style={{ padding: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '14px', fontWeight: '500', color: '#64748b' }}>Output</span>
                                {output && (
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <Button variant="ghost" size="sm" onClick={handleCopy}>
                                            {copied ? <Check style={{ width: '16px', height: '16px', color: '#22c55e' }} /> : <Copy style={{ width: '16px', height: '16px' }} />}
                                            {copied ? "Copied!" : "Copy"}
                                        </Button>
                                    </div>
                                )}
                            </div>

                            <div style={{ padding: '24px' }}>
                                {isLoading ? (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '64px 0' }}>
                                        <Loader2 style={{ width: '32px', height: '32px', color: '#6366f1', animation: 'spin 1s linear infinite' }} />
                                        <p style={{ color: '#64748b', marginTop: '16px' }}>Analyzing your code...</p>
                                    </div>
                                ) : output ? (
                                    <div style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '14px', color: '#334155', lineHeight: '1.6' }}>
                                        {output}
                                    </div>
                                ) : (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '64px 0', textAlign: 'center' }}>
                                        {currentTool && <currentTool.icon style={{ width: '48px', height: '48px', color: '#cbd5e1', marginBottom: '16px' }} />}
                                        <p style={{ color: '#64748b', marginBottom: '8px' }}>No output yet</p>
                                        <p style={{ fontSize: '14px', color: '#94a3b8' }}>Paste your code and click Generate to see results</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pro Modal */}
            {showProModal && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} onClick={() => setShowProModal(false)} />
                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px', backgroundColor: 'white', borderRadius: '16px', padding: '32px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(to bottom right, #6366f1, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                                <Sparkles style={{ width: '32px', height: '32px', color: 'white' }} />
                            </div>
                            <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>
                                Upgrade to Pro
                            </h3>
                            <p style={{ color: '#64748b', marginBottom: '24px' }}>
                                Get unlimited access to all tools including <strong>{currentTool?.name}</strong>
                            </p>
                            <Link href="/pricing">
                                <Button style={{ width: '100%', marginBottom: '12px' }}>
                                    Upgrade for $12/month
                                </Button>
                            </Link>
                            <Button variant="ghost" style={{ width: '100%' }} onClick={() => setShowProModal(false)}>
                                Maybe later
                            </Button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}

// Wrap with Suspense for useSearchParams
export default function ToolsPage() {
    return (
        <Suspense fallback={
            <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f8fafc" }}>
                <div style={{ width: "40px", height: "40px", border: "3px solid #e2e8f0", borderTopColor: "#6366f1", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
            </div>
        }>
            <ToolsContent />
        </Suspense>
    );
}
