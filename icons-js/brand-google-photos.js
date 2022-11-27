import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconBrandGooglePhotos({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google-photos" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.5 7c2.485 0 4.5 1.974 4.5 4.409v.591h-8.397a0.61 .61 0 0 1 -.426 -.173a0.585 .585 0 0 1 -.177 -.418c0 -2.435 2.015 -4.409 4.5 -4.409z" /><Path d="M16.5 17c-2.485 0 -4.5 -1.974 -4.5 -4.409v-.591h8.397c.333 0 .603 .265 .603 .591c0 2.435 -2.015 4.409 -4.5 4.409z" /><Path d="M7 16.5c0 -2.485 1.972 -4.5 4.405 -4.5h.595v8.392a0.61 .61 0 0 1 -.173 .431a0.584 .584 0 0 1 -.422 .177c-2.433 0 -4.405 -2.015 -4.405 -4.5z" /><Path d="M17 7.5c0 2.485 -1.972 4.5 -4.405 4.5h-.595v-8.397a0.61 .61 0 0 1 .175 -.428a0.584 .584 0 0 1 .42 -.175c2.433 0 4.405 2.015 4.405 4.5z" /></Svg>;
}
export default IconBrandGooglePhotos;