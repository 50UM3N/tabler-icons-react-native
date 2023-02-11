import Svg, { Path } from 'react-native-svg';
                    
function IconFoldDown({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-fold-down" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 11v8l3 -3m-6 0l3 3" /><Path d="M9 7l1 0" /><Path d="M14 7l1 0" /><Path d="M19 7l1 0" /><Path d="M4 7l1 0" /></Svg>;

}
export default IconFoldDown;
                    