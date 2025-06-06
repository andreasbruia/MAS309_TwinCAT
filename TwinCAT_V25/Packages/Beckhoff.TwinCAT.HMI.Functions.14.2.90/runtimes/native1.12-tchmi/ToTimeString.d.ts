declare namespace TcHmi.Functions.Beckhoff {
    /**
     * Converts Strings, Numbers (milliseconds since 1970) and JS Date Objects to strings containing the time.
     * @param date
     * @param locale
     */
    function ToTimeString(date: Date | any, locale?: string | null, timeZone?: string | undefined): string;
}
//# sourceMappingURL=ToTimeString.d.ts.map