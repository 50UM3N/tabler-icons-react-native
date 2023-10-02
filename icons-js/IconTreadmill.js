import Svg, { Path } from 'react-native-svg';
         
function IconTreadmill({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-treadmill" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 3a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><Path d="M3 14l4 1l.5 -.5" /><Path d="M12 18v-3l-3 -2.923l.75 -5.077" /><Path d="M6 10v-2l4 -1l2.5 2.5l2.5 .5" /><Path d="M21 22a1 1 0 0 0 -1 -1h-16a1 1 0 0 0 -1 1" /><Path d="M18 21l1 -11l2 -1" /></Svg>;

}
export default IconTreadmill;
        