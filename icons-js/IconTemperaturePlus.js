import Svg, { Path } from 'react-native-svg';
         
function IconTemperaturePlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-temperature-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" /><Path d="M8 9l4 0" /><Path d="M16 9l6 0" /><Path d="M19 6l0 6" /></Svg>;

}
export default IconTemperaturePlus;
        