import Svg, { Path } from 'react-native-svg';
                    
function IconComponentsOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-components-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12l3 3l3 -3l-3 -3z" /><Path d="M18.5 14.5l2.5 -2.5l-3 -3l-2.5 2.5" /><Path d="M12.499 8.501l2.501 -2.501l-3 -3l-2.5 2.5" /><Path d="M9 18l3 3l3 -3l-3 -3z" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconComponentsOff;
                    