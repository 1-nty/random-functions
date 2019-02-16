// function that can change selected values in a json objects first layer
function chamge(loc){
  var D = new Date()
  let x = D.getSeconds()
  loc['y']+=x
  loc['x']+=60-x
  }
let location = {x:0,y:0}
chamge(location)
console.log(location.x+':'+location.y)
