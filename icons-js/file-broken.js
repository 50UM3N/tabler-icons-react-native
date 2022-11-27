import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconFileBroken({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-broken" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 7v-2a2 2 0 0 1 2 -2h7l5 5v2" /><Path d="M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2" /><Path d="M5 16h.01" /><Path d="M5 13h.01" /><Path d="M5 10h.01" /><Path d="M19 13h.01" /><Path d="M19 16h.01" /></Svg>;
}
export default IconFileBroken;