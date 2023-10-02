import Svg, { Path } from 'react-native-svg';
         
function IconMouseOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mouse-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.733 3.704a3.982 3.982 0 0 1 2.267 -.704h4a4 4 0 0 1 4 4v7m-.1 3.895a4 4 0 0 1 -3.9 3.105h-4a4 4 0 0 1 -4 -4v-10c0 -.3 .033 -.593 .096 -.874" /><Path d="M12 7v1" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconMouseOff;
        