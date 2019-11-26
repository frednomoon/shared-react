import React from "react"
import request from "axios"

export default function useAxios() {
  const [data, setData] = React.useState({})
  const [pending, setPending] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(null)

  let didCancel = false
  React.useEffect(() => {
    didCancel = false
    return () => {
      didCancel = true
    }
  }, [])

  const axios = (
    { then = () => {}, beforeReturn = result => result, ...config },
    deps
  ) =>
    React.useCallback(async () => {
      try {
        if (!didCancel) {
          setPending(true)
        }
        const result = (await request({ ...config })).data

        then(result.data)

        if (!didCancel) {
          setSuccess(true)
          setPending(false)
          setError(null)
          setData(beforeReturn(result.data))
        }
      } catch (e) {
        if (!didCancel) {
          setSuccess(false)
          setPending(false)
          setError(e)
        }
      }
    }, deps || [config])

  return [{ pending, success, error, data }, axios]
}

// function waitTime (time) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve()
//     }, time)
//   })
// }
