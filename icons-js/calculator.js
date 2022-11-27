import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconCalculator({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calculator" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={3} width={16} height={18} rx={2} /><Rect x={8} y={7} width={8} height={3} rx={1} /><Line x1={8} y1={14} x2={8} y2={14.01} /><Line x1={12} y1={14} x2={12} y2={14.01} /><Line x1={16} y1={14} x2={16} y2={14.01} /><Line x1={8} y1={17} x2={8} y2={17.01} /><Line x1={12} y1={17} x2={12} y2={17.01} /><Line x1={16} y1={17} x2={16} y2={17.01} /></Svg>;
}
export default IconCalculator;