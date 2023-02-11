import Svg, { Path } from 'react-native-svg';
                    
function IconLassoPolygon({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lasso-polygon" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.028 13.252l-1.028 -3.252l2 -7l7 5l8 -3l1 9l-9 3l-5.144 -1.255" /><Path d="M5 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M5 17c0 1.42 .316 2.805 1 4" /></Svg>;

}
export default IconLassoPolygon;
                    