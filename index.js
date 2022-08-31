(function() {
    var dob = '1994-02-28';
    var lifespanYears = 72;
    var weeksInYear = 52;

    var weeksEl = document.getElementById('weeks');

    function renderWeek(w, y, hasPast) {
        var el = document.createElement('div');
        el.id = 'y' + y + 'w' + (w+1);
        el.className = hasPast ? 'week filled' : 'week';
        el.title = 'year: ' + y + ', week: ' + (w+1);

        return el;
    }

    function renderWeeks() {
        var weeksAlive = dayjs().diff(dayjs(dob), 'week');
        var index = 0;
        for (var y = 0; y < lifespanYears; y++) {
            for (var w = 0; w < weeksInYear; w++) {
                var weekEl = renderWeek(w, y, index < weeksAlive);
                weeksEl.appendChild(weekEl);
                index++;
            }
        }
    }

    renderWeeks();

})();
