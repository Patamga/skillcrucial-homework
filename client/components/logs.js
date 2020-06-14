import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Logs = () => {
  const [logs, setLogs] = useState([])
  useEffect(() => {
    axios.get('/api/v1/logs').then(({ data }) => {
      const result = data.map((item) => {
        const { date, ...rest } = item
        return { date: `${date}`, data: rest }
      })
      setLogs(result)
    })
  }, [])
  let i = 0

  return (
    <div>
      {logs.map((item) => {
        return (
          <div
            key={item.date}
            className="flex m-2 wx-10 bg-white shadow overflow-hidden sm:rounded-lg"
          >
            <div className="mx-2">{item.date.toString().split('T').join(' ').split('Z')}</div>
            <div className="flex mx-2">
              {Object.entries(item.data).map((it) => {
                i += 1
                return (
                  <div className="flex mx-2" key={i}>
                    {it.toString().split(',').splice(1).join(' ')}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

Logs.propTypes = {}

export default React.memo(Logs)
