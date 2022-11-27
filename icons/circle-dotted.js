import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconCircleDotted({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-dotted" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={7.5} y1={4.21} x2={7.5} y2={4.22} /><Line x1={4.21} y1={7.5} x2={4.21} y2={7.51} /><Line x1={3} y1={12} x2={3} y2={12.01} /><Line x1={4.21} y1={16.5} x2={4.21} y2={16.51} /><Line x1={7.5} y1={19.79} x2={7.5} y2={19.8} /><Line x1={12} y1={21} x2={12} y2={21.01} /><Line x1={16.5} y1={19.79} x2={16.5} y2={19.8} /><Line x1={19.79} y1={16.5} x2={19.79} y2={16.51} /><Line x1={21} y1={12} x2={21} y2={12.01} /><Line x1={19.79} y1={7.5} x2={19.79} y2={7.51} /><Line x1={16.5} y1={4.21} x2={16.5} y2={4.22} /><Line x1={12} y1={3} x2={12} y2={3.01} /></Svg>;
}
export default IconCircleDotted;