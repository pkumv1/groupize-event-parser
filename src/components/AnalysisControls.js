import { FiFileText, FiPlay } from 'react-icons/fi'

export default function AnalysisControls({ file, extractedText, onExtractText, onAnalyze, isLoading }) {
  return (
    <div className="custom-card">
      <h4 style={{ marginBottom: '1.5rem', fontWeight: '600', color: '#2C3E50' }}>Analysis Steps</h4>
      
      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={onExtractText}
          disabled={!file || isLoading}
          className="secondary-button"
          style={{ width: '100%', marginBottom: '0.5rem' }}
        >
          <FiFileText style={{ display: 'inline', marginRight: '0.5rem' }} />
          {extractedText ? 'Text Extracted ✓' : 'Extract Text'}
        </button>
        <p style={{ fontSize: '0.75rem', color: '#666' }}>
          Step 1: Extract readable text from your document
        </p>
      </div>
      
      <div>
        <button
          onClick={onAnalyze}
          disabled={!file || isLoading}
          className="primary-button"
          style={{ width: '100%', marginBottom: '0.5rem' }}
        >
          <FiPlay style={{ display: 'inline', marginRight: '0.5rem' }} />
          Analyze with Aime
        </button>
        <p style={{ fontSize: '0.75rem', color: '#666' }}>
          Step 2: Let Aime parse and structure your event data
        </p>
      </div>
      
      {extractedText && (
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#E8F5E9', borderRadius: '8px' }}>
          <p style={{ fontSize: '0.875rem', color: '#2C3E50', fontWeight: '600' }}>
            ✓ Text extracted successfully
          </p>
          <p style={{ fontSize: '0.75rem', color: '#666', marginTop: '0.25rem' }}>
            {extractedText.length} characters ready for analysis
          </p>
        </div>
      )}
    </div>
  )
}