import Svg, { Path } from "react-native-svg";

function IconCurrencyShekel({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-shekel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 18v-12h4a4 4 0 0 1 4 4v4" /><Path d="M18 6v12h-4a4 4 0 0 1 -4 -4v-4" /></Svg>;
}

export default IconCurrencyShekel;