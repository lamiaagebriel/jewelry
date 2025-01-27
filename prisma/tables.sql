-- Earrings
INSERT INTO products(id, slug, title, image, description, category, sizes, price, discount, quantity, is_new, updated_at)
VALUES
  (
    'cljy6krhl00032k00503vv8gd', 
    'majestic-qajar', 
    'Majestic Qajar', 
    'https://toktamjewelry.com/cdn/shop/products/Earringqajarr.png?v=1677479382', 
    'The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.', 
    'Earrings',
    '10, 12.2, 13, 14.1, 15, custom',
    2999.99, 
    3, 
    10, 
    true, 
    current_timestamp
  ), 
  (
    'cljy6o4x100042k00kak177z4', 
    'majestic-qajar-2', 
    'Majestic Qajar', 
    'https://toktamjewelry.com/cdn/shop/products/Earringemerald.png?v=1677478501', 
    'The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.', 
    'Earrings',
    '10, 12.2, 13, 14.1, 15, custom',
    1999.99, 
    0, 
    8, 
    true, 
    current_timestamp
  ), 
  (
    'cljy6qf9z00052k00vf99482c', 
    'majestic-qajar-3', 
    'Majestic Qajar', 
    'https://toktamjewelry.com/cdn/shop/products/Earringqajar.png?v=1677479453', 
    'The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.', 
    'Earrings',
    '10, 12.2, 13, 14.1, 15, custom',
    2999.99, 
    0, 
    5, 
    true, 
    current_timestamp
  ), 
  (
    'cljy6sl2u00062k00lvyzvv6m', 
    'brilliance-soiree', 
    'Brilliance Soiree', 
    'https://toktamjewelry.com/cdn/shop/products/Earrings_1680x.png?v=1677479984', 
    'The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.', 
    'Earrings',
    '10, 12.2, 13, 14.1, 15, custom',
    4999.99, 
    2, 
    10, 
    true, 
    current_timestamp
  );

INSERT INTO images(id, product_id, src)
  VALUES
    (
      'cljy6krhl00032k00503vv8g1',
      'cljy6krhl00032k00503vv8gd', 
      'https://toktamjewelry.com/cdn/shop/products/MAJESTIC_QJR1_E1_YG_002_1_550x.png?v=1677479382'
    ),
    (
      'cljy6krhl00032k00503vv8g2',
      'cljy6krhl00032k00503vv8gd', 
      'https://toktamjewelry.com/cdn/shop/products/MAJESTIC_QJR1_E1_YG_002_3_550x.png?v=1677479382'
    ),
    (
      'cljy6krhl00032k00503vv8g3',
      'cljy6krhl00032k00503vv8gd', 
      'https://toktamjewelry.com/cdn/shop/products/002A1997_550x.jpg?v=1677479382'
    ),
    (
      'cljy6krhl00032k00503vv8g4',
      'cljy6krhl00032k00503vv8gd', 
      'https://toktamjewelry.com/cdn/shop/products/002A1983.jpg?v=1677479382'
    ),
    
    
    (
      'cljy6o4x100042k00kak177z1',
      'cljy6o4x100042k00kak177z4', 
      'https://toktamjewelry.com/cdn/shop/products/MAJESTIC_E2_1_1100x.png?v=1677478501'
    ),
    (
      'cljy6o4x100042k00kak177z2',
      'cljy6o4x100042k00kak177z4', 
      'https://toktamjewelry.com/cdn/shop/products/MAJESTIC_E2_3_1100x.png?v=1677478501'
    ),  
    

    (
      'cljy6qf9z00052k00vf994821',
      'cljy6qf9z00052k00vf99482c', 
      'https://toktamjewelry.com/cdn/shop/products/MAJESTIC_QJR1_E1_YG_001_3_1100x.png?v=1677479453'
    ),
    (
      'cljy6qf9z00052k00vf994822',
      'cljy6qf9z00052k00vf99482c', 
      'https://toktamjewelry.com/cdn/shop/products/MAJESTIC_QJR1_E1_YG_001_1_1100x.png?v=1677479453'
    ),
    (
      'cljy6qf9z00052k00vf994823',
      'cljy6qf9z00052k00vf99482c', 
      'https://toktamjewelry.com/cdn/shop/products/3EQ_1100x.jpg?v=1677479453'
    ),
    (
      'cljy6qf9z00052k00vf994824',
      'cljy6qf9z00052k00vf99482c', 
      'https://toktamjewelry.com/cdn/shop/products/SLS08461_1100x.jpg?v=1677479453'
    ),


    (
      'cljy6sl2u00062k00lvyzvv61',
      'cljy6sl2u00062k00lvyzvv6m', 
      'https://toktamjewelry.com/cdn/shop/products/7brilliancecropped.jpg?v=1677479984'
    );



-- Necklaces
INSERT INTO products(id, slug, title, image, description, category, sizes, price, discount, quantity, is_new, updated_at)
VALUES
  (
    'cljy6tkqt00072k00t7j3w1c6', 
    'dancers', 
    'Dancers', 
    'https://toktamjewelry.com/cdn/shop/products/DANCERS1_C1_YG_001_L_3.png?v=1671626521', 
    'The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.', 
    'Necklaces',
    '10, 12.2, 13, 14.1, 15, custom',
    2999.99, 
    3, 
    10, 
    true, 
    current_timestamp
  ),

  (
    'cljy6w4ar00082k00kqaqf2d1', 
    'dancers-2', 
    'Dancers', 
    'https://toktamjewelry.com/cdn/shop/products/01copy_1100x.png?v=1677311465', 
    'The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.', 
    'Necklaces',
    '10, 12.2, 13, 14.1, 15, custom',
    1999.99, 
    0, 
    8, 
    true, 
    current_timestamp
  );

INSERT INTO images(id, product_id, src)
  VALUES
    (
      'cljy6tkqt00072k00t7j3w1c1',
      'cljy6tkqt00072k00t7j3w1c6', 
      'https://toktamjewelry.com/cdn/shop/products/DANCERS1_C1_YG_001_L_3.png?v=1671626521'
    ),
    (
      'cljy6tkqt00072k00t7j3w1c2',
      'cljy6tkqt00072k00t7j3w1c6', 
      'https://toktamjewelry.com/cdn/shop/products/DANCERS1_C1_YG_001_L_1.png?v=1671626520'
    ),
    
    
    (
      'cljy6w4ar00082k00kqaqf2d1',
      'cljy6w4ar00082k00kqaqf2d1', 
      'https://toktamjewelry.com/cdn/shop/products/02copy_1100x.png?v=1677311465'
    ),
    (
      'cljy6w4ar00082k00kqaqf2d2',
      'cljy6w4ar00082k00kqaqf2d1', 
      'https://toktamjewelry.com/cdn/shop/products/002A4775_1100x.jpg?v=1672837592'
    );


-- Rings
INSERT INTO products(id, slug, title, image, description, category, sizes, price, discount, quantity, is_new, updated_at)
VALUES
  (
    'cljy72l9d00102k0064hbpn7l', 
    'sarab', 
    'Sarab', 
    'https://toktamjewelry.com/cdn/shop/products/93EZC2DM9C_YG_2_550x.png?v=1678525512', 
    'The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.', 
    'Rings',
    '10, 12.2, 13, 14.1, 15, custom',
    2999.99, 
    3, 
    10, 
    true, 
    current_timestamp
  );

INSERT INTO images(id, product_id, src)
  VALUES
    (
      'cljy72l9d00102k0064hbpna1',
      'cljy72l9d00102k0064hbpn7l', 
      'https://toktamjewelry.com/cdn/shop/products/93EZC2DM9C_YG_3_550x.png?v=1678525518'
    ),
    (
      'cljy72l9d00102k0064hbpna2',
      'cljy72l9d00102k0064hbpn7l', 
      'https://toktamjewelry.com/cdn/shop/products/93EZC2DM9C_YG_1_550x.png?v=1678525522'
    );

-- Bracelets
INSERT INTO products(id, slug, title, image, description, category, sizes, price, discount, quantity, is_new, updated_at)
VALUES
  (
    'cljy73nfe00112k00onmka2lz', 
    'ashkal-infinity', 
    'Ashkal Infinity', 
    'https://toktamjewelry.com/cdn/shop/products/153_1100x.png?v=1680164954', 
    'The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.', 
    'Bracelets',
    '10, 12.2, 13, 14.1, 15, custom',
    2999.99, 
    3, 
    10, 
    true, 
    current_timestamp
  );

INSERT INTO images(id, product_id, src)
  VALUES
    (
      'cljy73nfe00112k00onmka2l1',
      'cljy73nfe00112k00onmka2lz', 
      'https://toktamjewelry.com/cdn/shop/products/154_1100x.png?v=1680165167'
    ),
    (
      'cljy73nfe00112k00onmka2l2',
      'cljy73nfe00112k00onmka2lz', 
      'https://toktamjewelry.com/cdn/shop/products/155_1100x.png?v=1680165218'
    );






INSERT INTO products(sizes, id, slug, title, image, description, category, price, discount, quantity, is_new, updated_at)
VALUES
('10, 12.2, 13, 14.1, 15, custom', 'zajy6krhl00032k00503vv8gd', 'diamond-engagement-ring', 'Diamond Engagement Ring', 'https://source.unsplash.com/featured/?jewelry,diamond', "The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment. This exquisite ring features a brilliant-cut diamond securely set in a lustrous platinum band. The diamond\'s exceptional sparkle and fire will captivate everyone\'s attention. It is meticulously crafted to symbolize the beauty and strength of your relationship.\n\nKey Features:\n- Brilliant-cut diamond: The center stone is a dazzling brilliant-cut diamond that radiates brilliance and elegance.\n- Platinum band: The band is crafted from premium-quality platinum, known for its durability and luxurious appearance.\n- Symbol of love: This ring serves as a timeless symbol of your enduring love and the promise of a lifelong partnership.\n- Perfect for proposals: With its stunning design and exquisite craftsmanship, it is the perfect choice for a romantic proposal.\n\nSizes:\n- Available sizes: 5, 6, 7, 8, and 9. Choose the size that fits comfortably on your finger for a perfect fit.\n\nColors:\n- Color: White. The platinum band beautifully complements the brilliance of the diamond, creating a striking contrast.", 'Rings', 2999.99, 3, 10, 1, current_timestamp),
('5, 12.2, 13, 14.1, 15, custom', 'zajy6o4x100042k00kak177z4', 'gold-hoop-earrings', 'Gold Hoop Earrings', 'https://source.unsplash.com/featured/?jewelry,gold', 'The Gold Hoop Earrings are classic accessories that add a touch of elegance to any outfit. Crafted with 14K yellow gold, these hoop earrings have a sleek and timeless design. They are versatile and can be worn for both casual and formal occasions, making them a must-have in your jewelry collection.', 'Earrings', 199.99, 0, 8, 1, current_timestamp),
('10, 12.2, 13, 14.1, 15, custom', 'zajy6qf9z00052k00vf99482c', 'pearl-necklace', 'Pearl Necklace', 'https://source.unsplash.com/featured/?jewelry,pearl', "The Pearl Necklace is an elegant and timeless piece of jewelry that adds sophistication to any outfit. It features a strand of lustrous freshwater pearls and a sterling silver clasp. The necklace\'s exquisite design and high-quality craftsmanship make it a perfect accessory for special occasions or everyday wear.", 'Necklaces', 299.99, 20, 5, 0, current_timestamp),
('10, 11.2, 13, 14.4, 15, custom', 'zajy6sl2u00062k00lvyzvv6m', 'silver-bangle-bracelet', 'Silver Bangle Bracelet', 'https://source.unsplash.com/featured/?jewelry,silver', 'The Silver Bangle Bracelet is a sleek and minimalist accessory that adds a touch of elegance to any outfit. Crafted with sterling silver, this bangle bracelet features a smooth and polished surface for a contemporary look. Whether worn alone or stacked with other bracelets, it effortlessly elevates your style.', 'Bracelets', 79.99, 0, 12, 0, current_timestamp),
('10, 11.2, 13, 14.4, 15, custom', 'zajy6tkqt00072k00t7j3w1c6', 'diamond-tennis-bracelet', 'Diamond Tennis Bracelet', 'https://source.unsplash.com/featured/?jewelry,diamond,luxuery', "The Diamond Tennis Bracelet is a timeless and sophisticated piece of jewelry that exudes elegance. It features a continuous line of sparkling round diamonds set in a classic prong setting. The bracelet\'s design allows the diamonds to shine brightly, making it a stunning accessory for any occasion.", 'Bracelets', 3999.99, 0, 5, 1, current_timestamp),
('10, 12.2, 13, 14.1, 15, custom', 'zajy6w4ar00082k00kqaqf2d1', 'rose-gold-pendant', 'Rose Gold Pendant', 'https://source.unsplash.com/featured/?jewelry,rose-gold', 'The Rose Gold Pendant is a beautiful and feminine piece of jewelry that adds a touch of romance to your look. It features a delicate pendant crafted with rose gold and adorned with a sparkling diamond. The pendant hangs from a dainty chain, creating a graceful and sophisticated necklace.', 'Necklaces', 249.99, 10, 15, 1, current_timestamp),
('10, 13.5, 14, 16.1, 17.5, custom', 'zajy71tkm00092k00dfb6rr0s', 'gemstone-stud-earrings', 'Gemstone Stud Earrings', 'https://source.unsplash.com/featured/?jewelry,gemstone', 'The Gemstone Stud Earrings are vibrant and eye-catching accessories that add a pop of color to your ensemble. Each earring showcases a stunning gemstone in a classic prong setting. These earrings are perfect for adding a touch of elegance and personality to your everyday style.', 'Earrings', 149.99, 0, 20, 1, current_timestamp),
('10, 12.2, 13, 14.1, 18, custom', 'zajy72l9d00102k0064hbpn7s', 'silver-chain-bracelet', 'Silver Chain Bracelet', 'https://source.unsplash.com/featured/?jewelry,silver,girl', 'The Silver Chain Bracelet is a versatile and stylish accessory that complements any outfit. Crafted with sterling silver, this bracelet features a classic chain design that adds a touch of sophistication to your wrist. Whether worn alone or paired with other bracelets, it is a must-have for any jewelry lover.', 'Bracelets', 129.99, 5, 8, 0, current_timestamp),
('10, 12.2, 13, 14.1, 19, custom', 'zajy73nfe00112k00onmka2lz', 'sapphire-stud-earrings', 'Sapphire Stud Earrings', 'https://source.unsplash.com/featured/?jewelry,sapphire', 'The Sapphire Stud Earrings are a timeless and elegant choice for adding a touch of sophistication to your style. Each earring showcases a sparkling sapphire gemstone in a classic prong setting. The vibrant blue hue of the sapphires exudes a sense of luxury and grace.', 'Earrings', 299.99, 15, 10, 0, current_timestamp),
('10, 12.2, 13, 14.1, 17.8, custom', 'zajy74vea00122k00a9gxm9zq', 'silver-heart-necklace', 'Silver Heart Necklace', 'https://source.unsplash.com/featured/?jewelry,heart', 'The Silver Heart Necklace is a charming and romantic piece of jewelry that captures the essence of love. The necklace features a delicate heart pendant crafted with sterling silver, symbolizing affection and tenderness. It is a perfect gift for expressing your love to someone special.', 'Necklaces', 89.99, 0, 5, 1, current_timestamp);