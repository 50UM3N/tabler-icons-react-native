import Svg, { Path } from 'react-native-svg';
                    
function IconIdBadge({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-id-badge" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M5 3m0 3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z" /><Path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><Path d="M10 6h4" /><Path d="M9 18h6" /></Svg>;

}
export default IconIdBadge;
                    