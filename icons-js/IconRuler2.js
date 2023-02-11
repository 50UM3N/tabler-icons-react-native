import Svg, { Path } from 'react-native-svg';
                    
function IconRuler2({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 3l4 4l-14 14l-4 -4z" /><Path d="M16 7l-1.5 -1.5" /><Path d="M13 10l-1.5 -1.5" /><Path d="M10 13l-1.5 -1.5" /><Path d="M7 16l-1.5 -1.5" /></Svg>;

}
export default IconRuler2;
                    