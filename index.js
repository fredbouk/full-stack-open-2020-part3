require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const Person = require('./models/person')

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

morgan.token('data', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
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
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
})

app.post('/api/persons/', (req, res) => {
  const personInfo = req.body

  if (!personInfo.name) {
    return res.status(400).json({
      error: 'Name entry is missing.'
    })
  }
  if (!personInfo.number) {
    return res.status(400).json({
      error: 'Number entry is missing.'
    })
  }
  const person = new Person({
    name: personInfo.name,
    number: personInfo.number
  })

  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
})

const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
