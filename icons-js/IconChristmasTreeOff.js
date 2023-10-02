import Svg, { Path } from 'react-native-svg';
         
function IconChristmasTreeOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-christmas-tree-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.5 5.5l2.5 -2.5l4 4l-2 1l4 4l-1.5 .5m.5 4.5h-12l4 -4l-3 -1l3 -3" /><Path d="M14 17v3a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-3" /><Path d="M3 3l18 18" /></Svg>;

}
export default IconChristmasTreeOff;
        