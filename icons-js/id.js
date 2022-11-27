import Svg, { Path, Rect, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconId({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-id" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={4} width={18} height={16} rx={3} /><Circle cx={9} cy={10} r={2} /><Line x1={15} y1={8} x2={17} y2={8} /><Line x1={15} y1={12} x2={17} y2={12} /><Line x1={7} y1={16} x2={17} y2={16} /></Svg>;
}
export default IconId;