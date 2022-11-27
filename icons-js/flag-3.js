import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconFlag3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flag-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 14h14l-4.5 -4.5l4.5 -4.5h-14v16" /></Svg>;
}
export default IconFlag3;