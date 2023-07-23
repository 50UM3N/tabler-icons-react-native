import Svg, { Path } from 'react-native-svg';
         
function IconBorderCorners({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-border-corners" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 4h2a2 2 0 0 1 2 2v2" /><Path d="M20 16v2a2 2 0 0 1 -2 2h-2" /><Path d="M8 20h-2a2 2 0 0 1 -2 -2v-2" /><Path d="M4 8v-2a2 2 0 0 1 2 -2h2" /></Svg>;

}
export default IconBorderCorners;
        