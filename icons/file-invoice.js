import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconFileInvoice({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-invoice" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 3v4a1 1 0 0 0 1 1h4" /><Path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><Line x1={9} y1={7} x2={10} y2={7} /><Line x1={9} y1={13} x2={15} y2={13} /><Line x1={13} y1={17} x2={15} y2={17} /></Svg>;
}
export default IconFileInvoice;