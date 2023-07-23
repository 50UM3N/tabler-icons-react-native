import Svg, { Path } from 'react-native-svg';
         
function IconGlobe({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-globe" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 10m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M6.75 16a8.015 8.015 0 1 0 9.25 -13" /><Path d="M12 18l0 4" /><Path d="M8 22l8 0" /></Svg>;

}
export default IconGlobe;
        