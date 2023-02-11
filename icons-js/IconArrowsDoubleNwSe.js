import Svg, { Path } from 'react-native-svg';
                    
function IconArrowsDoubleNwSe({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrows-double-nw-se" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 21l-11 -11" /><Path d="M3 14v-4h4" /><Path d="M17 14h4v-4" /><Path d="M10 3l11 11" /></Svg>;

}
export default IconArrowsDoubleNwSe;
                    