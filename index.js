const express = require('express')
const morgan = require('morgan')

const app = express()

// middleware
app.use(express.json())
app.use(morgan('tiny'))

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4
  }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/info', (req, res) => {
  res.send(`
  <p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date()}</p>
  `)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})

app.post('/api/persons/', (req, res) => {
  const person = req.body

  if (!person.name) {
    return res.status(400).json({
      error: 'Name entry is missing.'
    })
  }
  if (!person.number) {
    return res.status(400).json({
      error: 'Number entry is missing.'
    })
  }
  if (persons.find(entry => entry.name.toLowerCase() === person.name.toLowerCase())) {
    return res.status(409).json({
      error: 'The name already exists in the phonebook, name must be unique.'
    })
  }

  person.id = Math.floor(Math.random() * 1000)

  persons = persons.concat(person)

  res.json(person)
})

const port = 3001

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
