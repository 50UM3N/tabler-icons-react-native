import Svg, { Path } from 'react-native-svg';
         
function IconSkewX({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-skew-x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 5.205v13.59a1 1 0 0 0 1.184 .983l14 -2.625a1 1 0 0 0 .816 -.983v-8.34a1 1 0 0 0 -.816 -.983l-14 -2.625a1 1 0 0 0 -1.184 .983z" /></Svg>;

}
export default IconSkewX;
        