import Svg, { Path } from 'react-native-svg';
         
function IconRewindBackward10({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-rewind-backward-10" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 9l-3 -3l3 -3" /><Path d="M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11" /><Path d="M6 14v6" /><Path d="M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" /></Svg>;

}
export default IconRewindBackward10;
        