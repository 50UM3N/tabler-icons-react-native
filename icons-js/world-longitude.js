import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconWorldLongitude({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world-longitude" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M11.5 3a11.2 11.2 0 0 0 0 18" /><Path d="M12.5 3a11.2 11.2 0 0 1 0 18" /><Line x1={12} y1={3} x2={12} y2={21} /></Svg>;
}
export default IconWorldLongitude;