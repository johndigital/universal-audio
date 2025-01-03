### Universal Audio

================

A universal implementation of the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API). Can be used in browsers or in Node. The Node implementation of the API is built on bindings to the [Rust implementation of Web Audio](https://www.w3.org/TR/webaudio/).

#### Install

```sh
npm install --save universal-audio
```

#### Usage

As a [ponyfill](https://github.com/sindresorhus/ponyfill) (imports locally):

```javascript
// Using ES6 modules with Babel or TypeScript
import { AudioContext } from 'universal-audio'

// Using CommonJS modules
const { AudioContext } = require('universal-audio')
```

As a polyfill (installs globally):

```javascript
// Using ES6 modules
import 'universal-audio/polyfill'

// Using CommonJS modules
require('universal-audio/polyfill')
```
