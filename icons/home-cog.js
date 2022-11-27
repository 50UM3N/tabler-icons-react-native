import Svg, { Path, Circle } from 'react-native-svg';
import * as React from "react";
function IconHomeCog({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-cog" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 21v-6a2 2 0 0 1 2 -2h1.6" /><Path d="M20.001 11.001l-8.001 -8.001l-9 9h2v7a2 2 0 0 0 2 2h4.159" /><Circle cx={18.001} cy={18} r={2} /><Path d="M18.001 14.5v1.5" /><Path d="M18.001 20v1.5" /><Path d="M21.032 16.25l-1.299 .75" /><Path d="M16.27 19l-1.3 .75" /><Path d="M14.97 16.25l1.3 .75" /><Path d="M19.733 19l1.3 .75" /></Svg>;
}
export default IconHomeCog;