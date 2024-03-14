const a = Array.from({length: 30}, (_, i) => (String(i+1)));
a.push("Now")
console.log(a.map((rNo)=> ({ramadan:rNo})))
