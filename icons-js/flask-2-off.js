import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconFlask2Off({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-flask-2-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6.1 15h8.9" /><Path d="M17.742 17.741a6 6 0 0 1 -2.424 3.259h-6.635a6.002 6.002 0 0 1 1.317 -10.66v-.326m0 -4.014v-3h4v7m.613 .598a6.004 6.004 0 0 1 2.801 2.817" /><Path d="M9 3h6" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconFlask2Off;