import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCurrencyForint({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-forint" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 4h-4a3 3 0 0 0 -3 3v12" /><Path d="M10 11h-6" /><Path d="M16 4v13a2 2 0 0 0 2 2h2" /><Path d="M19 9h-5" /></Svg>;
}
export default IconCurrencyForint;