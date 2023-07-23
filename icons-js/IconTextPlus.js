import Svg, { Path } from 'react-native-svg';
         
function IconTextPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-text-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 10h-14" /><Path d="M5 6h14" /><Path d="M14 14h-9" /><Path d="M5 18h6" /><Path d="M18 15v6" /><Path d="M15 18h6" /></Svg>;

}
export default IconTextPlus;
        