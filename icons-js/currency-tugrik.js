import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconCurrencyTugrik({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-currency-tugrik" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 6h10" /><Path d="M12 6v13" /><Path d="M8 17l8 -3" /><Path d="M16 10l-8 3" /></Svg>;
}
export default IconCurrencyTugrik;