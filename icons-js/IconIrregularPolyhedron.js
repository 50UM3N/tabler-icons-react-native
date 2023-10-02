import Svg, { Path } from 'react-native-svg';
         
function IconIrregularPolyhedron({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-irregular-polyhedron" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M6 12l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282 -2.503a1 1 0 0 0 .592 -1.204l-1.752 -6.131l1.752 -6.13a1 1 0 0 0 -.592 -1.205l-6.282 -2.503a2.46 2.46 0 0 0 -1.756 0l-6.282 2.503a1 1 0 0 0 -.592 1.204l1.752 6.131z" /><Path d="M4.5 5.5l6.622 2.33a2.35 2.35 0 0 0 1.756 0l6.622 -2.33" /><Path d="M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l5.21 -1.862" /><Path d="M12 22v-14" /></Svg>;

}
export default IconIrregularPolyhedron;
        