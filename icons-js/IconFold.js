import Svg, { Path } from 'react-native-svg';
                    
function IconFold({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-fold" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 3v6l3 -3m-6 0l3 3" /><Path d="M12 21v-6l3 3m-6 0l3 -3" /><Path d="M4 12l1 0" /><Path d="M9 12l1 0" /><Path d="M14 12l1 0" /><Path d="M19 12l1 0" /></Svg>;

}
export default IconFold;
                    