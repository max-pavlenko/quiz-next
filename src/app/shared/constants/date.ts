const now = new Date()

const TIME_FORMATS = {
   short: { year: 'numeric', month: 'short', day: 'numeric' },
   normal: { year: 'numeric', month: 'long', day: 'numeric' },
} satisfies Record<string, Intl.DateTimeFormatOptions>

export function getFormattedDate(format: keyof typeof TIME_FORMATS = 'normal', date = now) {
   return new Intl.DateTimeFormat('en-US', TIME_FORMATS[format]).format(date);
}
