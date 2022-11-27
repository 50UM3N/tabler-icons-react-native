import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconDirectionsOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-directions-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21v-4" /><Path d="M12 13v-1" /><Path d="M12 5v-2" /><Path d="M10 21h4" /><Path d="M8 8v1h1m4 0h6l2 -2l-2 -2h-10" /><Path d="M14 14v3h-8l-2 -2l2 -2h7" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconDirectionsOff;