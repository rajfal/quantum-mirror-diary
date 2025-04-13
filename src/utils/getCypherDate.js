export function getCypherDate(isoDateString) {
  const date = new Date(isoDateString);
  const origin = new Date("2012-12-21"); // Chosen as mythic cypher start
  const cycle = Math.floor((date - origin) / (1000 * 60 * 60 * 24));
  const epoch = 1 + Math.floor((date.getFullYear() - 2012) / 5);
  const drift = ((Math.random() - 0.5) / 2).toFixed(3);

  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  const readable = date.toLocaleDateString('en-AU', options);

  return `⧉ Cycle ${cycle} · Epoch ${epoch} · Drift: ${drift} | ${readable}`;
}
