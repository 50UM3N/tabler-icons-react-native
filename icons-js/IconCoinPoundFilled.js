import Svg, { Path } from 'react-native-svg';
         
function IconCoinPoundFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-coin-pound-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4 2.66a3 3 0 0 0 -3 3v2h-1a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h1v1a1 1 0 0 1 -.77 .974l-.113 .02l-.117 .006c-1.287 0 -1.332 1.864 -.133 1.993l.133 .007h6a1 1 0 0 0 1 -1l-.007 -.117a1 1 0 0 0 -.993 -.883h-3.171l.048 -.148a3 3 0 0 0 .123 -.852v-1h1a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-1v-2a1 1 0 0 1 .883 -.993l.117 -.007a1 1 0 0 1 .993 .883l.007 .117a1 1 0 0 0 2 0a3 3 0 0 0 -3 -3z" stroke-width="0" fill={color} /></Svg>;

}
export default IconCoinPoundFilled;
        