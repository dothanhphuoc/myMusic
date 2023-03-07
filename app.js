/** Làm scroll phần ( Phổ Biến Nhất ) */
let popular_arrow_left = document.querySelector('#popular-arrow-left');
let popular_arrow_right = document.querySelector('#popular-arrow-right');
let product_song = document.querySelector('.product-song');

popular_arrow_right.addEventListener('click', function(){
    product_song.scrollLeft += 200;
});

popular_arrow_left.addEventListener('click', function(){
    product_song.scrollLeft -= 200;
});




/** Làm scroll phần ( Ca Sĩ Nổi Bật ) */
let singer_arrow_left = document.querySelector('#singer-arrow-left');
let singer_arrow_right = document.querySelector('#singer-arrow-right');
let items_singer = document.querySelector('.items');

singer_arrow_right.addEventListener('click', function(){
    items_singer.scrollLeft += 200;
});

singer_arrow_left.addEventListener('click', function(){
    items_singer.scrollLeft -= 200;
});

