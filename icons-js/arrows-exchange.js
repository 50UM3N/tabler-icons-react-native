import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowsExchange({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-exchange" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 10h14l-4 -4" /><Path d="M17 14h-14l4 4" /></Svg>;
}
export default IconArrowsExchange;