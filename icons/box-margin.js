import Svg, { Path } from "react-native-svg";

function IconBoxMargin({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-box-margin" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 8h8v8h-8z" /><Path d="M4 4v.01" /><Path d="M8 4v.01" /><Path d="M12 4v.01" /><Path d="M16 4v.01" /><Path d="M20 4v.01" /><Path d="M4 20v.01" /><Path d="M8 20v.01" /><Path d="M12 20v.01" /><Path d="M16 20v.01" /><Path d="M20 20v.01" /><Path d="M20 16v.01" /><Path d="M20 12v.01" /><Path d="M20 8v.01" /><Path d="M4 16v.01" /><Path d="M4 12v.01" /><Path d="M4 8v.01" /></Svg>;
}

export default IconBoxMargin;