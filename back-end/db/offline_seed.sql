\c kbpp;
INSERT INTO keyboards (name, brand, layout, price, image)
VALUES (
        'Keychron K8 Pro',
        'Keychron',
        'TKL',
        89.99,
        'https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychronk8proqmkviawirelessmechanicalkeyboardformacwindowsosaprofilepbtkeycapspcbscrewinstabilizerwithhotswappablegaterongpromechanicalswitchcompatiblewithmxcherrypandakailhwithrgbbacklightaluminumframe-1645094681965.jpg?v=1645094684'
    ),
    ('Keychron Q1', 'Keychron', '75%', 159.99, 'https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychronq1v2custommechanicalkeyboard15-1658373808819.jpg?v=1658373894');
INSERT INTO switches (name, brand, type, top_housing, bottom_housing, stem, travel_distance, force, three_pin, prelubed, image)
VALUES (
        'Gateron CJ',
        'Gateron',
        'linear',
        'Gateron Ink',
        'POM',
        'POM',
        4,
        50, 
        false,
        false,
        'blank'
    ),
    (
        'Gateron Oil King',
        'Gateron',
        'linear',
        'Nylon PA66',
        'Gateron Ink',
        'POM',
        4,
        55,
        false,
        true,
        'blank'
    );
INSERT INTO keycaps (name, brand, price, color, image)
VALUES (
        'AKKO WOB',
        'AKKO',
        59.99,
        'white, black',
        'blank'
    ),
    (
        'Keychron Shell White',
        'Keychron',
        29.99,
        'white, black',
        'blank'
    );