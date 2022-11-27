import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCurrencyZloty({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-zloty" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 18h-7l7 -7h-7" /><Path d="M17 18v-13" /><Path d="M14 14.5l6 -3.5" /></Svg>;
}
export default IconCurrencyZloty;