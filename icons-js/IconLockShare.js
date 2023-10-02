import Svg, { Path } from 'react-native-svg';
         
function IconLockShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-lock-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M12 21h-5a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2" /><Path d="M8 11v-4a4 4 0 1 1 8 0v4" /><Path d="M16 22l5 -5" /><Path d="M21 21.5v-4.5h-4.5" /></Svg>;

}
export default IconLockShare;
        