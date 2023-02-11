import Svg, { Path } from 'react-native-svg';
                    
function IconBrandCupra({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-cupra" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.5 10l-2.5 -4l15.298 6.909a0.2 .2 0 0 1 .09 .283l-3.388 5.808" /><Path d="M10 19l-3.388 -5.808a0.2 .2 0 0 1 .09 -.283l15.298 -6.909l-2.5 4" /></Svg>;

}
export default IconBrandCupra;
                    