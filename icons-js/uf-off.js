import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconUfOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-uf-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.95 9.01c3.02 .739 5.05 2.123 5.05 3.714c0 1.08 -.931 2.063 -2.468 2.814m-3.001 1c-1.36 .295 -2.9 .462 -4.531 .462c-5.52 0 -10 -1.909 -10 -4.276c0 -1.59 2.04 -2.985 5.07 -3.724" /><Path d="M14.69 10.686c1.388 -.355 2.31 -.976 2.31 -1.686v-.035c0 -2.742 -2.239 -4.965 -5 -4.965c-1.125 0 -2.164 .37 -3 .992m-1.707 2.297a4.925 4.925 0 0 0 -.293 1.676v.035c0 .961 1.696 1.764 3.956 1.956" /><Path d="M15 17l2 3" /><Path d="M8.5 17l-1.5 3" /><Path d="M12 14h.01" /><Path d="M7 13h.01" /><Path d="M17 13h.01" /><Path d="M3 3l18 18" /></Svg>;
}
export default IconUfOff;