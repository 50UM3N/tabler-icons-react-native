import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconLoader({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-loader" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={6} x2={12} y2={3} /><Line x1={16.25} y1={7.75} x2={18.4} y2={5.6} /><Line x1={18} y1={12} x2={21} y2={12} /><Line x1={16.25} y1={16.25} x2={18.4} y2={18.4} /><Line x1={12} y1={18} x2={12} y2={21} /><Line x1={7.75} y1={16.25} x2={5.6} y2={18.4} /><Line x1={6} y1={12} x2={3} y2={12} /><Line x1={7.75} y1={7.75} x2={5.6} y2={5.6} /></Svg>;
}
export default IconLoader;