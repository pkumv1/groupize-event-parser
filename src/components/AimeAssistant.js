export default function AimeAssistant({ parsedData }) {
  if (!parsedData || parsedData.parsing_error) {
    return (
      <div className="custom-card" style={{ 
        background: 'linear-gradient(135deg, #E8F5E9 0%, #ffffff 100%)',
        borderColor: '#8FD14F',
        marginBottom: '2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ fontSize: '3rem' }}>😊</div>
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2C3E50', marginBottom: '0.5rem' }}>
              Hi! I'm Aime, your AI assistant
            </h3>
            <p style={{ color: '#666' }}>
              I'm here to help you parse event documents quickly and accurately. 
              Upload a document to get started, and I'll extract all the important details for you!
            </p>
          </div>
        </div>
      </div>
    )
  }

  const insights = []
  
  if (parsedData.event_info?.event_name) {
    insights.push(`I found details for "${parsedData.event_info.event_name}"`)
  }
  
  if (parsedData.sleeping_rooms?.length > 0) {
    const totalRooms = parsedData.sleeping_rooms.reduce((sum, room) => sum + (room.number_of_rooms || 0), 0)
    insights.push(`${totalRooms} sleeping rooms across ${parsedData.sleeping_rooms.length} room types`)
  }
  
  if (parsedData.meeting_rooms?.length > 0) {
    insights.push(`${parsedData.meeting_rooms.length} meeting room bookings`)
  }
  
  if (parsedData.totals?.grand_total > 0) {
    insights.push(`Total event cost: $${parsedData.totals.grand_total.toLocaleString()}`)
  }

  return (
    <div className="custom-card" style={{ 
      background: 'linear-gradient(135deg, #E8F5E9 0%, #ffffff 100%)',
      borderColor: '#8FD14F',
      marginBottom: '2rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
        <div style={{ fontSize: '3rem' }}>😊</div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#2C3E50', marginBottom: '0.5rem' }}>
            Great job! Here's what I found:
          </h3>
          <ul style={{ color: '#666', paddingLeft: '1.25rem' }}>
            {insights.map((insight, index) => (
              <li key={index} style={{ marginBottom: '0.25rem' }}>{insight}</li>
            ))}
          </ul>
          {insights.length === 0 && (
            <p style={{ color: '#666' }}>
              I've processed your document. Check the tabs below for detailed information.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}