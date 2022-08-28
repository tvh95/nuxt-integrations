function awaitTimeout<T> (callback: (resolve, reject) => any): Promise<T> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout)
      reject(new Error('Unable to resolve FB status.'))
    }, 10000)

    try {
      callback(resolve, reject)
    } catch (err) {
      reject(Error(err.message))
    } finally {
      clearTimeout(timeout)
    }
  })
}

export { awaitTimeout }
