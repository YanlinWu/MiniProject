const path = require('path');
const methodOverride = require('method-override')
const express = require('express');
const app = express();
var cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(cors())

// States database:
var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona',
  'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'District of Columbia', 'Federated States of Micronesia', 'Florida',
  'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

//setting up GraphQL
var { graphql, buildSchema } = require('graphql');
var schema = buildSchema(`
  type Query {
    states:[String]
  }
`);
var rootValue = {
  states: () => {
    return states;
  },
};

//requests
app.get('/', (req, res) => {
  res.send({ 'states': states })
})

app.get('/:prefix', (req, res) => {
  var { prefix } = req.params;
  if (prefix == undefined) {
    res.send({ 'states': states })
  }
  prefix = prefix.toUpperCase()
  graphql({
    schema,
    source: '{ states }',
    rootValue
  }).then((response) => {
    var selected_states = response.data.states.filter(a => a.toUpperCase().startsWith(prefix))
    res.send({ 'states': selected_states })
  });
})

app.get('/:prefix', (req, res) => {
  var { prefix } = req.params;
  if (prefix == undefined) {
    res.send({ 'states': states })
  }
  prefix = prefix.toUpperCase()
  graphql({
    schema,
    source: '{ states }',
    rootValue
  }).then((response) => {
    var selected_states = response.data.states.filter(a => a.toUpperCase().startsWith(prefix))
    res.send({ 'states': selected_states })
  });
})
app.listen(3000, () => {
  console.log("ON PORT 3000!")
})