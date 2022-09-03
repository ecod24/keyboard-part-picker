\c kbpp;
INSERT INTO keyboards (name, brand, layout, price, image)
VALUES (
        'Keychron K8 Pro',
        'Keychron',
        'TKL',
        89.99,
        'https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychronk8proqmkviawirelessmechanicalkeyboardformacwindowsosaprofilepbtkeycapspcbscrewinstabilizerwithhotswappablegaterongpromechanicalswitchcompatiblewithmxcherrypandakailhwithrgbbacklightaluminumframe-1645094681965.jpg?v=1645094684'
    ),
    ('Keychron Q1', 'Keychron', '75%', 159.99);
INSERT INTO switches (name, brand, type, force, prelubed)
VALUES (
        'Gateron Brown',
        'Gateron',
        'tactile',
        55,
        false
    ),
    ('Gateron Red', 'Gateron', 'linear', 45, false),
    ('Gateron Blue', 'Gateron', 'clicky', 60, false),
    ('Gateron Yellow', 'Gateron', 'linear', 50, false),
    ('Gateron Green', 'Gateron', 'clicky', 80, false),
    ('Gateron Black', 'Gateron', 'linear', 60, false),
    ('Gateron White', 'Gateron', 'linear', 35, false),
    ('Cherry MX Red', 'Cherry', 'linear', 45, false),
    (
        'Gateron Oil King',
        'Gateron',
        'linear',
        55,
        true
    );
INSERT INTO keycaps (name, brand, price, color, image)
VALUES (
        'AKKO WOB',
        'AKKO',
        59.99,
        'white, black',
        ''
    ),
    (
        'Keychron Shell White',
        'Keychron',
        29.99,
        'white, black',
        ''
    );