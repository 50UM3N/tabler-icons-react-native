import Svg, { Path } from 'react-native-svg';
         
function IconMasksTheater({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-masks-theater" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13.192 9h6.616a2 2 0 0 1 1.992 2.183l-.567 6.182a4 4 0 0 1 -3.983 3.635h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 1.992 -2.183z" /><Path d="M15 13h.01" /><Path d="M18 13h.01" /><Path d="M15 16.5c1 .667 2 .667 3 0" /><Path d="M8.632 15.982a4.037 4.037 0 0 1 -.382 .018h-1.5a4 4 0 0 1 -3.983 -3.635l-.567 -6.182a2 2 0 0 1 1.992 -2.183h6.616a2 2 0 0 1 2 2" /><Path d="M6 8h.01" /><Path d="M9 8h.01" /><Path d="M6 12c.764 -.51 1.528 -.63 2.291 -.36" /></Svg>;

}
export default IconMasksTheater;
        