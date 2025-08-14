# Airtable Timeline Assignment

## Overview

This project is a React-based timeline component designed to visualize items from `src/timelineItems.js`.  
The goal was to create a compact, space-efficient horizontal timeline where events (items) share lanes when possible.

---

## Features Implemented

- **Compact Lanes:** Items are arranged in horizontal lanes using `assignLanes.js` so overlapping is avoided and space is optimized.
- **Zoom Controls:** Users can zoom in and out on the timeline for better visibility of items.
- **Item Selection:** Click on a timeline item to highlight it and display its details.
- **Responsive Design:** Timeline and items scale for different screen sizes.
- **Tooltips:** Hovering over an item shows additional details.
- **Custom Colors:** Categories (`recruitment`, `design`, `development`, `translation`, `default`) are visually distinguished.
- **Legend:** Displays colors and categories for clarity.

---

## Design Decisions

1. **Component Structure:**  
   Split the app into small, reusable components (`TimelineHeader`, `TimelineLane`, `TimelineItem`) for readability and maintainability.

2. **Compact Lanes Algorithm:**  
   Reused and slightly adapted `assignLanes.js` to ensure items occupy minimum lanes necessary, while still allowing long item names to render properly.

3. **Zoom Implementation:**  
   Chose `transform: scaleX()` for zooming to keep horizontal scrolling and lane layout intact.

4. **Styling:**  
   Used CSS variables for consistent colors, improved zoom button appearance, and added hover/selected effects for better UX.

5. **Responsive & Visual Polish:**  
   Font sizes are dynamic, timeline height is consistent, and container is centered on the page. Hover effects and tooltips improve usability.

---

## What I Like About This Implementation

- Clean, modular React components that are easy to read and maintain.
- Zooming feels intuitive and smooth.
- Compact lane algorithm effectively reduces vertical space usage.
- Visual polish (colors, hover effects, tooltips) enhances UX.
- Fully responsive and adaptable to different screen sizes.

---

## What I Would Improve Given More Time

- Implement **drag-and-drop** to change item start/end dates.
- Inline editing of item names.
- Animated transitions when moving items or changing zoom levels.
- Add filtering by category and search functionality.
- Add date markers for weekends or holidays.
- Better accessibility support (keyboard navigation, ARIA labels).

---

## Inspiration

- Looked at various project management and scheduling tools (Airtable, Notion, Trello) for compact lane layouts and clean hover/selection interactions.
- Focused on a minimal and intuitive design that emphasizes readability and quick understanding of the timeline.

---

## How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/isocabp/airtable-timeline.git
   ```
2. Navigate to the project directory:
   ```bash
   cd airtable-timeline
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) if it doesn't open automatically.

---

## How to Test

- Verify that all timeline items are displayed in compact lanes without overlapping.
- Test zoom in/out buttons to ensure items scale properly.
- Hover over each item to view the tooltip and confirm it is fully visible.
- Click on items to check selection highlighting.
- Resize the browser window to test responsiveness.
- Confirm that the legend correctly matches item colors and categories.

---

## Conclusion

This timeline component provides a clean, responsive, and visually appealing interface for displaying events.  
It emphasizes usability, readability, and maintainable code while satisfying the requirements of the take-home assignment.

Given more time, additional features like drag-and-drop, inline editing, category filtering, and enhanced accessibility could further improve the user experience.

---

## Notes for Reviewers

- The project uses **React functional components** with hooks for state management.
- Styling is handled using **CSS variables** and standard CSS for flexibility and easy theming.
- The compact lane logic is implemented in `assignLanes.js`, with minor adaptations for better text display.
- Sample data from `timelineItems.js` is fully supported.
