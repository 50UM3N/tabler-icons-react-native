import Svg, { Path } from 'react-native-svg';
         
function IconBoxAlignTopFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box-align-top-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M19 3.005h-14a2 2 0 0 0 -2 2v5a1 1 0 0 0 1 1h16a1 1 0 0 0 1 -1v-5a2 2 0 0 0 -2 -2z" stroke-width="0" fill={color} /><Path d="M4 13.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /><Path d="M4 18.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /><Path d="M9 18.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /><Path d="M15 18.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /><Path d="M20 18.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /><Path d="M20 13.995a1 1 0 0 1 .993 .883l.007 .127a1 1 0 0 1 -1.993 .117l-.007 -.127a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /></Svg>;

}
export default IconBoxAlignTopFilled;
        