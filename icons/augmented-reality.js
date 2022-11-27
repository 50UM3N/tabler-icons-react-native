import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAugmentedReality({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-augmented-reality" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 8v-2a2 2 0 0 1 2 -2h2" /><Path d="M4 16v2a2 2 0 0 0 2 2h2" /><Path d="M16 4h2a2 2 0 0 1 2 2v2" /><Path d="M16 20h2a2 2 0 0 0 2 -2v-2" /><Path d="M12 12.5l4 -2.5" /><Path d="M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5z" /><Path d="M8 10v4.5l4 2.5" /></Svg>;
}
export default IconAugmentedReality;