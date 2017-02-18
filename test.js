var ary = [1, 2, 3, 4, 5];
d3.select("body")
  .data(ary)
  .enter()
  .append("p")
  .text(function(d) {return d});

