import Svg, { Path, Rect, Line } from 'react-native-svg';
import * as React from "react";
function IconCreditCard({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-credit-card" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={3} y={5} width={18} height={14} rx={3} /><Line x1={3} y1={10} x2={21} y2={10} /><Line x1={7} y1={15} x2={7.01} y2={15} /><Line x1={11} y1={15} x2={13} y2={15} /></Svg>;
}
export default IconCreditCard;