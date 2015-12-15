var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Mission Viejo,United States',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'c90d643e4cdcbee39c14c2e82cc25a52'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'こんにちは',
            'あさですよー',
            'てきとうー！'
        ],
        afternoon: [
            'こんばんは',
            '昼飯まだー',
            'なんて書こう...'
        ],
        evening: [
            'ねむいですね',
            '寝ようかな',
            '暇ですー'
        ]
    },
    calendar: {
        maximumEntries: 10
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }
}
