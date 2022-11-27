import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconLinkOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-link-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 14a3.5 3.5 0 0 0 4.47 .444m2.025 -1.94c.557 -.556 1.392 -1.39 2.505 -2.504a3.536 3.536 0 0 0 -5 -5l-.5 .5" /><Path d="M9.548 9.544a3.5 3.5 0 0 0 -.548 .456l-4 4a3.536 3.536 0 0 0 5 5l.5 -.5" /><Path d="M3 3l18 18" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconLinkOff;