import Svg, { Path } from 'react-native-svg';
         
function IconAdjustmentsFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 3a1 1 0 0 1 .993 .883l.007 .117v3.171a3.001 3.001 0 0 1 0 5.658v7.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-7.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-3.17a1 1 0 0 1 1 -1z" stroke-width="0" fill={color} /><Path d="M12 3a1 1 0 0 1 .993 .883l.007 .117v9.171a3.001 3.001 0 0 1 0 5.658v1.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-1.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-9.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /><Path d="M18 3a1 1 0 0 1 .993 .883l.007 .117v.171a3.001 3.001 0 0 1 0 5.658v10.171a1 1 0 0 1 -1.993 .117l-.007 -.117v-10.17a3.002 3.002 0 0 1 -1.995 -2.654l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-.17a1 1 0 0 1 1 -1z" stroke-width="0" fill="currentColor" /></Svg>;

}
export default IconAdjustmentsFilled;
        