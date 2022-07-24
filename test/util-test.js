const { join } = require('path')

const src = join(process.cwd(), 'src')
const { createGroups } = require(join(src, 'util.js'))

const test = require('tape')

test('single entries', t => {
  const lines = ['hi', 'there', 'person']
  t.equal(createGroups(lines, 2), ['hi\nthere', 'person'], 'single word')
  t.end()
})
