export default function TestPage() {
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '20px' }}>Paste Test Page</h1>
            <p style={{ marginBottom: '20px' }}>
                Click inside the textarea below and try pasting (Ctrl+V):
            </p>

            <textarea
                style={{
                    width: '100%',
                    height: '300px',
                    padding: '16px',
                    fontSize: '14px',
                    fontFamily: 'monospace',
                    border: '2px solid #333',
                    borderRadius: '8px',
                    backgroundColor: '#1a1a2e',
                    color: '#eee',
                }}
                defaultValue="// Try pasting code here by clicking and pressing Ctrl+V"
                placeholder="Paste your code here..."
            />

            <p style={{ marginTop: '20px', color: '#666' }}>
                This is an uncontrolled textarea to test if paste works at all.
            </p>

            <hr style={{ margin: '40px 0' }} />

            <h2>Regular HTML Input Test:</h2>
            <input
                type="text"
                placeholder="Try pasting here too"
                style={{
                    width: '100%',
                    padding: '12px',
                    fontSize: '16px',
                    border: '2px solid #333',
                    borderRadius: '8px',
                    marginTop: '10px',
                }}
            />
        </div>
    );
}
