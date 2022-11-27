import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconMoodKid({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-kid" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Line x1={9} y1={10} x2={9.01} y2={10} /><Line x1={15} y1={10} x2={15.01} y2={10} /><Path d="M9.5 15a3.5 3.5 0 0 0 5 0" /><Path d="M12 3a2 2 0 0 0 0 4" /></Svg>;
}
export default IconMoodKid;