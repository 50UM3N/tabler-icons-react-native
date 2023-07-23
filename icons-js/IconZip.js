import Svg, { Path } from 'react-native-svg';
         
function IconZip({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zip" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 16v-8h2a2 2 0 1 1 0 4h-2" /><Path d="M12 8v8" /><Path d="M4 8h4l-4 8h4" /></Svg>;

}
export default IconZip;
        