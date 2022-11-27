import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconLetterH({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-h" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={17} y1={4} x2={17} y2={20} /><Line x1={7} y1={12} x2={17} y2={12} /><Line x1={7} y1={4} x2={7} y2={20} /></Svg>;
}
export default IconLetterH;