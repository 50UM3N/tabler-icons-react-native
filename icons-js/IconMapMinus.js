import Svg, { Path } from 'react-native-svg';
         
function IconMapMinus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-minus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 18.5l-3 -1.5l-6 3v-13l6 -3l6 3l6 -3v11" /><Path d="M9 4v13" /><Path d="M15 7v8" /><Path d="M16 19h6" /></Svg>;

}
export default IconMapMinus;
        