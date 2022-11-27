import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconArrowAutofitContent({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-autofit-content" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 4l-3 3l3 3" /><Path d="M18 4l3 3l-3 3" /><Rect x={4} y={14} width={16} height={6} rx={2} /><Path d="M10 7h-7" /><Path d="M21 7h-7" /></Svg>;
}
export default IconArrowAutofitContent;