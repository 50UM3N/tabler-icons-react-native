import Svg, { Path } from "react-native-svg";

function IconBracketsContainStart({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brackets-contain-start" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 4h-4v16h4" /><Path d="M18 16h-.01" /><Path d="M14 16h-.01" /><Path d="M10 16h-.01" /></Svg>;
}

export default IconBracketsContainStart;