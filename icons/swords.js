import Svg, { Path } from "react-native-svg";

function IconSwords({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-swords" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 3v5l-11 9l-4 4l-3 -3l4 -4l9 -11z" /><Path d="M5 13l6 6" /><Path d="M14.32 17.32l3.68 3.68l3 -3l-3.365 -3.365" /><Path d="M10 5.5l-2 -2.5h-5v5l3 2.5" /></Svg>;
}

export default IconSwords;