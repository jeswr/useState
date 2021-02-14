# useState

React hook with same API as use state (plus some extensions) implemented using useReducer

[![GitHub license](https://img.shields.io/github/license/jeswr/useState.svg)](https://github.com/jeswr/useState/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/@jeswr/use-state.svg)](https://www.npmjs.com/package/@jeswr/use-state)
[![build](https://img.shields.io/github/workflow/status/jeswr/useState/Node.js%20CI)](https://github.com/jeswr/useState/tree/main/)
[![Dependabot](https://badgen.net/badge/Dependabot/enabled/green?icon=dependabot)](https://dependabot.com/)
[![Downloads](https://img.shields.io/github/downloads/jeswr/useState/total)](https://img.shields.io/github/downloads/jeswr/useState/total)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
## Why

useReducer applies dispatch calls in the order in which they are made. The native useState functionality does not.

## Usage

Using the traditional useState API

```tsx
import { useState } from '@jeswr/use-state'

function MyReactComponent() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(1);
  }, [])
  return <div>{counter}</div>
}
```

Using the additional `modifier` parameter

```tsx
import { useState } from '@jeswr/use-state'

function MyReactComponent() {
  const [counter, setCounter] = useState(0, props => props.value);
  useEffect(() => {
    setCounter({ value: 1 });
  }, [])
  return <div>{counter}</div>
}
```

## License
©2021–present
[Jesse Wright](https://github.com/jeswr).
[MIT License](https://github.com/jeswr/useState/blob/master/LICENSE).
