import Svg, { Path } from 'react-native-svg';
                    
function IconArrowDownTail({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-down-tail" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 6v15" /><Path d="M9 18l3 3l3 -3" /><Path d="M9 3l3 3l3 -3" /></Svg>;

}
export default IconArrowDownTail;
                    