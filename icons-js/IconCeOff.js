import Svg, { Path } from 'react-native-svg';
                    
function IconCeOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ce-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 4a7.99 7.99 0 0 0 -2.581 .426" /><Path d="M5.867 5.864a8 8 0 0 0 5.133 14.136" /><Path d="M20 4a8 8 0 0 0 -7.29 4.7" /><Path d="M12 12a8 8 0 0 0 8 8" /><Path d="M16 12h4" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconCeOff;
                    