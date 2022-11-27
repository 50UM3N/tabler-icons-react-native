import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconRuler2Off({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ruler-2-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12.03 7.97l4.97 -4.97l4 4l-5 5m-2 2l-7 7l-4 -4l7 -7" /><Path d="M16 7l-1.5 -1.5" /><Path d="M10 13l-1.5 -1.5" /><Path d="M7 16l-1.5 -1.5" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconRuler2Off;