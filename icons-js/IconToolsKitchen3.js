import Svg, { Path } from 'react-native-svg';
         
function IconToolsKitchen3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 4v17m-3 -17v3a3 3 0 1 0 6 0v-3" /><Path d="M17 8m-3 0a3 4 0 1 0 6 0a3 4 0 1 0 -6 0" /><Path d="M17 12v9" /></Svg>;

}
export default IconToolsKitchen3;
        