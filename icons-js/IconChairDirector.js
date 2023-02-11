import Svg, { Path } from 'react-native-svg';
                    
function IconChairDirector({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chair-director" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 21l12 -9" /><Path d="M6 12l12 9" /><Path d="M5 12h14" /><Path d="M6 3v9" /><Path d="M18 3v9" /><Path d="M6 8h12" /><Path d="M6 5h12" /></Svg>;

}
export default IconChairDirector;
                    