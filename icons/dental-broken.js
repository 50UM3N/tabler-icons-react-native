import Svg, { Path } from 'react-native-svg';
import * as React from "react";
function IconDentalBroken({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dental-broken" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 5.5c-1.074 -.586 -2.583 -1.5 -4 -1.5c-2.1 -.001 -4 1.247 -4 5c0 4.899 1.056 8.41 2.671 10.537c.573 .756 1.97 .521 2.567 -.236c.398 -.505 .819 -1.439 1.262 -2.801c.292 -.771 .892 -1.504 1.5 -1.5c.602 .004 1.21 .737 1.5 1.5c.443 1.362 .864 2.295 1.262 2.8c.597 .759 1.994 .993 2.567 .237c1.615 -2.127 2.671 -5.637 2.671 -10.537c0 -3.74 -1.908 -4.994 -4 -5c-1.423 -.004 -2.92 .911 -4 1.5z" /><Path d="M12 5.5l1 2.5l-2 2l2 2" /></Svg>;
}
export default IconDentalBroken;