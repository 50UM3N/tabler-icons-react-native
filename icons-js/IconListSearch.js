import Svg, { Path } from 'react-native-svg';
                    
function IconListSearch({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-list-search" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><Path d="M18.5 18.5l2.5 2.5" /><Path d="M4 6h16" /><Path d="M4 12h4" /><Path d="M4 18h4" /></Svg>;

}
export default IconListSearch;
                    