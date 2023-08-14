// import React, { Component } from "react";
// // import { render } from "react-dom";
// // import Hello from "./Hello";
// import "./style.css";

// import GaugeChart from "react-gauge-chart";

// class Gaugechart extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//   }

//   render() {
//     return (
//       <div>
//         <GaugeChart
//           id="gauge-chart3"
//           nrOfLevels={4}
//           colors={["green", "orange", "red","blue"]}
//           arcWidth={0.3}
//           percent={0.67}
//           textColor={'black'}
//           // hideText={true} // If you want to hide the text
//         />
        
//       </div>
//     //   
//     );
//   }
// }
// export default Gaugechart
// import React from "react";
// import GaugeChart from "react-gauge-chart";

// const Gaugechart = ({ percent }) => {
//   return (
//     <div>
//       <GaugeChart
//         id={`gauge-chart-${percent}`}
//         nrOfLevels={3}
//         colors={["green", "orange", "red"]}
//         arcWidth={0.3}
//         percent={percent}
//         textColor={'black'}
//       />
//     </div>
//   );
// };

// export default Gaugechart;
import React, { useRef, useEffect } from "react";
import GaugeChart from "react-gauge-chart";

const Gaugechart = ({value ,units}) => {
  const gaugeRef = useRef(null);
   // Replace with your desired value
   // Replace with your desired units

  useEffect(() => {
    if (gaugeRef.current) {
      // Access the gaugeRef.current here and perform any necessary operations
      console.log(gaugeRef.current);
    }
  }, []);

  return (
    <div>
      <GaugeChart
        id="gauge-chart3"
        nrOfLevels={5}
        colors={["red","orange" ,"green","orange" ,"red"]}
        arcWidth={0.3}
        value={value/100}
        
        textColor={'black'}
        formatTextValue={() => value + units}
        ref={gaugeRef} // Assign the ref to the GaugeChart component
      />
      {/* <div>{'{84}{mg/dL}'}</div> */}
    </div>
  );
};

export default Gaugechart;

