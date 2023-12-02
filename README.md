# Tabler Icons React Native

Tabler Icons React Native is a library of React Native components that provide access to [Tabler Icons](https://github.com/tabler/tabler-icons) — a collection of over 2200 open-sourced, MIT-licensed icons.

<p align="center">
  <a href="https://tabler-icons.io/"><strong>Browse at tabler-icons.io &rarr;</strong></a>
</p>

## Installation

The package is available via npm and can be installed using `npm` or `yarn`:

```sh
# npm
npm install tabler-icons-react-native

# yarn
yarn add tabler-icons-react-native
```

## Usage

After installing the package, you can import Tabler Icons as React Native components like this:

```jsx
import { IconActivity } from "tabler-icons-react-native";
```

## Example

```jsx
import React from 'react';
import { View } from 'react-native';
import { IconActivity } from 'tabler-icons-react-native';

const Example = () => {
  return (
    <View>
      <IconActivity size={48} color="red" />
    </View>
  );
}

export default Example;
```

## Documentation

Every icon component accepts the following props:

| Prop    |     Default |
| ------- | ----------: |
| `size`  |        `24` |
| `stroke`|         `2` |
| `color` | `'#232e46'` |

## License

This project is licensed under the MIT License.
