import Svg, { Path } from 'react-native-svg';
         
function IconMoodShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M20.942 13.018a9 9 0 1 0 -8.942 7.982" /><Path d="M9 10h.01" /><Path d="M15 10h.01" /><Path d="M9.5 15c.658 .672 1.56 1 2.5 1c.213 0 .424 -.017 .63 -.05" /><Path d="M16 22l5 -5" /><Path d="M21 21.5v-4.5h-4.5" /></Svg>;

}
export default IconMoodShare;
        