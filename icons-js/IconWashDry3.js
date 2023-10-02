import Svg, { Path } from 'react-native-svg';
         
function IconWashDry3({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-wash-dry-3" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><Path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" /><Path d="M12 12h.01" /><Path d="M9 12h.01" /><Path d="M15 12h.01" /></Svg>;

}
export default IconWashDry3;
        