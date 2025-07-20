
// patient summary chart
new Chart(document.getElementById("patientSummary"), {
  type: 'bar',
  data: {
    labels: ['Child', 'Men', 'Women'],
    datasets: [{
      label: 'Patients',
      data: [150, 320, 280],
      backgroundColor: ['#ffd54f', '#42a5f5', '#f06292']
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw} patients`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false }, 
        ticks: { stepSize: 50 }
      },
      y: {
        grid: { display: false }, 
        ticks: {
          font: { size: 14 }
        }
      }
    }
  }
});



  const ctx = document.getElementById('medicineSalesChart').getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 320);
  gradient.addColorStop(0, 'rgba(255, 99, 132, 0.6)');    
  gradient.addColorStop(1, 'rgba(255, 99, 132, 0)');      

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [{
        label: 'Medicine Sales',
        data: [1200, 1500, 1400, 1700, 1600, 1900, 2200],
        fill: true,
        backgroundColor: gradient,
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 3,
        tension: 0.4,         
        pointRadius: 6,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointHoverRadius: 8,
        hoverBorderWidth: 3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            font: { size: 16, weight: '600' }
          }
        },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false,
          backgroundColor: 'rgba(255,99,132,0.9)',
          titleFont: { size: 16, weight: '700' },
          bodyFont: { size: 14 }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            stepSize: 200,
            color: '#555',
            font: { size: 14 }
          },
          grid: {
            color: '#eee',
            borderDash: [5, 5]
          }
        },
        x: {
          ticks: {
            color: '#555',
            font: { size: 14 }
          },
          grid: {
            display: false
          }
        }
      }
    }
  });

  
new Chart(document.getElementById("SpecializationChart"), {
  type: 'doughnut',
  data: {
    labels: ['Cardiology', 'Orthopedics', 'General'],
    datasets: [
      {
        // Inner Circle - Cardiology 
        data: [70, 30],
        backgroundColor: ['#f06292', '#e0e0e0'],
        radius: '40%',
        cutout: '30%',
        label: 'Cardiology'
      },
      {
        // Middle Ring - Orthopedics (50%)
        data: [50, 50],
        backgroundColor: ['#ffd54f', '#e0e0e0'],
        radius: '70%',
        cutout: '45%',
        label: 'Orthopedics'
      },
      {
        // Outer Ring - General (90%)
        data: [90, 10],
        backgroundColor: ['#0068a4ff', '#e0e0e0'],
        radius: '90%',
        cutout: '70%',
        label: 'General'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: ${context.raw}%`;
          }
        }
      }
    }
  }
});

// Specialization Chart
new Chart(document.getElementById("specializationChart"), {
  type: 'bar',
  data: {
    labels: ['Emergency', 'Surgery', 'Cardio', 'Ortho'],
    datasets: [{
      label: 'Patients',
      data: [60, 40, 80, 50],
      backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#9c27b0']
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});