import Svg, { Path } from 'react-native-svg';
         
function IconSortAscending({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sort-ascending" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 6l7 0" /><Path d="M4 12l7 0" /><Path d="M4 18l9 0" /><Path d="M15 9l3 -3l3 3" /><Path d="M18 6l0 12" /></Svg>;

}
export default IconSortAscending;
        