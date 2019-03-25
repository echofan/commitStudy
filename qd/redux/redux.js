let state = {
  count: 1
}

let liestenters = []

function subjects(value) {
  liestenters.push(value)
}

function changeState(count){
  state.count = count
  for(let i=0; i<liestenters.length; i++){
    const list = liestenters[i]
    list()
  }
}

subjects(()=>{
  console.log(state.count)
})
changeState(3)