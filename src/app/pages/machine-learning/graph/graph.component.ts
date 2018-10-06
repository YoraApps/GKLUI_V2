import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'ngx-graph-data',
  templateUrl: './graph.component.html'
})
export class GraphComponent {
  @Input() data: any;
  @Input() columnTitles: any;
  loaded: boolean = false;

  ngOnChanges(changes: any) {
    this.drawGraph();
  }

  drawGraph() {
    this.loaded = false;

    let margin = {top: 50, right: 50, bottom: 50, left: 50}
    , width = window.innerWidth/1.5 - margin.left - margin.right
    , height = window.innerHeight/1.5 - margin.top - margin.bottom;

    // The number of datapoints
    let n = this.data.length;
    
    let xScale = d3.scaleLinear()
      .domain([this.findValue("min", this.data, "x") - 10, this.findValue("max", this.data, "x")])
      .range([0, width]);
    
    let yScale = d3.scaleLinear()
      .domain([this.findValue("min", this.data, "y"), Math.ceil(this.findValue("max", this.data, "y"))])
      .range([height, 0]);
    
    let line = d3.line()
      .x(function(d, i) { return xScale(d.x); })
      .y(function(d) { return yScale(d.y); }) 
      .curve(d3.curveMonotoneX)

    let dataset = [];
    for (let i = 0; i < this.data.length; i++) {
      dataset.push({
        "x": this.data[i].x,
        "y": this.data[i].y
      })
    }
    
    //If previous graph existed- remove
    if (d3.select("#graph-content svg")) {
      d3.select("#graph-content svg").remove();
    }

    let svg = d3.select("#graph-content").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale));
    
    svg.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale));

    svg.append("text")
      .attr("class", "x label")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height - 6)
      .text(this.columnTitles[0]);

    svg.append("text")
      .attr("class", "y label")
      .attr("text-anchor", "end")
      .attr("y", 6)
      .attr("dy", ".75em")
      .attr("transform", "rotate(-90)")
      .text(this.columnTitles[1]);
    
    svg.append("path")
      .data([dataset])
      .attr("class", "line")
      .attr("d", line);
    
    svg.selectAll(".dot")
      .data(dataset)
      .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", function(d, i) { return xScale(d.x) })
      .attr("cy", function(d) { return yScale(d.y) })
      .attr("r", 5);

    this.loaded = true;
  }

  findValue(mathFunc, array, property) {
    return Math[mathFunc].apply(array, array.map(function (item) {
        return item[property];
    }));
  }
  
}