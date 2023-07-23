<p align="center">
  <img src="https://raw.githubusercontent.com/tabler/tabler-icons/master/.github/packages/og-core.png" alt="Tabler Icons" width="838">
</p>

<p align="center">
    A set of <!--icons-count-->4554<!--/icons-count--> free MIT-licensed high-quality SVG icons for you to use in your react native projects. Each icon is designed on a 24x24 grid and a 2px stroke.
<p>

<p align="center">
  <a href="https://tabler-icons.io/"><strong>Browse at tabler-icons.io &rarr;</strong></a>
</p>

## Installation

The package is available via npm and can be easily installed using `npm` or `yarn`:

```sh
# npm
npm install tabler-icons-react-native

# yarn
yarn add tabler-icons-react-native

# Important! - Make sure to install react-native-svg as well
expo install react-native-svg
```

## Usage

After successfully installing the package, you can import Tabler Icons as React Native components like this:

```jsx
import { Activity } from "tabler-icons-react-native";
```

## Example

Here's a quick example of how to use the imported icon component:

```jsx
import React from "react";
import { View } from "react-native";
import { Activity } from "tabler-icons-react-native";

export default function Example() {
  return (
    <View>
      <Activity size={48} color="red" />
    </View>
  );
}
```

## Icon Props

Each icon component accepts the following props:

| Prop    | Default Value |
| ------- | ------------- |
| `size`  | `24`          |
| `color` | `'#232e46'`   |

## License

This project is licensed under the MIT License. Feel free to use these icons in your projects!

## Acknowledgements

We would like to extend our gratitude to the contributors of Tabler Icons for their incredible work, making this library possible.

## Issues and Contributions

If you encounter any issues or would like to contribute to this project, please visit the [GitHub repository](https://github.com/50UM3N/tabler-icons-react-native) for more information.
