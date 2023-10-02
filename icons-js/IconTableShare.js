import Svg, { Path } from 'react-native-svg';
         
function IconTableShare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table-share" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 21h-7a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8" /><Path d="M3 10h18" /><Path d="M10 3v18" /><Path d="M16 22l5 -5" /><Path d="M21 21.5v-4.5h-4.5" /></Svg>;

}
export default IconTableShare;
        