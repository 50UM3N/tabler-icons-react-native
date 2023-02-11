import Svg, { Path, Circle } from 'react-native-svg';
                    
function IconFocus2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-focus-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx="12" cy="12" r=".5" fill="currentColor" /><Path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><Path d="M12 3l0 2" /><Path d="M3 12l2 0" /><Path d="M12 19l0 2" /><Path d="M19 12l2 0" /></Svg>;

}
export default IconFocus2;
                    