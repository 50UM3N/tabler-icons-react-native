import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconCurrencyTaka({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-taka" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={16.5} cy={15.5} r={1} /><Path d="M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5" /><Path d="M8 11h6" /></Svg>;
}
export default IconCurrencyTaka;