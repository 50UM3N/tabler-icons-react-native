import Svg, { Path } from 'react-native-svg';
                    
function IconSectionSign({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-section-sign" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9.172 19a3 3 0 1 0 2.828 -4" /><Path d="M14.83 5a3 3 0 1 0 -2.83 4" /><Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></Svg>;

}
export default IconSectionSign;
                    