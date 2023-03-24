import Svg, { Path } from 'react-native-svg';
                    
function IconLockOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 11h2a2 2 0 0 1 2 2v2m0 4a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h4" /><Path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M8 11v-3m.719 -3.289a4 4 0 0 1 7.281 2.289v4" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconLockOff;
                    