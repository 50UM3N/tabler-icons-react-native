import Svg, { Path } from 'react-native-svg';
                    
function IconEyeClosed({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-closed" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4" /><Path d="M3 15l2.5 -3.8" /><Path d="M21 14.976l-2.492 -3.776" /><Path d="M9 17l.5 -4" /><Path d="M15 17l-.5 -4" /></Svg>;

}
export default IconEyeClosed;
                    