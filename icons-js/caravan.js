import Svg, { Path, Circle, Line, Rect } from 'react-native-svg';
import * as React from "react";
function IconCaravan({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-caravan" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={11} cy={17} r={2} /><Line x1={21} y1={17} x2={13} y2={17} /><Path d="M9 17h-5a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2h10l4 4v8" /><Rect x={6} y={8} width={6} height={4} rx={1} /></Svg>;
}
export default IconCaravan;