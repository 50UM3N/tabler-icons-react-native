import Svg, { Path } from 'react-native-svg';
         
function IconWalk({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-walk" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><Path d="M7 21l3 -4" /><Path d="M16 21l-2 -4l-3 -3l1 -6" /><Path d="M6 12l2 -3l4 -1l3 3l3 1" /></Svg>;

}
export default IconWalk;
        