/**
 * Takes an array of items and assigns them to lanes based on start/end dates.
 * @returns an array of arrays containing items.
 */
export function assignLanes(events) {
  const lanes = [];
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.startDate) - new Date(b.startDate)
  );

  sortedEvents.forEach((event) => {
    let placed = false;
    for (const lane of lanes) {
      if (
        new Date(event.startDate) >= new Date(lane[lane.length - 1].endDate)
      ) {
        lane.push(event);
        placed = true;
        break;
      }
    }
    if (!placed) lanes.push([event]);
  });

  return lanes;
}
