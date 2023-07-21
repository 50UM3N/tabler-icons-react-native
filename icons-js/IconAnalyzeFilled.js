import Svg, { Path } from 'react-native-svg';
                    
function IconAnalyzeFilled({
  size = 24,
  color = "#1f2937",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-analyze-filled" width={size} height={size} viewBox="0 0 24 24" strokeWidth="0" stroke="none" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props} ><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4.99 12.862a7.1 7.1 0 0 0 12.171 3.924a1.956 1.956 0 0 1 -.156 -.637l-.005 -.149l.005 -.15a2 2 0 1 1 1.769 2.137a9.099 9.099 0 0 1 -15.764 -4.85a1 1 0 0 1 1.98 -.275z" stroke-width="0" fill={color} /><Path d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z" stroke-width="0" fill={color} /><Path d="M13.142 3.09a9.1 9.1 0 0 1 7.848 7.772a1 1 0 0 1 -1.98 .276a7.1 7.1 0 0 0 -6.125 -6.064a7.096 7.096 0 0 0 -6.048 2.136a2 2 0 1 1 -3.831 .939l-.006 -.149l.005 -.15a2 2 0 0 1 2.216 -1.838a9.094 9.094 0 0 1 7.921 -2.922z" stroke-width="0" fill={color} /></Svg>;

}
export default IconAnalyzeFilled;
                    