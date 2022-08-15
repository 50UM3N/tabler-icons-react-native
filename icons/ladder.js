import Svg, { Path } from "react-native-svg";

function IconLadder({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ladder" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 3v18" /><Path d="M16 3v18" /><Path d="M8 14h8" /><Path d="M8 10h8" /><Path d="M8 6h8" /><Path d="M8 18h8" /></Svg>;
}

export default IconLadder;