import Svg, { Path } from 'react-native-svg';
         
function IconCircleDotted({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-dotted" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7.5 4.21l0 .01" /><Path d="M4.21 7.5l0 .01" /><Path d="M3 12l0 .01" /><Path d="M4.21 16.5l0 .01" /><Path d="M7.5 19.79l0 .01" /><Path d="M12 21l0 .01" /><Path d="M16.5 19.79l0 .01" /><Path d="M19.79 16.5l0 .01" /><Path d="M21 12l0 .01" /><Path d="M19.79 7.5l0 .01" /><Path d="M16.5 4.21l0 .01" /><Path d="M12 3l0 .01" /></Svg>;

}
export default IconCircleDotted;
        