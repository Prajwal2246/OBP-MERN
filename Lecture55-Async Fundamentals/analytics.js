class Widget {
  constructor(id, title, type) {
    this.id = id;
    this.title = title;
    this.type = type;
    this.lastUpdated = new Date();
    this.element = null;
  }
  createElement() {
    const wrapper = document.createElement("div");
    wrapper.className = "widget";
    wrapper.id = this.id;
    wrapper.innerHTML = `
    <div class="widget-header">
      <h3>${this.title}</h3>
      <span class="last-updated">
       last updated : ${this.lastUpdated.toLocaleTimeString()}
      </span>
    </div>
    <div class="widget-content">
      ${this.render()}
    </div>
    `;
    this.element = wrapper;
    return wrapper;
  }
  refresh() {
    this.lastUpdated = new Date();
    if (this.element) {
      const lastUpdated = this.element.querySelector(".last-updated");
      if (lastUpdated) {
        lastUpdated.textContent = `last updated: ${this.lastUpdated.toLocaleTimeString()}`;
      }
    }
  }
  serialize() {
    return {
      id: this.id,
      title: this.title,
      type: this.type,
      lastUpdated: this.lastUpdated,
    };
  }
}

class CounterWidget extends Widget {
  constructor(id, data) {
    super(id, data.label, "counter");
    this.value = data.value;
    this.change = data.change;
  }
  render() {
    return `
          <div class="counter-widget">
          <div class="counter-title">${this.title}</div>
          <div class="counter-value">${this.value}</div>
          <div class="counter-change ${
            this.change >= 0 ? "positive" : "negative"
          }">${this.change >= 0 ? "↑" : "↓"} ${Math.abs(this.change)}</div>
          </div>
        `;
  }
  refresh() {
    super.refresh();
    this.value += Math.floor(Math.random() * 100) - 50;
    this.change = Math.random() * 20 - 10;

    if (this.element) {
      const content = this.element.querySelector(".widget-content");
      const oldContent = content.querySelector(".counter-widget");
      oldContent.outerHTML = this.render();
    }
  }

  serialize() {
    return {
      ...super.serialize(),
      data: {
        value: this.value,
        change: this.change,
      },
    };
  }
}

class LineWidget extends Widget {
  constructor(id, title, data) {
    super(id, title, "line");
    this.points = data.points;
  }
  render() {
    const width = 300;
    const height = 150;
    const padding = 20;

    const max = Math.max(...this.points);
    const min = Math.min(...this.points);
    const getX = (i) =>
      padding + (i / (this.points.length - 1)) * (width - padding * 2);

    const range = max - min || 1;
    const getY = (val) =>
      height - padding - ((val - min) / range) * (height - padding * 2);

    const pathD = this.points
      .map((val, i) => {
        const x = getX(i);
        const y = getY(val);
        return `${i === 0 ? "M" : "L"} ${x} ${y}`;
      })
      .join(" ");
    return `
        <div class="line-widget">
        <svg 
          width="${width}" 
          height="${height}" 
          class="line-svg"
        >
          <path 
            d="${pathD}" 
            fill="none" 
            stroke="#4facfe" 
            stroke-width="2"
          />

          ${this.points
            .map((val, i) => {
              const x = getX(i);
              const y = getY(val);
              return `
                <circle 
                  cx="${x}" 
                  cy="${y}" 
                  r="4" 
                  fill="#4facfe"
                >
                  <title>${val}</title>
                </circle>
              `;
            })
            .join("")}
        </svg>
      </div>
    `;
  }

  refresh() {
    super.refresh();

    this.points = this.points.map((v) =>
      Math.max(5, v + Math.floor(Math.random() * 20 - 10))
    );
    if (this.element) {
      const content = this.element.querySelector(".widget-content");
      content.innerHTML = this.render();
    }
  }

  serialize() {
    return {
      ...super.serialize(),
      data: {
        points: this.points,
      },
    };
  }
}

class BarWidget extends Widget {
  constructor(id, title, data) {
    super(id, title, "bar");
    this.labels = data.labels;
    this.values = data.values;
  }
  render() {
    return `
    <div class="bar-widget">
     <div class="bar-chart">
      ${this.renderBars()}
     </div>
    </div>
    `;
  }
  renderBars() {
    return this.labels
      .map(
        (label, i) => `
      <div class="bar" style="height: ${this.values[i]}% ">
        <span class="bar-value">${this.values[i]}</span>
        <span class="bar-label">${label}</span>
      </div>
    `
      )
      .join("");
  }
  refresh() {}

  serialize() {
    return {
      ...super.serialize(),
      data: {
        labels: this.labels,
        values: this.values,
      },
    };
  }
}

class PieWidget extends Widget {
  constructor(id, title, data) {
    super(id, title, "pie");
    this.data = data;
  }
  render() {
    let total = this.data.reduce((sum, d) => sum + d.value, 0);
    let current = 0;
    const gradientParts = this.data.map((item) => {
      const start = (current / total) * 100;
      current += item.value;
      const end = (current / total) * 100;
      return `${item.color} ${start}% ${end}%`;
    });
    return `
          <div class="chart-widget">
           <div class="pie-chart"
           style="background:conic-gradient(${gradientParts.join(",")})">
           </div>
            <div class="pie-legend">
             ${this.data
               .map(
                 (item) => `
                 <span class="legend-color" style="background:${item.color}"></span>
                 ${item.label} (${item.value}%)
                `
               )
               .join("")}
            </div>
          </div>
        `;
  }
  serialize() {
    return {
      ...super.serialize(),
      data: this.data,
    };
  }
}

class DashboardManager {
  constructor() {
    this.widgets = [];
    this.widgetCounter = 0;
    this.updateInterval = null;
    this.sampleData = {
      counters: [
        { label: "Total Sales", value: 4820, change: 12.5 },
        { label: "Total Users", value: 8000, change: -2.5 },
        { label: "Revenue", value: 4820, change: 5.5 },
      ],
      barData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        values: [65, 43, 75, 58, 83, 29, 49],
      },
      lineData: {
        points: [30, 45, 58, 52, 68, 65, 78, 72, 85],
      },
      pieData: [
        { label: "Social", value: 35, color: "#667eea" },
        { label: "Organic", value: 30, color: "#f093fb" },
        { label: "Referral", value: 10, color: "#4facfe" },
      ],
      listData: [
        { title: "New York", value: "2,543" },
        { title: "Chicago", value: "1,234" },
        { title: "Houston", value: "987" },
        { title: "Phoenix", value: "756" },
      ],
    };
  }

  init() {
    this.loadDashboard();

    if (this.widgets.length === 0) {
      this.createWidget("counter");
      this.createWidget("bar");
      this.createWidget("line");
      this.createWidget("pie");
    }

    this.startAutoRefresh();

    document
      .getElementById("addWidgetBtn")
      .addEventListener("click", () => this.openAddWidgetMenu());

    this.bindMenuEvents();
  }

  createWidget(type) {
    const id = `widget-${this.widgetCounter++}`;
    let widget;

    switch (type) {
      case "counter":
        const counter =
          this.sampleData.counters[
            Math.floor(Math.random() * this.sampleData.counters.length)
          ];
        widget = new CounterWidget(id, counter);
        break;
      case "bar":
        widget = new BarWidget(
          id,
          "Weekly Performance",
          this.sampleData.barData
        );
        break;

      case "line":
        widget = new LineWidget(id, "Line Chart", this.sampleData.lineData);
        break;
      case "pie":
        widget = new PieWidget(id, "Pie Chart", this.sampleData.pieData);
        break;
      default:
        console.error("unkown widget type: ", type);
        return;
    }
    //adding to widget array
    this.widgets.push(widget);

    //creatign and appending to DOM
    const element = widget.createElement();
    element.dataset.type = type;
    document.getElementById("widgetsGrid").appendChild(element);

    this.saveDashboard();
  }
  openAddWidgetMenu() {
    document.getElementById("addWidgetMenu").classList.add("show");
  }

  closeMenus() {
    document.getElementById("addWidgetMenu").classList.remove("show");
  }

  bindMenuEvents() {
    const menu = document.getElementById("addWidgetMenu");

    menu.addEventListener("click", (e) => {
      const type = e.target.dataset.type;
      if (!type) return;

      this.createWidget(type);
      this.closeMenus();
    });
  }

  startAutoRefresh() {
  this.updateInterval = setInterval(() => {
    this.widgets.forEach(widget => widget.refresh());
    this.saveDashboard();
  }, 5000);
}

  stopAutoRefresh() {
    clearInterval(this.updateInterval);
  }

  saveDashboard() {
    const state = this.widgets.map((w) => w.serialize());
    localStorage.setItem("dashboardState", JSON.stringify(state));
  }

  loadDashboard() {
    const saved = localStorage.getItem("dashboardState");
    if (!saved) return;

    const state = JSON.parse(saved);

    document.getElementById("widgetsGrid").innerHTML = "";
    this.widgets = [];
    this.widgetCounter = 0;

    state.forEach((item) => {
      this.restoreWidget(item);
    });
  }

  restoreWidget(item) {
    let widget;

    switch (item.type) {
      case "counter":
        widget = new CounterWidget(item.id, {
          label: item.title,
          value: item.data.value,
          change: item.data.change,
        });
        break;

      case "bar":
        widget = new BarWidget(item.id, item.title, item.data);
        break;

      case "line":
        widget = new LineWidget(item.id, item.title, {
          points: item.data.points,
        });
        break;

      case "pie":
        widget = new PieWidget(item.id, item.title, item.data);
        break;

      default:
        return;
    }

    widget.lastUpdated = new Date(item.lastUpdated);

    this.widgets.push(widget);
    const element = widget.createElement();
    document.getElementById("widgetsGrid").appendChild(element);

    // keep counter in sync
    const num = parseInt(item.id.split("-")[1], 10);
    this.widgetCounter = Math.max(this.widgetCounter, num + 1);
  }

  removeWidget(id) {
    this.widgets = this.widgets.filter((w) => w.id !== id);
    document.getElementById(id)?.remove();

    this.saveDashboard();
  }
}

const dashboardManager = new DashboardManager();
window.addEventListener("DOMContentLoaded", () => {
  dashboardManager.init();
});

document.querySelector("#refreshBtn").addEventListener("click", () => {
  dashboardManager.widgets.forEach(w => w.refresh());
  dashboardManager.saveDashboard();
});

