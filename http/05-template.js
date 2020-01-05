const template = require('art-template')

// const ret = template.render('Hello {{ message }}', {
//   message: 'World'
// })

const ret = template.render(`
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8"></meta>
      <title>document</title>
    </head>
    <body>
      <h1>Hello {{ message }}</h1>
      <ul>
        {{ each todos }}
        <li> {{ $value.title }} <input type="checkbox" {{ $value.completed ? 'checked': '' }}> </li>
        {{ /each }}
      </ul>
    </body>
  </html>
`, {
  message: 'World',
  todos: [
    { title: '吃饭', completed: false },
    { title: '睡觉', completed: true },
    { title: '打豆豆', completed: false }
  ]
})

console.log(ret)