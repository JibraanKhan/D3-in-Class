var personMaker = function(mental_state, physical_state, kidneys){
  return {
    state_of_mind:mental_state,
    physical:physical_state,
    number_of_kidneys:kidneys
  }
}
var body = d3.select('body');
var people = [
  personMaker('Skip', 'Skip', 'Skip'),
  personMaker("healthy", "ok I guess", 2),
  personMaker("unhealthy", "not ok", 4),
  personMaker("dead", "too ok", 1)
]

var headers = [{header1:'Mental State', header2:'Physical State', header3:'Amount of Kidneys'}]

var table = body.append('table')
var header_row = table.selectAll('tr')
                      .data(headers)
                      .enter()
                      .append('tr');

header_row.append('th')
          .text(function(data){ return data.header1})

header_row.append('th')
          .text(function(data){ return data.header2})

header_row.append('th')
          .text(function(data){ return data.header3})


var trs = table.selectAll('tr')
               .data(people)
               .enter()
               .append('tr')


trs.append('td')
   .text(function(data) { return data.state_of_mind })

trs.append('td')
   .text(function(data) { return data.physical })

trs.append('td')
   .text(function(data) { return data.number_of_kidneys })


trs.selectAll('td')
   .style('color', 'red')
   .style('border', '5px groove blue')
   .style('padding', '20px')
   .style('text-align', 'center')
   .style('font-size', '24px')

header_row.selectAll('th')
   .style('font-size', '40px')
   .style('color', 'brown')
   .style('padding', '60px')
