import Svg, { Path } from 'react-native-svg';
                    
function IconChevronsRight({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 7l5 5l-5 5" /><Path d="M13 7l5 5l-5 5" /></Svg>;

}
export default IconChevronsRight;
                    