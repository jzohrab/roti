/**
 * Create groups.
 */
createGroups = function(lines, size) {
  const ret = []
  for (let i = 0; i < lines.length; i += size) {
    const chunk = lines.slice(i, i + size)
    ret.push(chunk.join('\n'))
  }
  return ret
}

module.exports = { createGroups }
