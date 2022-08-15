import Svg, { Path, Circle } from "react-native-svg";

function IconGardenCart({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-garden-cart" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={17.5} cy={17.5} r={2.5} /><Path d="M6 8v11a1 1 0 0 0 1.806 .591l3.694 -5.091v.055" /><Path d="M6 8h15l-3.5 7l-7.1 -.747a4 4 0 0 1 -3.296 -2.493l-2.853 -7.13a1 1 0 0 0 -.928 -.63h-1.323" /></Svg>;
}

export default IconGardenCart;