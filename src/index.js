import "./app.css";
import { assignLanes } from "./assignLanes";
import timelineItems from "./timelineItems";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const categoryColors = {
  recruitment: "#4a90e2",
  design: "#e24a4a",
  development: "#20bd20ff",
  translation: "#9c4ae2",
  default: "#4a90e2",
};

function getColorForCategory(category) {
  return categoryColors[category] || categoryColors.default;
}

function App() {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [selectedItem, setSelectedItem] = useState(null);

  const lanes = assignLanes(timelineItems);

  const startDate = new Date(
    Math.min(...timelineItems.map((e) => new Date(e.start)))
  );
  const endDate = new Date(
    Math.max(...timelineItems.map((e) => new Date(e.end)))
  );
  const totalDays = (endDate - startDate) / (1000 * 60 * 60 * 24);

  const today = new Date();
  const todayOffset = (today - startDate) / (1000 * 60 * 60 * 24);

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.2, 3));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.2, 0.5));

  const monthLabels = [];
  for (
    let d = new Date(startDate);
    d <= endDate;
    d.setMonth(d.getMonth() + 1)
  ) {
    monthLabels.push(new Date(d));
  }

  return (
    <div className="app-container">
      <header>
        <h1>Project Timeline</h1>
        {selectedItem && <p>Selected: {selectedItem.name}</p>}
      </header>

      <div className="controls">
        <button onClick={handleZoomOut}>-</button>
        <span>Zoom: {Math.round(zoomLevel * 100)}%</span>
        <button onClick={handleZoomIn}>+</button>
      </div>

      <div className="timeline-header">
        {monthLabels.map((date, i) => {
          const offsetDays = (date - startDate) / (1000 * 60 * 60 * 24);
          return (
            <div
              key={i}
              className="timeline-header-label"
              style={{
                left: `${(offsetDays / totalDays) * 100 * zoomLevel}%`,
              }}
            >
              {date.toLocaleString("default", {
                month: "short",
                year: "numeric",
              })}
            </div>
          );
        })}
      </div>

      <div className="timeline">
        {today >= startDate && today <= endDate && (
          <div
            className="current-day-line"
            style={{
              left: `${(todayOffset / totalDays) * 100 * zoomLevel}%`,
            }}
          />
        )}

        {lanes.map((lane, laneIndex) => (
          <div className="timeline-lane" key={laneIndex}>
            {lane.map((event) => {
              const eventStart = new Date(event.start);
              const eventEnd = new Date(event.end);
              const offsetDays =
                (eventStart - startDate) / (1000 * 60 * 60 * 24);
              const durationDays =
                (eventEnd - eventStart) / (1000 * 60 * 60 * 24) + 1;

              return (
                <div
                  key={event.id}
                  className={`timeline-item ${
                    selectedItem?.id === event.id ? "selected" : ""
                  }`}
                  style={{
                    left: `${(offsetDays / totalDays) * 100 * zoomLevel}%`,
                    width: `${(durationDays / totalDays) * 100 * zoomLevel}%`,
                    backgroundColor: getColorForCategory(event.category),
                  }}
                  onClick={() =>
                    setSelectedItem(
                      selectedItem?.id === event.id ? null : event
                    )
                  }
                >
                  <span>{event.name}</span>
                  <div className="tooltip">
                    <strong>{event.name}</strong>
                    <p>
                      {event.start} → {event.end}
                    </p>
                    <p>Duration: {durationDays}d</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="legend">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="legend-item">
            <span
              className="color-box"
              style={{ backgroundColor: color }}
            ></span>
            <span>{category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
