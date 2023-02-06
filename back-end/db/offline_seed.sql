\c kbpp;
INSERT INTO keyboards (name, brand, layout, price, image, color, description)
VALUES (
        'Keychron K8 Pro',
        'Keychron',
        'TKL',
        89.99,
        'https://cdn.shopify.com/s/files/1/0059/0630/1017/t/5/assets/keychronk8proqmkviawirelessmechanicalkeyboardformacwindowsosaprofilepbtkeycapspcbscrewinstabilizerwithhotswappablegaterongpromechanicalswitchcompatiblewithmxcherrypandakailhwithrgbbacklightaluminumframe-1645094681965.jpg?v=1645094684',
        'black',
        'Keychron K8 Pro QMK/VIA Wireless Mechanical Keyboard allows anyone to master any keyboard keys or macro commands through VIA, it has included keycaps for both Windows and macOS, and users can hotswap with any MX mechanical switch in a breeze.'
        ),
        (
        'Keychron Q1', 
        'Keychron', 
        '75%', 
        159.99, 
        'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-Q1-75-percent-QMK-Custom-Mechanical-Keyboard-version-2-barebone-black_1800x1800.jpg?v=1671529187',
        'black',
        'A fully customizable 75% layout mechanical keyboard featured QMK / VIA support; designed with all the premium features with unlimited possibilities.'
        ),
        (
        'Keychron Q1', 
        'Keychron', 
        '75%', 
        159.99, 
        'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-Q1-75-percent-QMK-Custom-Mechanical-Keyboard-version-2-barebone-black_1800x1800.jpg?v=1671529187',
        'black',
        'A fully customizable 75% layout mechanical keyboard featured QMK / VIA support; designed with all the premium features with unlimited possibilities.'
        );
INSERT INTO switches (name, brand, type, top_housing, bottom_housing, stem, travel_distance, force, three_pin, prelubed, image, price_per_switch)
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
        'https://cdn.shopify.com/s/files/1/0565/8070/2297/products/Gateron-CJ-Linear-Switch-Light-Blue_3000x.jpg',
        .65
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
        'https://cdn.shopify.com/s/files/1/0565/8070/2297/products/Gateron-Oil-King-Linear-Switch_3000x.jpg', 
        .65
    ),
    (        
        'Gateron Ink Black V2',
        'Gateron',
        'linear',
        'Gateron Ink',
        'Gateron Ink',
        'POM',
        4,
        60,
        false,
        true,
        'https://cdn.shopify.com/s/files/1/0565/8070/2297/products/Gateron-Ink-V2-Black-Switch_3000x.jpg', 
        .75    
    );
INSERT INTO keycaps (name, brand, price, colors, profile, image, layout_compatibility)
VALUES (
        'Akko WOB',
        'Akko',
        59.99,
        'black, white',
        'ASA',
        'https://en.akkogear.com/wp-content/uploads/2021/08/White-On-Black-Keycap-Set.jpg',
        '60%, 65%, 75%, TKL, 1800, 96%, 100%'
    ),
    (
        'Keychron Shell White Double Shot PBT',
        'Keychron',
        29.99,
        'white, black',
        'OSA',
        'https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-double-shot-pbt-osa-keycaps-set-white_1800x1800.jpg?v=1660818357',
        '60%, 65%, 70%, 75%, TKL, 96%, 100%'
    );