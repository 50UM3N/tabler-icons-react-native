import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconHexagon3d({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hexagon-3d" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 6.844a2.007 2.007 0 0 1 1 1.752v6.555c0 .728 -.394 1.399 -1.03 1.753l-5.999 3.844a1.995 1.995 0 0 1 -1.942 0l-6 -3.844a2.007 2.007 0 0 1 -1.029 -1.752v-6.556c0 -.729 .394 -1.4 1.029 -1.753l6 -3.583a2.05 2.05 0 0 1 2 0l6 3.584h-.03z" /><Path d="M12 16.5v4.5" /><Path d="M4.5 7.5l3.5 2.5" /><Path d="M16 10l4 -2.5" /><Path d="M12 7.5v4.5l-4 2" /><Path d="M12 12l4 2" /><Path d="M12 16.5l4 -2.5v-4l-4 -2.5l-4 2.5v4z" /></Svg>;
}
export default IconHexagon3d;