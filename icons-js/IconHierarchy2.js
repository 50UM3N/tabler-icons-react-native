import Svg, { Path } from 'react-native-svg';
         
function IconHierarchy2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hierarchy-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 3h4v4h-4z" /><Path d="M3 17h4v4h-4z" /><Path d="M17 17h4v4h-4z" /><Path d="M7 17l5 -4l5 4" /><Path d="M12 7l0 6" /></Svg>;

}
export default IconHierarchy2;
        