import Svg, { Path, Polyline } from 'react-native-svg';
import * as React from "react";
function IconChevronsDown({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="7 7 12 12 17 7" /><Polyline points="7 13 12 18 17 13" /></Svg>;
}
export default IconChevronsDown;