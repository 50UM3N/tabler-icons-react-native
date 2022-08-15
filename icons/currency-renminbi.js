import Svg, { Path } from "react-native-svg";

function IconCurrencyRenminbi({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-renminbi" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 9v8a2 2 0 1 0 4 0" /><Path d="M19 9h-14" /><Path d="M19 5h-14" /><Path d="M9 9v4c0 2.5 -.667 4 -2 6" /></Svg>;
}

export default IconCurrencyRenminbi;