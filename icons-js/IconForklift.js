import Svg, { Path } from 'react-native-svg';
                    
function IconForklift({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-forklift" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M14 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M7 17l5 0" /><Path d="M3 17v-6h13v6" /><Path d="M5 11v-4h4" /><Path d="M9 11v-6h4l3 6" /><Path d="M22 15h-3v-10" /><Path d="M16 13l3 0" /></Svg>;

}
export default IconForklift;
                    