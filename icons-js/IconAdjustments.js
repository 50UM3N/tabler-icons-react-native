import Svg, { Path } from 'react-native-svg';
                    
function IconAdjustments({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M6 4l0 4" /><Path d="M6 12l0 8" /><Path d="M12 16m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M12 4l0 10" /><Path d="M12 18l0 2" /><Path d="M18 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M18 4l0 1" /><Path d="M18 9l0 11" /></Svg>;

}
export default IconAdjustments;
                    