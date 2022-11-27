import Svg, { Path, Rect } from 'react-native-svg';
import * as React from "react";
function IconSortAscending2({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sort-ascending-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 9l3 -3l3 3" /><Rect x={5} y={5} width={5} height={5} rx={0.5} /><Rect x={5} y={14} width={5} height={5} rx={0.5} /><Path d="M17 6v12" /></Svg>;
}
export default IconSortAscending2;