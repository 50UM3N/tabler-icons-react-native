import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconFlag2Off({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flag-2-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 14h9m4 0h1v-9h-10m-4 0v16" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconFlag2Off;