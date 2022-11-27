import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconFileVector({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-vector" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Circle cx={9.5} cy={16.5} r={1.5} /><Circle cx={14.5} cy={12.5} r={1.5} /><Path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><Path d="M9.5 15a2.5 2.5 0 0 1 2.5 -2.5h1" /></Svg>;
}
export default IconFileVector;