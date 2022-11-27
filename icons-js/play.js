import Svg, { Path } from 'react-native-svg';
import * as React from "react";
const IconPlay = (size = 24, color = "#1f2937", stroke = 2, ...props) => <Svg className="icon icon-tabler icon-tabler-play" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 5v14a2 2 0 0 0 2.75 1.84l12.25 -7.1a2 2 0 0 0 0 -3.5l-12.25 -7.1a2 2 0 0 0 -2.75 1.75" /></Svg>;
export default IconPlay;