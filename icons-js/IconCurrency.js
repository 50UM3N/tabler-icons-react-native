import Svg, { Path } from 'react-native-svg';
         
function IconCurrency({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-currency" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 12m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><Path d="M4 4l3 3" /><Path d="M20 4l-3 3" /><Path d="M4 20l3 -3" /><Path d="M20 20l-3 -3" /></Svg>;

}
export default IconCurrency;
        