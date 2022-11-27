import Svg, { Path, Circle, Polyline, Line } from 'react-native-svg';
import * as React from "react";
function IconFiretruck({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-firetruck" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={5} cy={17} r={2} /><Circle cx={17} cy={17} r={2} /><Path d="M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5" /><Path d="M12 18v-11h3" /><Polyline points="3 17 3 12 12 12" /><Line x1={3} y1={9} x2={21} y2={3} /><Line x1={6} y1={12} x2={6} y2={8} /></Svg>;
}
export default IconFiretruck;