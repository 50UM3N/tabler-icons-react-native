import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconBrandXbox({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-xbox" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Path d="M6.5 5c7.72 2.266 10.037 7.597 12.5 12.5" /><Path d="M17.5 5c-7.72 2.266 -10.037 7.597 -12.5 12.5" /></Svg>;
}
export default IconBrandXbox;