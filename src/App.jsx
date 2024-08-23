import React, { useState } from 'react'
import './App.css'

function App() {
  const [widgets, setWidgets] = useState([
    {
      id: 1,
      type: 'cloudAccounts',
      title: 'Cloud Accounts',
      data: {
        connected: 2,
        notConnected: 2,
      },
    },
    {
      id: 2,
      type: 'cloudAccountRiskAssessment',
      title: 'Cloud Account Risk Assessment',
      data: {
        failed: 1689,
        warning: 681,
        notAvailable: 36,
        passed: 7253,
      },
    },
    {
      id: 3,
      type: 'namespaceSpecificAlerts',
      title: 'Top 5 Namespace Specific Alerts',
    },
    {
      id: 4,
      type: 'workloadAlerts',
      title: 'Workload Alerts',
    },
    {
      id: 5,
      type: 'registryScan',
      title: 'Registry Scan',
      data: {
        totalVulnerabilities: 1470,
        critical: 4,
        high: 150,
      },
    },
    {
      id: 6,
      type: 'imageSecurityIssues',
      title: 'Image Security Issues',
      data: {
        totalImages: 2,
        critical: 2,
        high: 2,
      },
    },
  ])

  const addWidget = (type) => {
    const newWidget = {
      id: widgets.length + 1,
      type,
      title: `New ${type}`,
    }
    setWidgets([...widgets, newWidget])
  }

  const renderWidget = (widget) => {
    switch (widget.type) {
      case 'cloudAccounts':
        return (
          <div className='widget'>
            <h3>{widget.title}</h3>
            <div className='pie-chart'>
              <svg viewBox='0 0 100 100'>
                <circle
                  cx='50'
                  cy='50'
                  r='40'
                  stroke='#91c4ff'
                  strokeWidth='10'
                  fill='none'
                />
                <text
                  x='50'
                  y='50'
                  textAnchor='middle'
                  dominantBaseline='middle'
                >
                  {widget.data.connected + widget.data.notConnected} total
                </text>
              </svg>
              <div className='legend'>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: '#91c4ff',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  Connected ({widget.data.connected})
                </div>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: 'red',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  Not Connected ({widget.data.notConnected})
                </div>
              </div>
            </div>
          </div>
        )
      case 'cloudAccountRiskAssessment':
        return (
          <div className='widget'>
            <h3>{widget.title}</h3>
            <div className='pie-chart'>
              <svg viewBox='0 0 100 100'>
                <circle
                  cx='50'
                  cy='50'
                  r='40'
                  stroke='#4caf50'
                  strokeWidth='10'
                  fill='none'
                />
                <circle
                  cx='50'
                  cy='50'
                  r='40'
                  stroke='#ffc107'
                  strokeWidth='10'
                  fill='none'
                  strokeDasharray='80'
                  strokeDashoffset='80'
                />
                <circle
                  cx='50'
                  cy='50'
                  r='40'
                  stroke='red'
                  strokeWidth='10'
                  fill='none'
                  strokeDasharray='80'
                  strokeDashoffset='40'
                />
                <text
                  x='50'
                  y='50'
                  textAnchor='middle'
                  dominantBaseline='middle'
                >
                  {widget.data.failed +
                    widget.data.warning +
                    widget.data.notAvailable +
                    widget.data.passed}{' '}
                  total
                </text>
              </svg>
              <div className='legend'>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: 'red',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  Failed ({widget.data.failed})
                </div>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: '#ffc107',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  Warning ({widget.data.warning})
                </div>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: '#bdbdbd',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  Not available ({widget.data.notAvailable})
                </div>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: '#4caf50',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  Passed ({widget.data.passed})
                </div>
              </div>
            </div>
          </div>
        )
      case 'namespaceSpecificAlerts':
        return (
          <div className='widget'>
            <h3>{widget.title}</h3>
            <div className='chart-placeholder'>
              <svg viewBox='0 0 100 100'>
                <path d='M10 10 L90 90' stroke='#ccc' strokeWidth='2' />
                <path d='M10 90 L90 10' stroke='#ccc' strokeWidth='2' />
                <rect x='45' y='45' width='10' height='10' fill='#ccc' />
                <text
                  x='50'
                  y='50'
                  textAnchor='middle'
                  dominantBaseline='middle'
                >
                  No Graph data available!
                </text>
              </svg>
            </div>
          </div>
        )
      case 'workloadAlerts':
        return (
          <div className='widget'>
            <h3>{widget.title}</h3>
            <div className='chart-placeholder'>
              <svg viewBox='0 0 100 100'>
                <path d='M10 10 L90 90' stroke='#ccc' strokeWidth='2' />
                <path d='M10 90 L90 10' stroke='#ccc' strokeWidth='2' />
                <rect x='45' y='45' width='10' height='10' fill='#ccc' />
                <text
                  x='50'
                  y='50'
                  textAnchor='middle'
                  dominantBaseline='middle'
                >
                  No Graph data available!
                </text>
              </svg>
            </div>
          </div>
        )
      case 'registryScan':
        return (
          <div className='widget'>
            <h3>{widget.title}</h3>
            <div className='chart-placeholder'>
              <div className='bar-chart'>
                <div
                  style={{
                    width: `${(
                      (widget.data.critical /
                        widget.data.totalVulnerabilities) *
                      100
                    ).toFixed(2)}%`,
                    height: '20px',
                    backgroundColor: 'red',
                  }}
                />
                <div
                  style={{
                    width: `${(
                      (widget.data.high / widget.data.totalVulnerabilities) *
                      100
                    ).toFixed(2)}%`,
                    height: '20px',
                    backgroundColor: 'orange',
                  }}
                />
              </div>
              <div className='legend'>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: 'red',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  Critical ({widget.data.critical})
                </div>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: 'orange',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  High ({widget.data.high})
                </div>
              </div>
            </div>
            <div className='value'>
              {widget.data.totalVulnerabilities} total vulnerabilities
            </div>
          </div>
        )
      case 'imageSecurityIssues':
        return (
          <div className='widget'>
            <h3>{widget.title}</h3>
            <div className='chart-placeholder'>
              <div className='bar-chart'>
                <div
                  style={{
                    width: `${(
                      (widget.data.critical / widget.data.totalImages) *
                      100
                    ).toFixed(2)}%`,
                    height: '20px',
                    backgroundColor: 'red',
                  }}
                />
                <div
                  style={{
                    width: `${(
                      (widget.data.high / widget.data.totalImages) *
                      100
                    ).toFixed(2)}%`,
                    height: '20px',
                    backgroundColor: 'orange',
                  }}
                />
              </div>
              <div className='legend'>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: 'red',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  Critical ({widget.data.critical})
                </div>
                <div className='item'>
                  <div
                    style={{
                      backgroundColor: 'orange',
                      width: '10px',
                      height: '10px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                  />
                  High ({widget.data.high})
                </div>
              </div>
            </div>
            <div className='value'>{widget.data.totalImages} total images</div>
          </div>
        )
      default:
        return (
          <div className='widget'>
            <h3>{widget.title}</h3>
            <div className='chart-placeholder'>
              <button onClick={() => addWidget(widget.type)}>
                + Add Widget
              </button>
            </div>
          </div>
        )
    }
  }

  return (
    <div className='app'>
      <div className='header'>
        <h1>CNAPP Dashboard</h1>
        <h2>CSPM Executive Dashboard</h2>
      </div>
      <div className='dashboard'>
        {widgets.map((widget) => (
          <div key={widget.id} className='widget-container'>
            {renderWidget(widget)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
