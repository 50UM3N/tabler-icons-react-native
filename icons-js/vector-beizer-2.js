import Svg, { Path, Rect, Line, Circle } from 'react-native-svg';
import * as React from "react";
function IconVectorBeizer2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vector-beizer-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={3} width={4} height={4} rx={1} /><Rect x={17} y={17} width={4} height={4} rx={1} /><Line x1={7} y1={5} x2={14} y2={5} /><Line x1={10} y1={19} x2={17} y2={19} /><Circle cx={9} cy={19} r={1} /><Circle cx={15} cy={5} r={1} /><Path d="M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5" /></Svg>;
}
export default IconVectorBeizer2;