import fs  from 'fs'
import path from 'path'

const toKebabCase = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}
const upperFirst = (string) => {
  return string ? string.charAt(0).toUpperCase() + string.slice(1) : ''
}
const notEmpty = value => value.trim() !== ''

export default [
  {
    type: 'select',
    name: 'folder',
    message: 'Select the type of component you want to create',
    choices: [
      'ui',
      'select'
    ]
  },
  {
    type: 'input',
    name: 'name',
    message: "What's the name of the component? (Use PascalCase. Ex: MyComponent)",
    validate: notEmpty
  },
  {
    type: 'input',
    name: 'componentDomName',
    message: 'Type the name of component DOM...(Use kebab-case. ex: my-component)',
    validate: notEmpty,
    initial: state => {
      const name = state.state.answers.name
      return toKebabCase(name)
    }
  }
]