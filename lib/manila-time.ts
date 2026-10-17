const FORMAT = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Manila",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

const FORMAT_LONG = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Manila",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

export function manilaTime(at: Date): string {
  const parts = FORMAT.formatToParts(at);
  const hour = parts.find((part) => part.type === "hour")?.value;
  const minute = parts.find((part) => part.type === "minute")?.value;
  if (hour === undefined || minute === undefined) {
    throw new Error("Asia/Manila did not resolve to an hour and a minute");
  }
  return `${hour}:${minute}`;
}

export function manilaTimeLong(at: Date): string {
  const parts = FORMAT_LONG.formatToParts(at);
  const hour = parts.find((part) => part.type === "hour")?.value;
  const minute = parts.find((part) => part.type === "minute")?.value;
  const second = parts.find((part) => part.type === "second")?.value;
  if (hour === undefined || minute === undefined || second === undefined) {
    throw new Error("Asia/Manila did not resolve to a full time");
  }
  return `${hour}:${minute}:${second}`;
}