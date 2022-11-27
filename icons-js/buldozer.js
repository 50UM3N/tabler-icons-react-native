import Svg, { Path, Circle, Line } from 'react-native-svg';
import * as React from "react";
function IconBuldozer({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg className="icon icon-tabler icon-tabler-buldozer" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={4} cy={17} r={2} /><Circle cx={13} cy={17} r={2} /><Path d="M18 13v6h3" /><Line x1={13} y1={19} x2={4} y2={19} /><Line x1={4} y1={15} x2={13} y2={15} /><Path d="M8 12v-5h2a3 3 0 0 1 3 3v5" /><Path d="M5 15v-2a1 1 0 0 1 1 -1h7" /><Line x1={18} y1={17} x2={15} y2={17} /></Svg>;
}
export default IconBuldozer;