import Svg, { Path } from "react-native-svg";

function IconParentheses({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-parentheses" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 4a12.25 12.25 0 0 0 0 16" /><Path d="M17 4a12.25 12.25 0 0 1 0 16" /></Svg>;
}

export default IconParentheses;