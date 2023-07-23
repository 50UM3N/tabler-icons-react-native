import Svg, { Path } from 'react-native-svg';
         
function IconTools({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" /><Path d="M14.5 5.5l4 4" /><Path d="M12 8l-5 -5l-4 4l5 5" /><Path d="M7 8l-1.5 1.5" /><Path d="M16 12l5 5l-4 4l-5 -5" /><Path d="M16 17l-1.5 1.5" /></Svg>;

}
export default IconTools;
        