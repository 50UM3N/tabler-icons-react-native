import Svg, { Path } from 'react-native-svg';
         
function IconTableColumn({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-table-column" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /><Path d="M10 10h11" /><Path d="M10 3v18" /><Path d="M9 3l-6 6" /><Path d="M10 7l-7 7" /><Path d="M10 12l-7 7" /><Path d="M10 17l-4 4" /></Svg>;

}
export default IconTableColumn;
        