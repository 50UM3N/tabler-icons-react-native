import Svg, { Path } from 'react-native-svg';
                    
function IconLockOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3l18 18" /><Path d="M19 19a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4m4 0h2a2 2 0 0 1 2 2v2" /><Path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M8 11v-3m.712 -3.278a4 4 0 0 1 7.288 2.278v4" /></Svg>;

}
export default IconLockOff;
                    