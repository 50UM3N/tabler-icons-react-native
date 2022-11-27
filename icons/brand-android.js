import Svg, { Path, Line } from 'react-native-svg';
import * as React from "react";
function IconBrandAndroid({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-android" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={4} y1={10} x2={4} y2={16} /><Line x1={20} y1={10} x2={20} y2={16} /><Path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" /><Line x1={8} y1={3} x2={9} y2={5} /><Line x1={16} y1={3} x2={15} y2={5} /><Line x1={9} y1={18} x2={9} y2={21} /><Line x1={15} y1={18} x2={15} y2={21} /></Svg>;
}
export default IconBrandAndroid;