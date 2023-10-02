import Svg, { Path } from 'react-native-svg';
         
function IconChevronsUpLeft({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-up-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 15v-8h8" /><Path d="M11 19v-8h8" /></Svg>;

}
export default IconChevronsUpLeft;
        