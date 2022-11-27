import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconTornado({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tornado" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={21} y1={4} x2={3} y2={4} /><Line x1={13} y1={16} x2={7} y2={16} /><Line x1={11} y1={20} x2={15} y2={20} /><Line x1={6} y1={8} x2={20} y2={8} /><Line x1={4} y1={12} x2={16} y2={12} /></Svg>;
}
export default IconTornado;