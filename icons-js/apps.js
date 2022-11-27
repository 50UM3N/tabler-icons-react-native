import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconApps({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-apps" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={6} height={6} rx={1} /><Rect x={4} y={14} width={6} height={6} rx={1} /><Rect x={14} y={14} width={6} height={6} rx={1} /><Line x1={14} y1={7} x2={20} y2={7} /><Line x1={17} y1={4} x2={17} y2={10} /></Svg>;
}
export default IconApps;