import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandDaysCounter({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-days-counter" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.779 10.007a9 9 0 1 0 -10.77 10.772" /><Path d="M13 21h8v-7" /><Path d="M12 8v4l3 3" /></Svg>;
}
export default IconBrandDaysCounter;