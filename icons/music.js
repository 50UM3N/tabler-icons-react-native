import Svg, { Path, Circle, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconMusic({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-music" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={17} r={3} /><Circle cx={16} cy={17} r={3} /><Polyline points="9 17 9 4 19 4 19 17" /><Line x1={9} y1={8} x2={19} y2={8} /></Svg>;
}
export default IconMusic;