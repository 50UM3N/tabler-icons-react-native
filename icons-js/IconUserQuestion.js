import Svg, { Path } from 'react-native-svg';
         
function IconUserQuestion({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-question" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><Path d="M6 21v-2a4 4 0 0 1 4 -4h3.5" /><Path d="M19 22v.01" /><Path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></Svg>;

}
export default IconUserQuestion;
        