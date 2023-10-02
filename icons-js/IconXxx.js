import Svg, { Path } from 'react-native-svg';
         
function IconXxx({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-xxx" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 8l4 8" /><Path d="M10 16l4 -8" /><Path d="M17 8l4 8" /><Path d="M17 16l4 -8" /><Path d="M3 8l4 8" /><Path d="M3 16l4 -8" /></Svg>;

}
export default IconXxx;
        