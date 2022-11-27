import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconZoomCancel({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zoom-cancel" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={10} cy={10} r={7} /><Line x1={8} y1={8} x2={12} y2={12} /><Line x1={12} y1={8} x2={8} y2={12} /><Line x1={21} y1={21} x2={15} y2={15} /></Svg>;
}
export default IconZoomCancel;