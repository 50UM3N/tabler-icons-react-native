import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBorderRight({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-border-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={20} y1={4} x2={20} y2={20} /><Line x1={4} y1={4} x2={4} y2={4.01} /><Line x1={8} y1={4} x2={8} y2={4.01} /><Line x1={12} y1={4} x2={12} y2={4.01} /><Line x1={16} y1={4} x2={16} y2={4.01} /><Line x1={4} y1={8} x2={4} y2={8.01} /><Line x1={12} y1={8} x2={12} y2={8.01} /><Line x1={4} y1={12} x2={4} y2={12.01} /><Line x1={8} y1={12} x2={8} y2={12.01} /><Line x1={12} y1={12} x2={12} y2={12.01} /><Line x1={16} y1={12} x2={16} y2={12.01} /><Line x1={4} y1={16} x2={4} y2={16.01} /><Line x1={12} y1={16} x2={12} y2={16.01} /><Line x1={4} y1={20} x2={4} y2={20.01} /><Line x1={8} y1={20} x2={8} y2={20.01} /><Line x1={12} y1={20} x2={12} y2={20.01} /><Line x1={16} y1={20} x2={16} y2={20.01} /></Svg>;
}
export default IconBorderRight;