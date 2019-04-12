const createStore = function (initState) {
  let state =initState
  let listeners = []

  // 订阅
  function subscribe (listener) {
    listeners.push(listener)
  }

  // 改变state
  function changeState (newState) {
    state = newState
    // 通知已改变
    for (let i=0; i<listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }

  function getState () {
    return state
  }

  return {
    subscribe,
    changeState,
    getState
  }
}

let initState = {
  
}