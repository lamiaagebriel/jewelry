
--  "cljy73nfe00112k00onmka2lz",
--  "cljy74vea00122k00a9gxm9zq", "silver-heart-necklace", "Silver Heart Necklace", "https://source.unsplash.com/featured/?jewelry,heart", "The Silver Heart Necklace is a charming and romantic piece of jewelry that captures the essence of love. The necklace features a delicate heart pendant crafted with sterling silver, symbolizing affection and tenderness. It is a perfect gift for expressing your love to someone special.", "Necklaces", 89.99, 0, 5, 1, current_timestamp);


-- Actual data


-- Earrings
INSERT INTO Product (id, slug, title, image, description, category, sizes, price, discount, quantity, is_new, updated_at)
VALUES
  (
    "cljy6krhl00032k00503vv8gd", 
    "majestic-qajar", 
    "Majestic Qajar", 
    "https://toktamjewelry.com/cdn/shop/products/Earringqajarr.png?v=1677479382", 
    "The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.", 
    "Earrings",
    "10, 12.2, 13, 14.1, 15, custom",
    2999.99, 
    3, 
    10, 
    1, 
    current_timestamp
  ),

  (
    "cljy6o4x100042k00kak177z4", 
    "majestic-qajar-2", 
    "Majestic Qajar", 
    "https://toktamjewelry.com/cdn/shop/products/Earringemerald.png?v=1677478501", 
    "The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.", 
    "Earrings",
    "10, 12.2, 13, 14.1, 15, custom",
    1999.99, 
    0, 
    8, 
    1, 
    current_timestamp
  ),

  (
    "cljy6qf9z00052k00vf99482c", 
    "majestic-qajar-3", 
    "Majestic Qajar", 
    "https://toktamjewelry.com/cdn/shop/products/Earringqajar.png?v=1677479453", 
    "The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.", 
    "Earrings",
    "10, 12.2, 13, 14.1, 15, custom",
    2999.99, 
    0, 
    5, 
    1, 
    current_timestamp
  ),
  
  (
    "cljy6sl2u00062k00lvyzvv6m", 
    "brilliance-soiree", 
    "Brilliance Soiree", 
    "https://toktamjewelry.com/cdn/shop/products/Earrings_1680x.png?v=1677479984", 
    "The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.", 
    "Earrings",
    "10, 12.2, 13, 14.1, 15, custom",
    4999.99, 
    2, 
    10, 
    1, 
    current_timestamp
  );

INSERT INTO Image(id, product_id, src)
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
INSERT INTO Product (id, slug, title, image, description, category, sizes, price, discount, quantity, is_new, updated_at)
VALUES
  (
    "cljy6tkqt00072k00t7j3w1c6", 
    "dancers", 
    "Dancers", 
    "https://toktamjewelry.com/cdn/shop/products/DANCERS1_C1_YG_001_L_3.png?v=1671626521", 
    "The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.", 
    "Necklaces",
    "10, 12.2, 13, 14.1, 15, custom",
    2999.99, 
    3, 
    10, 
    1, 
    current_timestamp
  ),

  (
    "cljy6w4ar00082k00kqaqf2d1", 
    "dancers-2", 
    "Dancers", 
    "https://toktamjewelry.com/cdn/shop/products/01copy_1100x.png?v=1677311465", 
    "The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.", 
    "Necklaces",
    "10, 12.2, 13, 14.1, 15, custom",
    1999.99, 
    0, 
    8, 
    1, 
    current_timestamp
  );

INSERT INTO Image(id, product_id, src)
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
INSERT INTO Product (id, slug, title, image, description, category, sizes, price, discount, quantity, is_new, updated_at)
VALUES
  (
    "cljy72l9d00102k0064hbpn7l", 
    "sarab", 
    "Sarab", 
    "https://toktamjewelry.com/cdn/shop/products/93EZC2DM9C_YG_2_550x.png?v=1678525512", 
    "The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.", 
    "Rings",
    "10, 12.2, 13, 14.1, 15, custom",
    2999.99, 
    3, 
    10, 
    1, 
    current_timestamp
  );

INSERT INTO Image(id, product_id, src)
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
INSERT INTO Product (id, slug, title, image, description, category, sizes, price, discount, quantity, is_new, updated_at)
VALUES
  (
    "cljy73nfe00112k00onmka2lz", 
    "ashkal-infinity", 
    "Ashkal Infinity", 
    "https://toktamjewelry.com/cdn/shop/products/153_1100x.png?v=1680164954", 
    "The Diamond Engagement Ring is a breathtaking piece of jewelry that represents eternal love and commitment.", 
    "Bracelets",
    "10, 12.2, 13, 14.1, 15, custom",
    2999.99, 
    3, 
    10, 
    1, 
    current_timestamp
  );

INSERT INTO Image(id, product_id, src)
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
