import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconAugmentedRealityOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-augmented-reality-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 8v-2c0 -.557 .228 -1.061 .595 -1.424" /><Path d="M4 16v2a2 2 0 0 0 2 2h2" /><Path d="M16 4h2a2 2 0 0 1 2 2v2" /><Path d="M16 20h2c.558 0 1.062 -.228 1.425 -.596" /><Path d="M12 12.5l.312 -.195m2.457 -1.536l1.231 -.769" /><Path d="M9.225 9.235l-1.225 .765l4 2.5v4.5l3.076 -1.923m.924 -3.077v-2l-4 -2.5l-.302 .189" /><Path d="M8 10v4.5l4 2.5" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconAugmentedRealityOff;