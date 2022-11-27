import Svg, { Path, Circle, Rect } from 'react-native-svg';
import * as React from "react";
function IconTriangleSquareCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-triangle-square-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3l-4 7h8z" /><Circle cx={17} cy={17} r={3} /><Rect x={4} y={14} width={6} height={6} rx={1} /></Svg>;
}
export default IconTriangleSquareCircle;