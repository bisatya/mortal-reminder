(function() {
    var weeksInYear = 52;

    function renderWeek(w, y, hasPast) {
        var el = document.createElement('div');
        el.id = 'y' + y + 'w' + (w+1);
        el.className = hasPast ? 'week filled' : 'week';
        el.title = 'year: ' + y + ', week: ' + (w+1);

        return el;
    }

    function renderWeeks(dob, lifespanYears, weeksEl) {
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

    function handleBtnClick() {
        var dob = document.getElementById('input-dob').value;
        var lifespanYears = document.getElementById('input-lifespan').value;
        var weeksEl = document.getElementById('weeks');
        weeksEl.innerHTML = '';
    
        if (!dob || !lifespanYears) {
            weeksEl.classList.add('hidden');
            return;
        }
    
        weeksEl.classList.remove('hidden');
        try {
            renderWeeks(dob, parseInt(lifespanYears), weeksEl);
        }
        catch (err) {
            alert('Invalid input');
            throw err;
        }
    }

    var btnEl = document.getElementById('btn-render');
    btnEl.addEventListener('click', function() { handleBtnClick(); });

})();
