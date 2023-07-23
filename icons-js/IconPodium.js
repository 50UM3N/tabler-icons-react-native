import Svg, { Path } from 'react-native-svg';
         
function IconPodium({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-podium" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 8h14l-.621 2.485a2 2 0 0 1 -1.94 1.515h-8.878a2 2 0 0 1 -1.94 -1.515l-.621 -2.485z" /><Path d="M7 8v-2a3 3 0 0 1 3 -3" /><Path d="M8 12l1 9" /><Path d="M16 12l-1 9" /><Path d="M7 21h10" /></Svg>;

}
export default IconPodium;
        