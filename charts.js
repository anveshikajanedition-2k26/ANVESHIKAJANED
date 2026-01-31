const textColor = "#E2E8F0";
const gridColor = "rgba(255,255,255,0.06)";

/* 1️⃣ Latency */
new Chart(document.getElementById("latencyChart"), {
  type: "bar",
  data: {
    labels: ["Qwen","GLM","DeepSeek","Grok","Gemini"],
    datasets: [{
      data: [2.2, 1.6, 1.2, 0.8, 0.3],
      backgroundColor: ["#22c55e","#f59e0b","#0ea5e9","#10b981","#f97316"]
    }]
  },
  options: {
    plugins:{ legend:{ display:false }},
    scales:{
      x:{ ticks:{color:textColor}, grid:{display:false}},
      y:{ ticks:{color:textColor}, grid:{color:gridColor}}
    }
  }
});

/* 2️⃣ Scatter */
new Chart(document.getElementById("speedLatencyChart"), {
  type: "scatter",
  data: {
    datasets: [{
      data: [{x:50,y:2},{x:120,y:1.2},{x:200,y:2},{x:300,y:1.5},{x:380,y:12}],
      backgroundColor:"#00B3FF"
    }]
  },
  options:{
    plugins:{ legend:{display:false}},
    scales:{
      x:{ title:{display:true,text:"Speed",color:textColor}, ticks:{color:textColor}, grid:{color:gridColor}},
      y:{ title:{display:true,text:"Latency",color:textColor}, ticks:{color:textColor}, grid:{color:gridColor}}
    }
  }
});

/* 3️⃣ Creator Pricing */
new Chart(document.getElementById("creatorPriceChart"), {
  type: "bar",
  data: {
    labels:["Alibaba","Amazon","IBM","Meta","OpenAI"],
    datasets:[{ data:[4,5,3,4,6], backgroundColor:"#7B61FF"}]
  },
  options:{
    plugins:{ legend:{display:false}},
    scales:{
      x:{ ticks:{color:textColor}, grid:{display:false}},
      y:{ ticks:{color:textColor}, grid:{color:gridColor}}
    }
  }
});

/* 4️⃣ Pie */
new Chart(document.getElementById("performancePieChart"), {
  type: "pie",
  data: {
    labels:["OpenAI","Google","Meta","Alibaba","Others"],
    datasets:[{
      data:[27.5,8.7,5.0,7.6,3.4],
      backgroundColor:["#22c55e","#facc15","#38bdf8","#f97316","#a855f7"]
    }]
  },
  options:{
    plugins:{ legend:{ labels:{color:textColor}}}
  }
});