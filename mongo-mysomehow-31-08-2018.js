
/** admin indexes **/
db.getCollection("admin").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** blogs indexes **/
db.getCollection("blogs").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** categories indexes **/
db.getCollection("categories").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** location indexes **/
db.getCollection("location").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** location indexes **/
db.getCollection("location").ensureIndex({
  "type": NumberInt(1)
},[
  
]);

/** location indexes **/
db.getCollection("location").ensureIndex({
  "path": NumberInt(1)
},[
  
]);

/** location indexes **/
db.getCollection("location").ensureIndex({
  "name": NumberInt(1)
},[
  
]);

/** location indexes **/
db.getCollection("location").ensureIndex({
  "noname": NumberInt(1)
},[
  
]);

/** location indexes **/
db.getCollection("location").ensureIndex({
  "full": NumberInt(1)
},[
  
]);

/** location indexes **/
db.getCollection("location").ensureIndex({
  "nonchar": NumberInt(1)
},[
  
]);

/** orders indexes **/
db.getCollection("orders").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** products indexes **/
db.getCollection("products").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** setting indexes **/
db.getCollection("setting").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** size indexes **/
db.getCollection("size").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** slides indexes **/
db.getCollection("slides").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** test indexes **/
db.getCollection("test").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** admin records **/
db.getCollection("admin").insert({
  "_id": ObjectId("5b68780516d5bd3437000029"),
  "display_name": "Trần Danh Đại",
  "phone": "0976805225",
  "email": "daitran@hhdgroup.com",
  "address": "136 Cô Bắc , Quận 1, TP HCM",
  "password": "$2y$08$YTlYMlF0Y0E1TTNXMFhBbuQ8LsIELbbRCKDBWAe71Gx36QBJzFu52",
  "created_at": NumberInt(1533573124),
  "updated_at": NumberInt(1535507455),
  "roles": "roots"
});
db.getCollection("admin").insert({
  "_id": ObjectId("5b87a4da16d5bd6805000029"),
  "display_name": "Xuân Vinh",
  "phone": "0123456789",
  "email": "vinhphan@hhdgroup.com",
  "address": "987654321",
  "password": "$2y$08$MW5VRnFBUlFTMWJiakVwU.x2PKjU82IoDPEfZV3DFigyPTY7VLYey",
  "created_at": NumberInt(1535616218),
  "updated_at": NumberInt(1535616441),
  "roles": null
});

/** blogs records **/
db.getCollection("blogs").insert({
  "_id": "huong-dan-mua-hang-online",
  "title": "Hướng Dẫn Mua Hàng Online",
  "content": "<br><strong>Bước 1:</strong> \r\n<span> Bạn có thể truy cập vào website Somehow.vn và </span>\r\n<span>Chọn từng danh mục sản phẩm để tìm kiếm.</span><br>\r\n<img src=\"//file.hstatic.net/1000026602/file/6.jpg\"></p><p>\r\n<span></span><br></p><p>\r\n<span><strong>Bước 2:</strong> \r\nSau khi chọn được nhóm sản phẩm cần mua, bạn có thể tìm kiếm sản phẩm mình cần một cách nhanh chóng. (Ví dụ: Vào nhóm áo thun, tìm áo thun trơn tay ngắn cổ tròn. Đầu tiên chọn danh mục áo thun, và bấm vào phần lọc theo để tìm kiếm như hình dưới)</span></p><p>\r\n<img src=\"//file.hstatic.net/1000026602/file/7.jpg\"></p><p><span></span><br></p><p>\r\n<span><strong>Bước 3:</strong> \r\nSau khi đã chọn được sản phẩm cần mua, bạn chọn nút thêm sản phẩm vào giỏ hàng - nếu bạn muốn tìm và mua thêm sản phẩm khác. </span></p><p>\r\n<span>Sau khi đã thêm vào giỏ hàng đầy đủ các sản phẩm bạn muốn mua. Hãy click vào icon giỏ hàng để kiểm tra đơn hàng.</span>\r\n<span></span></p><p>\r\n<img src=\"//file.hstatic.net/1000026602/file/8.jpg\"></p><p>\r\n<strong>Bước 4:</strong> \r\nỞ trang giỏ hàng, bạn có thể điều chỉnh số lượng sản phẩm hoặc xóa sản phẩm nếu không thích nữa. Sau khi đã kiểm tra xong, bấm vào nút thanh toán và điền đầy đủ thông tin cá nhân.<span></span></p><p>\r\n<img src=\"//file.hstatic.net/1000026602/file/9.jpg\"></p><p><br></p><p style=\"text-align: justify;\" data-mce-style=\"text-align: justify;\">\r\n<em>* Bạn cần nhập đầy đủ và chính xác thông tin để hàng có thể được giao đến đúng địa chỉ người mua hàng, tránh việc thất lạc hoặc không giao được đơn hàng đến cho bạn.</em><br></p><p>\r\n<img src=\"//file.hstatic.net/1000026602/file/10.jpg\"></p><p style=\"text-align: justify;\" data-mce-style=\"text-align: justify;\"><em></em><br></p><p style=\"text-align: justify;\" data-mce-style=\"text-align: justify;\">\r\n- Sau khi điền đầy đủ thông tin và kiểm tra lại đơn hàng, giá tiền, bạn hãy bấm vào nút \r\n<strong>HOÀN TẤT ĐƠN HÀNG</strong>.<br></p>\r\n<p style=\"text-align: justify;\" data-mce-style=\"text-align: justify;\">Nhân viên shop sẽ liên hệ với bạn qua điện thoại để xác nhận đơn hàng và thông tin giao hàng.</p>",
  "created_at": NumberInt(1535700052),
  "updated_at": NumberInt(1535700052)
});
db.getCollection("blogs").insert({
  "_id": "gioi-thieu",
  "title": "Giới thiệu",
  "content": "<p><span style=\"font-size: 12pt;\" data-mce-style=\"font-size: 12pt;\">SOMEHOW STORE </span><br><br>\r\n<span style=\"font-size: 12pt;\" data-mce-style=\"font-size: 12pt;\">\r\n<em>Bằng cách nào đó</em> --- Chúng tôi luôn cố gắng mang những sản phẩm thời trang dành cho nam với tính thẩm mĩ bắt kịp <strong>xu hướng nhanh nhất, chất lượng hàng hóa tốt nhất</strong>.</span><br><br>\r\n<span style=\"font-size: 12pt;\" data-mce-style=\"font-size: 12pt;\">\r\nChúng tôi luôn đảm bảo từng sản phẩm được trưng bày và bán ở SomeHow Store đều đã được anh em chúng tôi trải nghiệm, và kiểm tra rất kĩ về chất lượng cũng như mẫu mã.</span>\r\n<span class=\"text_exposed_show\"><br><br>\r\n<span style=\"font-size: 12pt;\" data-mce-style=\"font-size: 12pt;\">\r\nCung cấp những thương hiệu chính hãng dành cho Nam: <strong>INF, Bensteven, R.A.W, Icoin&Denim</strong>,.....</span>\r\n<br><br>\r\n<em>Địa chỉ: </em><br>\r\nStore 1: 17bis Huỳnh Đình Hai, P14 - Quận Bình Thạnh, Tp.HCM<br>\r\nStore 2: 332 Cao Đạt, P.1 - Quận 5, Tp.HCM<br>\r\nStore 3: 188/16 Thành Thái P.12 Quận 10, Tp.HCM<br><br>HotLine: <span>0287 307 64 64</span><br><br><br><em>\r\nChuyển khoản theo TK:</em><br><br>\r\n*Vietcombank:<span> </span><br>\r\nSố tài khoản: 0531002495503<br>\r\nChủ tài khoản: Trần Đại Dương<br>\r\nChi nhánh Bình Thạnh, HCM<br><br>*ACB:<br>\r\nSố tài khoản: 157340939<br>\r\nChủ tài khoản: Trần Đại Dương<br>\r\nChi nhánh Hàng Xanh, HCM\r\n</span></p>",
  "created_at": NumberInt(1535700653),
  "updated_at": NumberInt(1535702489)
});
db.getCollection("blogs").insert({
  "_id": "test-choi",
  "title": "Test chơi",
  "content": "<p style=\"text-align: center;\">&nbsp;</p>\r\n<p style=\"text-align: center;\">Kh&ocirc;ng c&oacute; b&agrave;i viết n&agrave;o hahaha!</p>",
  "created_at": NumberInt(1535702244),
  "updated_at": NumberInt(1535705249)
});

/** categories records **/
db.getCollection("categories").insert({
  "_id": "ao",
  "title": "Áo",
  "parent_id": null,
  "images": {
    "image": "",
    "banner": ""
  },
  "created_at": NumberInt(1533785939),
  "updated_at": NumberInt(1535427063)
});
db.getCollection("categories").insert({
  "_id": "quan",
  "title": "Quần",
  "parent_id": null,
  "images": {
    "image": "",
    "banner": ""
  },
  "created_at": NumberInt(1533785945),
  "updated_at": NumberInt(1535427076)
});
db.getCollection("categories").insert({
  "_id": "phu-kien",
  "title": "Phụ kiện",
  "parent_id": null,
  "images": {
    "image": "",
    "banner": ""
  },
  "created_at": NumberInt(1533785950),
  "updated_at": NumberInt(1535427080)
});
db.getCollection("categories").insert({
  "_id": "ao-khoac",
  "title": "ÁO KHOÁC",
  "parent_id": "ao",
  "images": {
    "image": "hdls-05.png",
    "banner": "street-style-jackets_grande.jpg"
  },
  "created_at": NumberInt(1533785959),
  "updated_at": NumberInt(1535426818),
  "image": null,
  "banner": null
});
db.getCollection("categories").insert({
  "_id": "ao-so-mi",
  "title": "ÁO SƠ MI",
  "parent_id": "ao",
  "images": {
    "image": "hdls-10.png",
    "banner": "banner_website_sp-04.png"
  },
  "created_at": NumberInt(1533785974),
  "updated_at": NumberInt(1535426741)
});
db.getCollection("categories").insert({
  "_id": "quan-jean",
  "title": "QUẦN JEAN",
  "parent_id": "quan",
  "images": {
    "image": "hdls-11.png",
    "banner": "banner_website_sp-01.png"
  },
  "created_at": NumberInt(1533785990),
  "updated_at": NumberInt(1535426882)
});
db.getCollection("categories").insert({
  "_id": "quan-kaki",
  "title": "QUẦN KAKI",
  "parent_id": "quan",
  "images": {
    "image": "hdls-01_da769cbcd6dd471b8ae6998ecd25044e.png",
    "banner": "banner_website_sp-07.png"
  },
  "created_at": NumberInt(1533789012),
  "updated_at": NumberInt(1535426940)
});
db.getCollection("categories").insert({
  "_id": "ao-thun",
  "title": "ÁO THUN",
  "parent_id": "ao",
  "images": {
    "image": "hdls-08.png",
    "banner": "banner_website_sp-03.png"
  },
  "created_at": NumberInt(1533789044),
  "updated_at": NumberInt(1535426854)
});
db.getCollection("categories").insert({
  "_id": "non",
  "title": "NÓN",
  "parent_id": "phu-kien",
  "images": {
    "image": "cap.png",
    "banner": "banner_website_sp-13.png"
  },
  "created_at": NumberInt(1533898684),
  "updated_at": NumberInt(1535427055)
});
db.getCollection("categories").insert({
  "_id": "giay-dep",
  "title": "GIÀY - DÉP",
  "parent_id": "phu-kien",
  "images": {
    "image": "sneaker.png",
    "banner": "banner_website_sp-12.png"
  },
  "created_at": NumberInt(1535017372),
  "updated_at": NumberInt(1535427207)
});
db.getCollection("categories").insert({
  "_id": "phu-kien-khac",
  "title": "PHỤ KIỆN KHÁC",
  "parent_id": "phu-kien",
  "images": {
    "image": "sneaker.png",
    "banner": "trouser.jpg"
  },
  "created_at": NumberInt(1535073381),
  "updated_at": NumberInt(1535427232)
});
db.getCollection("categories").insert({
  "_id": "quan-the-thao",
  "title": "QUẦN THỂ THAO",
  "parent_id": "quan",
  "images": {
    "image": "hdls-02.png",
    "banner": "banner_website_sp-08.png"
  },
  "created_at": NumberInt(1535075355),
  "updated_at": NumberInt(1535427005)
});

/** location records **/
db.getCollection("location").insert({
  "_id": "1-760",
  "name": "1",
  "noname": "1",
  "ref_id": "760",
  "full": "Quận 1",
  "nonchar": "Quan 1",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "10-771",
  "name": "10",
  "noname": "10",
  "ref_id": "771",
  "full": "Quận 10",
  "nonchar": "Quan 10",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "11-772",
  "name": "11",
  "noname": "11",
  "ref_id": "772",
  "full": "Quận 11",
  "nonchar": "Quan 11",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "12-761",
  "name": "12",
  "noname": "12",
  "ref_id": "761",
  "full": "Quận 12",
  "nonchar": "Quan 12",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "2-769",
  "name": "2",
  "noname": "2",
  "ref_id": "769",
  "full": "Quận 2",
  "nonchar": "Quan 2",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "3-770",
  "name": "3",
  "noname": "3",
  "ref_id": "770",
  "full": "Quận 3",
  "nonchar": "Quan 3",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "4-773",
  "name": "4",
  "noname": "4",
  "ref_id": "773",
  "full": "Quận 4",
  "nonchar": "Quan 4",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "5-774",
  "name": "5",
  "noname": "5",
  "ref_id": "774",
  "full": "Quận 5",
  "nonchar": "Quan 5",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "6-775",
  "name": "6",
  "noname": "6",
  "ref_id": "775",
  "full": "Quận 6",
  "nonchar": "Quan 6",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "7-778",
  "name": "7",
  "noname": "7",
  "ref_id": "778",
  "full": "Quận 7",
  "nonchar": "Quan 7",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "8-776",
  "name": "8",
  "noname": "8",
  "ref_id": "776",
  "full": "Quận 8",
  "nonchar": "Quan 8",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "9-763",
  "name": "9",
  "noname": "9",
  "ref_id": "763",
  "full": "Quận 9",
  "nonchar": "Quan 9",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "a-luoi-481",
  "name": "A Lưới",
  "noname": "A Luoi",
  "ref_id": "481",
  "full": "Huyện A Lưới",
  "nonchar": "Huyen A Luoi",
  "type": "dist",
  "location": null,
  "path": "/thua-thien-hue/",
  "path_name": ", Tỉnh Thừa Thiên Huế"
});
db.getCollection("location").insert({
  "_id": "an-bien-908",
  "name": "An Biên",
  "noname": "An Bien",
  "ref_id": "908",
  "full": "Huyện An Biên",
  "nonchar": "Huyen An Bien",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "an-duong-312",
  "name": "An Dương",
  "noname": "An Duong",
  "ref_id": "312",
  "full": "Huyện An Dương",
  "nonchar": "Huyen An Duong",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "an-giang",
  "name": "An Giang",
  "noname": "An Giang",
  "ref_id": "89",
  "full": "Tỉnh An Giang",
  "nonchar": "Tinh An Giang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "an-khe-623",
  "name": "An Khê",
  "noname": "An Khe",
  "ref_id": "623",
  "full": "Thị xã An Khê",
  "nonchar": "Thi xa An Khe",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "an-lao-313",
  "name": "An Lão",
  "noname": "An Lao",
  "ref_id": "313",
  "full": "Huyện An Lão",
  "nonchar": "Huyen An Lao",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "an-lao-542",
  "name": "An Lão",
  "noname": "An Lao",
  "ref_id": "542",
  "full": "Huyện An Lão",
  "nonchar": "Huyen An Lao",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "an-minh-909",
  "name": "An Minh",
  "noname": "An Minh",
  "ref_id": "909",
  "full": "Huyện An Minh",
  "nonchar": "Huyen An Minh",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "an-nhon-549",
  "name": "An Nhơn",
  "noname": "An Nhon",
  "ref_id": "549",
  "full": "Thị xã An Nhơn",
  "nonchar": "Thi xa An Nhon",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "an-phu-886",
  "name": "An Phú",
  "noname": "An Phu",
  "ref_id": "886",
  "full": "Huyện An Phú",
  "nonchar": "Huyen An Phu",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "an-thi-329",
  "name": "Ân Thi",
  "noname": "An Thi",
  "ref_id": "329",
  "full": "Huyện Ân Thi",
  "nonchar": "Huyen An Thi",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "anh-son-424",
  "name": "Anh Sơn",
  "noname": "Anh Son",
  "ref_id": "424",
  "full": "Huyện Anh Sơn",
  "nonchar": "Huyen Anh Son",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "ayun-pa-624",
  "name": "Ayun Pa",
  "noname": "Ayun Pa",
  "ref_id": "624",
  "full": "Thị xã Ayun Pa",
  "nonchar": "Thi xa Ayun Pa",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "ba-be-061",
  "name": "Ba Bể",
  "noname": "Ba Be",
  "ref_id": "061",
  "full": "Huyện Ba Bể",
  "nonchar": "Huyen Ba Be",
  "type": "dist",
  "location": null,
  "path": "/bac-kan/",
  "path_name": ", Tỉnh Bắc Kạn"
});
db.getCollection("location").insert({
  "_id": "ba-che-202",
  "name": "Ba Chẽ",
  "noname": "Ba Che",
  "ref_id": "202",
  "full": "Huyện Ba Chẽ",
  "nonchar": "Huyen Ba Che",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "ba-dinh-001",
  "name": "Ba Đình",
  "noname": "Ba Dinh",
  "ref_id": "001",
  "full": "Quận Ba Đình",
  "nonchar": "Quan Ba Dinh",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "ba-don-454",
  "name": "Ba Đồn",
  "noname": "Ba Don",
  "ref_id": "454",
  "full": "Thị xã Ba Đồn",
  "nonchar": "Thi xa Ba Don",
  "type": "dist",
  "location": null,
  "path": "/quang-binh/",
  "path_name": ", Tỉnh Quảng Bình"
});
db.getCollection("location").insert({
  "_id": "ba-ria-748",
  "name": "Bà Rịa",
  "noname": "Ba Ria",
  "ref_id": "748",
  "full": "Thành phố Bà Rịa",
  "nonchar": "Thanh pho Ba Ria",
  "type": "dist",
  "location": null,
  "path": "/ba-ria-vung-tau/",
  "path_name": ", Tỉnh Bà Rịa - Vũng Tàu"
});
db.getCollection("location").insert({
  "_id": "ba-ria-vung-tau",
  "name": "Bà Rịa - Vũng Tàu",
  "noname": "Ba Ria - Vung Tau",
  "ref_id": "77",
  "full": "Tỉnh Bà Rịa - Vũng Tàu",
  "nonchar": "Tinh Ba Ria - Vung Tau",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "ba-thuoc-386",
  "name": "Bá Thước",
  "noname": "Ba Thuoc",
  "ref_id": "386",
  "full": "Huyện Bá Thước",
  "nonchar": "Huyen Ba Thuoc",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "ba-to-535",
  "name": "Ba Tơ",
  "noname": "Ba To",
  "ref_id": "535",
  "full": "Huyện Ba Tơ",
  "nonchar": "Huyen Ba To",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "ba-tri-836",
  "name": "Ba Tri",
  "noname": "Ba Tri",
  "ref_id": "836",
  "full": "Huyện Ba Tri",
  "nonchar": "Huyen Ba Tri",
  "type": "dist",
  "location": null,
  "path": "/ben-tre/",
  "path_name": ", Tỉnh Bến Tre"
});
db.getCollection("location").insert({
  "_id": "ba-vi-271",
  "name": "Ba Vì",
  "noname": "Ba Vi",
  "ref_id": "271",
  "full": "Huyện Ba Vì",
  "nonchar": "Huyen Ba Vi",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "bac-ai-584",
  "name": "Bác Ái",
  "noname": "Bac Ai",
  "ref_id": "584",
  "full": "Huyện Bác Ái",
  "nonchar": "Huyen Bac Ai",
  "type": "dist",
  "location": null,
  "path": "/ninh-thuan/",
  "path_name": ", Tỉnh Ninh Thuận"
});
db.getCollection("location").insert({
  "_id": "bac-binh-596",
  "name": "Bắc Bình",
  "noname": "Bac Binh",
  "ref_id": "596",
  "full": "Huyện Bắc Bình",
  "nonchar": "Huyen Bac Binh",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "bac-giang",
  "name": "Bắc Giang",
  "noname": "Bac Giang",
  "ref_id": "24",
  "full": "Tỉnh Bắc Giang",
  "nonchar": "Tinh Bac Giang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "bac-giang-213",
  "name": "Bắc Giang",
  "noname": "Bac Giang",
  "ref_id": "213",
  "full": "Thành phố Bắc Giang",
  "nonchar": "Thanh pho Bac Giang",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "bac-ha-085",
  "name": "Bắc Hà",
  "noname": "Bac Ha",
  "ref_id": "085",
  "full": "Huyện Bắc Hà",
  "nonchar": "Huyen Bac Ha",
  "type": "dist",
  "location": null,
  "path": "/lao-cai/",
  "path_name": ", Tỉnh Lào Cai"
});
db.getCollection("location").insert({
  "_id": "bac-kan",
  "name": "Bắc Kạn",
  "noname": "Bac Kan",
  "ref_id": "06",
  "full": "Tỉnh Bắc Kạn",
  "nonchar": "Tinh Bac Kan",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "bac-kan-058",
  "name": "Bắc Kạn",
  "noname": "Bac Kan",
  "ref_id": "058",
  "full": "Thành Phố Bắc Kạn",
  "nonchar": "Thanh Pho Bac Kan",
  "type": "dist",
  "location": null,
  "path": "/bac-kan/",
  "path_name": ", Tỉnh Bắc Kạn"
});
db.getCollection("location").insert({
  "_id": "bac-lieu",
  "name": "Bạc Liêu",
  "noname": "Bac Lieu",
  "ref_id": "95",
  "full": "Tỉnh Bạc Liêu",
  "nonchar": "Tinh Bac Lieu",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "bac-lieu-954",
  "name": "Bạc Liêu",
  "noname": "Bac Lieu",
  "ref_id": "954",
  "full": "Thành phố Bạc Liêu",
  "nonchar": "Thanh pho Bac Lieu",
  "type": "dist",
  "location": null,
  "path": "/bac-lieu/",
  "path_name": ", Tỉnh Bạc Liêu"
});
db.getCollection("location").insert({
  "_id": "bac-me-031",
  "name": "Bắc Mê",
  "noname": "Bac Me",
  "ref_id": "031",
  "full": "Huyện Bắc Mê",
  "nonchar": "Huyen Bac Me",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "bac-ninh",
  "name": "Bắc Ninh",
  "noname": "Bac Ninh",
  "ref_id": "27",
  "full": "Tỉnh Bắc Ninh",
  "nonchar": "Tinh Bac Ninh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "bac-ninh-256",
  "name": "Bắc Ninh",
  "noname": "Bac Ninh",
  "ref_id": "256",
  "full": "Thành phố Bắc Ninh",
  "nonchar": "Thanh pho Bac Ninh",
  "type": "dist",
  "location": null,
  "path": "/bac-ninh/",
  "path_name": ", Tỉnh Bắc Ninh"
});
db.getCollection("location").insert({
  "_id": "bac-quang-034",
  "name": "Bắc Quang",
  "noname": "Bac Quang",
  "ref_id": "034",
  "full": "Huyện Bắc Quang",
  "nonchar": "Huyen Bac Quang",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "bac-son-185",
  "name": "Bắc Sơn",
  "noname": "Bac Son",
  "ref_id": "185",
  "full": "Huyện Bắc Sơn",
  "nonchar": "Huyen Bac Son",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "bac-tan-uyen-726",
  "name": "Bắc Tân Uyên",
  "noname": "Bac Tan Uyen",
  "ref_id": "726",
  "full": "Huyện Bắc Tân Uyên",
  "nonchar": "Huyen Bac Tan Uyen",
  "type": "dist",
  "location": null,
  "path": "/binh-duong/",
  "path_name": ", Tỉnh Bình Dương"
});
db.getCollection("location").insert({
  "_id": "bac-tra-my-515",
  "name": "Bắc Trà My",
  "noname": "Bac Tra My",
  "ref_id": "515",
  "full": "Huyện Bắc Trà My",
  "nonchar": "Huyen Bac Tra My",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "bac-tu-liem-021",
  "name": "Bắc Từ Liêm",
  "noname": "Bac Tu Liem",
  "ref_id": "021",
  "full": "Quận Bắc Từ Liêm",
  "nonchar": "Quan Bac Tu Liem",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "bac-yen-121",
  "name": "Bắc Yên",
  "noname": "Bac Yen",
  "ref_id": "121",
  "full": "Huyện Bắc Yên",
  "nonchar": "Huyen Bac Yen",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "bach-long-vi-318",
  "name": "Bạch Long Vĩ",
  "noname": "Bach Long Vi",
  "ref_id": "318",
  "full": "Huyện Bạch Long Vĩ",
  "nonchar": "Huyen Bach Long Vi",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "bach-thong-063",
  "name": "Bạch Thông",
  "noname": "Bach Thong",
  "ref_id": "063",
  "full": "Huyện Bạch Thông",
  "nonchar": "Huyen Bach Thong",
  "type": "dist",
  "location": null,
  "path": "/bac-kan/",
  "path_name": ", Tỉnh Bắc Kạn"
});
db.getCollection("location").insert({
  "_id": "bao-lac-043",
  "name": "Bảo Lạc",
  "noname": "Bao Lac",
  "ref_id": "043",
  "full": "Huyện Bảo Lạc",
  "nonchar": "Huyen Bao Lac",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "bao-lam-042",
  "name": "Bảo Lâm",
  "noname": "Bao Lam",
  "ref_id": "042",
  "full": "Huyện Bảo Lâm",
  "nonchar": "Huyen Bao Lam",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "bao-lam-680",
  "name": "Bảo Lâm",
  "noname": "Bao Lam",
  "ref_id": "680",
  "full": "Huyện Bảo Lâm",
  "nonchar": "Huyen Bao Lam",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "bao-loc-673",
  "name": "Bảo Lộc",
  "noname": "Bao Loc",
  "ref_id": "673",
  "full": "Thành phố Bảo Lộc",
  "nonchar": "Thanh pho Bao Loc",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "bao-thang-086",
  "name": "Bảo Thắng",
  "noname": "Bao Thang",
  "ref_id": "086",
  "full": "Huyện Bảo Thắng",
  "nonchar": "Huyen Bao Thang",
  "type": "dist",
  "location": null,
  "path": "/lao-cai/",
  "path_name": ", Tỉnh Lào Cai"
});
db.getCollection("location").insert({
  "_id": "bao-yen-087",
  "name": "Bảo Yên",
  "noname": "Bao Yen",
  "ref_id": "087",
  "full": "Huyện Bảo Yên",
  "nonchar": "Huyen Bao Yen",
  "type": "dist",
  "location": null,
  "path": "/lao-cai/",
  "path_name": ", Tỉnh Lào Cai"
});
db.getCollection("location").insert({
  "_id": "bat-xat-082",
  "name": "Bát Xát",
  "noname": "Bat Xat",
  "ref_id": "082",
  "full": "Huyện Bát Xát",
  "nonchar": "Huyen Bat Xat",
  "type": "dist",
  "location": null,
  "path": "/lao-cai/",
  "path_name": ", Tỉnh Lào Cai"
});
db.getCollection("location").insert({
  "_id": "bau-bang-719",
  "name": "Bàu Bàng",
  "noname": "Bau Bang",
  "ref_id": "719",
  "full": "Huyện Bàu Bàng",
  "nonchar": "Huyen Bau Bang",
  "type": "dist",
  "location": null,
  "path": "/binh-duong/",
  "path_name": ", Tỉnh Bình Dương"
});
db.getCollection("location").insert({
  "_id": "ben-cat-721",
  "name": "Bến Cát",
  "noname": "Ben Cat",
  "ref_id": "721",
  "full": "Thị xã Bến Cát",
  "nonchar": "Thi xa Ben Cat",
  "type": "dist",
  "location": null,
  "path": "/binh-duong/",
  "path_name": ", Tỉnh Bình Dương"
});
db.getCollection("location").insert({
  "_id": "ben-cau-711",
  "name": "Bến Cầu",
  "noname": "Ben Cau",
  "ref_id": "711",
  "full": "Huyện Bến Cầu",
  "nonchar": "Huyen Ben Cau",
  "type": "dist",
  "location": null,
  "path": "/tay-ninh/",
  "path_name": ", Tỉnh Tây Ninh"
});
db.getCollection("location").insert({
  "_id": "ben-luc-803",
  "name": "Bến Lức",
  "noname": "Ben Luc",
  "ref_id": "803",
  "full": "Huyện Bến Lức",
  "nonchar": "Huyen Ben Luc",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "ben-tre",
  "name": "Bến Tre",
  "noname": "Ben Tre",
  "ref_id": "83",
  "full": "Tỉnh Bến Tre",
  "nonchar": "Tinh Ben Tre",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "ben-tre-829",
  "name": "Bến Tre",
  "noname": "Ben Tre",
  "ref_id": "829",
  "full": "Thành phố Bến Tre",
  "nonchar": "Thanh pho Ben Tre",
  "type": "dist",
  "location": null,
  "path": "/ben-tre/",
  "path_name": ", Tỉnh Bến Tre"
});
db.getCollection("location").insert({
  "_id": "bien-hoa-731",
  "name": "Biên Hòa",
  "noname": "Bien Hoa",
  "ref_id": "731",
  "full": "Thành phố Biên Hòa",
  "nonchar": "Thanh pho Bien Hoa",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "bim-son-381",
  "name": "Bỉm Sơn",
  "noname": "Bim Son",
  "ref_id": "381",
  "full": "Thị xã Bỉm Sơn",
  "nonchar": "Thi xa Bim Son",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "binh-chanh-785",
  "name": "Bình Chánh",
  "noname": "Binh Chanh",
  "ref_id": "785",
  "full": "Huyện Bình Chánh",
  "nonchar": "Huyen Binh Chanh",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "binh-dai-835",
  "name": "Bình Đại",
  "noname": "Binh Dai",
  "ref_id": "835",
  "full": "Huyện Bình Đại",
  "nonchar": "Huyen Binh Dai",
  "type": "dist",
  "location": null,
  "path": "/ben-tre/",
  "path_name": ", Tỉnh Bến Tre"
});
db.getCollection("location").insert({
  "_id": "binh-dinh",
  "name": "Bình Định",
  "noname": "Binh Dinh",
  "ref_id": "52",
  "full": "Tỉnh Bình Định",
  "nonchar": "Tinh Binh Dinh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "binh-duong",
  "name": "Bình Dương",
  "noname": "Binh Duong",
  "ref_id": "74",
  "full": "Tỉnh Bình Dương",
  "nonchar": "Tinh Binh Duong",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "binh-gia-181",
  "name": "Bình Gia",
  "noname": "Binh Gia",
  "ref_id": "181",
  "full": "Huyện Bình Gia",
  "nonchar": "Huyen Binh Gia",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "binh-giang-296",
  "name": "Bình Giang",
  "noname": "Binh Giang",
  "ref_id": "296",
  "full": "Huyện Bình Giang",
  "nonchar": "Huyen Binh Giang",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "binh-lieu-198",
  "name": "Bình Liêu",
  "noname": "Binh Lieu",
  "ref_id": "198",
  "full": "Huyện Bình Liêu",
  "nonchar": "Huyen Binh Lieu",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "binh-long-690",
  "name": "Bình Long",
  "noname": "Binh Long",
  "ref_id": "690",
  "full": "Thị xã Bình Long",
  "nonchar": "Thi xa Binh Long",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "binh-luc-352",
  "name": "Bình Lục",
  "noname": "Binh Luc",
  "ref_id": "352",
  "full": "Huyện Bình Lục",
  "nonchar": "Huyen Binh Luc",
  "type": "dist",
  "location": null,
  "path": "/ha-nam/",
  "path_name": ", Tỉnh Hà Nam"
});
db.getCollection("location").insert({
  "_id": "binh-minh-861",
  "name": "Bình Minh",
  "noname": "Binh Minh",
  "ref_id": "861",
  "full": "Thị xã Bình Minh",
  "nonchar": "Thi xa Binh Minh",
  "type": "dist",
  "location": null,
  "path": "/vinh-long/",
  "path_name": ", Tỉnh Vĩnh Long"
});
db.getCollection("location").insert({
  "_id": "binh-phuoc",
  "name": "Bình Phước",
  "noname": "Binh Phuoc",
  "ref_id": "70",
  "full": "Tỉnh Bình Phước",
  "nonchar": "Tinh Binh Phuoc",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "binh-son-524",
  "name": "Bình Sơn",
  "noname": "Binh Son",
  "ref_id": "524",
  "full": "Huyện Bình Sơn",
  "nonchar": "Huyen Binh Son",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "binh-tan-777",
  "name": "Bình Tân",
  "noname": "Binh Tan",
  "ref_id": "777",
  "full": "Quận Bình Tân",
  "nonchar": "Quan Binh Tan",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "binh-tan-863",
  "name": "Bình Tân",
  "noname": "Binh Tan",
  "ref_id": "863",
  "full": "Huyện Bình Tân",
  "nonchar": "Huyen Binh Tan",
  "type": "dist",
  "location": null,
  "path": "/vinh-long/",
  "path_name": ", Tỉnh Vĩnh Long"
});
db.getCollection("location").insert({
  "_id": "binh-thanh-765",
  "name": "Bình Thạnh",
  "noname": "Binh Thanh",
  "ref_id": "765",
  "full": "Quận Bình Thạnh",
  "nonchar": "Quan Binh Thanh",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "binh-thuan",
  "name": "Bình Thuận",
  "noname": "Binh Thuan",
  "ref_id": "60",
  "full": "Tỉnh Bình Thuận",
  "nonchar": "Tinh Binh Thuan",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "binh-thuy-918",
  "name": "Bình Thuỷ",
  "noname": "Binh Thuy",
  "ref_id": "918",
  "full": "Quận Bình Thuỷ",
  "nonchar": "Quan Binh Thuy",
  "type": "dist",
  "location": null,
  "path": "/can-tho/",
  "path_name": ", Thành phố Cần Thơ"
});
db.getCollection("location").insert({
  "_id": "binh-xuyen-249",
  "name": "Bình Xuyên",
  "noname": "Binh Xuyen",
  "ref_id": "249",
  "full": "Huyện Bình Xuyên",
  "nonchar": "Huyen Binh Xuyen",
  "type": "dist",
  "location": null,
  "path": "/vinh-phuc/",
  "path_name": ", Tỉnh Vĩnh Phúc"
});
db.getCollection("location").insert({
  "_id": "bo-trach-455",
  "name": "Bố Trạch",
  "noname": "Bo Trach",
  "ref_id": "455",
  "full": "Huyện Bố Trạch",
  "nonchar": "Huyen Bo Trach",
  "type": "dist",
  "location": null,
  "path": "/quang-binh/",
  "path_name": ", Tỉnh Quảng Bình"
});
db.getCollection("location").insert({
  "_id": "bu-dang-696",
  "name": "Bù Đăng",
  "noname": "Bu Dang",
  "ref_id": "696",
  "full": "Huyện Bù Đăng",
  "nonchar": "Huyen Bu Dang",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "bu-dop-693",
  "name": "Bù Đốp",
  "noname": "Bu Dop",
  "ref_id": "693",
  "full": "Huyện Bù Đốp",
  "nonchar": "Huyen Bu Dop",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "bu-gia-map-691",
  "name": "Bù Gia Mập",
  "noname": "Bu Gia Map",
  "ref_id": "691",
  "full": "Huyện Bù Gia Mập",
  "nonchar": "Huyen Bu Gia Map",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "buon-don-647",
  "name": "Buôn Đôn",
  "noname": "Buon Don",
  "ref_id": "647",
  "full": "Huyện Buôn Đôn",
  "nonchar": "Huyen Buon Don",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "buon-ho-644",
  "name": "Buôn Hồ",
  "noname": "Buon Ho",
  "ref_id": "644",
  "full": "Thị Xã Buôn Hồ",
  "nonchar": "Thi Xa Buon Ho",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "buon-ma-thuot-643",
  "name": "Buôn Ma Thuột",
  "noname": "Buon Ma Thuot",
  "ref_id": "643",
  "full": "Thành phố Buôn Ma Thuột",
  "nonchar": "Thanh pho Buon Ma Thuot",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "ca-mau",
  "name": "Cà Mau",
  "noname": "Ca Mau",
  "ref_id": "96",
  "full": "Tỉnh Cà Mau",
  "nonchar": "Tinh Ca Mau",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "ca-mau-964",
  "name": "Cà Mau",
  "noname": "Ca Mau",
  "ref_id": "964",
  "full": "Thành phố Cà Mau",
  "nonchar": "Thanh pho Ca Mau",
  "type": "dist",
  "location": null,
  "path": "/ca-mau/",
  "path_name": ", Tỉnh Cà Mau"
});
db.getCollection("location").insert({
  "_id": "cai-be-819",
  "name": "Cái Bè",
  "noname": "Cai Be",
  "ref_id": "819",
  "full": "Huyện Cái Bè",
  "nonchar": "Huyen Cai Be",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "cai-lay-817",
  "name": "Cai Lậy",
  "noname": "Cai Lay",
  "ref_id": "817",
  "full": "Huyện Cai Lậy",
  "nonchar": "Huyen Cai Lay",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "cai-lay-820",
  "name": "Cai Lậy",
  "noname": "Cai Lay",
  "ref_id": "820",
  "full": "Thị xã Cai Lậy",
  "nonchar": "Thi xa Cai Lay",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "cai-nuoc-969",
  "name": "Cái Nước",
  "noname": "Cai Nuoc",
  "ref_id": "969",
  "full": "Huyện Cái Nước",
  "nonchar": "Huyen Cai Nuoc",
  "type": "dist",
  "location": null,
  "path": "/ca-mau/",
  "path_name": ", Tỉnh Cà Mau"
});
db.getCollection("location").insert({
  "_id": "cai-rang-919",
  "name": "Cái Răng",
  "noname": "Cai Rang",
  "ref_id": "919",
  "full": "Quận Cái Răng",
  "nonchar": "Quan Cai Rang",
  "type": "dist",
  "location": null,
  "path": "/can-tho/",
  "path_name": ", Thành phố Cần Thơ"
});
db.getCollection("location").insert({
  "_id": "cam-giang-295",
  "name": "Cẩm Giàng",
  "noname": "Cam Giang",
  "ref_id": "295",
  "full": "Huyện Cẩm Giàng",
  "nonchar": "Huyen Cam Giang",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "cam-khe-235",
  "name": "Cẩm Khê",
  "noname": "Cam Khe",
  "ref_id": "235",
  "full": "Huyện Cẩm Khê",
  "nonchar": "Huyen Cam Khe",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "cam-lam-570",
  "name": "Cam Lâm",
  "noname": "Cam Lam",
  "ref_id": "570",
  "full": "Huyện Cam Lâm",
  "nonchar": "Huyen Cam Lam",
  "type": "dist",
  "location": null,
  "path": "/khanh-hoa/",
  "path_name": ", Tỉnh Khánh Hòa"
});
db.getCollection("location").insert({
  "_id": "cam-le-495",
  "name": "Cẩm Lệ",
  "noname": "Cam Le",
  "ref_id": "495",
  "full": "Quận Cẩm Lệ",
  "nonchar": "Quan Cam Le",
  "type": "dist",
  "location": null,
  "path": "/da-nang/",
  "path_name": ", Thành phố Đà Nẵng"
});
db.getCollection("location").insert({
  "_id": "cam-lo-468",
  "name": "Cam Lộ",
  "noname": "Cam Lo",
  "ref_id": "468",
  "full": "Huyện Cam Lộ",
  "nonchar": "Huyen Cam Lo",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "cam-my-739",
  "name": "Cẩm Mỹ",
  "noname": "Cam My",
  "ref_id": "739",
  "full": "Huyện Cẩm Mỹ",
  "nonchar": "Huyen Cam My",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "cam-pha-195",
  "name": "Cẩm Phả",
  "noname": "Cam Pha",
  "ref_id": "195",
  "full": "Thành phố Cẩm Phả",
  "nonchar": "Thanh pho Cam Pha",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "cam-ranh-569",
  "name": "Cam Ranh",
  "noname": "Cam Ranh",
  "ref_id": "569",
  "full": "Thành phố Cam Ranh",
  "nonchar": "Thanh pho Cam Ranh",
  "type": "dist",
  "location": null,
  "path": "/khanh-hoa/",
  "path_name": ", Tỉnh Khánh Hòa"
});
db.getCollection("location").insert({
  "_id": "cam-thuy-390",
  "name": "Cẩm Thủy",
  "noname": "Cam Thuy",
  "ref_id": "390",
  "full": "Huyện Cẩm Thủy",
  "nonchar": "Huyen Cam Thuy",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "cam-xuyen-446",
  "name": "Cẩm Xuyên",
  "noname": "Cam Xuyen",
  "ref_id": "446",
  "full": "Huyện Cẩm Xuyên",
  "nonchar": "Huyen Cam Xuyen",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "can-duoc-806",
  "name": "Cần Đước",
  "noname": "Can Duoc",
  "ref_id": "806",
  "full": "Huyện Cần Đước",
  "nonchar": "Huyen Can Duoc",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "can-gio-787",
  "name": "Cần Giờ",
  "noname": "Can Gio",
  "ref_id": "787",
  "full": "Huyện Cần Giờ",
  "nonchar": "Huyen Can Gio",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "can-giuoc-807",
  "name": "Cần Giuộc",
  "noname": "Can Giuoc",
  "ref_id": "807",
  "full": "Huyện Cần Giuộc",
  "nonchar": "Huyen Can Giuoc",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "can-loc-443",
  "name": "Can Lộc",
  "noname": "Can Loc",
  "ref_id": "443",
  "full": "Huyện Can Lộc",
  "nonchar": "Huyen Can Loc",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "can-tho",
  "name": "Cần Thơ",
  "noname": "Can Tho",
  "ref_id": "92",
  "full": "Thành phố Cần Thơ",
  "nonchar": "Thanh pho Can Tho",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "cang-long-844",
  "name": "Càng Long",
  "noname": "Cang Long",
  "ref_id": "844",
  "full": "Huyện Càng Long",
  "nonchar": "Huyen Cang Long",
  "type": "dist",
  "location": null,
  "path": "/tra-vinh/",
  "path_name": ", Tỉnh Trà Vinh"
});
db.getCollection("location").insert({
  "_id": "cao-bang",
  "name": "Cao Bằng",
  "noname": "Cao Bang",
  "ref_id": "04",
  "full": "Tỉnh Cao Bằng",
  "nonchar": "Tinh Cao Bang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "cao-bang-040",
  "name": "Cao Bằng",
  "noname": "Cao Bang",
  "ref_id": "040",
  "full": "Thành phố Cao Bằng",
  "nonchar": "Thanh pho Cao Bang",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "cao-lanh-873",
  "name": "Cao Lãnh",
  "noname": "Cao Lanh",
  "ref_id": "873",
  "full": "Huyện Cao Lãnh",
  "nonchar": "Huyen Cao Lanh",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "cao-loc-183",
  "name": "Cao Lộc",
  "noname": "Cao Loc",
  "ref_id": "183",
  "full": "Huyện Cao Lộc",
  "nonchar": "Huyen Cao Loc",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "cao-phong-154",
  "name": "Cao Phong",
  "noname": "Cao Phong",
  "ref_id": "154",
  "full": "Huyện Cao Phong",
  "nonchar": "Huyen Cao Phong",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "cat-hai-317",
  "name": "Cát Hải",
  "noname": "Cat Hai",
  "ref_id": "317",
  "full": "Huyện Cát Hải",
  "nonchar": "Huyen Cat Hai",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "cat-tien-683",
  "name": "Cát Tiên",
  "noname": "Cat Tien",
  "ref_id": "683",
  "full": "Huyện Cát Tiên",
  "nonchar": "Huyen Cat Tien",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "cau-giay-005",
  "name": "Cầu Giấy",
  "noname": "Cau Giay",
  "ref_id": "005",
  "full": "Quận Cầu Giấy",
  "nonchar": "Quan Cau Giay",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "cau-ke-845",
  "name": "Cầu Kè",
  "noname": "Cau Ke",
  "ref_id": "845",
  "full": "Huyện Cầu Kè",
  "nonchar": "Huyen Cau Ke",
  "type": "dist",
  "location": null,
  "path": "/tra-vinh/",
  "path_name": ", Tỉnh Trà Vinh"
});
db.getCollection("location").insert({
  "_id": "cau-ngang-848",
  "name": "Cầu Ngang",
  "noname": "Cau Ngang",
  "ref_id": "848",
  "full": "Huyện Cầu Ngang",
  "nonchar": "Huyen Cau Ngang",
  "type": "dist",
  "location": null,
  "path": "/tra-vinh/",
  "path_name": ", Tỉnh Trà Vinh"
});
db.getCollection("location").insert({
  "_id": "chau-doc-884",
  "name": "Châu Đốc",
  "noname": "Chau Doc",
  "ref_id": "884",
  "full": "Thành phố Châu Đốc",
  "nonchar": "Thanh pho Chau Doc",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "chau-duc-750",
  "name": "Châu Đức",
  "noname": "Chau Duc",
  "ref_id": "750",
  "full": "Huyện Châu Đức",
  "nonchar": "Huyen Chau Duc",
  "type": "dist",
  "location": null,
  "path": "/ba-ria-vung-tau/",
  "path_name": ", Tỉnh Bà Rịa - Vũng Tàu"
});
db.getCollection("location").insert({
  "_id": "chau-phu-889",
  "name": "Châu Phú",
  "noname": "Chau Phu",
  "ref_id": "889",
  "full": "Huyện Châu Phú",
  "nonchar": "Huyen Chau Phu",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-708",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "708",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/tay-ninh/",
  "path_name": ", Tỉnh Tây Ninh"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-808",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "808",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-821",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "821",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-831",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "831",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/ben-tre/",
  "path_name": ", Tỉnh Bến Tre"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-847",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "847",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/tra-vinh/",
  "path_name": ", Tỉnh Trà Vinh"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-877",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "877",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-892",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "892",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-905",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "905",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-933",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "933",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/hau-giang/",
  "path_name": ", Tỉnh Hậu Giang"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-942",
  "name": "Châu Thành",
  "noname": "Chau Thanh",
  "ref_id": "942",
  "full": "Huyện Châu Thành",
  "nonchar": "Huyen Chau Thanh",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "chau-thanh-a-932",
  "name": "Châu Thành A",
  "noname": "Chau Thanh A",
  "ref_id": "932",
  "full": "Huyện Châu Thành A",
  "nonchar": "Huyen Chau Thanh A",
  "type": "dist",
  "location": null,
  "path": "/hau-giang/",
  "path_name": ", Tỉnh Hậu Giang"
});
db.getCollection("location").insert({
  "_id": "chi-lang-187",
  "name": "Chi Lăng",
  "noname": "Chi Lang",
  "ref_id": "187",
  "full": "Huyện Chi Lăng",
  "nonchar": "Huyen Chi Lang",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "chi-linh-290",
  "name": "Chí Linh",
  "noname": "Chi Linh",
  "ref_id": "290",
  "full": "Thị xã Chí Linh",
  "nonchar": "Thi xa Chi Linh",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "chiem-hoa-073",
  "name": "Chiêm Hóa",
  "noname": "Chiem Hoa",
  "ref_id": "073",
  "full": "Huyện Chiêm Hóa",
  "nonchar": "Huyen Chiem Hoa",
  "type": "dist",
  "location": null,
  "path": "/tuyen-quang/",
  "path_name": ", Tỉnh Tuyên Quang"
});
db.getCollection("location").insert({
  "_id": "cho-don-064",
  "name": "Chợ Đồn",
  "noname": "Cho Don",
  "ref_id": "064",
  "full": "Huyện Chợ Đồn",
  "nonchar": "Huyen Cho Don",
  "type": "dist",
  "location": null,
  "path": "/bac-kan/",
  "path_name": ", Tỉnh Bắc Kạn"
});
db.getCollection("location").insert({
  "_id": "cho-gao-822",
  "name": "Chợ Gạo",
  "noname": "Cho Gao",
  "ref_id": "822",
  "full": "Huyện Chợ Gạo",
  "nonchar": "Huyen Cho Gao",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "cho-lach-832",
  "name": "Chợ Lách",
  "noname": "Cho Lach",
  "ref_id": "832",
  "full": "Huyện Chợ Lách",
  "nonchar": "Huyen Cho Lach",
  "type": "dist",
  "location": null,
  "path": "/ben-tre/",
  "path_name": ", Tỉnh Bến Tre"
});
db.getCollection("location").insert({
  "_id": "cho-moi-065",
  "name": "Chợ Mới",
  "noname": "Cho Moi",
  "ref_id": "065",
  "full": "Huyện Chợ Mới",
  "nonchar": "Huyen Cho Moi",
  "type": "dist",
  "location": null,
  "path": "/bac-kan/",
  "path_name": ", Tỉnh Bắc Kạn"
});
db.getCollection("location").insert({
  "_id": "cho-moi-893",
  "name": "Chợ Mới",
  "noname": "Cho Moi",
  "ref_id": "893",
  "full": "Huyện Chợ Mới",
  "nonchar": "Huyen Cho Moi",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "chon-thanh-697",
  "name": "Chơn Thành",
  "noname": "Chon Thanh",
  "ref_id": "697",
  "full": "Huyện Chơn Thành",
  "nonchar": "Huyen Chon Thanh",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "chu-pah-627",
  "name": "Chư Păh",
  "noname": "Chu Pah",
  "ref_id": "627",
  "full": "Huyện Chư Păh",
  "nonchar": "Huyen Chu Pah",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "chu-prong-632",
  "name": "Chư Prông",
  "noname": "Chu Prong",
  "ref_id": "632",
  "full": "Huyện Chư Prông",
  "nonchar": "Huyen Chu Prong",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "chu-puh-639",
  "name": "Chư Pưh",
  "noname": "Chu Puh",
  "ref_id": "639",
  "full": "Huyện Chư Pưh",
  "nonchar": "Huyen Chu Puh",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "chu-se-633",
  "name": "Chư Sê",
  "noname": "Chu Se",
  "ref_id": "633",
  "full": "Huyện Chư Sê",
  "nonchar": "Huyen Chu Se",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "chuong-my-277",
  "name": "Chương Mỹ",
  "noname": "Chuong My",
  "ref_id": "277",
  "full": "Huyện Chương Mỹ",
  "nonchar": "Huyen Chuong My",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "co-do-925",
  "name": "Cờ Đỏ",
  "noname": "Co Do",
  "ref_id": "925",
  "full": "Huyện Cờ Đỏ",
  "nonchar": "Huyen Co Do",
  "type": "dist",
  "location": null,
  "path": "/can-tho/",
  "path_name": ", Thành phố Cần Thơ"
});
db.getCollection("location").insert({
  "_id": "co-to-207",
  "name": "Cô Tô",
  "noname": "Co To",
  "ref_id": "207",
  "full": "Huyện Cô Tô",
  "nonchar": "Huyen Co To",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "con-co-471",
  "name": "Cồn Cỏ",
  "noname": "Con Co",
  "ref_id": "471",
  "full": "Huyện Cồn Cỏ",
  "nonchar": "Huyen Con Co",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "con-cuong-422",
  "name": "Con Cuông",
  "noname": "Con Cuong",
  "ref_id": "422",
  "full": "Huyện Con Cuông",
  "nonchar": "Huyen Con Cuong",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "con-dao-755",
  "name": "Côn Đảo",
  "noname": "Con Dao",
  "ref_id": "755",
  "full": "Huyện Côn Đảo",
  "nonchar": "Huyen Con Dao",
  "type": "dist",
  "location": null,
  "path": "/ba-ria-vung-tau/",
  "path_name": ", Tỉnh Bà Rịa - Vũng Tàu"
});
db.getCollection("location").insert({
  "_id": "cu-chi-783",
  "name": "Củ Chi",
  "noname": "Cu Chi",
  "ref_id": "783",
  "full": "Huyện Củ Chi",
  "nonchar": "Huyen Cu Chi",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "cu-jut-662",
  "name": "Cư Jút",
  "noname": "Cu Jut",
  "ref_id": "662",
  "full": "Huyện Cư Jút",
  "nonchar": "Huyen Cu Jut",
  "type": "dist",
  "location": null,
  "path": "/dak-nong/",
  "path_name": ", Tỉnh Đắk Nông"
});
db.getCollection("location").insert({
  "_id": "cu-kuin-657",
  "name": "Cư Kuin",
  "noname": "Cu Kuin",
  "ref_id": "657",
  "full": "Huyện Cư Kuin",
  "nonchar": "Huyen Cu Kuin",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "cu-lao-dung-945",
  "name": "Cù Lao Dung",
  "noname": "Cu Lao Dung",
  "ref_id": "945",
  "full": "Huyện Cù Lao Dung",
  "nonchar": "Huyen Cu Lao Dung",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "cu-m'gar-648",
  "name": "Cư M'gar",
  "noname": "Cu Mgar",
  "ref_id": "648",
  "full": "Huyện Cư M'gar",
  "nonchar": "Huyen Cu Mgar",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "cua-lo-413",
  "name": "Cửa Lò",
  "noname": "Cua Lo",
  "ref_id": "413",
  "full": "Thị xã Cửa Lò",
  "nonchar": "Thi xa Cua Lo",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "da-bac-150",
  "name": "Đà Bắc",
  "noname": "Da Bac",
  "ref_id": "150",
  "full": "Huyện Đà Bắc",
  "nonchar": "Huyen Da Bac",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "da-huoai-681",
  "name": "Đạ Huoai",
  "noname": "Da Huoai",
  "ref_id": "681",
  "full": "Huyện Đạ Huoai",
  "nonchar": "Huyen Da Huoai",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "da-krong-467",
  "name": "Đa Krông",
  "noname": "Da Krong",
  "ref_id": "467",
  "full": "Huyện Đa Krông",
  "nonchar": "Huyen Da Krong",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "da-lat-672",
  "name": "Đà Lạt",
  "noname": "Da Lat",
  "ref_id": "672",
  "full": "Thành phố Đà Lạt",
  "nonchar": "Thanh pho Da Lat",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "da-nang",
  "name": "Đà Nẵng",
  "noname": "Da Nang",
  "ref_id": "48",
  "full": "Thành phố Đà Nẵng",
  "nonchar": "Thanh pho Da Nang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "da-teh-682",
  "name": "Đạ Tẻh",
  "noname": "Da Teh",
  "ref_id": "682",
  "full": "Huyện Đạ Tẻh",
  "nonchar": "Huyen Da Teh",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "dai-loc-506",
  "name": "Đại Lộc",
  "noname": "Dai Loc",
  "ref_id": "506",
  "full": "Huyện Đại Lộc",
  "nonchar": "Huyen Dai Loc",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "dai-tu-171",
  "name": "Đại Từ",
  "noname": "Dai Tu",
  "ref_id": "171",
  "full": "Huyện Đại Từ",
  "nonchar": "Huyen Dai Tu",
  "type": "dist",
  "location": null,
  "path": "/thai-nguyen/",
  "path_name": ", Tỉnh Thái Nguyên"
});
db.getCollection("location").insert({
  "_id": "dak-doa-626",
  "name": "Đăk Đoa",
  "noname": "Dak Doa",
  "ref_id": "626",
  "full": "Huyện Đăk Đoa",
  "nonchar": "Huyen Dak Doa",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "dak-glei-610",
  "name": "Đắk Glei",
  "noname": "Dak Glei",
  "ref_id": "610",
  "full": "Huyện Đắk Glei",
  "nonchar": "Huyen Dak Glei",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "dak-glong-661",
  "name": "Đăk Glong",
  "noname": "Dak Glong",
  "ref_id": "661",
  "full": "Huyện Đăk Glong",
  "nonchar": "Huyen Dak Glong",
  "type": "dist",
  "location": null,
  "path": "/dak-nong/",
  "path_name": ", Tỉnh Đắk Nông"
});
db.getCollection("location").insert({
  "_id": "dak-ha-615",
  "name": "Đắk Hà",
  "noname": "Dak Ha",
  "ref_id": "615",
  "full": "Huyện Đắk Hà",
  "nonchar": "Huyen Dak Ha",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "dak-lak",
  "name": "Đắk Lắk",
  "noname": "Dak Lak",
  "ref_id": "66",
  "full": "Tỉnh Đắk Lắk",
  "nonchar": "Tinh Dak Lak",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "dak-mil-663",
  "name": "Đắk Mil",
  "noname": "Dak Mil",
  "ref_id": "663",
  "full": "Huyện Đắk Mil",
  "nonchar": "Huyen Dak Mil",
  "type": "dist",
  "location": null,
  "path": "/dak-nong/",
  "path_name": ", Tỉnh Đắk Nông"
});
db.getCollection("location").insert({
  "_id": "dak-nong",
  "name": "Đắk Nông",
  "noname": "Dak Nong",
  "ref_id": "67",
  "full": "Tỉnh Đắk Nông",
  "nonchar": "Tinh Dak Nong",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "dak-po-634",
  "name": "Đăk Pơ",
  "noname": "Dak Po",
  "ref_id": "634",
  "full": "Huyện Đăk Pơ",
  "nonchar": "Huyen Dak Po",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "dak-r'lap-666",
  "name": "Đắk R'Lấp",
  "noname": "Dak RLap",
  "ref_id": "666",
  "full": "Huyện Đắk R'Lấp",
  "nonchar": "Huyen Dak RLap",
  "type": "dist",
  "location": null,
  "path": "/dak-nong/",
  "path_name": ", Tỉnh Đắk Nông"
});
db.getCollection("location").insert({
  "_id": "dak-song-665",
  "name": "Đắk Song",
  "noname": "Dak Song",
  "ref_id": "665",
  "full": "Huyện Đắk Song",
  "nonchar": "Huyen Dak Song",
  "type": "dist",
  "location": null,
  "path": "/dak-nong/",
  "path_name": ", Tỉnh Đắk Nông"
});
db.getCollection("location").insert({
  "_id": "dak-to-612",
  "name": "Đắk Tô",
  "noname": "Dak To",
  "ref_id": "612",
  "full": "Huyện Đắk Tô",
  "nonchar": "Huyen Dak To",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "dam-doi-970",
  "name": "Đầm Dơi",
  "noname": "Dam Doi",
  "ref_id": "970",
  "full": "Huyện Đầm Dơi",
  "nonchar": "Huyen Dam Doi",
  "type": "dist",
  "location": null,
  "path": "/ca-mau/",
  "path_name": ", Tỉnh Cà Mau"
});
db.getCollection("location").insert({
  "_id": "dam-ha-200",
  "name": "Đầm Hà",
  "noname": "Dam Ha",
  "ref_id": "200",
  "full": "Huyện Đầm Hà",
  "nonchar": "Huyen Dam Ha",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "dam-rong-674",
  "name": "Đam Rông",
  "noname": "Dam Rong",
  "ref_id": "674",
  "full": "Huyện Đam Rông",
  "nonchar": "Huyen Dam Rong",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "dan-phuong-273",
  "name": "Đan Phượng",
  "noname": "Dan Phuong",
  "ref_id": "273",
  "full": "Huyện Đan Phượng",
  "nonchar": "Huyen Dan Phuong",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "dat-do-753",
  "name": "Đất Đỏ",
  "noname": "Dat Do",
  "ref_id": "753",
  "full": "Huyện Đất Đỏ",
  "nonchar": "Huyen Dat Do",
  "type": "dist",
  "location": null,
  "path": "/ba-ria-vung-tau/",
  "path_name": ", Tỉnh Bà Rịa - Vũng Tàu"
});
db.getCollection("location").insert({
  "_id": "dau-tieng-720",
  "name": "Dầu Tiếng",
  "noname": "Dau Tieng",
  "ref_id": "720",
  "full": "Huyện Dầu Tiếng",
  "nonchar": "Huyen Dau Tieng",
  "type": "dist",
  "location": null,
  "path": "/binh-duong/",
  "path_name": ", Tỉnh Bình Dương"
});
db.getCollection("location").insert({
  "_id": "di-an-724",
  "name": "Dĩ An",
  "noname": "Di An",
  "ref_id": "724",
  "full": "Thị xã Dĩ An",
  "nonchar": "Thi xa Di An",
  "type": "dist",
  "location": null,
  "path": "/binh-duong/",
  "path_name": ", Tỉnh Bình Dương"
});
db.getCollection("location").insert({
  "_id": "di-linh-679",
  "name": "Di Linh",
  "noname": "Di Linh",
  "ref_id": "679",
  "full": "Huyện Di Linh",
  "nonchar": "Huyen Di Linh",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "dien-ban-507",
  "name": "Điện Bàn",
  "noname": "Dien Ban",
  "ref_id": "507",
  "full": "Thị xã Điện Bàn",
  "nonchar": "Thi xa Dien Ban",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "dien-bien",
  "name": "Điện Biên",
  "noname": "Dien Bien",
  "ref_id": "11",
  "full": "Tỉnh Điện Biên",
  "nonchar": "Tinh Dien Bien",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "dien-bien-100",
  "name": "Điện Biên",
  "noname": "Dien Bien",
  "ref_id": "100",
  "full": "Huyện Điện Biên",
  "nonchar": "Huyen Dien Bien",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "dien-bien-dong-101",
  "name": "Điện Biên Đông",
  "noname": "Dien Bien Dong",
  "ref_id": "101",
  "full": "Huyện Điện Biên Đông",
  "nonchar": "Huyen Dien Bien Dong",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "dien-bien-phu-094",
  "name": "Điện Biên Phủ",
  "noname": "Dien Bien Phu",
  "ref_id": "094",
  "full": "Thành phố Điện Biên Phủ",
  "nonchar": "Thanh pho Dien Bien Phu",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "dien-chau-425",
  "name": "Diễn Châu",
  "noname": "Dien Chau",
  "ref_id": "425",
  "full": "Huyện Diễn Châu",
  "nonchar": "Huyen Dien Chau",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "dien-khanh-574",
  "name": "Diên Khánh",
  "noname": "Dien Khanh",
  "ref_id": "574",
  "full": "Huyện Diên Khánh",
  "nonchar": "Huyen Dien Khanh",
  "type": "dist",
  "location": null,
  "path": "/khanh-hoa/",
  "path_name": ", Tỉnh Khánh Hòa"
});
db.getCollection("location").insert({
  "_id": "dinh-hoa-167",
  "name": "Định Hóa",
  "noname": "Dinh Hoa",
  "ref_id": "167",
  "full": "Huyện Định Hóa",
  "nonchar": "Huyen Dinh Hoa",
  "type": "dist",
  "location": null,
  "path": "/thai-nguyen/",
  "path_name": ", Tỉnh Thái Nguyên"
});
db.getCollection("location").insert({
  "_id": "dinh-lap-189",
  "name": "Đình Lập",
  "noname": "Dinh Lap",
  "ref_id": "189",
  "full": "Huyện Đình Lập",
  "nonchar": "Huyen Dinh Lap",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "dinh-quan-736",
  "name": "Định Quán",
  "noname": "Dinh Quan",
  "ref_id": "736",
  "full": "Huyện Định Quán",
  "nonchar": "Huyen Dinh Quan",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "do-luong-427",
  "name": "Đô Lương",
  "noname": "Do Luong",
  "ref_id": "427",
  "full": "Huyện Đô Lương",
  "nonchar": "Huyen Do Luong",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "do-son-308",
  "name": "Đồ Sơn",
  "noname": "Do Son",
  "ref_id": "308",
  "full": "Quận Đồ Sơn",
  "nonchar": "Quan Do Son",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "doan-hung-230",
  "name": "Đoan Hùng",
  "noname": "Doan Hung",
  "ref_id": "230",
  "full": "Huyện Đoan Hùng",
  "nonchar": "Huyen Doan Hung",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "don-duong-677",
  "name": "Đơn Dương",
  "noname": "Don Duong",
  "ref_id": "677",
  "full": "Huyện Đơn Dương",
  "nonchar": "Huyen Don Duong",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "dong-anh-017",
  "name": "Đông Anh",
  "noname": "Dong Anh",
  "ref_id": "017",
  "full": "Huyện Đông Anh",
  "nonchar": "Huyen Dong Anh",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "dong-da-006",
  "name": "Đống Đa",
  "noname": "Dong Da",
  "ref_id": "006",
  "full": "Quận Đống Đa",
  "nonchar": "Quan Dong Da",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "dong-giang-505",
  "name": "Đông Giang",
  "noname": "Dong Giang",
  "ref_id": "505",
  "full": "Huyện Đông Giang",
  "nonchar": "Huyen Dong Giang",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "dong-ha-461",
  "name": "Đông Hà",
  "noname": "Dong Ha",
  "ref_id": "461",
  "full": "Thành phố Đông Hà",
  "nonchar": "Thanh pho Dong Ha",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "dong-hai-960",
  "name": "Đông Hải",
  "noname": "Dong Hai",
  "ref_id": "960",
  "full": "Huyện Đông Hải",
  "nonchar": "Huyen Dong Hai",
  "type": "dist",
  "location": null,
  "path": "/bac-lieu/",
  "path_name": ", Tỉnh Bạc Liêu"
});
db.getCollection("location").insert({
  "_id": "dong-hoa-564",
  "name": "Đông Hòa",
  "noname": "Dong Hoa",
  "ref_id": "564",
  "full": "Huyện Đông Hòa",
  "nonchar": "Huyen Dong Hoa",
  "type": "dist",
  "location": null,
  "path": "/phu-yen/",
  "path_name": ", Tỉnh Phú Yên"
});
db.getCollection("location").insert({
  "_id": "dong-hoi-450",
  "name": "Đồng Hới",
  "noname": "Dong Hoi",
  "ref_id": "450",
  "full": "Thành Phố Đồng Hới",
  "nonchar": "Thanh Pho Dong Hoi",
  "type": "dist",
  "location": null,
  "path": "/quang-binh/",
  "path_name": ", Tỉnh Quảng Bình"
});
db.getCollection("location").insert({
  "_id": "dong-hung-340",
  "name": "Đông Hưng",
  "noname": "Dong Hung",
  "ref_id": "340",
  "full": "Huyện Đông Hưng",
  "nonchar": "Huyen Dong Hung",
  "type": "dist",
  "location": null,
  "path": "/thai-binh/",
  "path_name": ", Tỉnh Thái Bình"
});
db.getCollection("location").insert({
  "_id": "dong-hy-169",
  "name": "Đồng Hỷ",
  "noname": "Dong Hy",
  "ref_id": "169",
  "full": "Huyện Đồng Hỷ",
  "nonchar": "Huyen Dong Hy",
  "type": "dist",
  "location": null,
  "path": "/thai-nguyen/",
  "path_name": ", Tỉnh Thái Nguyên"
});
db.getCollection("location").insert({
  "_id": "dong-nai",
  "name": "Đồng Nai",
  "noname": "Dong Nai",
  "ref_id": "75",
  "full": "Tỉnh Đồng Nai",
  "nonchar": "Tinh Dong Nai",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "dong-phu-695",
  "name": "Đồng Phù",
  "noname": "Dong Phu",
  "ref_id": "695",
  "full": "Huyện Đồng Phù",
  "nonchar": "Huyen Dong Phu",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "dong-son-405",
  "name": "Đông Sơn",
  "noname": "Dong Son",
  "ref_id": "405",
  "full": "Huyện Đông Sơn",
  "nonchar": "Huyen Dong Son",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "dong-thap",
  "name": "Đồng Tháp",
  "noname": "Dong Thap",
  "ref_id": "87",
  "full": "Tỉnh Đồng Tháp",
  "nonchar": "Tinh Dong Thap",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "dong-trieu-205",
  "name": "Đông Triều",
  "noname": "Dong Trieu",
  "ref_id": "205",
  "full": "Thị xã Đông Triều",
  "nonchar": "Thi xa Dong Trieu",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "dong-van-026",
  "name": "Đồng Văn",
  "noname": "Dong Van",
  "ref_id": "026",
  "full": "Huyện Đồng Văn",
  "nonchar": "Huyen Dong Van",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "dong-xoai-689",
  "name": "Đồng Xoài",
  "noname": "Dong Xoai",
  "ref_id": "689",
  "full": "Thị xã Đồng Xoài",
  "nonchar": "Thi xa Dong Xoai",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "dong-xuan-558",
  "name": "Đồng Xuân",
  "noname": "Dong Xuan",
  "ref_id": "558",
  "full": "Huyện Đồng Xuân",
  "nonchar": "Huyen Dong Xuan",
  "type": "dist",
  "location": null,
  "path": "/phu-yen/",
  "path_name": ", Tỉnh Phú Yên"
});
db.getCollection("location").insert({
  "_id": "duc-co-631",
  "name": "Đức Cơ",
  "noname": "Duc Co",
  "ref_id": "631",
  "full": "Huyện Đức Cơ",
  "nonchar": "Huyen Duc Co",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "duc-hoa-802",
  "name": "Đức Hòa",
  "noname": "Duc Hoa",
  "ref_id": "802",
  "full": "Huyện Đức Hòa",
  "nonchar": "Huyen Duc Hoa",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "duc-hue-801",
  "name": "Đức Huệ",
  "noname": "Duc Hue",
  "ref_id": "801",
  "full": "Huyện Đức Huệ",
  "nonchar": "Huyen Duc Hue",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "duc-linh-600",
  "name": "Đức Linh",
  "noname": "Duc Linh",
  "ref_id": "600",
  "full": "Huyện Đức Linh",
  "nonchar": "Huyen Duc Linh",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "duc-pho-534",
  "name": "Đức Phổ",
  "noname": "Duc Pho",
  "ref_id": "534",
  "full": "Huyện Đức Phổ",
  "nonchar": "Huyen Duc Pho",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "duc-tho-440",
  "name": "Đức Thọ",
  "noname": "Duc Tho",
  "ref_id": "440",
  "full": "Huyện Đức Thọ",
  "nonchar": "Huyen Duc Tho",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "duc-trong-678",
  "name": "Đức Trọng",
  "noname": "Duc Trong",
  "ref_id": "678",
  "full": "Huyện Đức Trọng",
  "nonchar": "Huyen Duc Trong",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "duong-kinh-309",
  "name": "Dương Kinh",
  "noname": "Duong Kinh",
  "ref_id": "309",
  "full": "Quận Dương Kinh",
  "nonchar": "Quan Duong Kinh",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "duong-minh-chau-707",
  "name": "Dương Minh Châu",
  "noname": "Duong Minh Chau",
  "ref_id": "707",
  "full": "Huyện Dương Minh Châu",
  "nonchar": "Huyen Duong Minh Chau",
  "type": "dist",
  "location": null,
  "path": "/tay-ninh/",
  "path_name": ", Tỉnh Tây Ninh"
});
db.getCollection("location").insert({
  "_id": "duy-tien-349",
  "name": "Duy Tiên",
  "noname": "Duy Tien",
  "ref_id": "349",
  "full": "Huyện Duy Tiên",
  "nonchar": "Huyen Duy Tien",
  "type": "dist",
  "location": null,
  "path": "/ha-nam/",
  "path_name": ", Tỉnh Hà Nam"
});
db.getCollection("location").insert({
  "_id": "duy-xuyen-508",
  "name": "Duy Xuyên",
  "noname": "Duy Xuyen",
  "ref_id": "508",
  "full": "Huyện Duy Xuyên",
  "nonchar": "Huyen Duy Xuyen",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "duyen-hai-850",
  "name": "Duyên Hải",
  "noname": "Duyen Hai",
  "ref_id": "850",
  "full": "Huyện Duyên Hải",
  "nonchar": "Huyen Duyen Hai",
  "type": "dist",
  "location": null,
  "path": "/tra-vinh/",
  "path_name": ", Tỉnh Trà Vinh"
});
db.getCollection("location").insert({
  "_id": "duyen-hai-851",
  "name": "Duyên Hải",
  "noname": "Duyen Hai",
  "ref_id": "851",
  "full": "Thị xã Duyên Hải",
  "nonchar": "Thi xa Duyen Hai",
  "type": "dist",
  "location": null,
  "path": "/tra-vinh/",
  "path_name": ", Tỉnh Trà Vinh"
});
db.getCollection("location").insert({
  "_id": "ea-h'leo-645",
  "name": "Ea H'leo",
  "noname": "Ea Hleo",
  "ref_id": "645",
  "full": "Huyện Ea H'leo",
  "nonchar": "Huyen Ea Hleo",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "ea-kar-651",
  "name": "Ea Kar",
  "noname": "Ea Kar",
  "ref_id": "651",
  "full": "Huyện Ea Kar",
  "nonchar": "Huyen Ea Kar",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "ea-sup-646",
  "name": "Ea Súp",
  "noname": "Ea Sup",
  "ref_id": "646",
  "full": "Huyện Ea Súp",
  "nonchar": "Huyen Ea Sup",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "gia-binh-263",
  "name": "Gia Bình",
  "noname": "Gia Binh",
  "ref_id": "263",
  "full": "Huyện Gia Bình",
  "nonchar": "Huyen Gia Binh",
  "type": "dist",
  "location": null,
  "path": "/bac-ninh/",
  "path_name": ", Tỉnh Bắc Ninh"
});
db.getCollection("location").insert({
  "_id": "gia-lai",
  "name": "Gia Lai",
  "noname": "Gia Lai",
  "ref_id": "64",
  "full": "Tỉnh Gia Lai",
  "nonchar": "Tinh Gia Lai",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "gia-lam-018",
  "name": "Gia Lâm",
  "noname": "Gia Lam",
  "ref_id": "018",
  "full": "Huyện Gia Lâm",
  "nonchar": "Huyen Gia Lam",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "gia-loc-297",
  "name": "Gia Lộc",
  "noname": "Gia Loc",
  "ref_id": "297",
  "full": "Huyện Gia Lộc",
  "nonchar": "Huyen Gia Loc",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "gia-nghia-660",
  "name": "Gia Nghĩa",
  "noname": "Gia Nghia",
  "ref_id": "660",
  "full": "Thị xã Gia Nghĩa",
  "nonchar": "Thi xa Gia Nghia",
  "type": "dist",
  "location": null,
  "path": "/dak-nong/",
  "path_name": ", Tỉnh Đắk Nông"
});
db.getCollection("location").insert({
  "_id": "gia-rai-959",
  "name": "Giá Rai",
  "noname": "Gia Rai",
  "ref_id": "959",
  "full": "Thị xã Giá Rai",
  "nonchar": "Thi xa Gia Rai",
  "type": "dist",
  "location": null,
  "path": "/bac-lieu/",
  "path_name": ", Tỉnh Bạc Liêu"
});
db.getCollection("location").insert({
  "_id": "gia-vien-373",
  "name": "Gia Viễn",
  "noname": "Gia Vien",
  "ref_id": "373",
  "full": "Huyện Gia Viễn",
  "nonchar": "Huyen Gia Vien",
  "type": "dist",
  "location": null,
  "path": "/ninh-binh/",
  "path_name": ", Tỉnh Ninh Bình"
});
db.getCollection("location").insert({
  "_id": "giang-thanh-914",
  "name": "Giang Thành",
  "noname": "Giang Thanh",
  "ref_id": "914",
  "full": "Huyện Giang Thành",
  "nonchar": "Huyen Giang Thanh",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "giao-thuy-365",
  "name": "Giao Thủy",
  "noname": "Giao Thuy",
  "ref_id": "365",
  "full": "Huyện Giao Thủy",
  "nonchar": "Huyen Giao Thuy",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "gio-linh-466",
  "name": "Gio Linh",
  "noname": "Gio Linh",
  "ref_id": "466",
  "full": "Huyện Gio Linh",
  "nonchar": "Huyen Gio Linh",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "giong-rieng-906",
  "name": "Giồng Riềng",
  "noname": "Giong Rieng",
  "ref_id": "906",
  "full": "Huyện Giồng Riềng",
  "nonchar": "Huyen Giong Rieng",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "giong-trom-834",
  "name": "Giồng Trôm",
  "noname": "Giong Trom",
  "ref_id": "834",
  "full": "Huyện Giồng Trôm",
  "nonchar": "Huyen Giong Trom",
  "type": "dist",
  "location": null,
  "path": "/ben-tre/",
  "path_name": ", Tỉnh Bến Tre"
});
db.getCollection("location").insert({
  "_id": "go-cong-816",
  "name": "Gò Công",
  "noname": "Go Cong",
  "ref_id": "816",
  "full": "Thị xã Gò Công",
  "nonchar": "Thi xa Go Cong",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "go-cong-dong-824",
  "name": "Gò Công Đông",
  "noname": "Go Cong Dong",
  "ref_id": "824",
  "full": "Huyện Gò Công Đông",
  "nonchar": "Huyen Go Cong Dong",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "go-cong-tay-823",
  "name": "Gò Công Tây",
  "noname": "Go Cong Tay",
  "ref_id": "823",
  "full": "Huyện Gò Công Tây",
  "nonchar": "Huyen Go Cong Tay",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "go-dau-710",
  "name": "Gò Dầu",
  "noname": "Go Dau",
  "ref_id": "710",
  "full": "Huyện Gò Dầu",
  "nonchar": "Huyen Go Dau",
  "type": "dist",
  "location": null,
  "path": "/tay-ninh/",
  "path_name": ", Tỉnh Tây Ninh"
});
db.getCollection("location").insert({
  "_id": "go-quao-907",
  "name": "Gò Quao",
  "noname": "Go Quao",
  "ref_id": "907",
  "full": "Huyện Gò Quao",
  "nonchar": "Huyen Go Quao",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "go-vap-764",
  "name": "Gò Vấp",
  "noname": "Go Vap",
  "ref_id": "764",
  "full": "Quận Gò Vấp",
  "nonchar": "Quan Go Vap",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "ha-dong-268",
  "name": "Hà Đông",
  "noname": "Ha Dong",
  "ref_id": "268",
  "full": "Quận Hà Đông",
  "nonchar": "Quan Ha Dong",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "ha-giang",
  "name": "Hà Giang",
  "noname": "Ha Giang",
  "ref_id": "02",
  "full": "Tỉnh Hà Giang",
  "nonchar": "Tinh Ha Giang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "ha-giang-024",
  "name": "Hà Giang",
  "noname": "Ha Giang",
  "ref_id": "024",
  "full": "Thành phố Hà Giang",
  "nonchar": "Thanh pho Ha Giang",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "ha-hoa-231",
  "name": "Hạ Hòa",
  "noname": "Ha Hoa",
  "ref_id": "231",
  "full": "Huyện Hạ Hòa",
  "nonchar": "Huyen Ha Hoa",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "ha-lang-048",
  "name": "Hạ Lang",
  "noname": "Ha Lang",
  "ref_id": "048",
  "full": "Huyện Hạ Lang",
  "nonchar": "Huyen Ha Lang",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "ha-long-193",
  "name": "Hạ Long",
  "noname": "Ha Long",
  "ref_id": "193",
  "full": "Thành phố Hạ Long",
  "nonchar": "Thanh pho Ha Long",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "ha-nam",
  "name": "Hà Nam",
  "noname": "Ha Nam",
  "ref_id": "35",
  "full": "Tỉnh Hà Nam",
  "nonchar": "Tinh Ha Nam",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "ha-noi",
  "name": "Hà Nội",
  "noname": "Ha Noi",
  "ref_id": "01",
  "full": "Thành phố Hà Nội",
  "nonchar": "TP. Ha Noi",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "ha-quang-045",
  "name": "Hà Quảng",
  "noname": "Ha Quang",
  "ref_id": "045",
  "full": "Huyện Hà Quảng",
  "nonchar": "Huyen Ha Quang",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "ha-tien-900",
  "name": "Hà Tiên",
  "noname": "Ha Tien",
  "ref_id": "900",
  "full": "Thị xã Hà Tiên",
  "nonchar": "Thi xa Ha Tien",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "ha-tinh",
  "name": "Hà Tĩnh",
  "noname": "Ha Tinh",
  "ref_id": "42",
  "full": "Tỉnh Hà Tĩnh",
  "nonchar": "Tinh Ha Tinh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "ha-tinh-436",
  "name": "Hà Tĩnh",
  "noname": "Ha Tinh",
  "ref_id": "436",
  "full": "Thành phố Hà Tĩnh",
  "nonchar": "Thanh pho Ha Tinh",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "ha-trung-392",
  "name": "Hà Trung",
  "noname": "Ha Trung",
  "ref_id": "392",
  "full": "Huyện Hà Trung",
  "nonchar": "Huyen Ha Trung",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "hai-an-306",
  "name": "Hải An",
  "noname": "Hai An",
  "ref_id": "306",
  "full": "Quận Hải An",
  "nonchar": "Quan Hai An",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "hai-ba-trung-007",
  "name": "Hai Bà Trưng",
  "noname": "Hai Ba Trung",
  "ref_id": "007",
  "full": "Quận Hai Bà Trưng",
  "nonchar": "Quan Hai Ba Trung",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "hai-chau-492",
  "name": "Hải Châu",
  "noname": "Hai Chau",
  "ref_id": "492",
  "full": "Quận Hải Châu",
  "nonchar": "Quan Hai Chau",
  "type": "dist",
  "location": null,
  "path": "/da-nang/",
  "path_name": ", Thành phố Đà Nẵng"
});
db.getCollection("location").insert({
  "_id": "hai-duong",
  "name": "Hải Dương",
  "noname": "Hai Duong",
  "ref_id": "30",
  "full": "Tỉnh Hải Dương",
  "nonchar": "Tinh Hai Duong",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "hai-duong-288",
  "name": "Hải Dương",
  "noname": "Hai Duong",
  "ref_id": "288",
  "full": "Thành phố Hải Dương",
  "nonchar": "Thanh pho Hai Duong",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "hai-ha-201",
  "name": "Hải Hà",
  "noname": "Hai Ha",
  "ref_id": "201",
  "full": "Huyện Hải Hà",
  "nonchar": "Huyen Hai Ha",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "hai-hau-366",
  "name": "Hải Hậu",
  "noname": "Hai Hau",
  "ref_id": "366",
  "full": "Huyện Hải Hậu",
  "nonchar": "Huyen Hai Hau",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "hai-lang-470",
  "name": "Hải Lăng",
  "noname": "Hai Lang",
  "ref_id": "470",
  "full": "Huyện Hải Lăng",
  "nonchar": "Huyen Hai Lang",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "hai-phong",
  "name": "Hải Phòng",
  "noname": "Hai Phong",
  "ref_id": "31",
  "full": "Thành phố Hải Phòng",
  "nonchar": "Thanh pho Hai Phong",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "ham-tan-601",
  "name": "Hàm Tân",
  "noname": "Ham Tan",
  "ref_id": "601",
  "full": "Huyện Hàm Tân",
  "nonchar": "Huyen Ham Tan",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "ham-thuan-bac-597",
  "name": "Hàm Thuận Bắc",
  "noname": "Ham Thuan Bac",
  "ref_id": "597",
  "full": "Huyện Hàm Thuận Bắc",
  "nonchar": "Huyen Ham Thuan Bac",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "ham-thuan-nam-598",
  "name": "Hàm Thuận Nam",
  "noname": "Ham Thuan Nam",
  "ref_id": "598",
  "full": "Huyện Hàm Thuận Nam",
  "nonchar": "Huyen Ham Thuan Nam",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "ham-yen-074",
  "name": "Hàm Yên",
  "noname": "Ham Yen",
  "ref_id": "074",
  "full": "Huyện Hàm Yên",
  "nonchar": "Huyen Ham Yen",
  "type": "dist",
  "location": null,
  "path": "/tuyen-quang/",
  "path_name": ", Tỉnh Tuyên Quang"
});
db.getCollection("location").insert({
  "_id": "hau-giang",
  "name": "Hậu Giang",
  "noname": "Hau Giang",
  "ref_id": "93",
  "full": "Tỉnh Hậu Giang",
  "nonchar": "Tinh Hau Giang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "hau-loc-400",
  "name": "Hậu Lộc",
  "noname": "Hau Loc",
  "ref_id": "400",
  "full": "Huyện Hậu Lộc",
  "nonchar": "Huyen Hau Loc",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "hiep-duc-512",
  "name": "Hiệp Đức",
  "noname": "Hiep Duc",
  "ref_id": "512",
  "full": "Huyện Hiệp Đức",
  "nonchar": "Huyen Hiep Duc",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "hiep-hoa-223",
  "name": "Hiệp Hòa",
  "noname": "Hiep Hoa",
  "ref_id": "223",
  "full": "Huyện Hiệp Hòa",
  "nonchar": "Huyen Hiep Hoa",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "ho-chi-minh",
  "name": "Hồ Chí Minh",
  "noname": "Ho Chi Minh",
  "ref_id": "79",
  "full": "Thành phố Hồ Chí Minh",
  "nonchar": "Tp.HCM",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "hoa-an-051",
  "name": "Hòa An",
  "noname": "Hoa An",
  "ref_id": "051",
  "full": "Huyện Hòa An",
  "nonchar": "Huyen Hoa An",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "hoa-binh",
  "name": "Hòa Bình",
  "noname": "Hoa Binh",
  "ref_id": "17",
  "full": "Tỉnh Hòa Bình",
  "nonchar": "Tinh Hoa Binh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "hoa-binh-148",
  "name": "Hòa Bình",
  "noname": "Hoa Binh",
  "ref_id": "148",
  "full": "Thành phố Hòa Bình",
  "nonchar": "Thanh pho Hoa Binh",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "hoa-binh-961",
  "name": "Hòa Bình",
  "noname": "Hoa Binh",
  "ref_id": "961",
  "full": "Huyện Hòa Bình",
  "nonchar": "Huyen Hoa Binh",
  "type": "dist",
  "location": null,
  "path": "/bac-lieu/",
  "path_name": ", Tỉnh Bạc Liêu"
});
db.getCollection("location").insert({
  "_id": "hoa-lu-374",
  "name": "Hoa Lư",
  "noname": "Hoa Lu",
  "ref_id": "374",
  "full": "Huyện Hoa Lư",
  "nonchar": "Huyen Hoa Lu",
  "type": "dist",
  "location": null,
  "path": "/ninh-binh/",
  "path_name": ", Tỉnh Ninh Bình"
});
db.getCollection("location").insert({
  "_id": "hoa-thanh-709",
  "name": "Hòa Thành",
  "noname": "Hoa Thanh",
  "ref_id": "709",
  "full": "Huyện Hòa Thành",
  "nonchar": "Huyen Hoa Thanh",
  "type": "dist",
  "location": null,
  "path": "/tay-ninh/",
  "path_name": ", Tỉnh Tây Ninh"
});
db.getCollection("location").insert({
  "_id": "hoa-vang-497",
  "name": "Hòa Vang",
  "noname": "Hoa Vang",
  "ref_id": "497",
  "full": "Huyện Hòa Vang",
  "nonchar": "Huyen Hoa Vang",
  "type": "dist",
  "location": null,
  "path": "/da-nang/",
  "path_name": ", Thành phố Đà Nẵng"
});
db.getCollection("location").insert({
  "_id": "hoai-an-544",
  "name": "Hoài Ân",
  "noname": "Hoai An",
  "ref_id": "544",
  "full": "Huyện Hoài Ân",
  "nonchar": "Huyen Hoai An",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "hoai-duc-274",
  "name": "Hoài Đức",
  "noname": "Hoai Duc",
  "ref_id": "274",
  "full": "Huyện Hoài Đức",
  "nonchar": "Huyen Hoai Duc",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "hoai-nhon-543",
  "name": "Hoài Nhơn",
  "noname": "Hoai Nhon",
  "ref_id": "543",
  "full": "Huyện Hoài Nhơn",
  "nonchar": "Huyen Hoai Nhon",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "hoan-kiem-002",
  "name": "Hoàn Kiếm",
  "noname": "Hoan Kiem",
  "ref_id": "002",
  "full": "Quận Hoàn Kiếm",
  "nonchar": "Quan Hoan Kiem",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "hoang-hoa-399",
  "name": "Hoằng Hóa",
  "noname": "Hoang Hoa",
  "ref_id": "399",
  "full": "Huyện Hoằng Hóa",
  "nonchar": "Huyen Hoang Hoa",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "hoang-mai-008",
  "name": "Hoàng Mai",
  "noname": "Hoang Mai",
  "ref_id": "008",
  "full": "Quận Hoàng Mai",
  "nonchar": "Quan Hoang Mai",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "hoang-mai-432",
  "name": "Hoàng Mai",
  "noname": "Hoang Mai",
  "ref_id": "432",
  "full": "Thị xã Hoàng Mai",
  "nonchar": "Thi xa Hoang Mai",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "hoang-sa-498",
  "name": "Hoàng Sa",
  "noname": "Hoang Sa",
  "ref_id": "498",
  "full": "Huyện Hoàng Sa",
  "nonchar": "Huyen Hoang Sa",
  "type": "dist",
  "location": null,
  "path": "/da-nang/",
  "path_name": ", Thành phố Đà Nẵng"
});
db.getCollection("location").insert({
  "_id": "hoang-su-phi-032",
  "name": "Hoàng Su Phì",
  "noname": "Hoang Su Phi",
  "ref_id": "032",
  "full": "Huyện Hoàng Su Phì",
  "nonchar": "Huyen Hoang Su Phi",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "hoanh-bo-204",
  "name": "Hoành Bồ",
  "noname": "Hoanh Bo",
  "ref_id": "204",
  "full": "Huyện Hoành Bồ",
  "nonchar": "Huyen Hoanh Bo",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "hoc-mon-784",
  "name": "Hóc Môn",
  "noname": "Hoc Mon",
  "ref_id": "784",
  "full": "Huyện Hóc Môn",
  "nonchar": "Huyen Hoc Mon",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "hoi-an-503",
  "name": "Hội An",
  "noname": "Hoi An",
  "ref_id": "503",
  "full": "Thành phố Hội An",
  "nonchar": "Thanh pho Hoi An",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "hon-dat-903",
  "name": "Hòn Đất",
  "noname": "Hon Dat",
  "ref_id": "903",
  "full": "Huyện Hòn Đất",
  "nonchar": "Huyen Hon Dat",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "hon-quan-694",
  "name": "Hớn Quản",
  "noname": "Hon Quan",
  "ref_id": "694",
  "full": "Huyện Hớn Quản",
  "nonchar": "Huyen Hon Quan",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "hong-bang-303",
  "name": "Hồng Bàng",
  "noname": "Hong Bang",
  "ref_id": "303",
  "full": "Quận Hồng Bàng",
  "nonchar": "Quan Hong Bang",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "hong-dan-956",
  "name": "Hồng Dân",
  "noname": "Hong Dan",
  "ref_id": "956",
  "full": "Huyện Hồng Dân",
  "nonchar": "Huyen Hong Dan",
  "type": "dist",
  "location": null,
  "path": "/bac-lieu/",
  "path_name": ", Tỉnh Bạc Liêu"
});
db.getCollection("location").insert({
  "_id": "hong-linh-437",
  "name": "Hồng Lĩnh",
  "noname": "Hong Linh",
  "ref_id": "437",
  "full": "Thị xã Hồng Lĩnh",
  "nonchar": "Thi xa Hong Linh",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "hong-ngu-868",
  "name": "Hồng Ngự",
  "noname": "Hong Ngu",
  "ref_id": "868",
  "full": "Thị xã Hồng Ngự",
  "nonchar": "Thi xa Hong Ngu",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "hong-ngu-870",
  "name": "Hồng Ngự",
  "noname": "Hong Ngu",
  "ref_id": "870",
  "full": "Huyện Hồng Ngự",
  "nonchar": "Huyen Hong Ngu",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "hue-474",
  "name": "Huế",
  "noname": "Hue",
  "ref_id": "474",
  "full": "Thành phố Huế",
  "nonchar": "Thanh pho Hue",
  "type": "dist",
  "location": null,
  "path": "/thua-thien-hue/",
  "path_name": ", Tỉnh Thừa Thiên Huế"
});
db.getCollection("location").insert({
  "_id": "hung-ha-339",
  "name": "Hưng Hà",
  "noname": "Hung Ha",
  "ref_id": "339",
  "full": "Huyện Hưng Hà",
  "nonchar": "Huyen Hung Ha",
  "type": "dist",
  "location": null,
  "path": "/thai-binh/",
  "path_name": ", Tỉnh Thái Bình"
});
db.getCollection("location").insert({
  "_id": "hung-nguyen-431",
  "name": "Hưng Nguyên",
  "noname": "Hung Nguyen",
  "ref_id": "431",
  "full": "Huyện Hưng Nguyên",
  "nonchar": "Huyen Hung Nguyen",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "hung-yen",
  "name": "Hưng Yên",
  "noname": "Hung Yen",
  "ref_id": "33",
  "full": "Tỉnh Hưng Yên",
  "nonchar": "Tinh Hung Yen",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "hung-yen-323",
  "name": "Hưng Yên",
  "noname": "Hung Yen",
  "ref_id": "323",
  "full": "Thành phố Hưng Yên",
  "nonchar": "Thanh pho Hung Yen",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "huong-hoa-465",
  "name": "Hướng Hóa",
  "noname": "Huong Hoa",
  "ref_id": "465",
  "full": "Huyện Hướng Hóa",
  "nonchar": "Huyen Huong Hoa",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "huong-khe-444",
  "name": "Hương Khê",
  "noname": "Huong Khe",
  "ref_id": "444",
  "full": "Huyện Hương Khê",
  "nonchar": "Huyen Huong Khe",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "huong-son-439",
  "name": "Hương Sơn",
  "noname": "Huong Son",
  "ref_id": "439",
  "full": "Huyện Hương Sơn",
  "nonchar": "Huyen Huong Son",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "huong-thuy-479",
  "name": "Hương Thủy",
  "noname": "Huong Thuy",
  "ref_id": "479",
  "full": "Thị xã Hương Thủy",
  "nonchar": "Thi xa Huong Thuy",
  "type": "dist",
  "location": null,
  "path": "/thua-thien-hue/",
  "path_name": ", Tỉnh Thừa Thiên Huế"
});
db.getCollection("location").insert({
  "_id": "huong-tra-480",
  "name": "Hương Trà",
  "noname": "Huong Tra",
  "ref_id": "480",
  "full": "Thị xã Hương Trà",
  "nonchar": "Thi xa Huong Tra",
  "type": "dist",
  "location": null,
  "path": "/thua-thien-hue/",
  "path_name": ", Tỉnh Thừa Thiên Huế"
});
db.getCollection("location").insert({
  "_id": "huu-lung-186",
  "name": "Hữu Lũng",
  "noname": "Huu Lung",
  "ref_id": "186",
  "full": "Huyện Hữu Lũng",
  "nonchar": "Huyen Huu Lung",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "ia-grai-628",
  "name": "Ia Grai",
  "noname": "Ia Grai",
  "ref_id": "628",
  "full": "Huyện Ia Grai",
  "nonchar": "Huyen Ia Grai",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "ia-h'-drai-618",
  "name": "Ia H' Drai",
  "noname": "Ia H Drai",
  "ref_id": "618",
  "full": "Huyện Ia H' Drai",
  "nonchar": "Huyen Ia H Drai",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "ia-pa-635",
  "name": "Ia Pa",
  "noname": "Ia Pa",
  "ref_id": "635",
  "full": "Huyện Ia Pa",
  "nonchar": "Huyen Ia Pa",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "kbang-625",
  "name": "KBang",
  "noname": "KBang",
  "ref_id": "625",
  "full": "Huyện KBang",
  "nonchar": "Huyen KBang",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "ke-sach-943",
  "name": "Kế Sách",
  "noname": "Ke Sach",
  "ref_id": "943",
  "full": "Huyện Kế Sách",
  "nonchar": "Huyen Ke Sach",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "khanh-hoa",
  "name": "Khánh Hòa",
  "noname": "Khanh Hoa",
  "ref_id": "56",
  "full": "Tỉnh Khánh Hòa",
  "nonchar": "Tinh Khanh Hoa",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "khanh-son-575",
  "name": "Khánh Sơn",
  "noname": "Khanh Son",
  "ref_id": "575",
  "full": "Huyện Khánh Sơn",
  "nonchar": "Huyen Khanh Son",
  "type": "dist",
  "location": null,
  "path": "/khanh-hoa/",
  "path_name": ", Tỉnh Khánh Hòa"
});
db.getCollection("location").insert({
  "_id": "khanh-vinh-573",
  "name": "Khánh Vĩnh",
  "noname": "Khanh Vinh",
  "ref_id": "573",
  "full": "Huyện Khánh Vĩnh",
  "nonchar": "Huyen Khanh Vinh",
  "type": "dist",
  "location": null,
  "path": "/khanh-hoa/",
  "path_name": ", Tỉnh Khánh Hòa"
});
db.getCollection("location").insert({
  "_id": "khoai-chau-330",
  "name": "Khoái Châu",
  "noname": "Khoai Chau",
  "ref_id": "330",
  "full": "Huyện Khoái Châu",
  "nonchar": "Huyen Khoai Chau",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "kien-an-307",
  "name": "Kiến An",
  "noname": "Kien An",
  "ref_id": "307",
  "full": "Quận Kiến An",
  "nonchar": "Quan Kien An",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "kien-giang",
  "name": "Kiên Giang",
  "noname": "Kien Giang",
  "ref_id": "91",
  "full": "Tỉnh Kiên Giang",
  "nonchar": "Tinh Kien Giang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "kien-hai-912",
  "name": "Kiên Hải",
  "noname": "Kien Hai",
  "ref_id": "912",
  "full": "Huyện Kiên Hải",
  "nonchar": "Huyen Kien Hai",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "kien-luong-902",
  "name": "Kiên Lương",
  "noname": "Kien Luong",
  "ref_id": "902",
  "full": "Huyện Kiên Lương",
  "nonchar": "Huyen Kien Luong",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "kien-thuy-314",
  "name": "Kiến Thuỵ",
  "noname": "Kien Thuy",
  "ref_id": "314",
  "full": "Huyện Kiến Thuỵ",
  "nonchar": "Huyen Kien Thuy",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "kien-tuong-795",
  "name": "Kiến Tường",
  "noname": "Kien Tuong",
  "ref_id": "795",
  "full": "Thị xã Kiến Tường",
  "nonchar": "Thi xa Kien Tuong",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "kien-xuong-343",
  "name": "Kiến Xương",
  "noname": "Kien Xuong",
  "ref_id": "343",
  "full": "Huyện Kiến Xương",
  "nonchar": "Huyen Kien Xuong",
  "type": "dist",
  "location": null,
  "path": "/thai-binh/",
  "path_name": ", Tỉnh Thái Bình"
});
db.getCollection("location").insert({
  "_id": "kim-bang-350",
  "name": "Kim Bảng",
  "noname": "Kim Bang",
  "ref_id": "350",
  "full": "Huyện Kim Bảng",
  "nonchar": "Huyen Kim Bang",
  "type": "dist",
  "location": null,
  "path": "/ha-nam/",
  "path_name": ", Tỉnh Hà Nam"
});
db.getCollection("location").insert({
  "_id": "kim-boi-153",
  "name": "Kim Bôi",
  "noname": "Kim Boi",
  "ref_id": "153",
  "full": "Huyện Kim Bôi",
  "nonchar": "Huyen Kim Boi",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "kim-dong-331",
  "name": "Kim Động",
  "noname": "Kim Dong",
  "ref_id": "331",
  "full": "Huyện Kim Động",
  "nonchar": "Huyen Kim Dong",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "kim-son-376",
  "name": "Kim Sơn",
  "noname": "Kim Son",
  "ref_id": "376",
  "full": "Huyện Kim Sơn",
  "nonchar": "Huyen Kim Son",
  "type": "dist",
  "location": null,
  "path": "/ninh-binh/",
  "path_name": ", Tỉnh Ninh Bình"
});
db.getCollection("location").insert({
  "_id": "kim-thanh-293",
  "name": "Kim Thành",
  "noname": "Kim Thanh",
  "ref_id": "293",
  "full": "Huyện Kim Thành",
  "nonchar": "Huyen Kim Thanh",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "kinh-mon-292",
  "name": "Kinh Môn",
  "noname": "Kinh Mon",
  "ref_id": "292",
  "full": "Huyện Kinh Môn",
  "nonchar": "Huyen Kinh Mon",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "kon-plong-613",
  "name": "Kon Plông",
  "noname": "Kon Plong",
  "ref_id": "613",
  "full": "Huyện Kon Plông",
  "nonchar": "Huyen Kon Plong",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "kon-ray-614",
  "name": "Kon Rẫy",
  "noname": "Kon Ray",
  "ref_id": "614",
  "full": "Huyện Kon Rẫy",
  "nonchar": "Huyen Kon Ray",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "kon-tum",
  "name": "Kon Tum",
  "noname": "Kon Tum",
  "ref_id": "62",
  "full": "Tỉnh Kon Tum",
  "nonchar": "Tinh Kon Tum",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "kon-tum-608",
  "name": "Kon Tum",
  "noname": "Kon Tum",
  "ref_id": "608",
  "full": "Thành phố Kon Tum",
  "nonchar": "Thanh pho Kon Tum",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "kong-chro-630",
  "name": "Kông Chro",
  "noname": "Kong Chro",
  "ref_id": "630",
  "full": "Huyện Kông Chro",
  "nonchar": "Huyen Kong Chro",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "krong-a-na-655",
  "name": "Krông A Na",
  "noname": "Krong A Na",
  "ref_id": "655",
  "full": "Huyện Krông A Na",
  "nonchar": "Huyen Krong A Na",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "krong-bong-653",
  "name": "Krông Bông",
  "noname": "Krong Bong",
  "ref_id": "653",
  "full": "Huyện Krông Bông",
  "nonchar": "Huyen Krong Bong",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "krong-buk-649",
  "name": "Krông Búk",
  "noname": "Krong Buk",
  "ref_id": "649",
  "full": "Huyện Krông Búk",
  "nonchar": "Huyen Krong Buk",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "krong-nang-650",
  "name": "Krông Năng",
  "noname": "Krong Nang",
  "ref_id": "650",
  "full": "Huyện Krông Năng",
  "nonchar": "Huyen Krong Nang",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "krong-no-664",
  "name": "Krông Nô",
  "noname": "Krong No",
  "ref_id": "664",
  "full": "Huyện Krông Nô",
  "nonchar": "Huyen Krong No",
  "type": "dist",
  "location": null,
  "path": "/dak-nong/",
  "path_name": ", Tỉnh Đắk Nông"
});
db.getCollection("location").insert({
  "_id": "krong-pa-637",
  "name": "Krông Pa",
  "noname": "Krong Pa",
  "ref_id": "637",
  "full": "Huyện Krông Pa",
  "nonchar": "Huyen Krong Pa",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "krong-pac-654",
  "name": "Krông Pắc",
  "noname": "Krong Pac",
  "ref_id": "654",
  "full": "Huyện Krông Pắc",
  "nonchar": "Huyen Krong Pac",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "ky-anh-447",
  "name": "Kỳ Anh",
  "noname": "Ky Anh",
  "ref_id": "447",
  "full": "Huyện Kỳ Anh",
  "nonchar": "Huyen Ky Anh",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "ky-anh-449",
  "name": "Kỳ Anh",
  "noname": "Ky Anh",
  "ref_id": "449",
  "full": "Thị xã Kỳ Anh",
  "nonchar": "Thi xa Ky Anh",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "ky-son-151",
  "name": "Kỳ Sơn",
  "noname": "Ky Son",
  "ref_id": "151",
  "full": "Huyện Kỳ Sơn",
  "nonchar": "Huyen Ky Son",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "ky-son-417",
  "name": "Kỳ Sơn",
  "noname": "Ky Son",
  "ref_id": "417",
  "full": "Huyện Kỳ Sơn",
  "nonchar": "Huyen Ky Son",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "la-gi-594",
  "name": "La Gi",
  "noname": "La Gi",
  "ref_id": "594",
  "full": "Thị xã La Gi",
  "nonchar": "Thi xa La Gi",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "lac-duong-675",
  "name": "Lạc Dương",
  "noname": "Lac Duong",
  "ref_id": "675",
  "full": "Huyện Lạc Dương",
  "nonchar": "Huyen Lac Duong",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "lac-son-157",
  "name": "Lạc Sơn",
  "noname": "Lac Son",
  "ref_id": "157",
  "full": "Huyện Lạc Sơn",
  "nonchar": "Huyen Lac Son",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "lac-thuy-159",
  "name": "Lạc Thủy",
  "noname": "Lac Thuy",
  "ref_id": "159",
  "full": "Huyện Lạc Thủy",
  "nonchar": "Huyen Lac Thuy",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "lai-chau",
  "name": "Lai Châu",
  "noname": "Lai Chau",
  "ref_id": "12",
  "full": "Tỉnh Lai Châu",
  "nonchar": "Tinh Lai Chau",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "lai-chau-105",
  "name": "Lai Châu",
  "noname": "Lai Chau",
  "ref_id": "105",
  "full": "Thành phố Lai Châu",
  "nonchar": "Thanh pho Lai Chau",
  "type": "dist",
  "location": null,
  "path": "/lai-chau/",
  "path_name": ", Tỉnh Lai Châu"
});
db.getCollection("location").insert({
  "_id": "lai-vung-876",
  "name": "Lai Vung",
  "noname": "Lai Vung",
  "ref_id": "876",
  "full": "Huyện Lai Vung",
  "nonchar": "Huyen Lai Vung",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "lak-656",
  "name": "Lắk",
  "noname": "Lak",
  "ref_id": "656",
  "full": "Huyện Lắk",
  "nonchar": "Huyen Lak",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "lam-binh-071",
  "name": "Lâm Bình",
  "noname": "Lam Binh",
  "ref_id": "071",
  "full": "Huyện Lâm Bình",
  "nonchar": "Huyen Lam Binh",
  "type": "dist",
  "location": null,
  "path": "/tuyen-quang/",
  "path_name": ", Tỉnh Tuyên Quang"
});
db.getCollection("location").insert({
  "_id": "lam-dong",
  "name": "Lâm Đồng",
  "noname": "Lam Dong",
  "ref_id": "68",
  "full": "Tỉnh Lâm Đồng",
  "nonchar": "Tinh Lam Dong",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "lam-ha-676",
  "name": "Lâm Hà",
  "noname": "Lam Ha",
  "ref_id": "676",
  "full": "Huyện Lâm Hà",
  "nonchar": "Huyen Lam Ha",
  "type": "dist",
  "location": null,
  "path": "/lam-dong/",
  "path_name": ", Tỉnh Lâm Đồng"
});
db.getCollection("location").insert({
  "_id": "lam-thao-237",
  "name": "Lâm Thao",
  "noname": "Lam Thao",
  "ref_id": "237",
  "full": "Huyện Lâm Thao",
  "nonchar": "Huyen Lam Thao",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "lang-chanh-388",
  "name": "Lang Chánh",
  "noname": "Lang Chanh",
  "ref_id": "388",
  "full": "Huyện Lang Chánh",
  "nonchar": "Huyen Lang Chanh",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "lang-giang-217",
  "name": "Lạng Giang",
  "noname": "Lang Giang",
  "ref_id": "217",
  "full": "Huyện Lạng Giang",
  "nonchar": "Huyen Lang Giang",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "lang-son",
  "name": "Lạng Sơn",
  "noname": "Lang Son",
  "ref_id": "20",
  "full": "Tỉnh Lạng Sơn",
  "nonchar": "Tinh Lang Son",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "lang-son-178",
  "name": "Lạng Sơn",
  "noname": "Lang Son",
  "ref_id": "178",
  "full": "Thành phố Lạng Sơn",
  "nonchar": "Thanh pho Lang Son",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "lao-cai",
  "name": "Lào Cai",
  "noname": "Lao Cai",
  "ref_id": "10",
  "full": "Tỉnh Lào Cai",
  "nonchar": "Tinh Lao Cai",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "lao-cai-080",
  "name": "Lào Cai",
  "noname": "Lao Cai",
  "ref_id": "080",
  "full": "Thành phố Lào Cai",
  "nonchar": "Thanh pho Lao Cai",
  "type": "dist",
  "location": null,
  "path": "/lao-cai/",
  "path_name": ", Tỉnh Lào Cai"
});
db.getCollection("location").insert({
  "_id": "lap-thach-246",
  "name": "Lập Thạch",
  "noname": "Lap Thach",
  "ref_id": "246",
  "full": "Huyện Lập Thạch",
  "nonchar": "Huyen Lap Thach",
  "type": "dist",
  "location": null,
  "path": "/vinh-phuc/",
  "path_name": ", Tỉnh Vĩnh Phúc"
});
db.getCollection("location").insert({
  "_id": "lap-vo-875",
  "name": "Lấp Vò",
  "noname": "Lap Vo",
  "ref_id": "875",
  "full": "Huyện Lấp Vò",
  "nonchar": "Huyen Lap Vo",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "le-chan-305",
  "name": "Lê Chân",
  "noname": "Le Chan",
  "ref_id": "305",
  "full": "Quận Lê Chân",
  "nonchar": "Quan Le Chan",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "le-thuy-457",
  "name": "Lệ Thủy",
  "noname": "Le Thuy",
  "ref_id": "457",
  "full": "Huyện Lệ Thủy",
  "nonchar": "Huyen Le Thuy",
  "type": "dist",
  "location": null,
  "path": "/quang-binh/",
  "path_name": ", Tỉnh Quảng Bình"
});
db.getCollection("location").insert({
  "_id": "lien-chieu-490",
  "name": "Liên Chiểu",
  "noname": "Lien Chieu",
  "ref_id": "490",
  "full": "Quận Liên Chiểu",
  "nonchar": "Quan Lien Chieu",
  "type": "dist",
  "location": null,
  "path": "/da-nang/",
  "path_name": ", Thành phố Đà Nẵng"
});
db.getCollection("location").insert({
  "_id": "loc-binh-188",
  "name": "Lộc Bình",
  "noname": "Loc Binh",
  "ref_id": "188",
  "full": "Huyện Lộc Bình",
  "nonchar": "Huyen Loc Binh",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "loc-ha-448",
  "name": "Lộc Hà",
  "noname": "Loc Ha",
  "ref_id": "448",
  "full": "Huyện Lộc Hà",
  "nonchar": "Huyen Loc Ha",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "loc-ninh-692",
  "name": "Lộc Ninh",
  "noname": "Loc Ninh",
  "ref_id": "692",
  "full": "Huyện Lộc Ninh",
  "nonchar": "Huyen Loc Ninh",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "long-an",
  "name": "Long An",
  "noname": "Long An",
  "ref_id": "80",
  "full": "Tỉnh Long An",
  "nonchar": "Tinh Long An",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "long-bien-004",
  "name": "Long Biên",
  "noname": "Long Bien",
  "ref_id": "004",
  "full": "Quận Long Biên",
  "nonchar": "Quan Long Bien",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "long-dien-752",
  "name": "Long Điền",
  "noname": "Long Dien",
  "ref_id": "752",
  "full": "Huyện Long Điền",
  "nonchar": "Huyen Long Dien",
  "type": "dist",
  "location": null,
  "path": "/ba-ria-vung-tau/",
  "path_name": ", Tỉnh Bà Rịa - Vũng Tàu"
});
db.getCollection("location").insert({
  "_id": "long-ho-857",
  "name": "Long Hồ",
  "noname": "Long Ho",
  "ref_id": "857",
  "full": "Huyện Long Hồ",
  "nonchar": "Huyen Long Ho",
  "type": "dist",
  "location": null,
  "path": "/vinh-long/",
  "path_name": ", Tỉnh Vĩnh Long"
});
db.getCollection("location").insert({
  "_id": "long-khanh-732",
  "name": "Long Khánh",
  "noname": "Long Khanh",
  "ref_id": "732",
  "full": "Thị xã Long Khánh",
  "nonchar": "Thi xa Long Khanh",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "long-my-936",
  "name": "Long Mỹ",
  "noname": "Long My",
  "ref_id": "936",
  "full": "Huyện Long Mỹ",
  "nonchar": "Huyen Long My",
  "type": "dist",
  "location": null,
  "path": "/hau-giang/",
  "path_name": ", Tỉnh Hậu Giang"
});
db.getCollection("location").insert({
  "_id": "long-my-937",
  "name": "Long Mỹ",
  "noname": "Long My",
  "ref_id": "937",
  "full": "Thị xã Long Mỹ",
  "nonchar": "Thi xa Long My",
  "type": "dist",
  "location": null,
  "path": "/hau-giang/",
  "path_name": ", Tỉnh Hậu Giang"
});
db.getCollection("location").insert({
  "_id": "long-phu-946",
  "name": "Long Phú",
  "noname": "Long Phu",
  "ref_id": "946",
  "full": "Huyện Long Phú",
  "nonchar": "Huyen Long Phu",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "long-thanh-740",
  "name": "Long Thành",
  "noname": "Long Thanh",
  "ref_id": "740",
  "full": "Huyện Long Thành",
  "nonchar": "Huyen Long Thanh",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "long-xuyen-883",
  "name": "Long Xuyên",
  "noname": "Long Xuyen",
  "ref_id": "883",
  "full": "Thành phố Long Xuyên",
  "nonchar": "Thanh pho Long Xuyen",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "luc-nam-218",
  "name": "Lục Nam",
  "noname": "Luc Nam",
  "ref_id": "218",
  "full": "Huyện Lục Nam",
  "nonchar": "Huyen Luc Nam",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "luc-ngan-219",
  "name": "Lục Ngạn",
  "noname": "Luc Ngan",
  "ref_id": "219",
  "full": "Huyện Lục Ngạn",
  "nonchar": "Huyen Luc Ngan",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "luc-yen-135",
  "name": "Lục Yên",
  "noname": "Luc Yen",
  "ref_id": "135",
  "full": "Huyện Lục Yên",
  "nonchar": "Huyen Luc Yen",
  "type": "dist",
  "location": null,
  "path": "/yen-bai/",
  "path_name": ", Tỉnh Yên Bái"
});
db.getCollection("location").insert({
  "_id": "luong-son-152",
  "name": "Lương Sơn",
  "noname": "Luong Son",
  "ref_id": "152",
  "full": "Huyện Lương Sơn",
  "nonchar": "Huyen Luong Son",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "luong-tai-264",
  "name": "Lương Tài",
  "noname": "Luong Tai",
  "ref_id": "264",
  "full": "Huyện Lương Tài",
  "nonchar": "Huyen Luong Tai",
  "type": "dist",
  "location": null,
  "path": "/bac-ninh/",
  "path_name": ", Tỉnh Bắc Ninh"
});
db.getCollection("location").insert({
  "_id": "ly-nhan-353",
  "name": "Lý Nhân",
  "noname": "Ly Nhan",
  "ref_id": "353",
  "full": "Huyện Lý Nhân",
  "nonchar": "Huyen Ly Nhan",
  "type": "dist",
  "location": null,
  "path": "/ha-nam/",
  "path_name": ", Tỉnh Hà Nam"
});
db.getCollection("location").insert({
  "_id": "ly-son-536",
  "name": "Lý Sơn",
  "noname": "Ly Son",
  "ref_id": "536",
  "full": "Huyện Lý Sơn",
  "nonchar": "Huyen Ly Son",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "m'drak-652",
  "name": "M'Đrắk",
  "noname": "MDrak",
  "ref_id": "652",
  "full": "Huyện M'Đrắk",
  "nonchar": "Huyen MDrak",
  "type": "dist",
  "location": null,
  "path": "/dak-lak/",
  "path_name": ", Tỉnh Đắk Lắk"
});
db.getCollection("location").insert({
  "_id": "mai-chau-156",
  "name": "Mai Châu",
  "noname": "Mai Chau",
  "ref_id": "156",
  "full": "Huyện Mai Châu",
  "nonchar": "Huyen Mai Chau",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "mai-son-125",
  "name": "Mai Sơn",
  "noname": "Mai Son",
  "ref_id": "125",
  "full": "Huyện Mai Sơn",
  "nonchar": "Huyen Mai Son",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "mang-thit-858",
  "name": "Mang Thít",
  "noname": "Mang Thit",
  "ref_id": "858",
  "full": "Huyện Mang Thít",
  "nonchar": "Huyen Mang Thit",
  "type": "dist",
  "location": null,
  "path": "/vinh-long/",
  "path_name": ", Tỉnh Vĩnh Long"
});
db.getCollection("location").insert({
  "_id": "mang-yang-629",
  "name": "Mang Yang",
  "noname": "Mang Yang",
  "ref_id": "629",
  "full": "Huyện Mang Yang",
  "nonchar": "Huyen Mang Yang",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "me-linh-250",
  "name": "Mê Linh",
  "noname": "Me Linh",
  "ref_id": "250",
  "full": "Huyện Mê Linh",
  "nonchar": "Huyen Me Linh",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "meo-vac-027",
  "name": "Mèo Vạc",
  "noname": "Meo Vac",
  "ref_id": "027",
  "full": "Huyện Mèo Vạc",
  "nonchar": "Huyen Meo Vac",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "minh-hoa-452",
  "name": "Minh Hóa",
  "noname": "Minh Hoa",
  "ref_id": "452",
  "full": "Huyện Minh Hóa",
  "nonchar": "Huyen Minh Hoa",
  "type": "dist",
  "location": null,
  "path": "/quang-binh/",
  "path_name": ", Tỉnh Quảng Bình"
});
db.getCollection("location").insert({
  "_id": "minh-long-531",
  "name": "Minh Long",
  "noname": "Minh Long",
  "ref_id": "531",
  "full": "Huyện Minh Long",
  "nonchar": "Huyen Minh Long",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "mo-cay-bac-838",
  "name": "Mỏ Cày Bắc",
  "noname": "Mo Cay Bac",
  "ref_id": "838",
  "full": "Huyện Mỏ Cày Bắc",
  "nonchar": "Huyen Mo Cay Bac",
  "type": "dist",
  "location": null,
  "path": "/ben-tre/",
  "path_name": ", Tỉnh Bến Tre"
});
db.getCollection("location").insert({
  "_id": "mo-cay-nam-833",
  "name": "Mỏ Cày Nam",
  "noname": "Mo Cay Nam",
  "ref_id": "833",
  "full": "Huyện Mỏ Cày Nam",
  "nonchar": "Huyen Mo Cay Nam",
  "type": "dist",
  "location": null,
  "path": "/ben-tre/",
  "path_name": ", Tỉnh Bến Tre"
});
db.getCollection("location").insert({
  "_id": "mo-duc-533",
  "name": "Mộ Đức",
  "noname": "Mo Duc",
  "ref_id": "533",
  "full": "Huyện Mộ Đức",
  "nonchar": "Huyen Mo Duc",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "moc-chau-123",
  "name": "Mộc Châu",
  "noname": "Moc Chau",
  "ref_id": "123",
  "full": "Huyện Mộc Châu",
  "nonchar": "Huyen Moc Chau",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "moc-hoa-798",
  "name": "Mộc Hóa",
  "noname": "Moc Hoa",
  "ref_id": "798",
  "full": "Huyện Mộc Hóa",
  "nonchar": "Huyen Moc Hoa",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "mong-cai-194",
  "name": "Móng Cái",
  "noname": "Mong Cai",
  "ref_id": "194",
  "full": "Thành phố Móng Cái",
  "nonchar": "Thanh pho Mong Cai",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "mu-cang-chai-137",
  "name": "Mù Căng Chải",
  "noname": "Mu Cang Chai",
  "ref_id": "137",
  "full": "Huyện Mù Căng Chải",
  "nonchar": "Huyen Mu Cang Chai",
  "type": "dist",
  "location": null,
  "path": "/yen-bai/",
  "path_name": ", Tỉnh Yên Bái"
});
db.getCollection("location").insert({
  "_id": "muong-ang-102",
  "name": "Mường Ảng",
  "noname": "Muong Ang",
  "ref_id": "102",
  "full": "Huyện Mường Ảng",
  "nonchar": "Huyen Muong Ang",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "muong-cha-097",
  "name": "Mường Chà",
  "noname": "Muong Cha",
  "ref_id": "097",
  "full": "Huyện Mường Chà",
  "nonchar": "Huyen Muong Cha",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "muong-khuong-083",
  "name": "Mường Khương",
  "noname": "Muong Khuong",
  "ref_id": "083",
  "full": "Huyện Mường Khương",
  "nonchar": "Huyen Muong Khuong",
  "type": "dist",
  "location": null,
  "path": "/lao-cai/",
  "path_name": ", Tỉnh Lào Cai"
});
db.getCollection("location").insert({
  "_id": "muong-la-120",
  "name": "Mường La",
  "noname": "Muong La",
  "ref_id": "120",
  "full": "Huyện Mường La",
  "nonchar": "Huyen Muong La",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "muong-lat-384",
  "name": "Mường Lát",
  "noname": "Muong Lat",
  "ref_id": "384",
  "full": "Huyện Mường Lát",
  "nonchar": "Huyen Muong Lat",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "muong-lay-095",
  "name": "Mường Lay",
  "noname": "Muong Lay",
  "ref_id": "095",
  "full": "Thị Xã Mường Lay",
  "nonchar": "Thi Xa Muong Lay",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "muong-nhe-096",
  "name": "Mường Nhé",
  "noname": "Muong Nhe",
  "ref_id": "096",
  "full": "Huyện Mường Nhé",
  "nonchar": "Huyen Muong Nhe",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "muong-te-107",
  "name": "Mường Tè",
  "noname": "Muong Te",
  "ref_id": "107",
  "full": "Huyện Mường Tè",
  "nonchar": "Huyen Muong Te",
  "type": "dist",
  "location": null,
  "path": "/lai-chau/",
  "path_name": ", Tỉnh Lai Châu"
});
db.getCollection("location").insert({
  "_id": "my-duc-282",
  "name": "Mỹ Đức",
  "noname": "My Duc",
  "ref_id": "282",
  "full": "Huyện Mỹ Đức",
  "nonchar": "Huyen My Duc",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "my-hao-328",
  "name": "Mỹ Hào",
  "noname": "My Hao",
  "ref_id": "328",
  "full": "Huyện Mỹ Hào",
  "nonchar": "Huyen My Hao",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "my-loc-358",
  "name": "Mỹ Lộc",
  "noname": "My Loc",
  "ref_id": "358",
  "full": "Huyện Mỹ Lộc",
  "nonchar": "Huyen My Loc",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "my-tho-815",
  "name": "Mỹ Tho",
  "noname": "My Tho",
  "ref_id": "815",
  "full": "Thành phố Mỹ Tho",
  "nonchar": "Thanh pho My Tho",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "my-tu-944",
  "name": "Mỹ Tú",
  "noname": "My Tu",
  "ref_id": "944",
  "full": "Huyện Mỹ Tú",
  "nonchar": "Huyen My Tu",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "my-xuyen-947",
  "name": "Mỹ Xuyên",
  "noname": "My Xuyen",
  "ref_id": "947",
  "full": "Huyện Mỹ Xuyên",
  "nonchar": "Huyen My Xuyen",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "na-hang-072",
  "name": "Nà Hang",
  "noname": "Na Hang",
  "ref_id": "072",
  "full": "Huyện Nà Hang",
  "nonchar": "Huyen Na Hang",
  "type": "dist",
  "location": null,
  "path": "/tuyen-quang/",
  "path_name": ", Tỉnh Tuyên Quang"
});
db.getCollection("location").insert({
  "_id": "na-ri-066",
  "name": "Na Rì",
  "noname": "Na Ri",
  "ref_id": "066",
  "full": "Huyện Na Rì",
  "nonchar": "Huyen Na Ri",
  "type": "dist",
  "location": null,
  "path": "/bac-kan/",
  "path_name": ", Tỉnh Bắc Kạn"
});
db.getCollection("location").insert({
  "_id": "nam-can-971",
  "name": "Năm Căn",
  "noname": "Nam Can",
  "ref_id": "971",
  "full": "Huyện Năm Căn",
  "nonchar": "Huyen Nam Can",
  "type": "dist",
  "location": null,
  "path": "/ca-mau/",
  "path_name": ", Tỉnh Cà Mau"
});
db.getCollection("location").insert({
  "_id": "nam-dan-430",
  "name": "Nam Đàn",
  "noname": "Nam Dan",
  "ref_id": "430",
  "full": "Huyện Nam Đàn",
  "nonchar": "Huyen Nam Dan",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "nam-dinh",
  "name": "Nam Định",
  "noname": "Nam Dinh",
  "ref_id": "36",
  "full": "Tỉnh Nam Định",
  "nonchar": "Tinh Nam Dinh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "nam-dinh-356",
  "name": "Nam Định",
  "noname": "Nam Dinh",
  "ref_id": "356",
  "full": "Thành phố Nam Định",
  "nonchar": "Thanh pho Nam Dinh",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "nam-dong-483",
  "name": "Nam Đông",
  "noname": "Nam Dong",
  "ref_id": "483",
  "full": "Huyện Nam Đông",
  "nonchar": "Huyen Nam Dong",
  "type": "dist",
  "location": null,
  "path": "/thua-thien-hue/",
  "path_name": ", Tỉnh Thừa Thiên Huế"
});
db.getCollection("location").insert({
  "_id": "nam-giang-510",
  "name": "Nam Giang",
  "noname": "Nam Giang",
  "ref_id": "510",
  "full": "Huyện Nam Giang",
  "nonchar": "Huyen Nam Giang",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "nam-nhun-112",
  "name": "Nậm Nhùn",
  "noname": "Nam Nhun",
  "ref_id": "112",
  "full": "Huyện Nậm Nhùn",
  "nonchar": "Huyen Nam Nhun",
  "type": "dist",
  "location": null,
  "path": "/lai-chau/",
  "path_name": ", Tỉnh Lai Châu"
});
db.getCollection("location").insert({
  "_id": "nam-po-103",
  "name": "Nậm Pồ",
  "noname": "Nam Po",
  "ref_id": "103",
  "full": "Huyện Nậm Pồ",
  "nonchar": "Huyen Nam Po",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "nam-sach-291",
  "name": "Nam Sách",
  "noname": "Nam Sach",
  "ref_id": "291",
  "full": "Huyện Nam Sách",
  "nonchar": "Huyen Nam Sach",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "nam-tra-my-516",
  "name": "Nam Trà My",
  "noname": "Nam Tra My",
  "ref_id": "516",
  "full": "Huyện Nam Trà My",
  "nonchar": "Huyen Nam Tra My",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "nam-truc-362",
  "name": "Nam Trực",
  "noname": "Nam Truc",
  "ref_id": "362",
  "full": "Huyện Nam Trực",
  "nonchar": "Huyen Nam Truc",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "nam-tu-liem-019",
  "name": "Nam Từ Liêm",
  "noname": "Nam Tu Liem",
  "ref_id": "019",
  "full": "Quận Nam Từ Liêm",
  "nonchar": "Quan Nam Tu Liem",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "nga-bay-931",
  "name": "Ngã Bảy",
  "noname": "Nga Bay",
  "ref_id": "931",
  "full": "Thị xã Ngã Bảy",
  "nonchar": "Thi xa Nga Bay",
  "type": "dist",
  "location": null,
  "path": "/hau-giang/",
  "path_name": ", Tỉnh Hậu Giang"
});
db.getCollection("location").insert({
  "_id": "nga-nam-948",
  "name": "Ngã Năm",
  "noname": "Nga Nam",
  "ref_id": "948",
  "full": "Thị xã Ngã Năm",
  "nonchar": "Thi xa Nga Nam",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "nga-son-401",
  "name": "Nga Sơn",
  "noname": "Nga Son",
  "ref_id": "401",
  "full": "Huyện Nga Sơn",
  "nonchar": "Huyen Nga Son",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "ngan-son-062",
  "name": "Ngân Sơn",
  "noname": "Ngan Son",
  "ref_id": "062",
  "full": "Huyện Ngân Sơn",
  "nonchar": "Huyen Ngan Son",
  "type": "dist",
  "location": null,
  "path": "/bac-kan/",
  "path_name": ", Tỉnh Bắc Kạn"
});
db.getCollection("location").insert({
  "_id": "nghe-an",
  "name": "Nghệ An",
  "noname": "Nghe An",
  "ref_id": "40",
  "full": "Tỉnh Nghệ An",
  "nonchar": "Tinh Nghe An",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "nghi-loc-429",
  "name": "Nghi Lộc",
  "noname": "Nghi Loc",
  "ref_id": "429",
  "full": "Huyện Nghi Lộc",
  "nonchar": "Huyen Nghi Loc",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "nghi-xuan-442",
  "name": "Nghi Xuân",
  "noname": "Nghi Xuan",
  "ref_id": "442",
  "full": "Huyện Nghi Xuân",
  "nonchar": "Huyen Nghi Xuan",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "nghia-dan-419",
  "name": "Nghĩa Đàn",
  "noname": "Nghia Dan",
  "ref_id": "419",
  "full": "Huyện Nghĩa Đàn",
  "nonchar": "Huyen Nghia Dan",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "nghia-hanh-532",
  "name": "Nghĩa Hành",
  "noname": "Nghia Hanh",
  "ref_id": "532",
  "full": "Huyện Nghĩa Hành",
  "nonchar": "Huyen Nghia Hanh",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "nghia-hung-361",
  "name": "Nghĩa Hưng",
  "noname": "Nghia Hung",
  "ref_id": "361",
  "full": "Huyện Nghĩa Hưng",
  "nonchar": "Huyen Nghia Hung",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "nghia-lo-133",
  "name": "Nghĩa Lộ",
  "noname": "Nghia Lo",
  "ref_id": "133",
  "full": "Thị xã Nghĩa Lộ",
  "nonchar": "Thi xa Nghia Lo",
  "type": "dist",
  "location": null,
  "path": "/yen-bai/",
  "path_name": ", Tỉnh Yên Bái"
});
db.getCollection("location").insert({
  "_id": "ngo-quyen-304",
  "name": "Ngô Quyền",
  "noname": "Ngo Quyen",
  "ref_id": "304",
  "full": "Quận Ngô Quyền",
  "nonchar": "Quan Ngo Quyen",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "ngoc-hien-973",
  "name": "Ngọc Hiển",
  "noname": "Ngoc Hien",
  "ref_id": "973",
  "full": "Huyện Ngọc Hiển",
  "nonchar": "Huyen Ngoc Hien",
  "type": "dist",
  "location": null,
  "path": "/ca-mau/",
  "path_name": ", Tỉnh Cà Mau"
});
db.getCollection("location").insert({
  "_id": "ngoc-hoi-611",
  "name": "Ngọc Hồi",
  "noname": "Ngoc Hoi",
  "ref_id": "611",
  "full": "Huyện Ngọc Hồi",
  "nonchar": "Huyen Ngoc Hoi",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "ngoc-lac-389",
  "name": "Ngọc Lặc",
  "noname": "Ngoc Lac",
  "ref_id": "389",
  "full": "Huyện Ngọc Lặc",
  "nonchar": "Huyen Ngoc Lac",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "ngu-hanh-son-494",
  "name": "Ngũ Hành Sơn",
  "noname": "Ngu Hanh Son",
  "ref_id": "494",
  "full": "Quận Ngũ Hành Sơn",
  "nonchar": "Quan Ngu Hanh Son",
  "type": "dist",
  "location": null,
  "path": "/da-nang/",
  "path_name": ", Thành phố Đà Nẵng"
});
db.getCollection("location").insert({
  "_id": "nguyen-binh-052",
  "name": "Nguyên Bình",
  "noname": "Nguyen Binh",
  "ref_id": "052",
  "full": "Huyện Nguyên Bình",
  "nonchar": "Huyen Nguyen Binh",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "nha-be-786",
  "name": "Nhà Bè",
  "noname": "Nha Be",
  "ref_id": "786",
  "full": "Huyện Nhà Bè",
  "nonchar": "Huyen Nha Be",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "nha-trang-568",
  "name": "Nha Trang",
  "noname": "Nha Trang",
  "ref_id": "568",
  "full": "Thành phố Nha Trang",
  "nonchar": "Thanh pho Nha Trang",
  "type": "dist",
  "location": null,
  "path": "/khanh-hoa/",
  "path_name": ", Tỉnh Khánh Hòa"
});
db.getCollection("location").insert({
  "_id": "nho-quan-372",
  "name": "Nho Quan",
  "noname": "Nho Quan",
  "ref_id": "372",
  "full": "Huyện Nho Quan",
  "nonchar": "Huyen Nho Quan",
  "type": "dist",
  "location": null,
  "path": "/ninh-binh/",
  "path_name": ", Tỉnh Ninh Bình"
});
db.getCollection("location").insert({
  "_id": "nhon-trach-742",
  "name": "Nhơn Trạch",
  "noname": "Nhon Trach",
  "ref_id": "742",
  "full": "Huyện Nhơn Trạch",
  "nonchar": "Huyen Nhon Trach",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "nhu-thanh-403",
  "name": "Như Thanh",
  "noname": "Nhu Thanh",
  "ref_id": "403",
  "full": "Huyện Như Thanh",
  "nonchar": "Huyen Nhu Thanh",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "nhu-xuan-402",
  "name": "Như Xuân",
  "noname": "Nhu Xuan",
  "ref_id": "402",
  "full": "Huyện Như Xuân",
  "nonchar": "Huyen Nhu Xuan",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "ninh-binh",
  "name": "Ninh Bình",
  "noname": "Ninh Binh",
  "ref_id": "37",
  "full": "Tỉnh Ninh Bình",
  "nonchar": "Tinh Ninh Binh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "ninh-binh-369",
  "name": "Ninh Bình",
  "noname": "Ninh Binh",
  "ref_id": "369",
  "full": "Thành phố Ninh Bình",
  "nonchar": "Thanh pho Ninh Binh",
  "type": "dist",
  "location": null,
  "path": "/ninh-binh/",
  "path_name": ", Tỉnh Ninh Bình"
});
db.getCollection("location").insert({
  "_id": "ninh-giang-299",
  "name": "Ninh Giang",
  "noname": "Ninh Giang",
  "ref_id": "299",
  "full": "Huyện Ninh Giang",
  "nonchar": "Huyen Ninh Giang",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "ninh-hai-586",
  "name": "Ninh Hải",
  "noname": "Ninh Hai",
  "ref_id": "586",
  "full": "Huyện Ninh Hải",
  "nonchar": "Huyen Ninh Hai",
  "type": "dist",
  "location": null,
  "path": "/ninh-thuan/",
  "path_name": ", Tỉnh Ninh Thuận"
});
db.getCollection("location").insert({
  "_id": "ninh-hoa-572",
  "name": "Ninh Hòa",
  "noname": "Ninh Hoa",
  "ref_id": "572",
  "full": "Thị xã Ninh Hòa",
  "nonchar": "Thi xa Ninh Hoa",
  "type": "dist",
  "location": null,
  "path": "/khanh-hoa/",
  "path_name": ", Tỉnh Khánh Hòa"
});
db.getCollection("location").insert({
  "_id": "ninh-kieu-916",
  "name": "Ninh Kiều",
  "noname": "Ninh Kieu",
  "ref_id": "916",
  "full": "Quận Ninh Kiều",
  "nonchar": "Quan Ninh Kieu",
  "type": "dist",
  "location": null,
  "path": "/can-tho/",
  "path_name": ", Thành phố Cần Thơ"
});
db.getCollection("location").insert({
  "_id": "ninh-phuoc-587",
  "name": "Ninh Phước",
  "noname": "Ninh Phuoc",
  "ref_id": "587",
  "full": "Huyện Ninh Phước",
  "nonchar": "Huyen Ninh Phuoc",
  "type": "dist",
  "location": null,
  "path": "/ninh-thuan/",
  "path_name": ", Tỉnh Ninh Thuận"
});
db.getCollection("location").insert({
  "_id": "ninh-son-585",
  "name": "Ninh Sơn",
  "noname": "Ninh Son",
  "ref_id": "585",
  "full": "Huyện Ninh Sơn",
  "nonchar": "Huyen Ninh Son",
  "type": "dist",
  "location": null,
  "path": "/ninh-thuan/",
  "path_name": ", Tỉnh Ninh Thuận"
});
db.getCollection("location").insert({
  "_id": "ninh-thuan",
  "name": "Ninh Thuận",
  "noname": "Ninh Thuan",
  "ref_id": "58",
  "full": "Tỉnh Ninh Thuận",
  "nonchar": "Tinh Ninh Thuan",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "nong-cong-404",
  "name": "Nông Cống",
  "noname": "Nong Cong",
  "ref_id": "404",
  "full": "Huyện Nông Cống",
  "nonchar": "Huyen Nong Cong",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "nong-son-519",
  "name": "Nông Sơn",
  "noname": "Nong Son",
  "ref_id": "519",
  "full": "Huyện Nông Sơn",
  "nonchar": "Huyen Nong Son",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "nui-thanh-517",
  "name": "Núi Thành",
  "noname": "Nui Thanh",
  "ref_id": "517",
  "full": "Huyện Núi Thành",
  "nonchar": "Huyen Nui Thanh",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "o-mon-917",
  "name": "Ô Môn",
  "noname": "O Mon",
  "ref_id": "917",
  "full": "Quận Ô Môn",
  "nonchar": "Quan O Mon",
  "type": "dist",
  "location": null,
  "path": "/can-tho/",
  "path_name": ", Thành phố Cần Thơ"
});
db.getCollection("location").insert({
  "_id": "pac-nam-060",
  "name": "Pác Nặm",
  "noname": "Pac Nam",
  "ref_id": "060",
  "full": "Huyện Pác Nặm",
  "nonchar": "Huyen Pac Nam",
  "type": "dist",
  "location": null,
  "path": "/bac-kan/",
  "path_name": ", Tỉnh Bắc Kạn"
});
db.getCollection("location").insert({
  "_id": "phan-rang-thap-cham-582",
  "name": "Phan Rang-Tháp Chàm",
  "noname": "Phan Rang-Thap Cham",
  "ref_id": "582",
  "full": "Thành phố Phan Rang-Tháp Chàm",
  "nonchar": "Thanh pho Phan Rang-Thap Cham",
  "type": "dist",
  "location": null,
  "path": "/ninh-thuan/",
  "path_name": ", Tỉnh Ninh Thuận"
});
db.getCollection("location").insert({
  "_id": "phan-thiet-593",
  "name": "Phan Thiết",
  "noname": "Phan Thiet",
  "ref_id": "593",
  "full": "Thành phố Phan Thiết",
  "nonchar": "Thanh pho Phan Thiet",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "pho-yen-172",
  "name": "Phổ Yên",
  "noname": "Pho Yen",
  "ref_id": "172",
  "full": "Thị xã Phổ Yên",
  "nonchar": "Thi xa Pho Yen",
  "type": "dist",
  "location": null,
  "path": "/thai-nguyen/",
  "path_name": ", Tỉnh Thái Nguyên"
});
db.getCollection("location").insert({
  "_id": "phong-dien-476",
  "name": "Phong Điền",
  "noname": "Phong Dien",
  "ref_id": "476",
  "full": "Huyện Phong Điền",
  "nonchar": "Huyen Phong Dien",
  "type": "dist",
  "location": null,
  "path": "/thua-thien-hue/",
  "path_name": ", Tỉnh Thừa Thiên Huế"
});
db.getCollection("location").insert({
  "_id": "phong-dien-926",
  "name": "Phong Điền",
  "noname": "Phong Dien",
  "ref_id": "926",
  "full": "Huyện Phong Điền",
  "nonchar": "Huyen Phong Dien",
  "type": "dist",
  "location": null,
  "path": "/can-tho/",
  "path_name": ", Thành phố Cần Thơ"
});
db.getCollection("location").insert({
  "_id": "phong-tho-109",
  "name": "Phong Thổ",
  "noname": "Phong Tho",
  "ref_id": "109",
  "full": "Huyện Phong Thổ",
  "nonchar": "Huyen Phong Tho",
  "type": "dist",
  "location": null,
  "path": "/lai-chau/",
  "path_name": ", Tỉnh Lai Châu"
});
db.getCollection("location").insert({
  "_id": "phu-binh-173",
  "name": "Phú Bình",
  "noname": "Phu Binh",
  "ref_id": "173",
  "full": "Huyện Phú Bình",
  "nonchar": "Huyen Phu Binh",
  "type": "dist",
  "location": null,
  "path": "/thai-nguyen/",
  "path_name": ", Tỉnh Thái Nguyên"
});
db.getCollection("location").insert({
  "_id": "phu-cat-548",
  "name": "Phù Cát",
  "noname": "Phu Cat",
  "ref_id": "548",
  "full": "Huyện Phù Cát",
  "nonchar": "Huyen Phu Cat",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "phu-cu-333",
  "name": "Phù Cừ",
  "noname": "Phu Cu",
  "ref_id": "333",
  "full": "Huyện Phù Cừ",
  "nonchar": "Huyen Phu Cu",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "phu-giao-722",
  "name": "Phú Giáo",
  "noname": "Phu Giao",
  "ref_id": "722",
  "full": "Huyện Phú Giáo",
  "nonchar": "Huyen Phu Giao",
  "type": "dist",
  "location": null,
  "path": "/binh-duong/",
  "path_name": ", Tỉnh Bình Dương"
});
db.getCollection("location").insert({
  "_id": "phu-hoa-563",
  "name": "Phú Hòa",
  "noname": "Phu Hoa",
  "ref_id": "563",
  "full": "Huyện Phú Hòa",
  "nonchar": "Huyen Phu Hoa",
  "type": "dist",
  "location": null,
  "path": "/phu-yen/",
  "path_name": ", Tỉnh Phú Yên"
});
db.getCollection("location").insert({
  "_id": "phu-loc-482",
  "name": "Phú Lộc",
  "noname": "Phu Loc",
  "ref_id": "482",
  "full": "Huyện Phú Lộc",
  "nonchar": "Huyen Phu Loc",
  "type": "dist",
  "location": null,
  "path": "/thua-thien-hue/",
  "path_name": ", Tỉnh Thừa Thiên Huế"
});
db.getCollection("location").insert({
  "_id": "phu-luong-168",
  "name": "Phú Lương",
  "noname": "Phu Luong",
  "ref_id": "168",
  "full": "Huyện Phú Lương",
  "nonchar": "Huyen Phu Luong",
  "type": "dist",
  "location": null,
  "path": "/thai-nguyen/",
  "path_name": ", Tỉnh Thái Nguyên"
});
db.getCollection("location").insert({
  "_id": "phu-ly-347",
  "name": "Phủ Lý",
  "noname": "Phu Ly",
  "ref_id": "347",
  "full": "Thành phố Phủ Lý",
  "nonchar": "Thanh pho Phu Ly",
  "type": "dist",
  "location": null,
  "path": "/ha-nam/",
  "path_name": ", Tỉnh Hà Nam"
});
db.getCollection("location").insert({
  "_id": "phu-my-545",
  "name": "Phù Mỹ",
  "noname": "Phu My",
  "ref_id": "545",
  "full": "Huyện Phù Mỹ",
  "nonchar": "Huyen Phu My",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "phu-nhuan-768",
  "name": "Phú Nhuận",
  "noname": "Phu Nhuan",
  "ref_id": "768",
  "full": "Quận Phú Nhuận",
  "nonchar": "Quan Phu Nhuan",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "phu-ninh-233",
  "name": "Phù Ninh",
  "noname": "Phu Ninh",
  "ref_id": "233",
  "full": "Huyện Phù Ninh",
  "nonchar": "Huyen Phu Ninh",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "phu-ninh-518",
  "name": "Phú Ninh",
  "noname": "Phu Ninh",
  "ref_id": "518",
  "full": "Huyện Phú Ninh",
  "nonchar": "Huyen Phu Ninh",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "phu-qui-602",
  "name": "Phú Quí",
  "noname": "Phu Qui",
  "ref_id": "602",
  "full": "Huyện Phú Quí",
  "nonchar": "Huyen Phu Qui",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "phu-quoc-911",
  "name": "Phú Quốc",
  "noname": "Phu Quoc",
  "ref_id": "911",
  "full": "Huyện Phú Quốc",
  "nonchar": "Huyen Phu Quoc",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "phu-rieng-698",
  "name": "Phú Riềng",
  "noname": "Phu Rieng",
  "ref_id": "698",
  "full": "Huyện Phú Riềng",
  "nonchar": "Huyen Phu Rieng",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "phu-tan-888",
  "name": "Phú Tân",
  "noname": "Phu Tan",
  "ref_id": "888",
  "full": "Huyện Phú Tân",
  "nonchar": "Huyen Phu Tan",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "phu-tan-972",
  "name": "Phú Tân",
  "noname": "Phu Tan",
  "ref_id": "972",
  "full": "Huyện Phú Tân",
  "nonchar": "Huyen Phu Tan",
  "type": "dist",
  "location": null,
  "path": "/ca-mau/",
  "path_name": ", Tỉnh Cà Mau"
});
db.getCollection("location").insert({
  "_id": "phu-thien-638",
  "name": "Phú Thiện",
  "noname": "Phu Thien",
  "ref_id": "638",
  "full": "Huyện Phú Thiện",
  "nonchar": "Huyen Phu Thien",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "phu-tho",
  "name": "Phú Thọ",
  "noname": "Phu Tho",
  "ref_id": "25",
  "full": "Tỉnh Phú Thọ",
  "nonchar": "Tinh Phu Tho",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "phu-tho-228",
  "name": "Phú Thọ",
  "noname": "Phu Tho",
  "ref_id": "228",
  "full": "Thị xã Phú Thọ",
  "nonchar": "Thi xa Phu Tho",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "phu-vang-478",
  "name": "Phú Vang",
  "noname": "Phu Vang",
  "ref_id": "478",
  "full": "Huyện Phú Vang",
  "nonchar": "Huyen Phu Vang",
  "type": "dist",
  "location": null,
  "path": "/thua-thien-hue/",
  "path_name": ", Tỉnh Thừa Thiên Huế"
});
db.getCollection("location").insert({
  "_id": "phu-xuyen-280",
  "name": "Phú Xuyên",
  "noname": "Phu Xuyen",
  "ref_id": "280",
  "full": "Huyện Phú Xuyên",
  "nonchar": "Huyen Phu Xuyen",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "phu-yen",
  "name": "Phú Yên",
  "noname": "Phu Yen",
  "ref_id": "54",
  "full": "Tỉnh Phú Yên",
  "nonchar": "Tinh Phu Yen",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "phu-yen-122",
  "name": "Phù Yên",
  "noname": "Phu Yen",
  "ref_id": "122",
  "full": "Huyện Phù Yên",
  "nonchar": "Huyen Phu Yen",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "phuc-hoa-050",
  "name": "Phục Hòa",
  "noname": "Phuc Hoa",
  "ref_id": "050",
  "full": "Huyện Phục Hòa",
  "nonchar": "Huyen Phuc Hoa",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "phuc-tho-272",
  "name": "Phúc Thọ",
  "noname": "Phuc Tho",
  "ref_id": "272",
  "full": "Huyện Phúc Thọ",
  "nonchar": "Huyen Phuc Tho",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "phuc-yen-244",
  "name": "Phúc Yên",
  "noname": "Phuc Yen",
  "ref_id": "244",
  "full": "Thị xã Phúc Yên",
  "nonchar": "Thi xa Phuc Yen",
  "type": "dist",
  "location": null,
  "path": "/vinh-phuc/",
  "path_name": ", Tỉnh Vĩnh Phúc"
});
db.getCollection("location").insert({
  "_id": "phung-hiep-934",
  "name": "Phụng Hiệp",
  "noname": "Phung Hiep",
  "ref_id": "934",
  "full": "Huyện Phụng Hiệp",
  "nonchar": "Huyen Phung Hiep",
  "type": "dist",
  "location": null,
  "path": "/hau-giang/",
  "path_name": ", Tỉnh Hậu Giang"
});
db.getCollection("location").insert({
  "_id": "phuoc-long-688",
  "name": "Phước Long",
  "noname": "Phuoc Long",
  "ref_id": "688",
  "full": "Thị xã Phước Long",
  "nonchar": "Thi xa Phuoc Long",
  "type": "dist",
  "location": null,
  "path": "/binh-phuoc/",
  "path_name": ", Tỉnh Bình Phước"
});
db.getCollection("location").insert({
  "_id": "phuoc-long-957",
  "name": "Phước Long",
  "noname": "Phuoc Long",
  "ref_id": "957",
  "full": "Huyện Phước Long",
  "nonchar": "Huyen Phuoc Long",
  "type": "dist",
  "location": null,
  "path": "/bac-lieu/",
  "path_name": ", Tỉnh Bạc Liêu"
});
db.getCollection("location").insert({
  "_id": "phuoc-son-511",
  "name": "Phước Sơn",
  "noname": "Phuoc Son",
  "ref_id": "511",
  "full": "Huyện Phước Sơn",
  "nonchar": "Huyen Phuoc Son",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "pleiku-622",
  "name": "Pleiku",
  "noname": "Pleiku",
  "ref_id": "622",
  "full": "Thành phố Pleiku",
  "nonchar": "Thanh pho Pleiku",
  "type": "dist",
  "location": null,
  "path": "/gia-lai/",
  "path_name": ", Tỉnh Gia Lai"
});
db.getCollection("location").insert({
  "_id": "quan-ba-029",
  "name": "Quản Bạ",
  "noname": "Quan Ba",
  "ref_id": "029",
  "full": "Huyện Quản Bạ",
  "nonchar": "Huyen Quan Ba",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "quan-hoa-385",
  "name": "Quan Hóa",
  "noname": "Quan Hoa",
  "ref_id": "385",
  "full": "Huyện Quan Hóa",
  "nonchar": "Huyen Quan Hoa",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "quan-son-387",
  "name": "Quan Sơn",
  "noname": "Quan Son",
  "ref_id": "387",
  "full": "Huyện Quan Sơn",
  "nonchar": "Huyen Quan Son",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "quang-binh",
  "name": "Quảng Bình",
  "noname": "Quang Binh",
  "ref_id": "44",
  "full": "Tỉnh Quảng Bình",
  "nonchar": "Tinh Quang Binh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "quang-binh-035",
  "name": "Quang Bình",
  "noname": "Quang Binh",
  "ref_id": "035",
  "full": "Huyện Quang Bình",
  "nonchar": "Huyen Quang Binh",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "quang-dien-477",
  "name": "Quảng Điền",
  "noname": "Quang Dien",
  "ref_id": "477",
  "full": "Huyện Quảng Điền",
  "nonchar": "Huyen Quang Dien",
  "type": "dist",
  "location": null,
  "path": "/thua-thien-hue/",
  "path_name": ", Tỉnh Thừa Thiên Huế"
});
db.getCollection("location").insert({
  "_id": "quang-nam",
  "name": "Quảng Nam",
  "noname": "Quang Nam",
  "ref_id": "49",
  "full": "Tỉnh Quảng Nam",
  "nonchar": "Tinh Quang Nam",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "quang-ngai",
  "name": "Quảng Ngãi",
  "noname": "Quang Ngai",
  "ref_id": "51",
  "full": "Tỉnh Quảng Ngãi",
  "nonchar": "Tinh Quang Ngai",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "quang-ngai-522",
  "name": "Quảng Ngãi",
  "noname": "Quang Ngai",
  "ref_id": "522",
  "full": "Thành phố Quảng Ngãi",
  "nonchar": "Thanh pho Quang Ngai",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "quang-ninh",
  "name": "Quảng Ninh",
  "noname": "Quang Ninh",
  "ref_id": "22",
  "full": "Tỉnh Quảng Ninh",
  "nonchar": "Tinh Quang Ninh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "quang-ninh-456",
  "name": "Quảng Ninh",
  "noname": "Quang Ninh",
  "ref_id": "456",
  "full": "Huyện Quảng Ninh",
  "nonchar": "Huyen Quang Ninh",
  "type": "dist",
  "location": null,
  "path": "/quang-binh/",
  "path_name": ", Tỉnh Quảng Bình"
});
db.getCollection("location").insert({
  "_id": "quang-trach-458",
  "name": "Quảng Trạch",
  "noname": "Quang Trach",
  "ref_id": "458",
  "full": "Huyện Quảng Trạch",
  "nonchar": "Huyen Quang Trach",
  "type": "dist",
  "location": null,
  "path": "/quang-binh/",
  "path_name": ", Tỉnh Quảng Bình"
});
db.getCollection("location").insert({
  "_id": "quang-tri",
  "name": "Quảng Trị",
  "noname": "Quang Tri",
  "ref_id": "45",
  "full": "Tỉnh Quảng Trị",
  "nonchar": "Tinh Quang Tri",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "quang-tri-462",
  "name": "Quảng Trị",
  "noname": "Quang Tri",
  "ref_id": "462",
  "full": "Thị xã Quảng Trị",
  "nonchar": "Thi xa Quang Tri",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "quang-uyen-049",
  "name": "Quảng Uyên",
  "noname": "Quang Uyen",
  "ref_id": "049",
  "full": "Huyện Quảng Uyên",
  "nonchar": "Huyen Quang Uyen",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "quang-xuong-406",
  "name": "Quảng Xương",
  "noname": "Quang Xuong",
  "ref_id": "406",
  "full": "Huyện Quảng Xương",
  "nonchar": "Huyen Quang Xuong",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "quang-yen-206",
  "name": "Quảng Yên",
  "noname": "Quang Yen",
  "ref_id": "206",
  "full": "Thị xã Quảng Yên",
  "nonchar": "Thi xa Quang Yen",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "que-phong-415",
  "name": "Quế Phong",
  "noname": "Que Phong",
  "ref_id": "415",
  "full": "Huyện Quế Phong",
  "nonchar": "Huyen Que Phong",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "que-son-509",
  "name": "Quế Sơn",
  "noname": "Que Son",
  "ref_id": "509",
  "full": "Huyện Quế Sơn",
  "nonchar": "Huyen Que Son",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "que-vo-259",
  "name": "Quế Võ",
  "noname": "Que Vo",
  "ref_id": "259",
  "full": "Huyện Quế Võ",
  "nonchar": "Huyen Que Vo",
  "type": "dist",
  "location": null,
  "path": "/bac-ninh/",
  "path_name": ", Tỉnh Bắc Ninh"
});
db.getCollection("location").insert({
  "_id": "quoc-oai-275",
  "name": "Quốc Oai",
  "noname": "Quoc Oai",
  "ref_id": "275",
  "full": "Huyện Quốc Oai",
  "nonchar": "Huyen Quoc Oai",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "quy-chau-416",
  "name": "Quỳ Châu",
  "noname": "Quy Chau",
  "ref_id": "416",
  "full": "Huyện Quỳ Châu",
  "nonchar": "Huyen Quy Chau",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "quy-hop-420",
  "name": "Quỳ Hợp",
  "noname": "Quy Hop",
  "ref_id": "420",
  "full": "Huyện Quỳ Hợp",
  "nonchar": "Huyen Quy Hop",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "quy-nhon-540",
  "name": "Quy Nhơn",
  "noname": "Quy Nhon",
  "ref_id": "540",
  "full": "Thành phố Qui Nhơn",
  "nonchar": "Thanh pho Qui Nhon",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "quynh-luu-421",
  "name": "Quỳnh Lưu",
  "noname": "Quynh Luu",
  "ref_id": "421",
  "full": "Huyện Quỳnh Lưu",
  "nonchar": "Huyen Quynh Luu",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "quynh-nhai-118",
  "name": "Quỳnh Nhai",
  "noname": "Quynh Nhai",
  "ref_id": "118",
  "full": "Huyện Quỳnh Nhai",
  "nonchar": "Huyen Quynh Nhai",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "quynh-phu-338",
  "name": "Quỳnh Phụ",
  "noname": "Quynh Phu",
  "ref_id": "338",
  "full": "Huyện Quỳnh Phụ",
  "nonchar": "Huyen Quynh Phu",
  "type": "dist",
  "location": null,
  "path": "/thai-binh/",
  "path_name": ", Tỉnh Thái Bình"
});
db.getCollection("location").insert({
  "_id": "rach-gia-899",
  "name": "Rạch Giá",
  "noname": "Rach Gia",
  "ref_id": "899",
  "full": "Thành phố Rạch Giá",
  "nonchar": "Thanh pho Rach Gia",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "sa-dec-867",
  "name": "Sa Đéc",
  "noname": "Sa Dec",
  "ref_id": "867",
  "full": "Thành phố Sa Đéc",
  "nonchar": "Thanh pho Sa Dec",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "sa-pa-088",
  "name": "Sa Pa",
  "noname": "Sa Pa",
  "ref_id": "088",
  "full": "Huyện Sa Pa",
  "nonchar": "Huyen Sa Pa",
  "type": "dist",
  "location": null,
  "path": "/lao-cai/",
  "path_name": ", Tỉnh Lào Cai"
});
db.getCollection("location").insert({
  "_id": "sa-thay-616",
  "name": "Sa Thầy",
  "noname": "Sa Thay",
  "ref_id": "616",
  "full": "Huyện Sa Thầy",
  "nonchar": "Huyen Sa Thay",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "sam-son-382",
  "name": "Sầm Sơn",
  "noname": "Sam Son",
  "ref_id": "382",
  "full": "Thị xã Sầm Sơn",
  "nonchar": "Thi xa Sam Son",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "si-ma-cai-084",
  "name": "Si Ma Cai",
  "noname": "Si Ma Cai",
  "ref_id": "084",
  "full": "Huyện Si Ma Cai",
  "nonchar": "Huyen Si Ma Cai",
  "type": "dist",
  "location": null,
  "path": "/lao-cai/",
  "path_name": ", Tỉnh Lào Cai"
});
db.getCollection("location").insert({
  "_id": "sin-ho-108",
  "name": "Sìn Hồ",
  "noname": "Sin Ho",
  "ref_id": "108",
  "full": "Huyện Sìn Hồ",
  "nonchar": "Huyen Sin Ho",
  "type": "dist",
  "location": null,
  "path": "/lai-chau/",
  "path_name": ", Tỉnh Lai Châu"
});
db.getCollection("location").insert({
  "_id": "soc-son-016",
  "name": "Sóc Sơn",
  "noname": "Soc Son",
  "ref_id": "016",
  "full": "Huyện Sóc Sơn",
  "nonchar": "Huyen Soc Son",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "soc-trang",
  "name": "Sóc Trăng",
  "noname": "Soc Trang",
  "ref_id": "94",
  "full": "Tỉnh Sóc Trăng",
  "nonchar": "Tinh Soc Trang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "soc-trang-941",
  "name": "Sóc Trăng",
  "noname": "Soc Trang",
  "ref_id": "941",
  "full": "Thành phố Sóc Trăng",
  "nonchar": "Thanh pho Soc Trang",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "son-dong-220",
  "name": "Sơn Động",
  "noname": "Son Dong",
  "ref_id": "220",
  "full": "Huyện Sơn Động",
  "nonchar": "Huyen Son Dong",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "son-duong-076",
  "name": "Sơn Dương",
  "noname": "Son Duong",
  "ref_id": "076",
  "full": "Huyện Sơn Dương",
  "nonchar": "Huyen Son Duong",
  "type": "dist",
  "location": null,
  "path": "/tuyen-quang/",
  "path_name": ", Tỉnh Tuyên Quang"
});
db.getCollection("location").insert({
  "_id": "son-ha-529",
  "name": "Sơn Hà",
  "noname": "Son Ha",
  "ref_id": "529",
  "full": "Huyện Sơn Hà",
  "nonchar": "Huyen Son Ha",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "son-hoa-560",
  "name": "Sơn Hòa",
  "noname": "Son Hoa",
  "ref_id": "560",
  "full": "Huyện Sơn Hòa",
  "nonchar": "Huyen Son Hoa",
  "type": "dist",
  "location": null,
  "path": "/phu-yen/",
  "path_name": ", Tỉnh Phú Yên"
});
db.getCollection("location").insert({
  "_id": "son-la",
  "name": "Sơn La",
  "noname": "Son La",
  "ref_id": "14",
  "full": "Tỉnh Sơn La",
  "nonchar": "Tinh Son La",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "son-la-116",
  "name": "Sơn La",
  "noname": "Son La",
  "ref_id": "116",
  "full": "Thành phố Sơn La",
  "nonchar": "Thanh pho Son La",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "son-tay-269",
  "name": "Sơn Tây",
  "noname": "Son Tay",
  "ref_id": "269",
  "full": "Thị xã Sơn Tây",
  "nonchar": "Thi xa Son Tay",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "son-tay-530",
  "name": "Sơn Tây",
  "noname": "Son Tay",
  "ref_id": "530",
  "full": "Huyện Sơn Tây",
  "nonchar": "Huyen Son Tay",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "son-tinh-527",
  "name": "Sơn Tịnh",
  "noname": "Son Tinh",
  "ref_id": "527",
  "full": "Huyện Sơn Tịnh",
  "nonchar": "Huyen Son Tinh",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "son-tra-493",
  "name": "Sơn Trà",
  "noname": "Son Tra",
  "ref_id": "493",
  "full": "Quận Sơn Trà",
  "nonchar": "Quan Son Tra",
  "type": "dist",
  "location": null,
  "path": "/da-nang/",
  "path_name": ", Thành phố Đà Nẵng"
});
db.getCollection("location").insert({
  "_id": "song-cau-557",
  "name": "Sông Cầu",
  "noname": "Song Cau",
  "ref_id": "557",
  "full": "Thị xã Sông Cầu",
  "nonchar": "Thi xa Song Cau",
  "type": "dist",
  "location": null,
  "path": "/phu-yen/",
  "path_name": ", Tỉnh Phú Yên"
});
db.getCollection("location").insert({
  "_id": "song-cong-165",
  "name": "Sông Công",
  "noname": "Song Cong",
  "ref_id": "165",
  "full": "Thành phố Sông Công",
  "nonchar": "Thanh pho Song Cong",
  "type": "dist",
  "location": null,
  "path": "/thai-nguyen/",
  "path_name": ", Tỉnh Thái Nguyên"
});
db.getCollection("location").insert({
  "_id": "song-hinh-561",
  "name": "Sông Hinh",
  "noname": "Song Hinh",
  "ref_id": "561",
  "full": "Huyện Sông Hinh",
  "nonchar": "Huyen Song Hinh",
  "type": "dist",
  "location": null,
  "path": "/phu-yen/",
  "path_name": ", Tỉnh Phú Yên"
});
db.getCollection("location").insert({
  "_id": "song-lo-253",
  "name": "Sông Lô",
  "noname": "Song Lo",
  "ref_id": "253",
  "full": "Huyện Sông Lô",
  "nonchar": "Huyen Song Lo",
  "type": "dist",
  "location": null,
  "path": "/vinh-phuc/",
  "path_name": ", Tỉnh Vĩnh Phúc"
});
db.getCollection("location").insert({
  "_id": "song-ma-126",
  "name": "Sông Mã",
  "noname": "Song Ma",
  "ref_id": "126",
  "full": "Huyện Sông Mã",
  "nonchar": "Huyen Song Ma",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "sop-cop-127",
  "name": "Sốp Cộp",
  "noname": "Sop Cop",
  "ref_id": "127",
  "full": "Huyện Sốp Cộp",
  "nonchar": "Huyen Sop Cop",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "tam-binh-860",
  "name": "Tam Bình",
  "noname": "Tam Binh",
  "ref_id": "860",
  "full": "Huyện Tam Bình",
  "nonchar": "Huyen Tam Binh",
  "type": "dist",
  "location": null,
  "path": "/vinh-long/",
  "path_name": ", Tỉnh Vĩnh Long"
});
db.getCollection("location").insert({
  "_id": "tam-dao-248",
  "name": "Tam Đảo",
  "noname": "Tam Dao",
  "ref_id": "248",
  "full": "Huyện Tam Đảo",
  "nonchar": "Huyen Tam Dao",
  "type": "dist",
  "location": null,
  "path": "/vinh-phuc/",
  "path_name": ", Tỉnh Vĩnh Phúc"
});
db.getCollection("location").insert({
  "_id": "tam-diep-370",
  "name": "Tam Điệp",
  "noname": "Tam Diep",
  "ref_id": "370",
  "full": "Thành phố Tam Điệp",
  "nonchar": "Thanh pho Tam Diep",
  "type": "dist",
  "location": null,
  "path": "/ninh-binh/",
  "path_name": ", Tỉnh Ninh Bình"
});
db.getCollection("location").insert({
  "_id": "tam-duong-106",
  "name": "Tam Đường",
  "noname": "Tam Duong",
  "ref_id": "106",
  "full": "Huyện Tam Đường",
  "nonchar": "Huyen Tam Duong",
  "type": "dist",
  "location": null,
  "path": "/lai-chau/",
  "path_name": ", Tỉnh Lai Châu"
});
db.getCollection("location").insert({
  "_id": "tam-duong-247",
  "name": "Tam Dương",
  "noname": "Tam Duong",
  "ref_id": "247",
  "full": "Huyện Tam Dương",
  "nonchar": "Huyen Tam Duong",
  "type": "dist",
  "location": null,
  "path": "/vinh-phuc/",
  "path_name": ", Tỉnh Vĩnh Phúc"
});
db.getCollection("location").insert({
  "_id": "tam-ky-502",
  "name": "Tam Kỳ",
  "noname": "Tam Ky",
  "ref_id": "502",
  "full": "Thành phố Tam Kỳ",
  "nonchar": "Thanh pho Tam Ky",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "tam-nong-236",
  "name": "Tam Nông",
  "noname": "Tam Nong",
  "ref_id": "236",
  "full": "Huyện Tam Nông",
  "nonchar": "Huyen Tam Nong",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "tam-nong-871",
  "name": "Tam Nông",
  "noname": "Tam Nong",
  "ref_id": "871",
  "full": "Huyện Tam Nông",
  "nonchar": "Huyen Tam Nong",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "tan-an-794",
  "name": "Tân An",
  "noname": "Tan An",
  "ref_id": "794",
  "full": "Thành phố Tân An",
  "nonchar": "Thanh pho Tan An",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "tan-bien-705",
  "name": "Tân Biên",
  "noname": "Tan Bien",
  "ref_id": "705",
  "full": "Huyện Tân Biên",
  "nonchar": "Huyen Tan Bien",
  "type": "dist",
  "location": null,
  "path": "/tay-ninh/",
  "path_name": ", Tỉnh Tây Ninh"
});
db.getCollection("location").insert({
  "_id": "tan-binh-766",
  "name": "Tân Bình",
  "noname": "Tan Binh",
  "ref_id": "766",
  "full": "Quận Tân Bình",
  "nonchar": "Quan Tan Binh",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "tan-chau-706",
  "name": "Tân Châu",
  "noname": "Tan Chau",
  "ref_id": "706",
  "full": "Huyện Tân Châu",
  "nonchar": "Huyen Tan Chau",
  "type": "dist",
  "location": null,
  "path": "/tay-ninh/",
  "path_name": ", Tỉnh Tây Ninh"
});
db.getCollection("location").insert({
  "_id": "tan-chau-887",
  "name": "Tân Châu",
  "noname": "Tan Chau",
  "ref_id": "887",
  "full": "Thị xã Tân Châu",
  "nonchar": "Thi xa Tan Chau",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "tan-hiep-904",
  "name": "Tân Hiệp",
  "noname": "Tan Hiep",
  "ref_id": "904",
  "full": "Huyện Tân Hiệp",
  "nonchar": "Huyen Tan Hiep",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "tan-hong-869",
  "name": "Tân Hồng",
  "noname": "Tan Hong",
  "ref_id": "869",
  "full": "Huyện Tân Hồng",
  "nonchar": "Huyen Tan Hong",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "tan-hung-796",
  "name": "Tân Hưng",
  "noname": "Tan Hung",
  "ref_id": "796",
  "full": "Huyện Tân Hưng",
  "nonchar": "Huyen Tan Hung",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "tan-ky-423",
  "name": "Tân Kỳ",
  "noname": "Tan Ky",
  "ref_id": "423",
  "full": "Huyện Tân Kỳ",
  "nonchar": "Huyen Tan Ky",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "tan-lac-155",
  "name": "Tân Lạc",
  "noname": "Tan Lac",
  "ref_id": "155",
  "full": "Huyện Tân Lạc",
  "nonchar": "Huyen Tan Lac",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});
db.getCollection("location").insert({
  "_id": "tan-phu-734",
  "name": "Tân Phú",
  "noname": "Tan Phu",
  "ref_id": "734",
  "full": "Huyện Tân Phú",
  "nonchar": "Huyen Tan Phu",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "tan-phu-767",
  "name": "Tân Phú",
  "noname": "Tan Phu",
  "ref_id": "767",
  "full": "Quận Tân Phú",
  "nonchar": "Quan Tan Phu",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "tan-phu-dong-825",
  "name": "Tân Phú Đông",
  "noname": "Tan Phu Dong",
  "ref_id": "825",
  "full": "Huyện Tân Phú Đông",
  "nonchar": "Huyen Tan Phu Dong",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "tan-phuoc-818",
  "name": "Tân Phước",
  "noname": "Tan Phuoc",
  "ref_id": "818",
  "full": "Huyện Tân Phước",
  "nonchar": "Huyen Tan Phuoc",
  "type": "dist",
  "location": null,
  "path": "/tien-giang/",
  "path_name": ", Tỉnh Tiền Giang"
});
db.getCollection("location").insert({
  "_id": "tan-son-240",
  "name": "Tân Sơn",
  "noname": "Tan Son",
  "ref_id": "240",
  "full": "Huyện Tân Sơn",
  "nonchar": "Huyen Tan Son",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "tan-thanh-754",
  "name": "Tân Thành",
  "noname": "Tan Thanh",
  "ref_id": "754",
  "full": "Huyện Tân Thành",
  "nonchar": "Huyen Tan Thanh",
  "type": "dist",
  "location": null,
  "path": "/ba-ria-vung-tau/",
  "path_name": ", Tỉnh Bà Rịa - Vũng Tàu"
});
db.getCollection("location").insert({
  "_id": "tan-thanh-799",
  "name": "Tân Thạnh",
  "noname": "Tan Thanh",
  "ref_id": "799",
  "full": "Huyện Tân Thạnh",
  "nonchar": "Huyen Tan Thanh",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "tan-tru-805",
  "name": "Tân Trụ",
  "noname": "Tan Tru",
  "ref_id": "805",
  "full": "Huyện Tân Trụ",
  "nonchar": "Huyen Tan Tru",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "tan-uyen-111",
  "name": "Tân Uyên",
  "noname": "Tan Uyen",
  "ref_id": "111",
  "full": "Huyện Tân Uyên",
  "nonchar": "Huyen Tan Uyen",
  "type": "dist",
  "location": null,
  "path": "/lai-chau/",
  "path_name": ", Tỉnh Lai Châu"
});
db.getCollection("location").insert({
  "_id": "tan-uyen-723",
  "name": "Tân Uyên",
  "noname": "Tan Uyen",
  "ref_id": "723",
  "full": "Thị xã Tân Uyên",
  "nonchar": "Thi xa Tan Uyen",
  "type": "dist",
  "location": null,
  "path": "/binh-duong/",
  "path_name": ", Tỉnh Bình Dương"
});
db.getCollection("location").insert({
  "_id": "tan-yen-216",
  "name": "Tân Yên",
  "noname": "Tan Yen",
  "ref_id": "216",
  "full": "Huyện Tân Yên",
  "nonchar": "Huyen Tan Yen",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "tanh-linh-599",
  "name": "Tánh Linh",
  "noname": "Tanh Linh",
  "ref_id": "599",
  "full": "Huyện Tánh Linh",
  "nonchar": "Huyen Tanh Linh",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "tay-giang-504",
  "name": "Tây Giang",
  "noname": "Tay Giang",
  "ref_id": "504",
  "full": "Huyện Tây Giang",
  "nonchar": "Huyen Tay Giang",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "tay-ho-003",
  "name": "Tây Hồ",
  "noname": "Tay Ho",
  "ref_id": "003",
  "full": "Quận Tây Hồ",
  "nonchar": "Quan Tay Ho",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "tay-hoa-562",
  "name": "Tây Hòa",
  "noname": "Tay Hoa",
  "ref_id": "562",
  "full": "Huyện Tây Hòa",
  "nonchar": "Huyen Tay Hoa",
  "type": "dist",
  "location": null,
  "path": "/phu-yen/",
  "path_name": ", Tỉnh Phú Yên"
});
db.getCollection("location").insert({
  "_id": "tay-ninh",
  "name": "Tây Ninh",
  "noname": "Tay Ninh",
  "ref_id": "72",
  "full": "Tỉnh Tây Ninh",
  "nonchar": "Tinh Tay Ninh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "tay-ninh-703",
  "name": "Tây Ninh",
  "noname": "Tay Ninh",
  "ref_id": "703",
  "full": "Thành phố Tây Ninh",
  "nonchar": "Thanh pho Tay Ninh",
  "type": "dist",
  "location": null,
  "path": "/tay-ninh/",
  "path_name": ", Tỉnh Tây Ninh"
});
db.getCollection("location").insert({
  "_id": "tay-son-547",
  "name": "Tây Sơn",
  "noname": "Tay Son",
  "ref_id": "547",
  "full": "Huyện Tây Sơn",
  "nonchar": "Huyen Tay Son",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "tay-tra-526",
  "name": "Tây Trà",
  "noname": "Tay Tra",
  "ref_id": "526",
  "full": "Huyện Tây Trà",
  "nonchar": "Huyen Tay Tra",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "thach-an-053",
  "name": "Thạch An",
  "noname": "Thach An",
  "ref_id": "053",
  "full": "Huyện Thạch An",
  "nonchar": "Huyen Thach An",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "thach-ha-445",
  "name": "Thạch Hà",
  "noname": "Thach Ha",
  "ref_id": "445",
  "full": "Huyện Thạch Hà",
  "nonchar": "Huyen Thach Ha",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "thach-thanh-391",
  "name": "Thạch Thành",
  "noname": "Thach Thanh",
  "ref_id": "391",
  "full": "Huyện Thạch Thành",
  "nonchar": "Huyen Thach Thanh",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "thach-that-276",
  "name": "Thạch Thất",
  "noname": "Thach That",
  "ref_id": "276",
  "full": "Huyện Thạch Thất",
  "nonchar": "Huyen Thach That",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "thai-binh",
  "name": "Thái Bình",
  "noname": "Thai Binh",
  "ref_id": "34",
  "full": "Tỉnh Thái Bình",
  "nonchar": "Tinh Thai Binh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "thai-binh-336",
  "name": "Thái Bình",
  "noname": "Thai Binh",
  "ref_id": "336",
  "full": "Thành phố Thái Bình",
  "nonchar": "Thanh pho Thai Binh",
  "type": "dist",
  "location": null,
  "path": "/thai-binh/",
  "path_name": ", Tỉnh Thái Bình"
});
db.getCollection("location").insert({
  "_id": "thai-hoa-414",
  "name": "Thái Hòa",
  "noname": "Thai Hoa",
  "ref_id": "414",
  "full": "Thị xã Thái Hòa",
  "nonchar": "Thi xa Thai Hoa",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "thai-nguyen",
  "name": "Thái Nguyên",
  "noname": "Thai Nguyen",
  "ref_id": "19",
  "full": "Tỉnh Thái Nguyên",
  "nonchar": "Tinh Thai Nguyen",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "thai-nguyen-164",
  "name": "Thái Nguyên",
  "noname": "Thai Nguyen",
  "ref_id": "164",
  "full": "Thành phố Thái Nguyên",
  "nonchar": "Thanh pho Thai Nguyen",
  "type": "dist",
  "location": null,
  "path": "/thai-nguyen/",
  "path_name": ", Tỉnh Thái Nguyên"
});
db.getCollection("location").insert({
  "_id": "thai-thuy-341",
  "name": "Thái Thụy",
  "noname": "Thai Thuy",
  "ref_id": "341",
  "full": "Huyện Thái Thụy",
  "nonchar": "Huyen Thai Thuy",
  "type": "dist",
  "location": null,
  "path": "/thai-binh/",
  "path_name": ", Tỉnh Thái Bình"
});
db.getCollection("location").insert({
  "_id": "than-uyen-110",
  "name": "Than Uyên",
  "noname": "Than Uyen",
  "ref_id": "110",
  "full": "Huyện Than Uyên",
  "nonchar": "Huyen Than Uyen",
  "type": "dist",
  "location": null,
  "path": "/lai-chau/",
  "path_name": ", Tỉnh Lai Châu"
});
db.getCollection("location").insert({
  "_id": "thang-binh-513",
  "name": "Thăng Bình",
  "noname": "Thang Binh",
  "ref_id": "513",
  "full": "Huyện Thăng Bình",
  "nonchar": "Huyen Thang Binh",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "thanh-ba-232",
  "name": "Thanh Ba",
  "noname": "Thanh Ba",
  "ref_id": "232",
  "full": "Huyện Thanh Ba",
  "nonchar": "Huyen Thanh Ba",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "thanh-binh-874",
  "name": "Thanh Bình",
  "noname": "Thanh Binh",
  "ref_id": "874",
  "full": "Huyện Thanh Bình",
  "nonchar": "Huyen Thanh Binh",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "thanh-chuong-428",
  "name": "Thanh Chương",
  "noname": "Thanh Chuong",
  "ref_id": "428",
  "full": "Huyện Thanh Chương",
  "nonchar": "Huyen Thanh Chuong",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "thanh-ha-294",
  "name": "Thanh Hà",
  "noname": "Thanh Ha",
  "ref_id": "294",
  "full": "Huyện Thanh Hà",
  "nonchar": "Huyen Thanh Ha",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "thanh-hoa",
  "name": "Thanh Hóa",
  "noname": "Thanh Hoa",
  "ref_id": "38",
  "full": "Tỉnh Thanh Hóa",
  "nonchar": "Tinh Thanh Hoa",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "thanh-hoa-380",
  "name": "Thanh Hóa",
  "noname": "Thanh Hoa",
  "ref_id": "380",
  "full": "Thành phố Thanh Hóa",
  "nonchar": "Thanh pho Thanh Hoa",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "thanh-hoa-800",
  "name": "Thạnh Hóa",
  "noname": "Thanh Hoa",
  "ref_id": "800",
  "full": "Huyện Thạnh Hóa",
  "nonchar": "Huyen Thanh Hoa",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "thanh-khe-491",
  "name": "Thanh Khê",
  "noname": "Thanh Khe",
  "ref_id": "491",
  "full": "Quận Thanh Khê",
  "nonchar": "Quan Thanh Khe",
  "type": "dist",
  "location": null,
  "path": "/da-nang/",
  "path_name": ", Thành phố Đà Nẵng"
});
db.getCollection("location").insert({
  "_id": "thanh-liem-351",
  "name": "Thanh Liêm",
  "noname": "Thanh Liem",
  "ref_id": "351",
  "full": "Huyện Thanh Liêm",
  "nonchar": "Huyen Thanh Liem",
  "type": "dist",
  "location": null,
  "path": "/ha-nam/",
  "path_name": ", Tỉnh Hà Nam"
});
db.getCollection("location").insert({
  "_id": "thanh-mien-300",
  "name": "Thanh Miện",
  "noname": "Thanh Mien",
  "ref_id": "300",
  "full": "Huyện Thanh Miện",
  "nonchar": "Huyen Thanh Mien",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "thanh-oai-278",
  "name": "Thanh Oai",
  "noname": "Thanh Oai",
  "ref_id": "278",
  "full": "Huyện Thanh Oai",
  "nonchar": "Huyen Thanh Oai",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "thanh-pho-cao-lanh-866",
  "name": "Thành Phố Cao Lãnh",
  "noname": "Thanh Pho Cao Lanh",
  "ref_id": "866",
  "full": "Thành phố Cao Lãnh",
  "nonchar": "Thanh pho Cao Lanh",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "thanh-phu-837",
  "name": "Thạnh Phú",
  "noname": "Thanh Phu",
  "ref_id": "837",
  "full": "Huyện Thạnh Phú",
  "nonchar": "Huyen Thanh Phu",
  "type": "dist",
  "location": null,
  "path": "/ben-tre/",
  "path_name": ", Tỉnh Bến Tre"
});
db.getCollection("location").insert({
  "_id": "thanh-son-238",
  "name": "Thanh Sơn",
  "noname": "Thanh Son",
  "ref_id": "238",
  "full": "Huyện Thanh Sơn",
  "nonchar": "Huyen Thanh Son",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "thanh-thuy-239",
  "name": "Thanh Thuỷ",
  "noname": "Thanh Thuy",
  "ref_id": "239",
  "full": "Huyện Thanh Thuỷ",
  "nonchar": "Huyen Thanh Thuy",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "thanh-tri-020",
  "name": "Thanh Trì",
  "noname": "Thanh Tri",
  "ref_id": "020",
  "full": "Huyện Thanh Trì",
  "nonchar": "Huyen Thanh Tri",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "thanh-tri-949",
  "name": "Thạnh Trị",
  "noname": "Thanh Tri",
  "ref_id": "949",
  "full": "Huyện Thạnh Trị",
  "nonchar": "Huyen Thanh Tri",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "thanh-xuan-009",
  "name": "Thanh Xuân",
  "noname": "Thanh Xuan",
  "ref_id": "009",
  "full": "Quận Thanh Xuân",
  "nonchar": "Quan Thanh Xuan",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "thap-muoi-872",
  "name": "Tháp Mười",
  "noname": "Thap Muoi",
  "ref_id": "872",
  "full": "Huyện Tháp Mười",
  "nonchar": "Huyen Thap Muoi",
  "type": "dist",
  "location": null,
  "path": "/dong-thap/",
  "path_name": ", Tỉnh Đồng Tháp"
});
db.getCollection("location").insert({
  "_id": "thieu-hoa-398",
  "name": "Thiệu Hóa",
  "noname": "Thieu Hoa",
  "ref_id": "398",
  "full": "Huyện Thiệu Hóa",
  "nonchar": "Huyen Thieu Hoa",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "tho-xuan-395",
  "name": "Thọ Xuân",
  "noname": "Tho Xuan",
  "ref_id": "395",
  "full": "Huyện Thọ Xuân",
  "nonchar": "Huyen Tho Xuan",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "thoai-son-894",
  "name": "Thoại Sơn",
  "noname": "Thoai Son",
  "ref_id": "894",
  "full": "Huyện Thoại Sơn",
  "nonchar": "Huyen Thoai Son",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "thoi-binh-967",
  "name": "Thới Bình",
  "noname": "Thoi Binh",
  "ref_id": "967",
  "full": "Huyện Thới Bình",
  "nonchar": "Huyen Thoi Binh",
  "type": "dist",
  "location": null,
  "path": "/ca-mau/",
  "path_name": ", Tỉnh Cà Mau"
});
db.getCollection("location").insert({
  "_id": "thoi-lai-927",
  "name": "Thới Lai",
  "noname": "Thoi Lai",
  "ref_id": "927",
  "full": "Huyện Thới Lai",
  "nonchar": "Huyen Thoi Lai",
  "type": "dist",
  "location": null,
  "path": "/can-tho/",
  "path_name": ", Thành phố Cần Thơ"
});
db.getCollection("location").insert({
  "_id": "thong-nhat-738",
  "name": "Thống Nhất",
  "noname": "Thong Nhat",
  "ref_id": "738",
  "full": "Huyện Thống Nhất",
  "nonchar": "Huyen Thong Nhat",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "thong-nong-044",
  "name": "Thông Nông",
  "noname": "Thong Nong",
  "ref_id": "044",
  "full": "Huyện Thông Nông",
  "nonchar": "Huyen Thong Nong",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "thot-not-923",
  "name": "Thốt Nốt",
  "noname": "Thot Not",
  "ref_id": "923",
  "full": "Quận Thốt Nốt",
  "nonchar": "Quan Thot Not",
  "type": "dist",
  "location": null,
  "path": "/can-tho/",
  "path_name": ", Thành phố Cần Thơ"
});
db.getCollection("location").insert({
  "_id": "thu-dau-mot-718",
  "name": "Thủ Dầu Một",
  "noname": "Thu Dau Mot",
  "ref_id": "718",
  "full": "Thành phố Thủ Dầu Một",
  "nonchar": "Thanh pho Thu Dau Mot",
  "type": "dist",
  "location": null,
  "path": "/binh-duong/",
  "path_name": ", Tỉnh Bình Dương"
});
db.getCollection("location").insert({
  "_id": "thu-duc-762",
  "name": "Thủ Đức",
  "noname": "Thu Duc",
  "ref_id": "762",
  "full": "Quận Thủ Đức",
  "nonchar": "Quan Thu Duc",
  "type": "dist",
  "location": null,
  "path": "/ho-chi-minh/",
  "path_name": ", Thành phố Hồ Chí Minh"
});
db.getCollection("location").insert({
  "_id": "thu-thua-804",
  "name": "Thủ Thừa",
  "noname": "Thu Thua",
  "ref_id": "804",
  "full": "Huyện Thủ Thừa",
  "nonchar": "Huyen Thu Thua",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "thua-thien-hue",
  "name": "Thừa Thiên Huế",
  "noname": "Thua Thien Hue",
  "ref_id": "46",
  "full": "Tỉnh Thừa Thiên Huế",
  "nonchar": "Tinh Thua Thien Hue",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "thuan-an-725",
  "name": "Thuận An",
  "noname": "Thuan An",
  "ref_id": "725",
  "full": "Thị xã Thuận An",
  "nonchar": "Thi xa Thuan An",
  "type": "dist",
  "location": null,
  "path": "/binh-duong/",
  "path_name": ", Tỉnh Bình Dương"
});
db.getCollection("location").insert({
  "_id": "thuan-bac-588",
  "name": "Thuận Bắc",
  "noname": "Thuan Bac",
  "ref_id": "588",
  "full": "Huyện Thuận Bắc",
  "nonchar": "Huyen Thuan Bac",
  "type": "dist",
  "location": null,
  "path": "/ninh-thuan/",
  "path_name": ", Tỉnh Ninh Thuận"
});
db.getCollection("location").insert({
  "_id": "thuan-chau-119",
  "name": "Thuận Châu",
  "noname": "Thuan Chau",
  "ref_id": "119",
  "full": "Huyện Thuận Châu",
  "nonchar": "Huyen Thuan Chau",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "thuan-nam-589",
  "name": "Thuận Nam",
  "noname": "Thuan Nam",
  "ref_id": "589",
  "full": "Huyện Thuận Nam",
  "nonchar": "Huyen Thuan Nam",
  "type": "dist",
  "location": null,
  "path": "/ninh-thuan/",
  "path_name": ", Tỉnh Ninh Thuận"
});
db.getCollection("location").insert({
  "_id": "thuan-thanh-262",
  "name": "Thuận Thành",
  "noname": "Thuan Thanh",
  "ref_id": "262",
  "full": "Huyện Thuận Thành",
  "nonchar": "Huyen Thuan Thanh",
  "type": "dist",
  "location": null,
  "path": "/bac-ninh/",
  "path_name": ", Tỉnh Bắc Ninh"
});
db.getCollection("location").insert({
  "_id": "thuong-tin-279",
  "name": "Thường Tín",
  "noname": "Thuong Tin",
  "ref_id": "279",
  "full": "Huyện Thường Tín",
  "nonchar": "Huyen Thuong Tin",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "thuong-xuan-396",
  "name": "Thường Xuân",
  "noname": "Thuong Xuan",
  "ref_id": "396",
  "full": "Huyện Thường Xuân",
  "nonchar": "Huyen Thuong Xuan",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "thuy-nguyen-311",
  "name": "Thuỷ Nguyên",
  "noname": "Thuy Nguyen",
  "ref_id": "311",
  "full": "Huyện Thuỷ Nguyên",
  "nonchar": "Huyen Thuy Nguyen",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "tien-du-260",
  "name": "Tiên Du",
  "noname": "Tien Du",
  "ref_id": "260",
  "full": "Huyện Tiên Du",
  "nonchar": "Huyen Tien Du",
  "type": "dist",
  "location": null,
  "path": "/bac-ninh/",
  "path_name": ", Tỉnh Bắc Ninh"
});
db.getCollection("location").insert({
  "_id": "tien-giang",
  "name": "Tiền Giang",
  "noname": "Tien Giang",
  "ref_id": "82",
  "full": "Tỉnh Tiền Giang",
  "nonchar": "Tinh Tien Giang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "tien-hai-342",
  "name": "Tiền Hải",
  "noname": "Tien Hai",
  "ref_id": "342",
  "full": "Huyện Tiền Hải",
  "nonchar": "Huyen Tien Hai",
  "type": "dist",
  "location": null,
  "path": "/thai-binh/",
  "path_name": ", Tỉnh Thái Bình"
});
db.getCollection("location").insert({
  "_id": "tien-lang-315",
  "name": "Tiên Lãng",
  "noname": "Tien Lang",
  "ref_id": "315",
  "full": "Huyện Tiên Lãng",
  "nonchar": "Huyen Tien Lang",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "tien-lu-332",
  "name": "Tiên Lữ",
  "noname": "Tien Lu",
  "ref_id": "332",
  "full": "Huyện Tiên Lữ",
  "nonchar": "Huyen Tien Lu",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "tien-phuoc-514",
  "name": "Tiên Phước",
  "noname": "Tien Phuoc",
  "ref_id": "514",
  "full": "Huyện Tiên Phước",
  "nonchar": "Huyen Tien Phuoc",
  "type": "dist",
  "location": null,
  "path": "/quang-nam/",
  "path_name": ", Tỉnh Quảng Nam"
});
db.getCollection("location").insert({
  "_id": "tien-yen-199",
  "name": "Tiên Yên",
  "noname": "Tien Yen",
  "ref_id": "199",
  "full": "Huyện Tiên Yên",
  "nonchar": "Huyen Tien Yen",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "tieu-can-846",
  "name": "Tiểu Cần",
  "noname": "Tieu Can",
  "ref_id": "846",
  "full": "Huyện Tiểu Cần",
  "nonchar": "Huyen Tieu Can",
  "type": "dist",
  "location": null,
  "path": "/tra-vinh/",
  "path_name": ", Tỉnh Trà Vinh"
});
db.getCollection("location").insert({
  "_id": "tinh-bien-890",
  "name": "Tịnh Biên",
  "noname": "Tinh Bien",
  "ref_id": "890",
  "full": "Huyện Tịnh Biên",
  "nonchar": "Huyen Tinh Bien",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "tinh-gia-407",
  "name": "Tĩnh Gia",
  "noname": "Tinh Gia",
  "ref_id": "407",
  "full": "Huyện Tĩnh Gia",
  "nonchar": "Huyen Tinh Gia",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "tra-bong-525",
  "name": "Trà Bồng",
  "noname": "Tra Bong",
  "ref_id": "525",
  "full": "Huyện Trà Bồng",
  "nonchar": "Huyen Tra Bong",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "tra-cu-849",
  "name": "Trà Cú",
  "noname": "Tra Cu",
  "ref_id": "849",
  "full": "Huyện Trà Cú",
  "nonchar": "Huyen Tra Cu",
  "type": "dist",
  "location": null,
  "path": "/tra-vinh/",
  "path_name": ", Tỉnh Trà Vinh"
});
db.getCollection("location").insert({
  "_id": "tra-linh-046",
  "name": "Trà Lĩnh",
  "noname": "Tra Linh",
  "ref_id": "046",
  "full": "Huyện Trà Lĩnh",
  "nonchar": "Huyen Tra Linh",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "tra-on-862",
  "name": "Trà Ôn",
  "noname": "Tra On",
  "ref_id": "862",
  "full": "Huyện Trà Ôn",
  "nonchar": "Huyen Tra On",
  "type": "dist",
  "location": null,
  "path": "/vinh-long/",
  "path_name": ", Tỉnh Vĩnh Long"
});
db.getCollection("location").insert({
  "_id": "tra-vinh",
  "name": "Trà Vinh",
  "noname": "Tra Vinh",
  "ref_id": "84",
  "full": "Tỉnh Trà Vinh",
  "nonchar": "Tinh Tra Vinh",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "tra-vinh-842",
  "name": "Trà Vinh",
  "noname": "Tra Vinh",
  "ref_id": "842",
  "full": "Thành phố Trà Vinh",
  "nonchar": "Thanh pho Tra Vinh",
  "type": "dist",
  "location": null,
  "path": "/tra-vinh/",
  "path_name": ", Tỉnh Trà Vinh"
});
db.getCollection("location").insert({
  "_id": "tram-tau-139",
  "name": "Trạm Tấu",
  "noname": "Tram Tau",
  "ref_id": "139",
  "full": "Huyện Trạm Tấu",
  "nonchar": "Huyen Tram Tau",
  "type": "dist",
  "location": null,
  "path": "/yen-bai/",
  "path_name": ", Tỉnh Yên Bái"
});
db.getCollection("location").insert({
  "_id": "tran-de-951",
  "name": "Trần Đề",
  "noname": "Tran De",
  "ref_id": "951",
  "full": "Huyện Trần Đề",
  "nonchar": "Huyen Tran De",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "tran-van-thoi-968",
  "name": "Trần Văn Thời",
  "noname": "Tran Van Thoi",
  "ref_id": "968",
  "full": "Huyện Trần Văn Thời",
  "nonchar": "Huyen Tran Van Thoi",
  "type": "dist",
  "location": null,
  "path": "/ca-mau/",
  "path_name": ", Tỉnh Cà Mau"
});
db.getCollection("location").insert({
  "_id": "tran-yen-138",
  "name": "Trấn Yên",
  "noname": "Tran Yen",
  "ref_id": "138",
  "full": "Huyện Trấn Yên",
  "nonchar": "Huyen Tran Yen",
  "type": "dist",
  "location": null,
  "path": "/yen-bai/",
  "path_name": ", Tỉnh Yên Bái"
});
db.getCollection("location").insert({
  "_id": "trang-bang-712",
  "name": "Trảng Bàng",
  "noname": "Trang Bang",
  "ref_id": "712",
  "full": "Huyện Trảng Bàng",
  "nonchar": "Huyen Trang Bang",
  "type": "dist",
  "location": null,
  "path": "/tay-ninh/",
  "path_name": ", Tỉnh Tây Ninh"
});
db.getCollection("location").insert({
  "_id": "trang-bom-737",
  "name": "Trảng Bom",
  "noname": "Trang Bom",
  "ref_id": "737",
  "full": "Huyện Trảng Bom",
  "nonchar": "Huyen Trang Bom",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "trang-dinh-180",
  "name": "Tràng Định",
  "noname": "Trang Dinh",
  "ref_id": "180",
  "full": "Huyện Tràng Định",
  "nonchar": "Huyen Trang Dinh",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "tri-ton-891",
  "name": "Tri Tôn",
  "noname": "Tri Ton",
  "ref_id": "891",
  "full": "Huyện Tri Tôn",
  "nonchar": "Huyen Tri Ton",
  "type": "dist",
  "location": null,
  "path": "/an-giang/",
  "path_name": ", Tỉnh An Giang"
});
db.getCollection("location").insert({
  "_id": "trieu-phong-469",
  "name": "Triệu Phong",
  "noname": "Trieu Phong",
  "ref_id": "469",
  "full": "Huyện Triệu Phong",
  "nonchar": "Huyen Trieu Phong",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "trieu-son-397",
  "name": "Triệu Sơn",
  "noname": "Trieu Son",
  "ref_id": "397",
  "full": "Huyện Triệu Sơn",
  "nonchar": "Huyen Trieu Son",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "truc-ninh-363",
  "name": "Trực Ninh",
  "noname": "Truc Ninh",
  "ref_id": "363",
  "full": "Huyện Trực Ninh",
  "nonchar": "Huyen Truc Ninh",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "trung-khanh-047",
  "name": "Trùng Khánh",
  "noname": "Trung Khanh",
  "ref_id": "047",
  "full": "Huyện Trùng Khánh",
  "nonchar": "Huyen Trung Khanh",
  "type": "dist",
  "location": null,
  "path": "/cao-bang/",
  "path_name": ", Tỉnh Cao Bằng"
});
db.getCollection("location").insert({
  "_id": "truong-sa-576",
  "name": "Trường Sa",
  "noname": "Truong Sa",
  "ref_id": "576",
  "full": "Huyện Trường Sa",
  "nonchar": "Huyen Truong Sa",
  "type": "dist",
  "location": null,
  "path": "/khanh-hoa/",
  "path_name": ", Tỉnh Khánh Hòa"
});
db.getCollection("location").insert({
  "_id": "tu-ky-298",
  "name": "Tứ Kỳ",
  "noname": "Tu Ky",
  "ref_id": "298",
  "full": "Huyện Tứ Kỳ",
  "nonchar": "Huyen Tu Ky",
  "type": "dist",
  "location": null,
  "path": "/hai-duong/",
  "path_name": ", Tỉnh Hải Dương"
});
db.getCollection("location").insert({
  "_id": "tu-mo-rong-617",
  "name": "Tu Mơ Rông",
  "noname": "Tu Mo Rong",
  "ref_id": "617",
  "full": "Huyện Tu Mơ Rông",
  "nonchar": "Huyen Tu Mo Rong",
  "type": "dist",
  "location": null,
  "path": "/kon-tum/",
  "path_name": ", Tỉnh Kon Tum"
});
db.getCollection("location").insert({
  "_id": "tu-nghia-528",
  "name": "Tư Nghĩa",
  "noname": "Tu Nghia",
  "ref_id": "528",
  "full": "Huyện Tư Nghĩa",
  "nonchar": "Huyen Tu Nghia",
  "type": "dist",
  "location": null,
  "path": "/quang-ngai/",
  "path_name": ", Tỉnh Quảng Ngãi"
});
db.getCollection("location").insert({
  "_id": "tu-son-261",
  "name": "Từ Sơn",
  "noname": "Tu Son",
  "ref_id": "261",
  "full": "Thị xã Từ Sơn",
  "nonchar": "Thi xa Tu Son",
  "type": "dist",
  "location": null,
  "path": "/bac-ninh/",
  "path_name": ", Tỉnh Bắc Ninh"
});
db.getCollection("location").insert({
  "_id": "tua-chua-098",
  "name": "Tủa Chùa",
  "noname": "Tua Chua",
  "ref_id": "098",
  "full": "Huyện Tủa Chùa",
  "nonchar": "Huyen Tua Chua",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "tuan-giao-099",
  "name": "Tuần Giáo",
  "noname": "Tuan Giao",
  "ref_id": "099",
  "full": "Huyện Tuần Giáo",
  "nonchar": "Huyen Tuan Giao",
  "type": "dist",
  "location": null,
  "path": "/dien-bien/",
  "path_name": ", Tỉnh Điện Biên"
});
db.getCollection("location").insert({
  "_id": "tuong-duong-418",
  "name": "Tương Dương",
  "noname": "Tuong Duong",
  "ref_id": "418",
  "full": "Huyện Tương Dương",
  "nonchar": "Huyen Tuong Duong",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "tuy-an-559",
  "name": "Tuy An",
  "noname": "Tuy An",
  "ref_id": "559",
  "full": "Huyện Tuy An",
  "nonchar": "Huyen Tuy An",
  "type": "dist",
  "location": null,
  "path": "/phu-yen/",
  "path_name": ", Tỉnh Phú Yên"
});
db.getCollection("location").insert({
  "_id": "tuy-duc-667",
  "name": "Tuy Đức",
  "noname": "Tuy Duc",
  "ref_id": "667",
  "full": "Huyện Tuy Đức",
  "nonchar": "Huyen Tuy Duc",
  "type": "dist",
  "location": null,
  "path": "/dak-nong/",
  "path_name": ", Tỉnh Đắk Nông"
});
db.getCollection("location").insert({
  "_id": "tuy-hoa-555",
  "name": "Tuy Hòa",
  "noname": "Tuy Hoa",
  "ref_id": "555",
  "full": "Thành phố Tuy Hòa",
  "nonchar": "Thanh pho Tuy Hoa",
  "type": "dist",
  "location": null,
  "path": "/phu-yen/",
  "path_name": ", Tỉnh Phú Yên"
});
db.getCollection("location").insert({
  "_id": "tuy-phong-595",
  "name": "Tuy Phong",
  "noname": "Tuy Phong",
  "ref_id": "595",
  "full": "Huyện Tuy Phong",
  "nonchar": "Huyen Tuy Phong",
  "type": "dist",
  "location": null,
  "path": "/binh-thuan/",
  "path_name": ", Tỉnh Bình Thuận"
});
db.getCollection("location").insert({
  "_id": "tuy-phuoc-550",
  "name": "Tuy Phước",
  "noname": "Tuy Phuoc",
  "ref_id": "550",
  "full": "Huyện Tuy Phước",
  "nonchar": "Huyen Tuy Phuoc",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "tuyen-hoa-453",
  "name": "Tuyên Hóa",
  "noname": "Tuyen Hoa",
  "ref_id": "453",
  "full": "Huyện Tuyên Hóa",
  "nonchar": "Huyen Tuyen Hoa",
  "type": "dist",
  "location": null,
  "path": "/quang-binh/",
  "path_name": ", Tỉnh Quảng Bình"
});
db.getCollection("location").insert({
  "_id": "tuyen-quang",
  "name": "Tuyên Quang",
  "noname": "Tuyen Quang",
  "ref_id": "08",
  "full": "Tỉnh Tuyên Quang",
  "nonchar": "Tinh Tuyen Quang",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "tuyen-quang-070",
  "name": "Tuyên Quang",
  "noname": "Tuyen Quang",
  "ref_id": "070",
  "full": "Thành phố Tuyên Quang",
  "nonchar": "Thanh pho Tuyen Quang",
  "type": "dist",
  "location": null,
  "path": "/tuyen-quang/",
  "path_name": ", Tỉnh Tuyên Quang"
});
db.getCollection("location").insert({
  "_id": "u-minh-966",
  "name": "U Minh",
  "noname": "U Minh",
  "ref_id": "966",
  "full": "Huyện U Minh",
  "nonchar": "Huyen U Minh",
  "type": "dist",
  "location": null,
  "path": "/ca-mau/",
  "path_name": ", Tỉnh Cà Mau"
});
db.getCollection("location").insert({
  "_id": "u-minh-thuong-913",
  "name": "U Minh Thượng",
  "noname": "U Minh Thuong",
  "ref_id": "913",
  "full": "Huyện U Minh Thượng",
  "nonchar": "Huyen U Minh Thuong",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "ung-hoa-281",
  "name": "Ứng Hòa",
  "noname": "Ung Hoa",
  "ref_id": "281",
  "full": "Huyện Ứng Hòa",
  "nonchar": "Huyen Ung Hoa",
  "type": "dist",
  "location": null,
  "path": "/ha-noi/",
  "path_name": ", Thành phố Hà Nội"
});
db.getCollection("location").insert({
  "_id": "uong-bi-196",
  "name": "Uông Bí",
  "noname": "Uong Bi",
  "ref_id": "196",
  "full": "Thành phố Uông Bí",
  "nonchar": "Thanh pho Uong Bi",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "van-ban-089",
  "name": "Văn Bàn",
  "noname": "Van Ban",
  "ref_id": "089",
  "full": "Huyện Văn Bàn",
  "nonchar": "Huyen Van Ban",
  "type": "dist",
  "location": null,
  "path": "/lao-cai/",
  "path_name": ", Tỉnh Lào Cai"
});
db.getCollection("location").insert({
  "_id": "van-canh-551",
  "name": "Vân Canh",
  "noname": "Van Canh",
  "ref_id": "551",
  "full": "Huyện Vân Canh",
  "nonchar": "Huyen Van Canh",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "van-chan-140",
  "name": "Văn Chấn",
  "noname": "Van Chan",
  "ref_id": "140",
  "full": "Huyện Văn Chấn",
  "nonchar": "Huyen Van Chan",
  "type": "dist",
  "location": null,
  "path": "/yen-bai/",
  "path_name": ", Tỉnh Yên Bái"
});
db.getCollection("location").insert({
  "_id": "van-don-203",
  "name": "Vân Đồn",
  "noname": "Van Don",
  "ref_id": "203",
  "full": "Huyện Vân Đồn",
  "nonchar": "Huyen Van Don",
  "type": "dist",
  "location": null,
  "path": "/quang-ninh/",
  "path_name": ", Tỉnh Quảng Ninh"
});
db.getCollection("location").insert({
  "_id": "van-giang-326",
  "name": "Văn Giang",
  "noname": "Van Giang",
  "ref_id": "326",
  "full": "Huyện Văn Giang",
  "nonchar": "Huyen Van Giang",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "van-ho-128",
  "name": "Vân Hồ",
  "noname": "Van Ho",
  "ref_id": "128",
  "full": "Huyện Vân Hồ",
  "nonchar": "Huyen Van Ho",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "van-lam-325",
  "name": "Văn Lâm",
  "noname": "Van Lam",
  "ref_id": "325",
  "full": "Huyện Văn Lâm",
  "nonchar": "Huyen Van Lam",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "van-lang-182",
  "name": "Văn Lãng",
  "noname": "Van Lang",
  "ref_id": "182",
  "full": "Huyện Văn Lãng",
  "nonchar": "Huyen Van Lang",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "van-ninh-571",
  "name": "Vạn Ninh",
  "noname": "Van Ninh",
  "ref_id": "571",
  "full": "Huyện Vạn Ninh",
  "nonchar": "Huyen Van Ninh",
  "type": "dist",
  "location": null,
  "path": "/khanh-hoa/",
  "path_name": ", Tỉnh Khánh Hòa"
});
db.getCollection("location").insert({
  "_id": "van-quan-184",
  "name": "Văn Quan",
  "noname": "Van Quan",
  "ref_id": "184",
  "full": "Huyện Văn Quan",
  "nonchar": "Huyen Van Quan",
  "type": "dist",
  "location": null,
  "path": "/lang-son/",
  "path_name": ", Tỉnh Lạng Sơn"
});
db.getCollection("location").insert({
  "_id": "van-yen-136",
  "name": "Văn Yên",
  "noname": "Van Yen",
  "ref_id": "136",
  "full": "Huyện Văn Yên",
  "nonchar": "Huyen Van Yen",
  "type": "dist",
  "location": null,
  "path": "/yen-bai/",
  "path_name": ", Tỉnh Yên Bái"
});
db.getCollection("location").insert({
  "_id": "vi-thanh-930",
  "name": "Vị Thanh",
  "noname": "Vi Thanh",
  "ref_id": "930",
  "full": "Thành phố Vị Thanh",
  "nonchar": "Thanh pho Vi Thanh",
  "type": "dist",
  "location": null,
  "path": "/hau-giang/",
  "path_name": ", Tỉnh Hậu Giang"
});
db.getCollection("location").insert({
  "_id": "vi-thuy-935",
  "name": "Vị Thuỷ",
  "noname": "Vi Thuy",
  "ref_id": "935",
  "full": "Huyện Vị Thuỷ",
  "nonchar": "Huyen Vi Thuy",
  "type": "dist",
  "location": null,
  "path": "/hau-giang/",
  "path_name": ", Tỉnh Hậu Giang"
});
db.getCollection("location").insert({
  "_id": "vi-xuyen-030",
  "name": "Vị Xuyên",
  "noname": "Vi Xuyen",
  "ref_id": "030",
  "full": "Huyện Vị Xuyên",
  "nonchar": "Huyen Vi Xuyen",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "viet-tri-227",
  "name": "Việt Trì",
  "noname": "Viet Tri",
  "ref_id": "227",
  "full": "Thành phố Việt Trì",
  "nonchar": "Thanh pho Viet Tri",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "viet-yen-222",
  "name": "Việt Yên",
  "noname": "Viet Yen",
  "ref_id": "222",
  "full": "Huyện Việt Yên",
  "nonchar": "Huyen Viet Yen",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "vinh-412",
  "name": "Vinh",
  "noname": "Vinh",
  "ref_id": "412",
  "full": "Thành phố Vinh",
  "nonchar": "Thanh pho Vinh",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "vinh-bao-316",
  "name": "Vĩnh Bảo",
  "noname": "Vinh Bao",
  "ref_id": "316",
  "full": "Huyện Vĩnh Bảo",
  "nonchar": "Huyen Vinh Bao",
  "type": "dist",
  "location": null,
  "path": "/hai-phong/",
  "path_name": ", Thành phố Hải Phòng"
});
db.getCollection("location").insert({
  "_id": "vinh-chau-950",
  "name": "Vĩnh Châu",
  "noname": "Vinh Chau",
  "ref_id": "950",
  "full": "Thị xã Vĩnh Châu",
  "nonchar": "Thi xa Vinh Chau",
  "type": "dist",
  "location": null,
  "path": "/soc-trang/",
  "path_name": ", Tỉnh Sóc Trăng"
});
db.getCollection("location").insert({
  "_id": "vinh-cuu-735",
  "name": "Vĩnh Cửu",
  "noname": "Vinh Cuu",
  "ref_id": "735",
  "full": "Huyện Vĩnh Cửu",
  "nonchar": "Huyen Vinh Cuu",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "vinh-hung-797",
  "name": "Vĩnh Hưng",
  "noname": "Vinh Hung",
  "ref_id": "797",
  "full": "Huyện Vĩnh Hưng",
  "nonchar": "Huyen Vinh Hung",
  "type": "dist",
  "location": null,
  "path": "/long-an/",
  "path_name": ", Tỉnh Long An"
});
db.getCollection("location").insert({
  "_id": "vinh-linh-464",
  "name": "Vĩnh Linh",
  "noname": "Vinh Linh",
  "ref_id": "464",
  "full": "Huyện Vĩnh Linh",
  "nonchar": "Huyen Vinh Linh",
  "type": "dist",
  "location": null,
  "path": "/quang-tri/",
  "path_name": ", Tỉnh Quảng Trị"
});
db.getCollection("location").insert({
  "_id": "vinh-loc-393",
  "name": "Vĩnh Lộc",
  "noname": "Vinh Loc",
  "ref_id": "393",
  "full": "Huyện Vĩnh Lộc",
  "nonchar": "Huyen Vinh Loc",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "vinh-loi-958",
  "name": "Vĩnh Lợi",
  "noname": "Vinh Loi",
  "ref_id": "958",
  "full": "Huyện Vĩnh Lợi",
  "nonchar": "Huyen Vinh Loi",
  "type": "dist",
  "location": null,
  "path": "/bac-lieu/",
  "path_name": ", Tỉnh Bạc Liêu"
});
db.getCollection("location").insert({
  "_id": "vinh-long",
  "name": "Vĩnh Long",
  "noname": "Vinh Long",
  "ref_id": "86",
  "full": "Tỉnh Vĩnh Long",
  "nonchar": "Tinh Vinh Long",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "vinh-long-855",
  "name": "Vĩnh Long",
  "noname": "Vinh Long",
  "ref_id": "855",
  "full": "Thành phố Vĩnh Long",
  "nonchar": "Thanh pho Vinh Long",
  "type": "dist",
  "location": null,
  "path": "/vinh-long/",
  "path_name": ", Tỉnh Vĩnh Long"
});
db.getCollection("location").insert({
  "_id": "vinh-phuc",
  "name": "Vĩnh Phúc",
  "noname": "Vinh Phuc",
  "ref_id": "26",
  "full": "Tỉnh Vĩnh Phúc",
  "nonchar": "Tinh Vinh Phuc",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "vinh-thanh-546",
  "name": "Vĩnh Thạnh",
  "noname": "Vinh Thanh",
  "ref_id": "546",
  "full": "Huyện Vĩnh Thạnh",
  "nonchar": "Huyen Vinh Thanh",
  "type": "dist",
  "location": null,
  "path": "/binh-dinh/",
  "path_name": ", Tỉnh Bình Định"
});
db.getCollection("location").insert({
  "_id": "vinh-thanh-924",
  "name": "Vĩnh Thạnh",
  "noname": "Vinh Thanh",
  "ref_id": "924",
  "full": "Huyện Vĩnh Thạnh",
  "nonchar": "Huyen Vinh Thanh",
  "type": "dist",
  "location": null,
  "path": "/can-tho/",
  "path_name": ", Thành phố Cần Thơ"
});
db.getCollection("location").insert({
  "_id": "vinh-thuan-910",
  "name": "Vĩnh Thuận",
  "noname": "Vinh Thuan",
  "ref_id": "910",
  "full": "Huyện Vĩnh Thuận",
  "nonchar": "Huyen Vinh Thuan",
  "type": "dist",
  "location": null,
  "path": "/kien-giang/",
  "path_name": ", Tỉnh Kiên Giang"
});
db.getCollection("location").insert({
  "_id": "vinh-tuong-252",
  "name": "Vĩnh Tường",
  "noname": "Vinh Tuong",
  "ref_id": "252",
  "full": "Huyện Vĩnh Tường",
  "nonchar": "Huyen Vinh Tuong",
  "type": "dist",
  "location": null,
  "path": "/vinh-phuc/",
  "path_name": ", Tỉnh Vĩnh Phúc"
});
db.getCollection("location").insert({
  "_id": "vinh-yen-243",
  "name": "Vĩnh Yên",
  "noname": "Vinh Yen",
  "ref_id": "243",
  "full": "Thành phố Vĩnh Yên",
  "nonchar": "Thanh pho Vinh Yen",
  "type": "dist",
  "location": null,
  "path": "/vinh-phuc/",
  "path_name": ", Tỉnh Vĩnh Phúc"
});
db.getCollection("location").insert({
  "_id": "vo-nhai-170",
  "name": "Võ Nhai",
  "noname": "Vo Nhai",
  "ref_id": "170",
  "full": "Huyện Võ Nhai",
  "nonchar": "Huyen Vo Nhai",
  "type": "dist",
  "location": null,
  "path": "/thai-nguyen/",
  "path_name": ", Tỉnh Thái Nguyên"
});
db.getCollection("location").insert({
  "_id": "vu-ban-359",
  "name": "Vụ Bản",
  "noname": "Vu Ban",
  "ref_id": "359",
  "full": "Huyện Vụ Bản",
  "nonchar": "Huyen Vu Ban",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "vu-quang-441",
  "name": "Vũ Quang",
  "noname": "Vu Quang",
  "ref_id": "441",
  "full": "Huyện Vũ Quang",
  "nonchar": "Huyen Vu Quang",
  "type": "dist",
  "location": null,
  "path": "/ha-tinh/",
  "path_name": ", Tỉnh Hà Tĩnh"
});
db.getCollection("location").insert({
  "_id": "vu-thu-344",
  "name": "Vũ Thư",
  "noname": "Vu Thu",
  "ref_id": "344",
  "full": "Huyện Vũ Thư",
  "nonchar": "Huyen Vu Thu",
  "type": "dist",
  "location": null,
  "path": "/thai-binh/",
  "path_name": ", Tỉnh Thái Bình"
});
db.getCollection("location").insert({
  "_id": "vung-liem-859",
  "name": "Vũng Liêm",
  "noname": "Vung Liem",
  "ref_id": "859",
  "full": "Huyện Vũng Liêm",
  "nonchar": "Huyen Vung Liem",
  "type": "dist",
  "location": null,
  "path": "/vinh-long/",
  "path_name": ", Tỉnh Vĩnh Long"
});
db.getCollection("location").insert({
  "_id": "vung-tau-747",
  "name": "Vũng Tàu",
  "noname": "Vung Tau",
  "ref_id": "747",
  "full": "Thành phố Vũng Tàu",
  "nonchar": "Thanh pho Vung Tau",
  "type": "dist",
  "location": null,
  "path": "/ba-ria-vung-tau/",
  "path_name": ", Tỉnh Bà Rịa - Vũng Tàu"
});
db.getCollection("location").insert({
  "_id": "xin-man-033",
  "name": "Xín Mần",
  "noname": "Xin Man",
  "ref_id": "033",
  "full": "Huyện Xín Mần",
  "nonchar": "Huyen Xin Man",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "xuan-loc-741",
  "name": "Xuân Lộc",
  "noname": "Xuan Loc",
  "ref_id": "741",
  "full": "Huyện Xuân Lộc",
  "nonchar": "Huyen Xuan Loc",
  "type": "dist",
  "location": null,
  "path": "/dong-nai/",
  "path_name": ", Tỉnh Đồng Nai"
});
db.getCollection("location").insert({
  "_id": "xuan-truong-364",
  "name": "Xuân Trường",
  "noname": "Xuan Truong",
  "ref_id": "364",
  "full": "Huyện Xuân Trường",
  "nonchar": "Huyen Xuan Truong",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "xuyen-moc-751",
  "name": "Xuyên Mộc",
  "noname": "Xuyen Moc",
  "ref_id": "751",
  "full": "Huyện Xuyên Mộc",
  "nonchar": "Huyen Xuyen Moc",
  "type": "dist",
  "location": null,
  "path": "/ba-ria-vung-tau/",
  "path_name": ", Tỉnh Bà Rịa - Vũng Tàu"
});
db.getCollection("location").insert({
  "_id": "y-yen-360",
  "name": "Ý Yên",
  "noname": "Y Yen",
  "ref_id": "360",
  "full": "Huyện Ý Yên",
  "nonchar": "Huyen Y Yen",
  "type": "dist",
  "location": null,
  "path": "/nam-dinh/",
  "path_name": ", Tỉnh Nam Định"
});
db.getCollection("location").insert({
  "_id": "yen-bai",
  "name": "Yên Bái",
  "noname": "Yen Bai",
  "ref_id": "15",
  "full": "Tỉnh Yên Bái",
  "nonchar": "Tinh Yen Bai",
  "type": "prov",
  "location": null,
  "path": "/",
  "path_name": ""
});
db.getCollection("location").insert({
  "_id": "yen-bai-132",
  "name": "Yên Bái",
  "noname": "Yen Bai",
  "ref_id": "132",
  "full": "Thành phố Yên Bái",
  "nonchar": "Thanh pho Yen Bai",
  "type": "dist",
  "location": null,
  "path": "/yen-bai/",
  "path_name": ", Tỉnh Yên Bái"
});
db.getCollection("location").insert({
  "_id": "yen-binh-141",
  "name": "Yên Bình",
  "noname": "Yen Binh",
  "ref_id": "141",
  "full": "Huyện Yên Bình",
  "nonchar": "Huyen Yen Binh",
  "type": "dist",
  "location": null,
  "path": "/yen-bai/",
  "path_name": ", Tỉnh Yên Bái"
});
db.getCollection("location").insert({
  "_id": "yen-chau-124",
  "name": "Yên Châu",
  "noname": "Yen Chau",
  "ref_id": "124",
  "full": "Huyện Yên Châu",
  "nonchar": "Huyen Yen Chau",
  "type": "dist",
  "location": null,
  "path": "/son-la/",
  "path_name": ", Tỉnh Sơn La"
});
db.getCollection("location").insert({
  "_id": "yen-dinh-394",
  "name": "Yên Định",
  "noname": "Yen Dinh",
  "ref_id": "394",
  "full": "Huyện Yên Định",
  "nonchar": "Huyen Yen Dinh",
  "type": "dist",
  "location": null,
  "path": "/thanh-hoa/",
  "path_name": ", Tỉnh Thanh Hóa"
});
db.getCollection("location").insert({
  "_id": "yen-dung-221",
  "name": "Yên Dũng",
  "noname": "Yen Dung",
  "ref_id": "221",
  "full": "Huyện Yên Dũng",
  "nonchar": "Huyen Yen Dung",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "yen-khanh-375",
  "name": "Yên Khánh",
  "noname": "Yen Khanh",
  "ref_id": "375",
  "full": "Huyện Yên Khánh",
  "nonchar": "Huyen Yen Khanh",
  "type": "dist",
  "location": null,
  "path": "/ninh-binh/",
  "path_name": ", Tỉnh Ninh Bình"
});
db.getCollection("location").insert({
  "_id": "yen-lac-251",
  "name": "Yên Lạc",
  "noname": "Yen Lac",
  "ref_id": "251",
  "full": "Huyện Yên Lạc",
  "nonchar": "Huyen Yen Lac",
  "type": "dist",
  "location": null,
  "path": "/vinh-phuc/",
  "path_name": ", Tỉnh Vĩnh Phúc"
});
db.getCollection("location").insert({
  "_id": "yen-lap-234",
  "name": "Yên Lập",
  "noname": "Yen Lap",
  "ref_id": "234",
  "full": "Huyện Yên Lập",
  "nonchar": "Huyen Yen Lap",
  "type": "dist",
  "location": null,
  "path": "/phu-tho/",
  "path_name": ", Tỉnh Phú Thọ"
});
db.getCollection("location").insert({
  "_id": "yen-minh-028",
  "name": "Yên Minh",
  "noname": "Yen Minh",
  "ref_id": "028",
  "full": "Huyện Yên Minh",
  "nonchar": "Huyen Yen Minh",
  "type": "dist",
  "location": null,
  "path": "/ha-giang/",
  "path_name": ", Tỉnh Hà Giang"
});
db.getCollection("location").insert({
  "_id": "yen-mo-377",
  "name": "Yên Mô",
  "noname": "Yen Mo",
  "ref_id": "377",
  "full": "Huyện Yên Mô",
  "nonchar": "Huyen Yen Mo",
  "type": "dist",
  "location": null,
  "path": "/ninh-binh/",
  "path_name": ", Tỉnh Ninh Bình"
});
db.getCollection("location").insert({
  "_id": "yen-my-327",
  "name": "Yên Mỹ",
  "noname": "Yen My",
  "ref_id": "327",
  "full": "Huyện Yên Mỹ",
  "nonchar": "Huyen Yen My",
  "type": "dist",
  "location": null,
  "path": "/hung-yen/",
  "path_name": ", Tỉnh Hưng Yên"
});
db.getCollection("location").insert({
  "_id": "yen-phong-258",
  "name": "Yên Phong",
  "noname": "Yen Phong",
  "ref_id": "258",
  "full": "Huyện Yên Phong",
  "nonchar": "Huyen Yen Phong",
  "type": "dist",
  "location": null,
  "path": "/bac-ninh/",
  "path_name": ", Tỉnh Bắc Ninh"
});
db.getCollection("location").insert({
  "_id": "yen-son-075",
  "name": "Yên Sơn",
  "noname": "Yen Son",
  "ref_id": "075",
  "full": "Huyện Yên Sơn",
  "nonchar": "Huyen Yen Son",
  "type": "dist",
  "location": null,
  "path": "/tuyen-quang/",
  "path_name": ", Tỉnh Tuyên Quang"
});
db.getCollection("location").insert({
  "_id": "yen-thanh-426",
  "name": "Yên Thành",
  "noname": "Yen Thanh",
  "ref_id": "426",
  "full": "Huyện Yên Thành",
  "nonchar": "Huyen Yen Thanh",
  "type": "dist",
  "location": null,
  "path": "/nghe-an/",
  "path_name": ", Tỉnh Nghệ An"
});
db.getCollection("location").insert({
  "_id": "yen-the-215",
  "name": "Yên Thế",
  "noname": "Yen The",
  "ref_id": "215",
  "full": "Huyện Yên Thế",
  "nonchar": "Huyen Yen The",
  "type": "dist",
  "location": null,
  "path": "/bac-giang/",
  "path_name": ", Tỉnh Bắc Giang"
});
db.getCollection("location").insert({
  "_id": "yen-thuy-158",
  "name": "Yên Thủy",
  "noname": "Yen Thuy",
  "ref_id": "158",
  "full": "Huyện Yên Thủy",
  "nonchar": "Huyen Yen Thuy",
  "type": "dist",
  "location": null,
  "path": "/hoa-binh/",
  "path_name": ", Tỉnh Hòa Bình"
});

/** orders records **/
db.getCollection("orders").insert({
  "_id": ObjectId("5b81247716d5bda034000029"),
  "customer_name": "Ngô Bảo Châu",
  "customer_email": "chaungo@gmail.com",
  "customer_phone": "0987654321",
  "customer_address": "Ba vì, Hà Nội",
  "product": [
    {
      "id": "non-chu-b",
      "name": "NÓN CHỮ B",
      "price": NumberInt(280000),
      "quantity": NumberInt(2),
      "size": "Một size",
      "total_price": NumberInt(560000)
    }
  ],
  "total_price": NumberInt(560000),
  "status": "Đã hủy",
  "created_at": NumberInt(1535190135),
  "updated_at": NumberInt(1535190135)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b8125ad16d5bdb021000029"),
  "customer_name": "Phạm Thùy Trang",
  "customer_email": "trang@gmail.com",
  "customer_phone": "0654123987",
  "customer_address": "Quận 10, Hồ Chí Minh",
  "product": [
    {
      "id": "non-con-ech",
      "name": "NÓN CON ẾCH",
      "price": NumberInt(250000),
      "quantity": NumberInt(1),
      "size": "Một size",
      "total_price": NumberInt(250000)
    }
  ],
  "total_price": NumberInt(250000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535190445),
  "updated_at": NumberInt(1535190445)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b86006f16d5bd6c35000029"),
  "customer_name": "Hoàng Văn Bảo",
  "customer_email": "baohoang@gmail.com",
  "customer_phone": "014651546",
  "customer_address": "Cà Mau, Phú Tân",
  "product": [
    {
      "id": "boxer-amani",
      "name": "BOXER A.MANI",
      "price": NumberInt(100000),
      "quantity": NumberInt(1),
      "size": "L",
      "total_price": NumberInt(100000)
    },
    {
      "id": "non-chu-b",
      "name": "NÓN CHỮ B",
      "price": NumberInt(280000),
      "quantity": NumberInt(2),
      "size": "Một size",
      "total_price": NumberInt(560000)
    }
  ],
  "total_price": NumberInt(660000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535508591),
  "updated_at": NumberInt(1535508591)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b86012016d5bd2c29000029"),
  "customer_name": "Nguyễn Bình Nguyên",
  "customer_email": "nguyenbinh@gmail.com",
  "customer_phone": "05123156153",
  "customer_address": "An Lão, Bình Định",
  "product": [
    {
      "id": "bop-ce-ka",
      "name": "BÓP CÊ KA",
      "price": NumberInt(450000),
      "quantity": NumberInt(2),
      "size": "Một Size",
      "total_price": NumberInt(900000)
    },
    {
      "id": "ao-khoac-nike-den-phoi",
      "name": "ÁO KHOÁC NI.KE ĐEN PHỐI",
      "price": NumberInt(450000),
      "quantity": NumberInt(1),
      "size": "S",
      "total_price": NumberInt(450000)
    }
  ],
  "total_price": NumberInt(1350000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535508768),
  "updated_at": NumberInt(1535508768)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b86069c16d5bdb43c000029"),
  "customer_name": "Đinh Chí Minh",
  "customer_email": "minhchi@gmail.com",
  "customer_phone": "0646541561",
  "customer_address": "Tân Phú, Đồng Nai",
  "product": [
    {
      "id": "jogger-das-suong",
      "name": "JOGGER DAS SUÔNG",
      "price": NumberInt(320000),
      "quantity": NumberInt(1),
      "size": "33",
      "total_price": NumberInt(320000)
    }
  ],
  "total_price": NumberInt(320000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535510172),
  "updated_at": NumberInt(1535510172)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b86070516d5bd6c3500002a"),
  "customer_name": "Hoàng Vũ Cao",
  "customer_email": "caovu@gmail.com",
  "customer_phone": "056165123",
  "customer_address": "Điện Biên",
  "product": [
    {
      "id": "quan-kaki-inf",
      "name": "QUẦN KAKI - INF",
      "price": NumberInt(280000),
      "quantity": NumberInt(1),
      "size": "34",
      "total_price": NumberInt(280000)
    },
    {
      "id": "non-chu-b",
      "name": "NÓN CHỮ B",
      "price": NumberInt(280000),
      "quantity": NumberInt(1),
      "size": "Một size",
      "total_price": NumberInt(280000)
    },
    {
      "id": "boxer-amani",
      "name": "BOXER A.MANI",
      "price": NumberInt(100000),
      "quantity": NumberInt(2),
      "size": "S",
      "total_price": NumberInt(200000)
    }
  ],
  "total_price": NumberInt(760000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535510277),
  "updated_at": NumberInt(1535510277)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b86074316d5bd6c3500002b"),
  "customer_name": "Nguyễn Thị Bảo Trinh",
  "customer_email": "baotrinh@gmail.com",
  "customer_phone": "0215153",
  "customer_address": "U MInh, Cà Mau",
  "product": [
    {
      "id": "jogger-das-suong",
      "name": "JOGGER DAS SUÔNG",
      "price": NumberInt(320000),
      "quantity": NumberInt(1),
      "size": "29",
      "total_price": NumberInt(320000)
    },
    {
      "id": "ao-thun-ctv-hoa-xanh",
      "name": "ÁO THUN CTV HOA XANH",
      "price": NumberInt(280000),
      "quantity": NumberInt(2),
      "size": "M",
      "total_price": NumberInt(560000)
    }
  ],
  "total_price": NumberInt(880000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535510339),
  "updated_at": NumberInt(1535510339)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b86078616d5bd3c35000029"),
  "customer_name": "Ngô Hoàng ",
  "customer_email": "hoangngo@gmail.com",
  "customer_phone": "0561561",
  "customer_address": "Hàm Tân, BÌnh Thuận",
  "product": [
    {
      "id": "dep-lao-sdry",
      "name": "DÉP LÀO S.DRY",
      "price": NumberInt(160000),
      "quantity": NumberInt(3),
      "size": "L",
      "total_price": NumberInt(480000)
    },
    {
      "id": "quan-jean-zra-xanh-xuoc",
      "name": "QUẦN JEAN Z.RA XANH XƯỢC",
      "price": NumberInt(500000),
      "quantity": NumberInt(1),
      "size": "28",
      "total_price": NumberInt(500000)
    }
  ],
  "total_price": NumberInt(980000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535510406),
  "updated_at": NumberInt(1535510406)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b8607c416d5bdcc0b000029"),
  "customer_name": "Chí Hoàng",
  "customer_email": "hoangchi@gmail.com",
  "customer_phone": "0515152",
  "customer_address": "Quận 1, Hồ Chí Minh",
  "product": [
    {
      "id": "ao-thun-ralplan-mallard",
      "name": "ÁO THUN RALPLAN MALLARD",
      "price": NumberInt(250000),
      "quantity": NumberInt(2),
      "size": "M",
      "total_price": NumberInt(500000)
    },
    {
      "id": "ao-thun-ctv-hinh-la-reu",
      "name": "ÁO THUN CTV HÌNH LÁ RÊU",
      "price": NumberInt(280000),
      "quantity": NumberInt(1),
      "size": "XL",
      "total_price": NumberInt(280000)
    }
  ],
  "total_price": NumberInt(780000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535510468),
  "updated_at": NumberInt(1535510468)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b86081516d5bd2c2900002b"),
  "customer_name": "Nguyễn Thị Trâm",
  "customer_email": "tramnguyen@gmail.com",
  "customer_phone": "105156156",
  "customer_address": "Quận 9, Hồ Chí Minh",
  "product": [
    {
      "id": "so-mi-pbear-4m",
      "name": "SƠ MI P.BEAR 4M",
      "price": NumberInt(280000),
      "quantity": NumberInt(6),
      "size": "S",
      "total_price": NumberInt(1680000)
    }
  ],
  "total_price": NumberInt(1680000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535510549),
  "updated_at": NumberInt(1535510549)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b8608c116d5bdcc0b00002a"),
  "customer_name": "Bảo Hoàng",
  "customer_email": "hoangxuan@gmail.com",
  "customer_phone": "05145",
  "customer_address": "Bảo Lạc, Cao Bằng",
  "product": [
    {
      "id": "bomber-jean-zr-tay-noi",
      "name": "BOMBER JEAN ZR TAY NỐI",
      "price": NumberInt(580000),
      "quantity": NumberInt(2),
      "size": "S",
      "total_price": NumberInt(1160000)
    },
    {
      "id": "dep-das",
      "name": "DÉP D.A.S",
      "price": NumberInt(150000),
      "quantity": NumberInt(1),
      "size": "6",
      "total_price": NumberInt(150000)
    },
    {
      "id": "quan-kaki-lvis-4m",
      "name": "QUẦN KAKI L.VIS 4M",
      "price": NumberInt(400000),
      "quantity": NumberInt(2),
      "size": "29",
      "total_price": NumberInt(800000)
    }
  ],
  "total_price": NumberInt(2110000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535510721),
  "updated_at": NumberInt(1535510721)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b86091316d5bd6c3500002c"),
  "customer_name": "Trần Anh",
  "customer_email": "anhtran@gmail.com",
  "customer_phone": "01516",
  "customer_address": "Quận 2, Hồ Chí Minh",
  "product": [
    {
      "id": "so-mi-inf-vai-ru-03",
      "name": "SƠ MI INF VẢI RŨ 03",
      "price": NumberInt(350000),
      "quantity": NumberInt(1),
      "size": "XS",
      "total_price": NumberInt(350000)
    }
  ],
  "total_price": NumberInt(350000),
  "status": "Hoàn thành",
  "created_at": NumberInt(1535510803),
  "updated_at": NumberInt(1535510803)
});
db.getCollection("orders").insert({
  "_id": ObjectId("5b860a0016d5bd3c3500002a"),
  "customer_name": "Chính Quy",
  "customer_email": "quychinh@gmail.com",
  "customer_phone": "015165123",
  "customer_address": "Bình Tân, Hồ Chín Minh",
  "product": [
    {
      "id": "denim-co-tru-ssoda",
      "name": "DENIM CỔ TRỤ S.SODA",
      "price": NumberInt(300000),
      "quantity": NumberInt(1),
      "size": "XL",
      "total_price": NumberInt(300000)
    }
  ],
  "total_price": NumberInt(300000),
  "status": "Mới",
  "created_at": NumberInt(1535511040),
  "updated_at": NumberInt(1535511040)
});

/** products records **/
db.getCollection("products").insert({
  "_id": "jogger-das-suong",
  "title": "JOGGER DAS SUÔNG",
  "category": "quan-the-thao",
  "price": {
    "in_price": NumberInt(250000),
    "sale_price": NumberInt(320000),
    "promo_price": NumberInt(320000)
  },
  "total": NumberInt(23),
  "images": [
    {
      "link": "38658514_1719507911504886_1379119839901122560_o_master.jpg",
      "color": ""
    },
    {
      "link": "38859536_1719465318175812_5773855738673758208_n_7f360930998245dda5748337f9b933cb_master.jpg",
      "color": "Đen"
    },
    {
      "link": "38700133_1719508218171522_5380819390176428032_n_master.jpg",
      "color": "Trắng"
    },
    {
      "link": "38804300_1719508038171540_4156288183606181888_n_master.jpg",
      "color": "Đỏ"
    },
    {
      "link": "38660599_1719508138171530_7710553326772813824_n_master.jpg",
      "color": "Vàng"
    },
    {
      "link": "38681698_1719508294838181_2577493024896450560_n_master.jpg",
      "color": ""
    },
    {
      "link": "38632966_1719508444838166_173650368205422592_o_master.jpg",
      "color": ""
    },
    {
      "link": "38661433_1719508481504829_5394090620077735936_o_master.jpg",
      "color": ""
    },
    {
      "link": "38653340_1719507928171551_3553740809264168960_n_master.jpg",
      "color": ""
    },
    {
      "link": "38678776_1719508344838176_7765792297031041024_n_master.jpg",
      "color": ""
    },
    {
      "link": "38696874_1719508208171523_7618794210941992960_n_master.jpg",
      "color": ""
    },
    {
      "link": "38773927_1719508354838175_6562587716209344512_n_master.jpg",
      "color": ""
    },
    {
      "link": "38773902_1719508074838203_8599304677336547328_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "description": "THÔNG TIN SẢN PHẨM\r\n- Track pants của DAS siêu đẹp - hàng xịn full khóa ép logo chống nước ạ.\r\n\r\n- Chất vải poly 2 da cực đẹp, 4 màu cho anh em.\r\n\r\n- Size L fit 85kg."
  },
  "created_at": NumberInt(1534738086),
  "updated_at": NumberInt(1535083706),
  "status": "",
  "sold": NumberInt(34)
});
db.getCollection("products").insert({
  "_id": "ao-khoac-nike-den-phoi",
  "title": "ÁO KHOÁC NI.KE ĐEN PHỐI",
  "category": "ao-khoac",
  "price": {
    "in_price": NumberInt(400000),
    "sale_price": NumberInt(450000),
    "promo_price": NumberInt(450000)
  },
  "total": NumberInt(23),
  "images": [
    {
      "link": "38907555_1726530900802587_802542054033850368_n_master.jpg",
      "color": ""
    },
    {
      "link": "39075632_1725341877588156_3148024836840751104_n_4092a648409f4649bcd2ff2a7b7fb236_master.jpg",
      "color": ""
    },
    {
      "link": "38935281_1726531187469225_5039845832082325504_n_master.jpg",
      "color": ""
    },
    {
      "link": "39062190_1726531167469227_4314942093677035520_n_master.jpg",
      "color": ""
    },
    {
      "link": "38963610_1726531014135909_5070557846135898112_n_master.jpg",
      "color": ""
    },
    {
      "link": "38948672_1726530937469250_3323140643592601600_n_master.jpg",
      "color": ""
    },
    {
      "link": "38943669_1726531080802569_4453018995821379584_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L"
    ],
    "description": "- Khoác N.ike dư xịn dòng training cực chất cho anh em.\r\n\r\n- Chất vải dầy dặn, 1 màu phối như hình.\r\n\r\n- Size L fit 85kg."
  },
  "created_at": NumberInt(1535014781),
  "updated_at": NumberInt(1535014781),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "bomber-jean-zr-tay-noi",
  "title": "BOMBER JEAN ZR TAY NỐI",
  "category": "ao-khoac",
  "price": {
    "in_price": NumberInt(500000),
    "sale_price": NumberInt(580000),
    "promo_price": NumberInt(580000)
  },
  "total": NumberInt(12),
  "images": [
    {
      "link": "39102656_1726530764135934_937979758904344576_n_b2dedd5e9c154f6ba979d760cdda1199_master.jpg",
      "color": ""
    },
    {
      "link": "38914339_1726575037464840_4837336384614170624_n_master.jpg",
      "color": ""
    },
    {
      "link": "38860524_1726575174131493_3950846497540538368_o_master.jpg",
      "color": ""
    },
    {
      "link": "39010687_1726575274131483_1864804564323008512_n_master.jpg",
      "color": ""
    },
    {
      "link": "39000233_1726574964131514_7528073991865499648_n_master.jpg",
      "color": ""
    },
    {
      "link": "38963630_1726575334131477_4106863009928839168_n_master.jpg",
      "color": ""
    },
    {
      "link": "38924229_1726575227464821_8862499555975888896_o_master.jpg",
      "color": ""
    },
    {
      "link": "39040818_1726575240798153_2037626579365920768_n_master.jpg",
      "color": ""
    },
    {
      "link": "39042059_1726575104131500_7193332049065803776_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L"
    ],
    "description": "- Khoác bomber jean phối kaki dư xịn của ZR cực đẹp và chất luôn ạ.\r\n\r\n- Chất vải dầy dặn , 1 màu phối như hình.\r\n\r\n- Size L fit 85kg."
  },
  "created_at": NumberInt(1535014948),
  "updated_at": NumberInt(1535014948),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "khoac-du-pbear-3m",
  "title": "KHOÁC DÙ P.BEAR 3M",
  "category": "ao-khoac",
  "price": {
    "in_price": NumberInt(250000),
    "sale_price": NumberInt(380000),
    "promo_price": NumberInt(380000)
  },
  "total": NumberInt(15),
  "images": [
    {
      "link": "38391274_1708684929253851_3214537164243075072_o_529e07a10ccd4478a936ace477b5b4bb_master.jpg",
      "color": ""
    },
    {
      "link": "38420924_1714681258654218_9052381571960537088_n_master.jpg",
      "color": "Đen"
    },
    {
      "link": "38448640_1714681415320869_7449696705638825984_o_master.jpg",
      "color": ""
    },
    {
      "link": "38501230_1714681271987550_7510741840321052672_n_master.jpg",
      "color": "Trắng"
    },
    {
      "link": "38614950_1797510387002719_618668860505063424_n_master.jpg",
      "color": "Đỏ"
    },
    {
      "link": "38635897_1714681185320892_8938294286957412352_n_master.jpg",
      "color": "Đỏ sọc đen"
    },
    {
      "link": "38434120_1714681145320896_1035930443754504192_n_master.jpg",
      "color": ""
    },
    {
      "link": "38485776_1714681361987541_2750146874789855232_o_master.jpg",
      "color": ""
    },
    {
      "link": "38624591_1714681295320881_7848287920023666688_n_master.jpg",
      "color": ""
    },
    {
      "link": "38489884_1714681391987538_6329598891591204864_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "- Khoác gió P.B đi nắng hay mưa đều cực đẹp nhé. \r\n\r\n- Chất vải dù dầy dặn , 3 màu cho anh em.\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535015186),
  "updated_at": NumberInt(1535015186),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "ao-khoac-nike-trang-do",
  "title": "ÁO KHOÁC NI.KE TRẮNG ĐỎ",
  "category": "ao-khoac",
  "price": {
    "in_price": NumberInt(400000),
    "sale_price": NumberInt(590000),
    "promo_price": NumberInt(590000)
  },
  "total": NumberInt(9),
  "images": [
    {
      "link": "39020299_1726628160792861_8373718228853063680_o_master.jpg",
      "color": ""
    },
    {
      "link": "39942790_2108329552819859_1437727713786855424_n_8009918513b84bb7b1461a61286c4fef_master.jpg",
      "color": ""
    },
    {
      "link": "38915458_1726627930792884_4788953724053618688_n_master.jpg",
      "color": ""
    },
    {
      "link": "38926241_1726628067459537_605470249910796288_n_master.jpg",
      "color": ""
    },
    {
      "link": "38926445_1726628174126193_2647429983126945792_n_master.jpg",
      "color": ""
    },
    {
      "link": "38938997_1726628107459533_9049964540460007424_n_master.jpg",
      "color": ""
    },
    {
      "link": "38992279_1726627987459545_6772889814900408320_n_master.jpg",
      "color": ""
    },
    {
      "link": "38993019_1726628234126187_2818176781641580544_n_master.jpg",
      "color": ""
    },
    {
      "link": "39018514_1726628284126182_5992608623606366208_n_master.jpg",
      "color": ""
    },
    {
      "link": "39086592_1726628337459510_8121614841262637056_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "- Mẫu mới mix màu cực đẹp của N.ike dòng wind runner cực đẹp ạ.\r\n\r\n- Chất dù dầy dặn chống nước, 1 màu phối như hình.\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535015520),
  "updated_at": NumberInt(1535015520),
  "status": "",
  "sold": NumberInt(22)
});
db.getCollection("products").insert({
  "_id": "inf-khoac-bomber-co-co",
  "title": "INF - KHOÁC BOMBER CÓ CỔ",
  "category": "ao-khoac",
  "price": {
    "in_price": NumberInt(300000),
    "sale_price": NumberInt(500000),
    "promo_price": NumberInt(250000)
  },
  "total": NumberInt(26),
  "images": [
    {
      "link": "22729126_1393483957440618_9001577557810327366_n_master.jpg",
      "color": ""
    },
    {
      "link": "22789139_1393484097440604_2487586052459891687_n_master.jpg",
      "color": "Đỏ"
    },
    {
      "link": "22815466_1393484120773935_8503079955738573624_n_master.jpg",
      "color": "Da"
    },
    {
      "link": "22789027_1393484157440598_4590612658645736062_n_master.jpg",
      "color": "Nâu"
    },
    {
      "link": "22815320_1393484010773946_8842903021585575493_n_master.jpg",
      "color": "Khối đỏ cam"
    },
    {
      "link": "22728895_1393484024107278_4748853398427817610_n_master.jpg",
      "color": "Be"
    },
    {
      "link": "22729059_1393484150773932_1587784942886834063_n_master.jpg",
      "color": "Xanh lá"
    },
    {
      "link": "22730459_1393483984107282_3202030003575154851_n_master.jpg",
      "color": "Tím than"
    },
    {
      "link": "22688731_1393484044107276_8236132287167810754_n_master.jpg",
      "color": ""
    },
    {
      "link": "22814372_1393484177440596_4155502797004232286_n_master.jpg",
      "color": ""
    },
    {
      "link": "22780562_1393484064107274_637116717921670654_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "description": "- Về thêm màu mới, bổ sung size màu cũ có đủ cho anh em rồi nhé.\r\n\r\n- Chất nhung tăm kẻ cực kì đẹp, bomber có cổ 7 màu ạ.\r\n\r\n- Size L Fit 85kg."
  },
  "created_at": NumberInt(1535015898),
  "updated_at": NumberInt(1535015898),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "ao-khoac-zra-hoa-tiet",
  "title": "ÁO KHOÁC Z.RA HỌA TIẾT",
  "category": "ao-khoac",
  "price": {
    "in_price": NumberInt(300000),
    "sale_price": NumberInt(400000),
    "promo_price": NumberInt(400000)
  },
  "total": NumberInt(19),
  "images": [
    {
      "link": "34962991_1648788938576784_3193522602228318208_n_master.jpg",
      "color": ""
    },
    {
      "link": "36028632_1648788698576808_3893371008962265088_n_master.jpg",
      "color": "Trắng"
    },
    {
      "link": "36064283_1648788715243473_9173579630588723200_n_master.jpg",
      "color": "Đen"
    },
    {
      "link": "35294715_1648788865243458_4598638659401416704_n_master.jpg",
      "color": ""
    },
    {
      "link": "35295433_1648788685243476_8219494388569473024_n_master.jpg",
      "color": ""
    },
    {
      "link": "36041932_1648788838576794_1660597208908562432_n_master.jpg",
      "color": ""
    },
    {
      "link": "36223848_1648788885243456_8474474613974237184_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "- Bomber ZR họa tiết .\r\n\r\n- Chất vải dầy dặn , 2 màu.\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535016073),
  "updated_at": NumberInt(1535016073),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "so-mi-inf-7-hoa-tiet",
  "title": "SƠ MI INF 7 HỌA TIẾT",
  "category": "ao-so-mi",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(300000),
    "promo_price": NumberInt(300000)
  },
  "total": NumberInt(45),
  "images": [
    {
      "link": "39235607_1730158703773140_2767692344474992640_o_134a08309b694807ad22479ac36aab8c_master.jpg",
      "color": ""
    },
    {
      "link": "39169704_239899219912452_2700948767443517440_n_master.jpg",
      "color": "Chó đốm"
    },
    {
      "link": "39289145_610598329341497_1842569479976910848_n_master.jpg",
      "color": "Lá cọ"
    },
    {
      "link": "39336119_467199720415095_3589508768624279552_n_master.jpg",
      "color": "Que kem"
    },
    {
      "link": "39210710_276251669868039_7206702531366354944_n_master.jpg",
      "color": "Cây dừa"
    },
    {
      "link": "39221345_316009748975945_2675073187212951552_n_master.jpg",
      "color": "Râu "
    },
    {
      "link": "39289145_610598329341497_1842569479976910848_n_master.jpg",
      "color": "Hoa Xanh "
    },
    {
      "link": "39302005_2097901397196074_3614164719876702208_n_master.jpg",
      "color": "Lá tre"
    },
    {
      "link": "39196397_1733512000104477_7710656410282885120_o_master.jpg",
      "color": ""
    },
    {
      "link": "39203619_1733511103437900_6155914537309569024_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "description": "- Lâu lâu kiếm được mẫu sơ mi họa tiết cực dễ thương và độc đáo cho anh em ạ.\r\n\r\n- Chất vải cotton 100%, 7 hạo tiết như hình.\r\n\r\n- Size L fit 85kg."
  },
  "created_at": NumberInt(1535016397),
  "updated_at": NumberInt(1535016397),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "so-mi-denim-pbear-3m",
  "title": "SƠ MI DENIM P.BEAR 3M",
  "category": "ao-so-mi",
  "price": {
    "in_price": NumberInt(250000),
    "sale_price": NumberInt(380000),
    "promo_price": NumberInt(380000)
  },
  "total": NumberInt(25),
  "images": [
    {
      "link": "38756569_1721435477978796_4495197589007761408_o_master.jpg",
      "color": ""
    },
    {
      "link": "38823625_1721435354645475_7978492641035681792_n_master.jpg",
      "color": "Bạc"
    },
    {
      "link": "38870744_1721417114647299_3708422110809423872_n_3fb4072a68724734af9f48e5e91e9772_master.jpg",
      "color": "Xanh"
    },
    {
      "link": "38942465_1721435284645482_518200087868866560_n_master.jpg",
      "color": "Xám"
    },
    {
      "link": "38739747_1721435407978803_4468741634141454336_n_master.jpg",
      "color": ""
    },
    {
      "link": "38759372_1721435557978788_2750679450734559232_n_master.jpg",
      "color": ""
    },
    {
      "link": "38768495_1721435621312115_6865218533588992000_n_master.jpg",
      "color": ""
    },
    {
      "link": "38779254_1721435667978777_5002805763538681856_n_master.jpg",
      "color": ""
    },
    {
      "link": "38805768_1721435527978791_1980210571789729792_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L"
    ],
    "description": "MUA NGAY\r\nTHÔNG TIN SẢN PHẨM\r\n- Kiếm được sơ mi denim đẹp và xịn mà chất cho anh em hơi bị khoai đây ạ.\r\n\r\n- Chất denim dầy dặn , 3 màu như hình.\r\n\r\n- Size L fit 80kg."
  },
  "created_at": NumberInt(1535016593),
  "updated_at": NumberInt(1535016628),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "so-mi-pbear-4m",
  "title": "SƠ MI P.BEAR 4M",
  "category": "ao-so-mi",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(280000),
    "promo_price": NumberInt(280000)
  },
  "total": NumberInt(32),
  "images": [
    {
      "link": "39891326_1807352552675035_7765693087581470720_n_master.jpg",
      "color": ""
    },
    {
      "link": "39942790_2108329552819859_1437727713786855424_n_master.jpg",
      "color": "Trắng "
    },
    {
      "link": "39610929_329450377794596_8407309722125860864_n_master.jpg",
      "color": "Xám"
    },
    {
      "link": "39941124_503466653413578_5990383787597365248_n_master.jpg",
      "color": "Xanh "
    },
    {
      "link": "39755137_278787669617286_681250532622336_n_master.jpg",
      "color": "Đen"
    },
    {
      "link": "39228969_1733718013417209_2444331403584733184_o_master.jpg",
      "color": ""
    },
    {
      "link": "39279398_1733718123417198_9139507882662821888_n_master.jpg",
      "color": ""
    },
    {
      "link": "39408988_1733718070083870_5507284023602315264_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "- Sơ mi oxford cực chơi của P.B với in dòng chữ nhỏ cực cool ạ.\r\n\r\n- Chất vải oxford dầy dặn , 4 màu.\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535016766),
  "updated_at": NumberInt(1535016766),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "so-mi-inf-vai-ru-03",
  "title": "SƠ MI INF VẢI RŨ 03",
  "category": "ao-so-mi",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(350000),
    "promo_price": NumberInt(350000)
  },
  "total": NumberInt(13),
  "images": [
    {
      "link": "36402045_1701300339939684_3291927887891922944_n_master.jpg",
      "color": ""
    },
    {
      "link": "38844772_1721356314653379_7027218364917350400_n_17eb506708a843288980757f3da9c220_master.jpg",
      "color": "Đen sọc trắng"
    },
    {
      "link": "38841980_1721356417986702_6695843783851900928_n_6b117188de3943ddb384c9611fda5a1a_master.jpg",
      "color": "Hoa đỏ"
    },
    {
      "link": "38783152_1721356441320033_5583967159979081728_n_b513cfae26ec41f8ba5e5ad21e0d3450_master.jpg",
      "color": "Trắng lá đen"
    },
    {
      "link": "38755021_1721356471320030_243849212066791424_n_0dec0a024b0642fb8f79664e6bc89372_master.jpg",
      "color": "Đen chữ trắng"
    },
    {
      "link": "38686922_1721356534653357_7694264839396392960_n_master.jpg",
      "color": ""
    },
    {
      "link": "38708158_1721356761320001_3021443693837025280_o_25aa4737e072474cba956a5f1f9d9387_master.jpg",
      "color": ""
    },
    {
      "link": "38722223_1721356291320048_6375996628720943104_n_master.jpg",
      "color": ""
    },
    {
      "link": "38744617_1721356581320019_8228352316235841536_o_76f41dd3b6f84e7089718569fe13bbb0_master.jpg",
      "color": ""
    },
    {
      "link": "38752172_1721356807986663_4809839424164593664_o_42325cec89f24ca794920b9aaeb60255_master.jpg",
      "color": ""
    },
    {
      "link": "38761789_1721356681320009_3712728433998954496_o_8abc7fd3f8234cae8b3737788ad93d08_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "description": "- Sơ mi họa tiết với chất vải lụa rũ, lên fom dáng rộng rộng rũ rũ cực đẹp nhé anh em.\r\n\r\n- Chất vải lụa rũ cực đẹp , 4 họa tiết như hình.\r\n\r\n- Size L fit 85kg."
  },
  "created_at": NumberInt(1535016954),
  "updated_at": NumberInt(1535016954),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "denim-co-tru-ssoda",
  "title": "DENIM CỔ TRỤ S.SODA",
  "category": "ao-so-mi",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(300000),
    "promo_price": NumberInt(300000)
  },
  "total": NumberInt(17),
  "images": [
    {
      "link": "33170133_1607916882663990_8626159694794194944_n_-_copy_master.jpg",
      "color": ""
    },
    {
      "link": "33199779_1607917022663976_7174924600919195648_n_master.jpg",
      "color": "Xanh"
    },
    {
      "link": "33487304_1607916955997316_10063125554397184_n_master.jpg",
      "color": "Vàng"
    },
    {
      "link": "33173088_1607916979330647_1767934669338181632_n_master.jpg",
      "color": "Rêu"
    },
    {
      "link": "33186053_1607916922663986_3355993780447608832_n_-_copy_master.jpg",
      "color": "Xanh đen"
    },
    {
      "link": "33171973_1607917132663965_3124446050501263360_n_-_copy_master.jpg",
      "color": ""
    },
    {
      "link": "33204859_1607917072663971_4447811322205175808_n_master.jpg",
      "color": ""
    },
    {
      "link": "33305570_1607529572702721_8214353961256222720_n_683ca53693c340628cda49cc82c78fa9_master.jpg",
      "color": ""
    },
    {
      "link": "33305587_1607917109330634_8721529512321351680_n_master.jpg",
      "color": ""
    },
    {
      "link": "33429733_1607916855997326_6546778804881195008_n_master.jpg",
      "color": ""
    },
    {
      "link": "33430104_1607917172663961_3504725886567972864_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "- Denim cổ trụ thêm phần line rách cực bụi .\r\n\r\n- Chất vải dầy dặn , 4 màu như hình.\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535017134),
  "updated_at": NumberInt(1535017134),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "ao-thun-ralplan-mallard",
  "title": "ÁO THUN RALPLAN MALLARD",
  "category": "ao-thun",
  "price": {
    "in_price": NumberInt(150000),
    "sale_price": NumberInt(250000),
    "promo_price": NumberInt(250000)
  },
  "total": NumberInt(28),
  "images": [
    {
      "link": "39102656_1726530764135934_937979758904344576_n_c12c1bff35484e029d0dde607cd0239f_master.jpg",
      "color": ""
    },
    {
      "link": "39012875_1726635637458780_916441803584962560_n_master.jpg",
      "color": "Trắng vai xám"
    },
    {
      "link": "39060385_1726635484125462_4588531566266810368_n_master.jpg",
      "color": "Trắng vai xanh"
    },
    {
      "link": "38923470_1726635417458802_3626442734295842816_n_master.jpg",
      "color": "Trắng vai đỏ"
    },
    {
      "link": "39055249_1726635604125450_3964670000106569728_n_master.jpg",
      "color": "Xám vai xanh"
    },
    {
      "link": "39044797_1726635514125459_1199590765274071040_n_master.jpg",
      "color": "Xanh vai xám"
    },
    {
      "link": "39054791_1726635560792121_4185436477376692224_n_master.jpg",
      "color": "Xám vai đỏ"
    },
    {
      "link": "38923095_1726635704125440_6127514186323853312_n_master.jpg",
      "color": ""
    },
    {
      "link": "38933044_1726635767458767_4332583323953004544_o_master.jpg",
      "color": ""
    },
    {
      "link": "38933082_1726635687458775_6279580750434009088_n_master.jpg",
      "color": ""
    },
    {
      "link": "38985111_1726635390792138_7441768870320275456_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "description": "- Kiếm được mẫu thun raglan xuất mĩ của M.L cho anh em ạ.\r\n\r\n- Chất thun cotton bông cực đẹp, có 6 màu phối như hình.\r\n\r\n- Size XXL fit 90kg."
  },
  "created_at": NumberInt(1535017599),
  "updated_at": NumberInt(1535017599),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "ao-thun-ctv-hinh-la-reu",
  "title": "ÁO THUN CTV HÌNH LÁ RÊU",
  "category": "ao-thun",
  "price": {
    "in_price": NumberInt(150000),
    "sale_price": NumberInt(280000),
    "promo_price": NumberInt(280000)
  },
  "total": NumberInt(21),
  "images": [
    {
      "link": "39157707_1730203107102033_4279074078758797312_n_master.jpg",
      "color": ""
    },
    {
      "link": "39467569_1818871008220848_5944283498427711488_n_2ccf7d7f25c547f788d3c36f9f1d37bb_master.jpg",
      "color": ""
    },
    {
      "link": "39066536_1730203233768687_1959618295254482944_n_master.jpg",
      "color": ""
    },
    {
      "link": "39132663_1730203077102036_5736045990515834880_o_master.jpg",
      "color": ""
    },
    {
      "link": "39148032_1730203193768691_6613241697209942016_n_master.jpg",
      "color": ""
    },
    {
      "link": "39167133_1730203177102026_8850007802509262848_n_master.jpg",
      "color": ""
    },
    {
      "link": "39169737_1730202977102046_1118348916249591808_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "- Thun xược họa tiết siêu độc và đẹp đây ạ.\r\n\r\n- Chất thun xược wash mềm, 1 mẫu như hình.\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535017716),
  "updated_at": NumberInt(1535017716),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "ao-thun-ctv-hoa-xanh",
  "title": "ÁO THUN CTV HOA XANH",
  "category": "ao-thun",
  "price": {
    "in_price": NumberInt(150000),
    "sale_price": NumberInt(280000),
    "promo_price": NumberInt(280000)
  },
  "total": NumberInt(39),
  "images": [
    {
      "link": "38488654_1716269568495387_1302472510666702848_o_master.jpg",
      "color": ""
    },
    {
      "link": "38614691_1716269538495390_45509086921359360_n_master.jpg",
      "color": ""
    },
    {
      "link": "38600680_1716269658495378_76838691502292992_o_master.jpg",
      "color": ""
    },
    {
      "link": "38649373_1716269751828702_3333246014445322240_o_master.jpg",
      "color": ""
    },
    {
      "link": "38649373_1716269751828702_3333246014445322240_o_master.jpg",
      "color": ""
    },
    {
      "link": "38658567_1716269718495372_3255980373129035776_o_master.jpg",
      "color": ""
    },
    {
      "link": "38693252_1716269818495362_5041656903826931712_o_master.jpg",
      "color": ""
    },
    {
      "link": "39235607_1730158703773140_2767692344474992640_o_4e97a2f1d9ee47aaaa3cfa197d9b71de_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "M",
      "L",
      "XL",
      "S"
    ],
    "description": "- Thun họa tiết cực kì bắt mắt ạ.\r\n\r\n- Chất vải cotton xược cực hiếm, 1 mẫu họa tiết như hình.\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535017824),
  "updated_at": NumberInt(1535017824),
  "status": "",
  "sold": NumberInt(27)
});
db.getCollection("products").insert({
  "_id": "thun-dsel-den-cam-hinh",
  "title": "THUN D.SEL ĐEN CAM HÌNH",
  "category": "ao-thun",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(320000),
    "promo_price": NumberInt(320000)
  },
  "total": NumberInt(25),
  "images": [
    {
      "link": "37765312_1694965443959133_4027375517605822464_n_d983d3303cc447c6924c22a12d989233_master.jpg",
      "color": ""
    },
    {
      "link": "36452957_1660542257401452_7996121811043483648_n_master.jpg",
      "color": "Đen"
    },
    {
      "link": "36464591_1660542200734791_8275527755978768384_n_master.jpg",
      "color": "Cam"
    },
    {
      "link": "36446267_1660542420734769_3873729874409553920_o_master.jpg",
      "color": ""
    },
    {
      "link": "36452952_1660542370734774_2376528395560288256_o_master.jpg",
      "color": ""
    },
    {
      "link": "36479478_1660542354068109_4770836293573672960_o_master.jpg",
      "color": ""
    },
    {
      "link": "36485503_1660542274068117_3799557889446641664_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "M",
      "L",
      "XL"
    ],
    "description": "- D.sel wash với hình in cực ngầu cho anh em.\r\n\r\n- Chất vải dầy dặn , 2 màu,\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535017937),
  "updated_at": NumberInt(1535017937),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "thun-prps-2-mau",
  "title": "THUN PRPS 2 MÀU",
  "category": "ao-thun",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(320000),
    "promo_price": NumberInt(320000)
  },
  "total": NumberInt(40),
  "images": [
    {
      "link": "36603261_1660557957399882_4416906966631186432_o_master.jpg",
      "color": ""
    },
    {
      "link": "36451488_1660557807399897_4798378849396064256_n_master.jpg",
      "color": "Xanh"
    },
    {
      "link": "36935088_1669944819794529_6004388275790282752_n_c37bcc3c1e10428b8ca4c57c6e7f61ff_master.jpg",
      "color": "Cam"
    },
    {
      "link": "36475566_1660557977399880_1169575880247214080_o_master.jpg",
      "color": ""
    },
    {
      "link": "36517394_1660557974066547_3731078917994315776_o_master.jpg",
      "color": ""
    },
    {
      "link": "36603261_1660557957399882_4416906966631186432_o_master.jpg",
      "color": ""
    },
    {
      "link": "36522599_1660557817399896_2620217375282167808_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "M",
      "L",
      "XL"
    ],
    "description": "- P.R.P.S lâu lắm r mới kiếm được cho anh em ạ.\r\n\r\n- Chất vải thun dầy dặn , 2 màu.\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535018103),
  "updated_at": NumberInt(1535018103),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "ao-thun-icon-hinh",
  "title": "ÁO THUN ICON HÌNH",
  "category": "ao-thun",
  "price": {
    "in_price": NumberInt(150000),
    "sale_price": NumberInt(250000),
    "promo_price": NumberInt(250000)
  },
  "total": NumberInt(26),
  "images": [
    {
      "link": "36815026_1669932706462407_7568100419889528832_n_master.jpg",
      "color": ""
    },
    {
      "link": "inked29634698_2103953159836699_125933601_o_li_73bdaf6369c948fea588e53018561c31_master.jpg",
      "color": "Đen"
    },
    {
      "link": "36823900_1669932606462417_3048805706414161920_n_master.jpg",
      "color": "Trắng"
    },
    {
      "link": "36752971_1669932753129069_7503636087512760320_n_master.jpg",
      "color": ""
    },
    {
      "link": "36811974_1669932586462419_6108571087035957248_n_master.jpg",
      "color": ""
    },
    {
      "link": "36776271_1669932743129070_8461153240329748480_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "description": "- 2 mẫu thun graphic cực chất của ICON với thiết kế từ cảm hứng NY và Nhật.\r\n\r\n- Chất thun mềm mịn , 2 màu.\r\n\r\n- Size XL fit 85kg."
  },
  "created_at": NumberInt(1535018236),
  "updated_at": NumberInt(1535018236),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "quan-jean-lee-xanh-tron",
  "title": "QUẦN JEAN LEE XANH TRƠN",
  "category": "quan-jean",
  "price": {
    "in_price": NumberInt(400000),
    "sale_price": NumberInt(550000),
    "promo_price": NumberInt(550000)
  },
  "total": NumberInt(12),
  "images": [
    {
      "link": "37136466_1733758840079793_9180273620587380736_o_master.jpg",
      "color": ""
    },
    {
      "link": "39320631_1733758493413161_8658510956130729984_n_master.jpg",
      "color": ""
    },
    {
      "link": "39227367_1733758626746481_5343200806717882368_n_master.jpg",
      "color": ""
    },
    {
      "link": "39249620_1733758590079818_8165752575191154688_o_master.jpg",
      "color": ""
    },
    {
      "link": "39336119_467199720415095_3589508768624279552_n_d61eb9a0edd24bb39381178b03778d14_master.jpg",
      "color": ""
    },
    {
      "link": "39289176_1733758766746467_868912484306649088_n_master.jpg",
      "color": ""
    },
    {
      "link": "39289290_1733758713413139_6791210440283127808_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "30",
      "31",
      "32",
      "33",
      "34",
      "36"
    ],
    "description": "- Jean L.ee dư xịn đét cho anh em.\r\n\r\n- Chất jean dầy dặn , 1 màu xanh basic cực đẹp.\r\n\r\n- Size 36 fit 85kg"
  },
  "created_at": NumberInt(1535018423),
  "updated_at": NumberInt(1535018423),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "quan-jean-zra-xanh-xuoc",
  "title": "QUẦN JEAN Z.RA XANH XƯỢC",
  "category": "quan-jean",
  "price": {
    "in_price": NumberInt(400000),
    "sale_price": NumberInt(500000),
    "promo_price": NumberInt(500000)
  },
  "total": NumberInt(56),
  "images": [
    {
      "link": "37735003_1691542947634716_7999625409140359168_o_master.jpg",
      "color": ""
    },
    {
      "link": "37642110_1691542720968072_5115989778264752128_n_master.jpg",
      "color": ""
    },
    {
      "link": "37587404_1691543034301374_4257379554701606912_o_master.jpg",
      "color": ""
    },
    {
      "link": "37603517_1691542787634732_1370797726584799232_o_master.jpg",
      "color": ""
    },
    {
      "link": "37609852_1691542984301379_716128304175775744_o_master.jpg",
      "color": ""
    },
    {
      "link": "37650608_1691542794301398_2683702485180219392_o_master.jpg",
      "color": ""
    },
    {
      "link": "37656561_1691542857634725_6608015705558220800_o_master.jpg",
      "color": ""
    },
    {
      "link": "37627901_1691543067634704_3536386581587820544_o_master.jpg",
      "color": ""
    },
    {
      "link": "37642131_1691542917634719_5284930766369718272_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "28",
      "29",
      "30",
      "31",
      "32",
      "34"
    ],
    "description": "- Màu jean wash siêu siêu đẹp luôn ạ.\r\n\r\n- Chất jean dầy dặn , co dãn thoải mái , 1 màu.\r\n\r\n- Size 34 fit 85kg."
  },
  "created_at": NumberInt(1535018542),
  "updated_at": NumberInt(1535018542),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "quan-jean-bwhite-xam-jeep-tui",
  "title": "QUẦN JEAN B.WHITE XÁM JEEP TÚI",
  "category": "quan-jean",
  "price": {
    "in_price": NumberInt(350000),
    "sale_price": NumberInt(500000),
    "promo_price": NumberInt(500000)
  },
  "total": NumberInt(23),
  "images": [
    {
      "link": "37500587_1733680096754334_2555622067877707776_o_master.jpg",
      "color": ""
    },
    {
      "link": "37546729_1733679973421013_4844041721916424192_n_master.jpg",
      "color": ""
    },
    {
      "link": "39216120_1733680030087674_6637290597784748032_o_master.jpg",
      "color": ""
    },
    {
      "link": "39239677_1733680123420998_5301563662878638080_o_master.jpg",
      "color": ""
    },
    {
      "link": "39240136_1733680166754327_6956353650801246208_o_master.jpg",
      "color": ""
    },
    {
      "link": "39274523_1733679853421025_5777006419307921408_o_master.jpg",
      "color": ""
    },
    {
      "link": "39393071_1733568320098845_8212311687127105536_n_f07fa855a49245b3845d22dc008ec47f_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "description": "- Lâu lắm rồi mới kiếm được mẫu jean wash xám cực bụi bặm cho anh em a.\r\n\r\n- Chất jean dầy dặn , 1 màu xám wash.\r\n\r\n- Size 36 fit 85kg."
  },
  "created_at": NumberInt(1535018651),
  "updated_at": NumberInt(1535018651),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "jean-tui-vai-ben",
  "title": "JEAN TÚI VẢI BEN",
  "category": "quan-jean",
  "price": {
    "in_price": NumberInt(500000),
    "sale_price": NumberInt(700000),
    "promo_price": NumberInt(700000)
  },
  "total": NumberInt(23),
  "images": [
    {
      "link": "32543035_1600951696693842_4701722324091535360_n_master.jpg",
      "color": ""
    },
    {
      "link": "32808440_1600915643364114_740974208946798592_o_ff4c996bdbdf4e62b461b13f764eac00_master.jpg",
      "color": ""
    },
    {
      "link": "32558642_1600951833360495_6734076229806194688_n_master.jpg",
      "color": ""
    },
    {
      "link": "32629426_1600951493360529_5995629858221195264_n_master.jpg",
      "color": ""
    },
    {
      "link": "32649776_1600951756693836_6413860545006403584_n_master.jpg",
      "color": ""
    },
    {
      "link": "32649784_1600951480027197_6736030366911430656_o_master.jpg",
      "color": ""
    },
    {
      "link": "32705597_1600951810027164_1671948352205357056_n_master.jpg",
      "color": ""
    },
    {
      "link": "32720228_1600951646693847_4422512998464094208_n_master.jpg",
      "color": ""
    },
    {
      "link": "32815565_1600951693360509_8010948287257378816_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "29",
      "30",
      "31",
      "32",
      "34"
    ],
    "description": "- Sel.vedge denim - siêu chất và bụi luôn đây ạ.\r\n\r\n- Chất vải dầy dặn , 1 màu duy nhất.\r\n\r\n- Size 34 fit 85kg."
  },
  "created_at": NumberInt(1535018779),
  "updated_at": NumberInt(1535018779),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "quan-jean-icon-chi-vang",
  "title": "QUẦN JEAN ICON CHỈ VÀNG",
  "category": "quan-jean",
  "price": {
    "in_price": NumberInt(400000),
    "sale_price": NumberInt(550000),
    "promo_price": NumberInt(550000)
  },
  "total": NumberInt(33),
  "images": [
    {
      "link": "36907558_1669779796477698_7053011567675179008_n_9e4060d41f144186abc878de5603016a_master.jpg",
      "color": ""
    },
    {
      "link": "36823965_1669944439794567_5245833790743379968_n_master.jpg",
      "color": "Chỉ vàng"
    },
    {
      "link": "36783085_1669944506461227_10642203110014976_n_master.jpg",
      "color": "Chỉ đen"
    },
    {
      "link": "36762010_1669944853127859_8951683229027401728_o_master.jpg",
      "color": ""
    },
    {
      "link": "36783084_1669944809794530_1049341036754632704_n_master.jpg",
      "color": ""
    },
    {
      "link": "36819803_1669944916461186_3929976650153852928_n_master.jpg",
      "color": ""
    },
    {
      "link": "36820639_1669944536461224_7758164598322102272_n_master.jpg",
      "color": ""
    },
    {
      "link": "36935088_1669944819794529_6004388275790282752_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "29",
      "30",
      "31",
      "32",
      "33"
    ],
    "description": "- Tiếp tục 2 mẫu jean Selvedge denim của ICON với 2 dòng chỉ đen và chỉ vàng. Quần lên fom cực đẹp nhé.\r\n\r\n- Chất vải dầy dặn , 2 màu chỉ nhé.\r\n\r\n- size 36 fit 85kg."
  },
  "created_at": NumberInt(1535018940),
  "updated_at": NumberInt(1535018940),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "quan-kaki-lvis-4m",
  "title": "QUẦN KAKI L.VIS 4M",
  "category": "quan-kaki",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(400000),
    "promo_price": NumberInt(400000)
  },
  "total": NumberInt(32),
  "images": [
    {
      "link": "37392855_1683551905100487_8432101497424052224_o_b7002fa160a24b67984ace71c9269e80_master.jpg",
      "color": ""
    },
    {
      "link": "37244598_1683541815101496_9024131136808288256_n_master.jpg",
      "color": "Vàng"
    },
    {
      "link": "37276206_1683541891768155_7860905696420691968_n_master.jpg",
      "color": "Đen"
    },
    {
      "link": "37319917_1683541651768179_5946383544161927168_n_master.jpg",
      "color": "Xanh nhạt"
    },
    {
      "link": "37190721_1683541788434832_605179648128581632_n_master.jpg",
      "color": "Xanh đậm"
    },
    {
      "link": "37216424_1683541981768146_7937484044185370624_o_master.jpg",
      "color": ""
    },
    {
      "link": "37219185_1683542128434798_5898602050173796352_o_master.jpg",
      "color": ""
    },
    {
      "link": "37223520_1683541665101511_1490354983151861760_o_master.jpg",
      "color": ""
    },
    {
      "link": "37298496_1683541858434825_5664836940281675776_o_master.jpg",
      "color": ""
    },
    {
      "link": "37320272_1683542071768137_5099966990450163712_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "- Kaki L.vis lâu lắm mới thấy xuất hiện lại ạ.\r\n\r\n- Chất vải kaki dầy dặn , 4 màu.\r\n\r\n- Size 36 fit 90kg."
  },
  "created_at": NumberInt(1535019196),
  "updated_at": NumberInt(1535019196),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "kaki-zr-wash-garment-dye",
  "title": "KAKI ZR WASH GAR.MENT DYE",
  "category": "quan-kaki",
  "price": {
    "in_price": NumberInt(250000),
    "sale_price": NumberInt(350000),
    "promo_price": NumberInt(350000)
  },
  "total": NumberInt(33),
  "images": [
    {
      "link": "33524335_1611121919010153_2478721219608707072_o_master.jpg",
      "color": ""
    },
    {
      "link": "33464071_1611121959010149_3617417844070809600_n_master.jpg",
      "color": "Code 1"
    },
    {
      "link": "33487475_1611121975676814_2039894060105203712_n_master.jpg",
      "color": "Code 2"
    },
    {
      "link": "33493039_1611121902343488_3570306558254383104_n_master.jpg",
      "color": "Code 3"
    },
    {
      "link": "33503344_1611121879010157_8661217764779753472_n_master.jpg",
      "color": "Code 4"
    },
    {
      "link": "33521033_1611122009010144_8722171206205177856_n_master.jpg",
      "color": "Code 5"
    },
    {
      "link": "33691456_1611122069010138_1995666690209218560_n_master.jpg",
      "color": "Code 6"
    },
    {
      "link": "33553717_1611121822343496_3058487640736137216_o_master.jpg",
      "color": ""
    },
    {
      "link": "33600764_1611121845676827_7806813031458930688_o_master.jpg",
      "color": ""
    },
    {
      "link": "33610111_1611122105676801_1708301737082748928_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "- Kaki Zara man siêu đẹp cực chất lại tiếp tục lên kệ. \r\n\r\n- Chất kaki dày dặn có thun lên dáng cực kì đẹp.\r\n\r\n- Size 34 fit 85kg."
  },
  "created_at": NumberInt(1535019357),
  "updated_at": NumberInt(1535019357),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "quan-linen-zr-day-rut",
  "title": "QUẦN LINEN Z.R DÂY RÚT",
  "category": "quan-kaki",
  "price": {
    "in_price": NumberInt(250000),
    "sale_price": NumberInt(360000),
    "promo_price": NumberInt(360000)
  },
  "total": NumberInt(15),
  "images": [
    {
      "link": "29873019_2114397062125198_5013539728805931364_o_master.jpg",
      "color": ""
    },
    {
      "link": "31344819_1580403302082015_204697733305466880_n_master.jpg",
      "color": "Xanh navy"
    },
    {
      "link": "31175744_1580403112082034_2855549834704715776_o_master.jpg",
      "color": "Kem"
    },
    {
      "link": "31250429_1580403278748684_6258046677765062656_n_master.jpg",
      "color": "Trắng"
    },
    {
      "link": "31250447_1580403455415333_4288998859121623040_n_master.jpg",
      "color": ""
    },
    {
      "link": "31265300_1580403388748673_8373398777775521792_n_master.jpg",
      "color": ""
    },
    {
      "link": "31265439_1580403335415345_6608786068072300544_n_master.jpg",
      "color": ""
    },
    {
      "link": "31290720_1580403138748698_1201560239707521024_o_master.jpg",
      "color": ""
    },
    {
      "link": "31301793_1580403245415354_7408432785867669504_n_master.jpg",
      "color": ""
    },
    {
      "link": "31363289_1580403405415338_2812305376664354816_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "description": "- Lên kệ mẫu quần linen của anh Z.R hàng xịn nhé anh em.\r\n\r\n- Chất vải linen, 3 màu như hình.\r\n\r\n- Size L fit 85kg."
  },
  "created_at": NumberInt(1535019548),
  "updated_at": NumberInt(1535019548),
  "status": "",
  "sold": NumberInt(17)
});
db.getCollection("products").insert({
  "_id": "quan-kaki-inf",
  "title": "QUẦN KAKI - INF",
  "category": "quan-kaki",
  "price": {
    "in_price": NumberInt(300000),
    "sale_price": NumberInt(400000),
    "promo_price": NumberInt(280000)
  },
  "total": NumberInt(24),
  "images": [
    {
      "link": "26173767_1460210930767920_6703704691427595634_o_master.jpg",
      "color": ""
    },
    {
      "link": "26171398_1460210927434587_1510741934492132549_o_master.jpg",
      "color": "Rêu"
    },
    {
      "link": "26167572_1460211147434565_6393462648348513067_n_master.jpg",
      "color": "Vàng"
    },
    {
      "link": "26198249_1460211070767906_7574189537063078156_o_master.jpg",
      "color": "Xanh navy"
    },
    {
      "link": "26232238_1460210924101254_2372580763815243039_o_master.jpg",
      "color": "Đen"
    },
    {
      "link": "26166519_1460211124101234_2399058833430723640_n_master.jpg",
      "color": "Xám"
    },
    {
      "link": "26114149_1460211180767895_6077781983118775092_n_master.jpg",
      "color": ""
    },
    {
      "link": "26195683_1460211057434574_2627455638346226017_n_master.jpg",
      "color": ""
    },
    {
      "link": "26167017_1460211030767910_697601331874432676_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "- Kaki INF siêu đẹp cực chất lại tiếp tục ra dòng mới.\r\n\r\n- Chất kaki dày dặn có thun lên dáng skinny cực kì đẹp.\r\n\r\n- Size 34 fit 85kg."
  },
  "created_at": NumberInt(1535019720),
  "updated_at": NumberInt(1535019720),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "kaki-inf-5-mau",
  "title": "KAKI INF 5 MÀU",
  "category": "quan-kaki",
  "price": {
    "in_price": NumberInt(320000),
    "sale_price": NumberInt(450000),
    "promo_price": NumberInt(290000)
  },
  "total": NumberInt(35),
  "images": [
    {
      "link": "27625062_1498354746953538_1219812254063323674_o_master.jpg",
      "color": ""
    },
    {
      "link": "27657309_1498354950286851_1870690232655523123_n_master.jpg",
      "color": "Đen"
    },
    {
      "link": "27657317_1498354733620206_4897729421893265368_n_master.jpg",
      "color": "Xanh navy"
    },
    {
      "link": "27540774_1498354863620193_7095946365136410906_n_master.jpg",
      "color": "Xám"
    },
    {
      "link": "27858832_1498354916953521_685812144357013191_n_master.jpg",
      "color": "Vàng"
    },
    {
      "link": "27709535_1498354743620205_1581989201903983950_o_master.jpg",
      "color": "Xanh cổ vịt"
    },
    {
      "link": "27655274_1498354663620213_2946130890203410300_n_master.jpg",
      "color": ""
    },
    {
      "link": "27750437_1498354976953515_835095908510191617_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "- Kaki wash pigment tạo cấn siêu chất đây anh em ạ.\r\n\r\n- Chất kaki dầy dặn.\r\n\r\n- Size 34 fit 85kg."
  },
  "created_at": NumberInt(1535019870),
  "updated_at": NumberInt(1535019870),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "skinny-chinos",
  "title": "SKINNY CHINOS",
  "category": "quan-kaki",
  "price": {
    "in_price": NumberInt(300000),
    "sale_price": NumberInt(350000),
    "promo_price": NumberInt(250000)
  },
  "total": NumberInt(28),
  "images": [
    {
      "link": "19642355_1359992667456414_2582094621993032963_n_master.jpg",
      "color": ""
    },
    {
      "link": "21558720_1359992634123084_2503234635124509610_n_master.jpg",
      "color": "Đen"
    },
    {
      "link": "21687810_1359992677456413_8381523515551487131_n_master.jpg",
      "color": "Xanh đen"
    },
    {
      "link": "21752393_1359992584123089_2499000589881290640_n_master.jpg",
      "color": "Xanh rêu"
    },
    {
      "link": "21751507_1359992717456409_8176703351013013747_n_master.jpg",
      "color": "Xanh xám"
    },
    {
      "link": "21558920_1359992517456429_6237021444291346446_n_master.jpg",
      "color": "Vàng"
    },
    {
      "link": "21686469_1359992504123097_6976748364856163511_n_master.jpg",
      "color": ""
    },
    {
      "link": "21616023_1359992534123094_5560109455038617067_n_master.jpg",
      "color": ""
    },
    {
      "link": "21751549_1359992547456426_2363513346699609149_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "29",
      "30",
      "31",
      "32",
      "33",
      "34"
    ],
    "description": "- Skinny Chinos 5 màu dễ phối đồ \r\n\r\n- Chất kaki dày dặn có co giãn nhiều cực kì thoải mái , lót hoạ tiết và may cực kì nét\r\n\r\n- size 34 fit 80kg"
  },
  "created_at": NumberInt(1535020057),
  "updated_at": NumberInt(1535020057),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "dep-das",
  "title": "DÉP D.A.S",
  "category": "giay-dep",
  "price": {
    "in_price": NumberInt(130000),
    "sale_price": NumberInt(250000),
    "promo_price": NumberInt(150000)
  },
  "total": NumberInt(65),
  "images": [
    {
      "link": "30705952_1567804413341904_6033604159461130240_n_master.jpg",
      "color": ""
    },
    {
      "link": "30653112_1567804480008564_659759405331382272_n_master.jpg",
      "color": "Đỏ"
    },
    {
      "link": "30656248_1567804566675222_4455801181146447872_n_master.jpg",
      "color": "Xanh dương"
    },
    {
      "link": "30704042_1567804530008559_3979942117832130560_n_master.jpg",
      "color": "Trắng sọc "
    },
    {
      "link": "30709683_1567804400008572_6244914660638720000_n_master.jpg",
      "color": "Xanh lá"
    },
    {
      "link": "30652594_1567804503341895_8788462982741884928_n_master.jpg",
      "color": ""
    },
    {
      "link": "30698669_1567804586675220_2395833994382934016_n_master.jpg",
      "color": ""
    },
    {
      "link": "30705440_1567804380008574_5287703107629744128_n_master.jpg",
      "color": ""
    },
    {
      "link": "30715132_1567804456675233_1567315445566930944_n_master.png",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "6",
      "7",
      "8",
      "9",
      "10"
    ],
    "description": "- Về thêm màu mới cho dép của anh D.A.S nhé .\r\n\r\n- Chất mủ dẻo, 2 màu như hình.\r\n\r\n- Size 6, 7 ,8 , 9."
  },
  "created_at": NumberInt(1535020255),
  "updated_at": NumberInt(1535020255),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "dep-lao-sdry",
  "title": "DÉP LÀO S.DRY",
  "category": "giay-dep",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(260000),
    "promo_price": NumberInt(160000)
  },
  "total": NumberInt(55),
  "images": [
    {
      "link": "30594721_1566704760118536_3019524341671919616_o_master.jpg",
      "color": ""
    },
    {
      "link": "30595093_1566704663451879_1244687337766518784_o_master.jpg",
      "color": ""
    },
    {
      "link": "30624116_1566704823451863_1082255351123804160_o_master.jpg",
      "color": ""
    },
    {
      "link": "30624629_1566704710118541_2157232283164082176_o_master.jpg",
      "color": ""
    },
    {
      "link": "30595093_1566704663451879_1244687337766518784_o_master.jpg",
      "color": ""
    },
    {
      "link": "30656570_1566704910118521_4874591149983006720_o_master.jpg",
      "color": ""
    },
    {
      "link": "30656826_1566704613451884_2388702274202370048_n_master.jpg",
      "color": ""
    },
    {
      "link": "30689047_1566704736785205_5175621632483393536_o_master.jpg",
      "color": ""
    },
    {
      "link": "30689274_1566704533451892_6962859624311554048_n_master.jpg",
      "color": ""
    },
    {
      "link": "30728562_1566704876785191_3108581592361074688_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L"
    ],
    "description": "- Dép xịn 100% của Sdry cho anh em.\r\n\r\n- Chất mút mền.\r\n\r\n- Size S,M,L có ghi rõ trên từng hình."
  },
  "created_at": NumberInt(1535020399),
  "updated_at": NumberInt(1535020399),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "bop-ce-ka",
  "title": "BÓP CÊ KA",
  "category": "phu-kien-khac",
  "price": {
    "in_price": NumberInt(300000),
    "sale_price": NumberInt(450000),
    "promo_price": NumberInt(450000)
  },
  "total": NumberInt(25),
  "images": [
    {
      "link": "34642219_1624539021001776_7800421776525099008_n_master.jpg",
      "color": ""
    },
    {
      "link": "34692329_1624538927668452_2633143268338040832_n_master.jpg",
      "color": ""
    },
    {
      "link": "34693674_1624538991001779_2651651192949571584_n_master.jpg",
      "color": ""
    },
    {
      "link": "34711281_1624539114335100_610853342876270592_n_master.jpg",
      "color": ""
    },
    {
      "link": "34752191_1624539064335105_3597188187329396736_n_master.jpg",
      "color": ""
    },
    {
      "link": "34774701_1624539094335102_1777843459537764352_n_master.jpg",
      "color": ""
    },
    {
      "link": "34782284_1624539801001698_1308262959805366272_n__1__master.jpg",
      "color": ""
    },
    {
      "link": "34782284_1624539801001698_1308262959805366272_n_master.jpg",
      "color": ""
    },
    {
      "link": "34815571_1624538961001782_5360935611446329344_n_master.jpg",
      "color": ""
    },
    {
      "link": "34882879_1624539041001774_7018329174184034304_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "Một Size"
    ],
    "description": "- Ví Cê Ka siêu xịn mới tinh cho anh em. Logo in dập nổi 3D quá đẹp.\r\n\r\n- Chất da mềm mịn , 1 màu.\r\n\r\n- Một size."
  },
  "created_at": NumberInt(1535073549),
  "updated_at": NumberInt(1535073549),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "tui-deo-o-vuong",
  "title": "TÚI ĐEO Ô VUÔNG",
  "category": "phu-kien-khac",
  "price": {
    "in_price": NumberInt(350000),
    "sale_price": NumberInt(480000),
    "promo_price": NumberInt(480000)
  },
  "total": NumberInt(23),
  "images": [
    {
      "link": "39777218_1744755115646832_5118640181108277248_o_b3f5d96284c94f47aeb7da50b007f69f_master.jpg",
      "color": ""
    },
    {
      "link": "39799723_1744755208980156_1916336861840670720_o_7dbcf257e5db48b4baa033fe112e1214_master.jpg",
      "color": ""
    },
    {
      "link": "39807974_1744755275646816_2714831364464574464_o_7a903593684543469b1158bce51cf5b1_master.jpg",
      "color": ""
    },
    {
      "link": "39880705_1744754998980177_6116700463694872576_n_master.jpg",
      "color": ""
    },
    {
      "link": "39883018_1744755328980144_8039685325024395264_n_fda8590230364271a26e7dbb8ff94430_master.jpg",
      "color": ""
    },
    {
      "link": "39914021_1744755352313475_2284070810672955392_n_e6bc2db0e09545f19bdeeb56b11efcbd_master.jpg",
      "color": ""
    },
    {
      "link": "39943087_1744755202313490_4770907310857912320_o_20073a50629844539651097f3857a0e7_master.jpg",
      "color": ""
    },
    {
      "link": "39931655_1744755015646842_8578474274929508352_n_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "Một Size"
    ],
    "description": "- Túi đeo quá đẹp thêm cổng usb nữa chứ.\r\n\r\n- Chất vải dầy dặn , 1 màu đen.\r\n\r\n- Một size."
  },
  "created_at": NumberInt(1535073715),
  "updated_at": NumberInt(1535073715),
  "status": "",
  "sold": NumberInt(19)
});
db.getCollection("products").insert({
  "_id": "non-con-ech",
  "title": "NÓN CON ẾCH",
  "category": "non",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(250000),
    "promo_price": NumberInt(250000)
  },
  "total": NumberInt(30),
  "images": [
    {
      "link": "37995594_1706065182849159_4160650852471668736_o_master.jpg",
      "color": ""
    },
    {
      "link": "38022269_1706065422849135_9109048571600044032_o_master.jpg",
      "color": ""
    },
    {
      "link": "38023516_1706065389515805_2976649714675482624_o_master.jpg",
      "color": ""
    },
    {
      "link": "38085412_1706065166182494_3346583691785666560_o_master.jpg",
      "color": ""
    },
    {
      "link": "38085841_1706065459515798_6367641173573500928_o_master.jpg",
      "color": ""
    },
    {
      "link": "38132241_1706021159520228_4924890229246001152_o_df6272b12600481db6b6bc32c3eaf0b2_master.jpg",
      "color": ""
    },
    {
      "link": "38136160_1706065346182476_3263740219391737856_o_master.jpg",
      "color": ""
    },
    {
      "link": "38177034_1706065296182481_9107416754610503680_o_master.jpg",
      "color": ""
    },
    {
      "link": "38218435_1706065312849146_239081832727969792_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "Một size"
    ],
    "description": "- Thêm mẫu nữa của MLB chất lừ cho anh em - thêu cực đẹp luôn í. \r\n\r\n- Chất vải dầy dặn , 1 màu.\r\n\r\n- Một size."
  },
  "created_at": NumberInt(1535073865),
  "updated_at": NumberInt(1535073865),
  "status": "",
  "sold": NumberInt(12)
});
db.getCollection("products").insert({
  "_id": "non-chu-b",
  "title": "NÓN CHỮ B",
  "category": "non",
  "price": {
    "in_price": NumberInt(200000),
    "sale_price": NumberInt(280000),
    "promo_price": NumberInt(280000)
  },
  "total": NumberInt(34),
  "images": [
    {
      "link": "37314971_1683490991773245_1487059051018715136_o_ee56789c42ef4808b658594962ede502_master.jpg",
      "color": ""
    },
    {
      "link": "37307385_1683500861772258_1517985113357418496_n_master.jpg",
      "color": "Trắng"
    },
    {
      "link": "37241389_1683500848438926_5722759603674939392_n_master.jpg",
      "color": "Đen"
    },
    {
      "link": "37220759_1683500755105602_8864592459179491328_n_master.jpg",
      "color": "Đỏ"
    },
    {
      "link": "37217428_1683501028438908_3681274855187021824_o_master.jpg",
      "color": ""
    },
    {
      "link": "37230969_1683500801772264_4831838104920784896_o_master.jpg",
      "color": ""
    },
    {
      "link": "37231674_1683500965105581_8082802982745276416_o_master.jpg",
      "color": ""
    },
    {
      "link": "37271068_1683500865105591_2050337414819348480_o_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "Một size"
    ],
    "description": "- Mới nhất của M.LB cực đẹp nhé anh em.\r\n\r\n- Chất vải gân chìm , 3 màu.\r\n\r\n- Một size."
  },
  "created_at": NumberInt(1535074017),
  "updated_at": NumberInt(1535074017),
  "status": "",
  "sold": NumberInt(13)
});
db.getCollection("products").insert({
  "_id": "boxer-amani",
  "title": "BOXER A.MANI",
  "category": "phu-kien-khac",
  "price": {
    "in_price": NumberInt(80000),
    "sale_price": NumberInt(100000),
    "promo_price": NumberInt(100000)
  },
  "total": NumberInt(65),
  "images": [
    {
      "link": "36315614_1655746981214313_7918759962459766784_o_master.jpg",
      "color": ""
    },
    {
      "link": "36312667_1655747141214297_5410954341014044672_o_master.jpg",
      "color": "Trắng"
    },
    {
      "link": "36317862_1655747214547623_6821795035541929984_o_master.jpg",
      "color": ""
    },
    {
      "link": "36325466_1655747021214309_5409357635382149120_o_master.jpg",
      "color": "Xanh lá"
    },
    {
      "link": "36329349_1655747244547620_7502987298342961152_o_master.jpg",
      "color": ""
    },
    {
      "link": "36333283_1655747124547632_9089122611996131328_o_master.jpg",
      "color": "Đỏ"
    },
    {
      "link": "36351958_1655747354547609_7308721589627912192_o_master.jpg",
      "color": ""
    },
    {
      "link": "36376877_1655747307880947_2516830146598535168_o_master.jpg",
      "color": ""
    },
    {
      "link": "36425177_1655747167880961_8710205345714143232_o_master.jpg",
      "color": "Xám"
    },
    {
      "link": "36427895_1655713327884345_5668178364708421632_o_0ba0d325fd1b49bf96f6761cf71126c7_master.jpg",
      "color": ""
    }
  ],
  "details": {
    "size": [
      "S",
      "M",
      "L"
    ],
    "description": "- E.Armani Boxer siêu xịn, siêu chất cho anh em đây ạ.\r\n\r\n- Chất thun cotton 100% , có 10 màu cho anh em nhé.\r\n\r\n- Size XL Fit 85kg."
  },
  "created_at": NumberInt(1535074133),
  "updated_at": NumberInt(1535074133),
  "status": "",
  "sold": NumberInt(13)
});

/** setting records **/
db.getCollection("setting").insert({
  "_id": ObjectId("5b6fbbf816d5bdac0e000029"),
  "title": "Shop for Men's Fashion",
  "description": "Chuyên quần áo nam phong cách Tây Âu",
  "keywords": "Mua bán quần áo, giày dép, phụ kiện cao cấp chính hãng",
  "web_thumbnail": "faviconc79a.png",
  "web_logo": "logo.svg",
  "info": [
    {
      "id": "17-bis-huynh-dinh-hai-p14-quan-binh-thanh",
      "address": "17 Bis Huỳnh Đình Hai P.14 Quận Bình Thạnh",
      "phone": "0909 045 600",
      "images": "page_store_1.jpg",
      "maps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.547912911216!2d106.66392431435042!3d10.769282992326398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b8d16ba3a5%3A0xa1bb329cedcb01c9!2sSomeHow+Store!5e0!3m2!1svi!2s!4v1535352201629"
    },
    {
      "id": "332-cao-dat-p1-quan-5",
      "address": "332 Cao Đạt P.1 Quận 5",
      "phone": "01634 100 200",
      "images": "page_store_2.jpg",
      "maps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7496017428452!2d106.67810001435015!3d10.753771392336908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f03b9bcf79d%3A0xe8072e19dfa3166a!2zMzMyIENhbyDEkOG6oXQsIHBoxrDhu51uZyAxLCBRdeG6rW4gNSwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1535352073869"
    },
    {
      "id": "18816-thanh-thai-p12-quan-1000",
      "address": "188/16 Thành Thái P.12 Quận 1000",
      "phone": "01667 131 2345",
      "images": "page_store_3.jpg",
      "maps": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7839.008365126168!2d106.6606842225118!3d10.772643319296277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec4b7343f1d%3A0xbb06228fd066a74d!2sSomehow+Store!5e0!3m2!1svi!2s!4v1535352158812"
    }
  ],
  "social": {
    "facebook": "https://www.facebook.com/somehowstores",
    "instagram": "https://www.instagram.com/somehowstore17"
  },
  "phone_support": "0287 307 64 64",
  "created_at": NumberInt(1535339863),
  "updated_at": NumberInt(1535694240)
});

/** size records **/
db.getCollection("size").insert({
  "_id": "ao-so-mi",
  "title": "ÁO SƠ MI",
  "images": "ao-so-mi-large.png",
  "created_at": null,
  "updated_at": null,
  "images_details": "ao-so-mi-details.png"
});
db.getCollection("size").insert({
  "_id": "ao-polo",
  "title": "ÁO POLO",
  "images": "ao-polo-large.png",
  "created_at": null,
  "updated_at": null,
  "images_details": "ao-polo-details.png"
});
db.getCollection("size").insert({
  "_id": "ao-thun",
  "title": "ÁO THUN",
  "images": "ao-thun-large.png",
  "created_at": null,
  "updated_at": null,
  "images_details": "ao-thun-details.png"
});
db.getCollection("size").insert({
  "_id": "hoodies",
  "title": "HOODIES",
  "images": "hoodies-large.png",
  "created_at": null,
  "updated_at": null,
  "images_details": "hoodies-details.png"
});
db.getCollection("size").insert({
  "_id": "ni-len",
  "title": "NỈ, LEN",
  "images": "ni-len-large.png",
  "created_at": null,
  "updated_at": null,
  "images_details": "ni-len-details.png"
});
db.getCollection("size").insert({
  "_id": "ao-khoac",
  "title": "ÁO KHOÁC",
  "images": "ao-khoac-large.png",
  "created_at": null,
  "updated_at": null,
  "images_details": "ao-khoac-details.png"
});

/** slides records **/
db.getCollection("slides").insert({
  "_id": ObjectId("5b85087016d5bd0415000029"),
  "title": "",
  "description": "",
  "images": "slideshow_1c79a.jpg",
  "created_at": NumberInt(1535445104),
  "updated_at": NumberInt(1535446106),
  "links": "collections/san-pham-moi"
});
db.getCollection("slides").insert({
  "_id": ObjectId("5b8508eb16d5bd2c2f000029"),
  "title": "",
  "description": "",
  "images": "slideshow_2c79a.jpg",
  "created_at": NumberInt(1535445227),
  "updated_at": NumberInt(1535445227),
  "links": "collections/san-pham-ban-chay"
});
db.getCollection("slides").insert({
  "_id": ObjectId("5b8508f016d5bd2c2f00002a"),
  "title": "",
  "description": "",
  "links": "blogs/test-choi",
  "images": "slideshow_3c79a.jpg",
  "created_at": NumberInt(1535445232),
  "updated_at": NumberInt(1535706336)
});

/** test records **/

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("5b691f3816d5bd1831000029"),
  "display_name": "Vinh Phan",
  "name": "vinhxp03@gmail.com",
  "phone": "01663521069",
  "email": "vinhxp03@gmail.com",
  "address": "Hải Phòng",
  "password": "$2y$08$YnBzOERYQUc3dzRtOGlNc.t9k1IhlSlIH6/Zq4Gpn3GGTHSPl9DXG",
  "source": null,
  "created_at": NumberInt(1533615928),
  "updated_at": NumberInt(1535446678)
});
db.getCollection("users").insert({
  "_id": ObjectId("5b691f5c16d5bd6813000029"),
  "display_name": "Trang Nguyễn",
  "name": "kiepvozanh11@gmail.com",
  "phone": "20232020",
  "email": "fdsafdsa@gmail.com",
  "address": "512fdsa",
  "password": "$2y$08$UWxRRitESlk5bVZwaDVBVO7Sgk.JTHQJJuRnDxWy.B7BBEx9W4DzS",
  "source": null,
  "created_at": NumberInt(1533615964),
  "updated_at": NumberInt(1533797422)
});
db.getCollection("users").insert({
  "_id": ObjectId("5b696bc916d5bd183100002a"),
  "display_name": "Ngô Bùi",
  "name": "ngo@gmail.com",
  "phone": null,
  "email": "ngo@gmail.com",
  "address": null,
  "password": "$2y$08$V0NQSHZLY2NndGZDeFdwauwns/D.FK.XgVYFq86HNRW3MdmwAPEuC",
  "source": null,
  "created_at": NumberInt(1533635529),
  "updated_at": NumberInt(1533635529)
});
