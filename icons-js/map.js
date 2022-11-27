import Svg, { Path, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconMap({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7" /><Line x1={9} y1={4} x2={9} y2={17} /><Line x1={15} y1={7} x2={15} y2={20} /></Svg>;
}
export default IconMap;