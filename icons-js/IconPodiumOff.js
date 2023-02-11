import Svg, { Path } from 'react-native-svg';
                    
function IconPodiumOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-podium-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 8h7l-.621 2.485a2 2 0 0 1 -1.94 1.515h-.439m-4 0h-4.439a2 2 0 0 1 -1.94 -1.515l-.621 -2.485h3" /><Path d="M7 8v-1m.864 -3.106a2.99 2.99 0 0 1 2.136 -.894" /><Path d="M8 12l1 9" /><Path d="M15.599 15.613l-.599 5.387" /><Path d="M7 21h10" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconPodiumOff;
                    