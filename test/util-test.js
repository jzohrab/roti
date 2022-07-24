const { join } = require('path')

const src = join(process.cwd(), 'src')
const { createGroups } = require(join(src, 'util.js'))

const test = require('tape')

test('smoke test', t => {
  const lines = ['hi', 'there', 'person']
  t.deepEqual(createGroups(lines, 2), ['hi\nthere', 'person'], 'last entry')
  t.end()
})

test('single entry', t => {
  const lines = ['hi', 'there', 'person']
  t.deepEqual(createGroups(lines, 3), ['hi\nthere\nperson'], 'all one string')
  t.end()
})

test('size > length', t => {
  const lines = ['hi', 'there', 'person']
  t.deepEqual(createGroups(lines, 44), ['hi\nthere\nperson'], 'all one string')
  t.end()
})
