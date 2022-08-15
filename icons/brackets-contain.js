import Svg, { Path } from "react-native-svg";

function IconBracketsContain({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brackets-contain" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 4h-4v16h4" /><Path d="M17 4h4v16h-4" /><Path d="M8 16h.01" /><Path d="M12 16h.01" /><Path d="M16 16h.01" /></Svg>;
}

export default IconBracketsContain;