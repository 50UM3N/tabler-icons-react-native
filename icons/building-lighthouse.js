import Svg, { Path, Line } from "react-native-svg";

function IconBuildingLighthouse({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-lighthouse" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3l2 3l2 15h-8l2 -15z" /><Line x1={8} y1={9} x2={16} y2={9} /><Path d="M3 11l2 -2l-2 -2" /><Path d="M21 11l-2 -2l2 -2" /></Svg>;
}

export default IconBuildingLighthouse;