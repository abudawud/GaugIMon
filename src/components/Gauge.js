import React from 'react'

import {RadialGauge} from 'canvas-gauges'

class ReactRadialGauge extends React.Component {
  componentDidMount () {
    const options = Object.assign({}, this.props, {
      renderTo: this.el,
      width: 270,
      title: "Pressure",
      height: 270,
      units:"psi",
      minValue: 0,
      maxValue: 100,
      majorTicks: [
          "0",
          "10",
          "20",
          "30",
          "40",
          "50",
          "60",
          "70",
          "80",
          "90",
          "100"
      ],
      minorTicks: 2,
      strokeTicks: true,
      highlights:[
          {
              "from": 0,
              "to": 20,
              "color": "rgba(10, 10, 10, .25)"
          },
          {
              "from": 20,
              "to": 30,
              "color": "rgba(0, 255, 10, .50)"
          },
          {
              "from": 30,
              "to": 60,
              "color": "rgba(255, 255, 10, .50)"
          },
          {
              "from": 60,
              "to": 100,
              "color": "rgba(255, 50, 50, .50)"
          }
      ],
      colorPlate:"#fff",
      borderShadowWidth: 0,
      valueBox: true,
      valueInt: 3,
      needleType: "arrow",
      needleWidth: 2,
      needleCircleSize: 7,
      colorValueBoxRect: "#fff",
      needleCircleOuter: true,
      needleCircleInner: false,
      animationDuration: 1500,
      animationRule:"linear"
    })
    this.gauge = new RadialGauge(options).draw()
  }

  componentWillReceiveProps (nextProps) {
    this.gauge.value = nextProps.value
    this.gauge.update(nextProps)
  }

  render () {
    return (
      <canvas ref={(canvas) => {
        this.el = canvas
      }} />
    )
  }
}

export default ReactRadialGauge
