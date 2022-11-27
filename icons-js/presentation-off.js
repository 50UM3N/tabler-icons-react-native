import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconPresentationOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-presentation-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 4h1m4 0h13" /><Path d="M4 4v10a2 2 0 0 0 2 2h10m3.42 -.592c.359 -.362 .58 -.859 .58 -1.408v-10" /><Path d="M12 16v4" /><Path d="M9 20h6" /><Path d="M8 12l2 -2m4 0l2 -2" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconPresentationOff;