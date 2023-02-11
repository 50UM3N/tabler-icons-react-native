import Svg, { Path } from 'react-native-svg';
                    
function IconTrashOff({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3l18 18" /><Path d="M4 7h3m4 0h9" /><Path d="M10 11l0 6" /><Path d="M14 14l0 3" /><Path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923" /><Path d="M18.384 14.373l.616 -7.373" /><Path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></Svg>;

}
export default IconTrashOff;
                    