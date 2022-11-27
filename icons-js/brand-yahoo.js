import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBrandYahoo({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-yahoo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={6} x2={8} y2={6} /><Line x1={7} y1={18} x2={14} y2={18} /><Path d="M4.5 6l5.5 7v5" /><Path d="M10 13l6 -5" /><Line x1={12.5} y1={8} x2={17.5} y2={8} /><Line x1={20} y1={11} x2={20} y2={15} /><Line x1={20} y1={18} x2={20} y2={18.01} /></Svg>;
}
export default IconBrandYahoo;