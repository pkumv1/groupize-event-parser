import { FiKey, FiCheckCircle } from 'react-icons/fi'

export default function Sidebar({ apiKey, setApiKey, apiKeyVerified, verifyApiKey, parsingStats }) {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <svg className="logo" viewBox="0 0 200 40" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="30" style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', fontWeight: 'bold' }}>
            <tspan fill="#2C3E50">groupize</tspan>
            <tspan fill="#7BC143">.ai</tspan>
          </text>
        </svg>
      </div>
      
      <div className="aime-badge" style={{ marginBottom: '2rem' }}>
        <span style={{ fontSize: '1.2rem' }}>😊</span>
        <div>
          <div style={{ fontWeight: '600', color: '#2C3E50' }}>aime</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>ai for meetings & events planner</div>
        </div>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50' }}>
          🔑 API Configuration
        </h3>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
            Groq API Key
          </label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Groq API key"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              fontSize: '0.875rem'
            }}
          />
        </div>
        <button
          onClick={verifyApiKey}
          className="primary-button"
          style={{ width: '100%' }}
        >
          {apiKeyVerified ? (
            <>
              <FiCheckCircle style={{ display: 'inline', marginRight: '0.5rem' }} />
              API Key Verified
            </>
          ) : (
            'Verify API Key'
          )}
        </button>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50' }}>
          📈 Parsing Statistics
        </h3>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-value">{parsingStats.attempts}</div>
            <div className="stat-label">Attempts</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{parsingStats.successes}</div>
            <div className="stat-label">Successes</div>
          </div>
        </div>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50' }}>
          📖 How It Works
        </h3>
        <ol style={{ fontSize: '0.875rem', color: '#666', paddingLeft: '1.25rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>Upload your event document (PDF or Word)</li>
          <li style={{ marginBottom: '0.5rem' }}>Aime extracts text using AI</li>
          <li style={{ marginBottom: '0.5rem' }}>Click analyze to parse event details</li>
          <li style={{ marginBottom: '0.5rem' }}>Review and export structured data</li>
        </ol>
      </div>
      
      <div className="brand-footer">
        <p>Powered by <a href="https://groupize.ai" target="_blank" rel="noopener noreferrer">Groupize.ai</a></p>
        <p style={{ marginTop: '0.5rem' }}>Making meetings & events smarter with AI</p>
      </div>
    </div>
  )
}