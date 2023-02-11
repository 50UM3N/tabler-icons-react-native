import Svg, { Path } from 'react-native-svg';
                    
function IconRuler({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-ruler" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" /><Path d="M4 8l2 0" /><Path d="M4 12l3 0" /><Path d="M4 16l2 0" /><Path d="M8 4l0 2" /><Path d="M12 4l0 3" /><Path d="M16 4l0 2" /></Svg>;

}
export default IconRuler;
                    