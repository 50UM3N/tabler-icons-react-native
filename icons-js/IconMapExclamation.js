import Svg, { Path } from 'react-native-svg';
         
function IconMapExclamation({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-exclamation" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 20l-6 -3l-6 3v-13l6 -3l6 3l6 -3v8.5" /><Path d="M9 4v13" /><Path d="M15 7v13" /><Path d="M19 16v3" /><Path d="M19 22v.01" /></Svg>;

}
export default IconMapExclamation;
        