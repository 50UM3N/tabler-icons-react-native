import Svg, { Path } from 'react-native-svg';
         
function IconUserSquare({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-square" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 10a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><Path d="M6 21v-1a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v1" /><Path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /></Svg>;

}
export default IconUserSquare;
        