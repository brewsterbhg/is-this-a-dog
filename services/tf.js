class TensorFlow {
  _dispatch(event) {
    const { msg } = event
    this._status[msg] = ['loading']
    this.worker.postMessage(event)
    return new Promise((resolve, reject) => {
      let interval = setInterval(() => {
        const status = this._status[msg]

        if (status[0] === 'done') resolve(status[1])
        if (status[0] === 'error') reject(status[1])
        if (status[0] !== 'loading') {
          delete this._status[msg]
          clearInterval(interval)
        }
      }, 50)
    })
  }

  load() {
    this._status = {}
    this.worker = new Worker(new URL('../scripts/tf.worker.js', import.meta.url))
    this.worker.onmessage = (e) => (this._status[e.data.msg] = ['done', e])
    this.worker.onerror = (e) => (this._status[e.data.msg] = ['error', e])
    return this._dispatch({ msg: 'load' })
  }

  classify(payload) {
    return this._dispatch({ msg: 'classify', payload })
  }
}

export default new TensorFlow()
