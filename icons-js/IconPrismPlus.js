import Svg, { Path } from 'react-native-svg';
         
function IconPrismPlus({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-prism-plus" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 9v13" /><Path d="M13.02 21.655a1.7 1.7 0 0 1 -2.04 0l-5.98 -4.485a2.5 2.5 0 0 1 -1 -2v-11.17a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v8" /><Path d="M4.3 3.3l6.655 5.186a1.7 1.7 0 0 0 2.09 0l6.655 -5.186" /><Path d="M16 19h6" /><Path d="M19 16v6" /></Svg>;

}
export default IconPrismPlus;
        