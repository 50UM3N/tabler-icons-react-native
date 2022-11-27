import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconChargingPile({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-charging-pile" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={18} y1={7} x2={17} y2={8} /><Path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3" /><Path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14" /><Path d="M9 11.5l-1.5 2.5h3l-1.5 2.5" /><Line x1={3} y1={20} x2={15} y2={20} /><Line x1={4} y1={8} x2={14} y2={8} /></Svg>;
}
export default IconChargingPile;