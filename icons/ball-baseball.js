import Svg, { Path } from "react-native-svg";

function IconBallBaseball({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ball-baseball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728z" /><Path d="M12.495 3.02a9 9 0 0 1 -9.475 9.475" /><Path d="M20.98 11.505a9 9 0 0 0 -9.475 9.475" /><Path d="M9 9l2 2" /><Path d="M13 13l2 2" /><Path d="M11 7l2 1" /><Path d="M7 11l1 2" /><Path d="M16 11l1 2" /><Path d="M11 16l2 1" /></Svg>;
}

export default IconBallBaseball;