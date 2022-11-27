import Svg, { Path, Line, Rect } from 'react-native-svg';
import * as React from "react";
function IconSubtask({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-subtask" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={6} y1={9} x2={12} y2={9} /><Line x1={4} y1={5} x2={8} y2={5} /><Path d="M6 5v11a1 1 0 0 0 1 1h5" /><Rect x={12} y={7} width={8} height={4} rx={1} /><Rect x={12} y={15} width={8} height={4} rx={1} /></Svg>;
}
export default IconSubtask;