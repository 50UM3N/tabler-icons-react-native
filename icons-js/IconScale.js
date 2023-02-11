import Svg, { Path } from 'react-native-svg';
                    
function IconScale({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-scale" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 20l10 0" /><Path d="M6 6l6 -1l6 1" /><Path d="M12 3l0 17" /><Path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" /><Path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" /></Svg>;

}
export default IconScale;
                    