import Svg, { Path } from 'react-native-svg';
         
function IconTrophy({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trophy" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 21l8 0" /><Path d="M12 17l0 4" /><Path d="M7 4l10 0" /><Path d="M17 4v8a5 5 0 0 1 -10 0v-8" /><Path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /></Svg>;

}
export default IconTrophy;
        