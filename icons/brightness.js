import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconBrightness({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brightness" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={12} y1={3} x2={12} y2={21} /><Line x1={12} y1={9} x2={16.65} y2={4.35} /><Line x1={12} y1={14.3} x2={19.37} y2={6.93} /><Line x1={12} y1={19.6} x2={20.85} y2={10.75} /></Svg>;
}
export default IconBrightness;