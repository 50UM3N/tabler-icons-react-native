import Svg, { Path, Circle } from "react-native-svg";

function IconBrandTripadvisor({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tripadvisor" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6.5} cy={13.5} r={1.5} /><Circle cx={17.5} cy={13.5} r={1.5} /><Path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5z" /><Path d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5z" /><Path d="M10.5 15.5l1.5 2l1.5 -2" /><Path d="M9 6.75c2 -.667 4 -.667 6 0" /></Svg>;
}

export default IconBrandTripadvisor;