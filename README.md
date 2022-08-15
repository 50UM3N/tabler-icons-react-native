# tabler-icons-react-native

A library of React Native components for [Tabler Icons](https://github.com/tabler/tabler-icons) — a set of over free 2200 open-sourced MIT-licensed icons.

<p align="center">
  <a href="https://tabler-icons.io/"><strong>Browse at tabler-icons.io &rarr;</strong></a>
</p>

## Usage

The package is available via npm and can be installed using `npm` or `yarn`:

```sh
# npm
npm install tabler-icons-react-native

# yarn
yarn add tabler-icons-react-native
```

After installing the package you can import Tabler Icons as React Native components as follows:

```jsx
import { Activity } from "tabler-icons-react-native";
```

## Example

```jsx
...
import { Activity } from 'tabler-icons-react-native';

export default function Example() {
  return (
    <View>
      <Activity size={48} color="red" />
    </View>
  );
}
```

## Docs

Every icon component accepts following props:

| Prop    |     Default |
| ------- | ----------: |
| `size`  |        `24` |
| `color` | `'#232e46'` |

## License

This project is MIT licensed.
