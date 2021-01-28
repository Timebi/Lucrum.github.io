new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["90%"],
      datasets: [
        {
          label: "percent",
          backgroundColor: ["#30BAE7"],
          data: [2478,300]
          
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Web Design'
      }
    }
});

new Chart(document.getElementById("doughnut-charts"), {
    type: 'doughnut',
    data: {
      labels: ["75%"],
      datasets: [
        {
          label: "percent",
          backgroundColor: ["#D74680"],
          data: [2100,500]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'HTML/CSS'
      }
    }
});

new Chart(document.getElementById("doughnuts"), {
    type: 'doughnut',
    data: {
      labels: ["70%"],
      datasets: [
        {
          label: "percent",
          backgroundColor: ["#15C6A7"],
          data: [2000,600]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Graphic Design'
      }
    }
});

new Chart(document.getElementById("charts"), {
    type: 'doughnut',
    data: {
      labels: ["85%"],
      datasets: [
        {
          label: "percent",
          backgroundColor: ["#DC7546"],
          data: [2100,400]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'UI/UX'
      }
    }
});