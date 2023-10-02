import Svg, { Path } from 'react-native-svg';
         
function IconBrandYahoo({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-yahoo" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 6l5 0" /><Path d="M7 18l7 0" /><Path d="M4.5 6l5.5 7v5" /><Path d="M10 13l6 -5" /><Path d="M12.5 8l5 0" /><Path d="M20 11l0 4" /><Path d="M20 18l0 .01" /></Svg>;

}
export default IconBrandYahoo;
        