import Svg, { Path } from "react-native-svg";

function IconTextOrientation({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-text-orientation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 15l-5 -5c-1.367 -1.367 -1.367 -3.633 0 -5s3.633 -1.367 5 0l5 5" /><Path d="M5.5 11.5l5 -5" /><Path d="M21 12l-9 9" /><Path d="M21 12v4" /><Path d="M21 12h-4" /></Svg>;
}

export default IconTextOrientation;