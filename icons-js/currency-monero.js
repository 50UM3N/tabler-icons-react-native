import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCurrencyMonero({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-monero" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 18h3v-11l6 7l6 -7v11h3" /></Svg>;
}
export default IconCurrencyMonero;