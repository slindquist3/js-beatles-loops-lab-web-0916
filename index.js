function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    var musician = musicians[i];
    var instrument = instruments[i];
    newArray.push(`${musician} plays ${instrument}`)
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var shouts = []
  var i = 0;
  while (i < facts.length) {
    var fact = facts[i];
    shouts.push(fact + "!!!")
    ++i
  }
  return shouts;
}

function iLoveTheBeatles(n) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    ++n
  } while (n < 15)
  return newArray;
}
