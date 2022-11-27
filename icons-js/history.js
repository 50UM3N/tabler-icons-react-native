import Svg, { Path, Polyline } from 'react-native-svg';
import * as React from "react";
function IconHistory({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-history" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="12 8 12 12 14 14" /><Path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" /></Svg>;
}
export default IconHistory;