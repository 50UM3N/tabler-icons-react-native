import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconKering({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-kering" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5" /><Path d="M3 9l3 6l3 -6" /><Path d="M9 20l6 -16" /></Svg>;
}
export default IconKering;