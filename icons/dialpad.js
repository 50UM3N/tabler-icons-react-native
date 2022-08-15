import Svg, { Path } from "react-native-svg";

function IconDialpad({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dialpad" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3h4v4h-4z" /><Path d="M17 3h4v4h-4z" /><Path d="M10 3h4v4h-4z" /><Path d="M3 10h4v4h-4z" /><Path d="M17 10h4v4h-4z" /><Path d="M10 10h4v4h-4z" /><Path d="M10 17h4v4h-4z" /></Svg>;
}

export default IconDialpad;