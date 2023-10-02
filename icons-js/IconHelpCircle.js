import Svg, { Path } from 'react-native-svg';
         
function IconHelpCircle({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-help-circle" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><Path d="M12 16v.01" /><Path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></Svg>;

}
export default IconHelpCircle;
        