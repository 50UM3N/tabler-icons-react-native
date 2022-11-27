import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandPeanut({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-peanut" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 16.25l-.816 -.36l-.462 -.196c-1.444 -.592 -2 -.593 -3.447 -.002l-.462 .195l-.817 .359a4.5 4.5 0 1 1 .004 -8.49v-.006l1.054 .462l.434 .178c1.292 .507 1.863 .48 3.237 -.082l.462 -.195l.817 -.359a4.5 4.5 0 1 1 -.004 8.49" /></Svg>;
}
export default IconBrandPeanut;