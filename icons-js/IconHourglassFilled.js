import Svg, { Path } from 'react-native-svg';
         
function IconHourglassFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hourglass-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 2a2 2 0 0 1 1.995 1.85l.005 .15v2a6.996 6.996 0 0 1 -3.393 6a6.994 6.994 0 0 1 3.388 5.728l.005 .272v2a2 2 0 0 1 -1.85 1.995l-.15 .005h-10a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-2a6.996 6.996 0 0 1 3.393 -6a6.994 6.994 0 0 1 -3.388 -5.728l-.005 -.272v-2a2 2 0 0 1 1.85 -1.995l.15 -.005h10z" stroke-width="0" fill={color} /></Svg>;

}
export default IconHourglassFilled;
        