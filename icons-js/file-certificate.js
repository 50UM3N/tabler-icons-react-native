import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconFileCertificate({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-certificate" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" /><Circle cx={6} cy={14} r={3} /><Path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" /></Svg>;
}
export default IconFileCertificate;