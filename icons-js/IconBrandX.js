import Svg, { Path } from 'react-native-svg';
         
function IconBrandX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 4l11.733 16h4.267l-11.733 -16z" /><Path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></Svg>;

}
export default IconBrandX;
        