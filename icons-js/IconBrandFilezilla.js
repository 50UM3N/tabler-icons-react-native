import Svg, { Path } from 'react-native-svg';
         
function IconBrandFilezilla({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-filezilla" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16 15.824a4.062 4.062 0 0 1 -2.25 .033c-.738 -.201 -2.018 -.08 -2.75 .143l4.583 -5h-6.583" /><Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><Path d="M8 15l2 -8h5" /></Svg>;

}
export default IconBrandFilezilla;
        