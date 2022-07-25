# Roti

A simple javascript/html tool for poem memorization following the ideas at https://discover.hubpages.com/literature/How-To-Memorize-A-Poem.

That page is worth reading, but here's a rough summary:

* Read one line aloud, and then try to repeat it aloud from memory.  If you succeed, go to the next line, and so on until you reach the end.
* Starting again, read two lines, and repeat aloud.  Then the next two, and so on ...
* Repeat the process with three, four, five, and six lines.
* Then try to do the whole thing from memory, and then take a break and sleep on it.

This project is running at https://jzohrab.github.io/roti/, courtesy of GitHub.  (Thank you, GitHub.)


# Development

## Overview

This project uses Parcel for bundling the site.

## Requirements

node - v14.16.0
npm - 6.14.11

I haven't tried other versions, but the above worked for me on my Mac.

## Getting started

```
git clone <this repo>
cd <repo path>
npm install

# Build and start the local Parcel server
npm start

# Then go to the local address it tells you
```

## Tests

This uses `tape` for tests.  https://github.com/substack/tape

`npm run test`

## Contributing

Contributions would be super if it makes this more useful/pretty/interesting.

Fork; clone; make you changes and be sure to run `npm run test`; PR back to main.

# Deployment

## To github pages

After checking the local site with `npm start`, we can deploy this automatically to a github pages repo by having everything deployed to `docs`.  See ref https://www.sitepoint.com/parcel-hyperapp-github-pages/

`npm run deploy` builds, commits, and pushes.  GH pages take a few moments to update.

# Licensing

Nothing.
