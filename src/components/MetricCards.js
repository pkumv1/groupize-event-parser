export default function MetricCards({ totals }) {
  const metrics = [
    { label: 'Meeting Room Total', value: totals.meeting_room_rental_total || 0, color: '#7BC143' },
    { label: 'Accommodation Total', value: totals.sleeping_room_total || 0, color: '#8FD14F' },
    { label: 'F&B Total', value: totals.food_beverage_total || 0, color: '#6BAE3A' },
    { label: 'AV Equipment Total', value: totals.audio_visual_total || 0, color: '#5A9D2F' },
    { label: 'Service Charges', value: totals.service_charge || 0, color: '#4A8C1F' },
    { label: 'Grand Total', value: totals.grand_total || 0, color: '#2C3E50' },
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
      {metrics.map((metric, index) => (
        <div key={index} className="metric-card">
          <div className="metric-label">{metric.label}</div>
          <div className="metric-value" style={{ color: metric.color }}>
            ${metric.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>
      ))}
    </div>
  )
}