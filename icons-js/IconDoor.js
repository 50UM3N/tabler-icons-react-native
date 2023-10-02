import Svg, { Path } from 'react-native-svg';
         
function IconDoor({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-door" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 12v.01" /><Path d="M3 21h18" /><Path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" /></Svg>;

}
export default IconDoor;
        