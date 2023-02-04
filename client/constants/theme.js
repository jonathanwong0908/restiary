export const COLORS = {
  "primary-500": "#1a759f",
  "primary-400": "#168aad",
  "primary-300": "#34a0a4",
  "primary-200": "#52b69a",
  "primary-100": "#76c893",

  "neutral-900": "#111111",
  "neutral-800": "#232323",
  "neutral-700": "#343434",
  "neutral-600": "#464646",
  "neutral-500": "#575757",
  "neutral-400": "#696969",
  "neutral-100": "#FFFFFF",
}

export const SIZES = {
  xs: 8,
  s: 12,
  m: 16,
  l: 18,
  xl: 24
}

export const GENERAL = {
  mainContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS['neutral-700'],
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginTop: 30,
  }
}

export const RATING_ICONS =
  [
    "emoticon-cool-outline",
    "emoticon-happy-outline",
    "emoticon-neutral-outline",
    "emoticon-cry-outline",
    "emoticon-dead-outline"
  ];


export const CALENDAR_THEME = {
  calendarBackground: COLORS['neutral-600'],
  monthTextColor: COLORS['neutral-100'],
  todayTextColor: COLORS['neutral-100'],
  todayBackgroundColor: COLORS['neutral-500'],
  dayTextColor: COLORS['neutral-100'],
  arrowColor: COLORS['primary-500'],
  textDisabledColor: COLORS['neutral-400'],
  selectedDayBackgroundColor: COLORS['primary-500'],
  selectedDayTextColor: COLORS['neutral-100'],
  dotColor: COLORS['primary-500'],
  textMonthFontSize: SIZES.xl,
  textMonthFontWeight: "bold",
}