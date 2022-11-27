import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconArrowAutofitHeight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-autofit-height" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" /><Path d="M18 14v7" /><Path d="M18 3v7" /><Path d="M15 18l3 3l3 -3" /><Path d="M15 6l3 -3l3 3" /></Svg>;
}
export default IconArrowAutofitHeight;