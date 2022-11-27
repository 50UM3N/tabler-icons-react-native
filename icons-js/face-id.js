import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconFaceId({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-face-id" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><Path d="M4 16v2a2 2 0 0 0 2 2h2" /><Path d="M16 4h2a2 2 0 0 1 2 2v2" /><Path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><Line x1={9} y1={10} x2={9.01} y2={10} /><Line x1={15} y1={10} x2={15.01} y2={10} /><Path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></Svg>;
}
export default IconFaceId;