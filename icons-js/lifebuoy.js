import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconLifebuoy({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lifebuoy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={4} /><Circle cx={12} cy={12} r={9} /><Line x1={15} y1={15} x2={18.35} y2={18.35} /><Line x1={9} y1={15} x2={5.65} y2={18.35} /><Line x1={5.65} y1={5.65} x2={9} y2={9} /><Line x1={18.35} y1={5.65} x2={15} y2={9} /></Svg>;
}
export default IconLifebuoy;